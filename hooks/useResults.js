import React, { createContext, useContext, useState, useEffect } from 'react';
import getData from '../api/kandilliAPI';
import getDataAfad from '../api/afadAPI';
import getDataCsem from '../api/csemAPI';
import DepremDataAFAD from "../models/DepremData";
import DepremDataKandilli from '../models/DepremDataKandilli';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResultsContext = createContext();

export const useResultsContext = () => {
  return useContext(ResultsContext);
};

export const ResultsProvider = ({ children }) =>  {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false);
  const [selectedResource, setSelectedResource] = useState('kandilli');
  const [selectedTime, setSelectedTime] = useState("24");
  const [ selectedRes, setSelectedRes] = useState('kandilli');
  const [selectedMenuTime, setSelectedMenuTime] = useState("24");
  const navigation = useNavigation();

  const currentTime = new Date();
  const oneDayAgo = new Date(currentTime.getTime() - (24 * 60 * 60 * 1000));

  // AsyncStorage anahtarları
  const RESOURCE_KEY = 'selectedResource';
  const TIME_KEY = 'selectedTime';

  const searchApi = async (resource, time) => {
    setLoading(true);
    try {
      let response;
      if (resource == 'kandilli') {
        console.log("api "+resource);
        response = await getData.get('/deprem/kandilli/live', {
          params: {
            limit: 200,
          },
        });
        setErrorMessage(null);
        const depremListesi = response.data.result.map(deprem => {
          return new DepremDataKandilli(
            deprem._id,
            deprem.title,
            deprem.date,
            deprem.mag,
            deprem.depth,
            deprem.geojson.coordinates,
          );
        });
        setResults(depremListesi);
        //console.log("Depremlistesi ==> "+depremListesi[0]);
      } else if (resource == 'afad') {
        console.log("api "+resource);
        response = await getDataAfad.get('?', {
          params: {
            //limit: 10,
            start:oneDayAgo.toISOString(),
            end:currentTime.toISOString(),
            orderby:"timedesc",
          },
        });
        //console.log(response.data[0].district);
        setErrorMessage(null);
        const depremListesi = response.data
        .filter(deprem => deprem.district !== null && deprem.province !== null)
        .map(deprem => {
          return new DepremDataAFAD(
            deprem.eventID,
            deprem.province,
            deprem.district,
            deprem.date,
            deprem.magnitude,
            deprem.depth,
            deprem.latitude,
            deprem.longitude
          );
        });
        //console.log(depremListesi);
        setResults(depremListesi);
      } else if (resource == 'csem') {
        console.log("api "+resource);
        response = await getDataCsem.get('/deprem/csem/live/sefa', {
          params: {
            limit: 200,
          },
        });
      }
      
      //console.log(response.data.result);
    } catch (error) {
      console.error(error);
      setResults([])
      setErrorMessage('Bağlantı Hatası...');
      console.log("Bağlantı Hatası");
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Uygulama ilk açıldığında veriyi çek
    const loadPreferences = async () => {
      try {
        const savedResource = await AsyncStorage.getItem(RESOURCE_KEY);
        const savedTime = await AsyncStorage.getItem(TIME_KEY);
        if (savedResource) setSelectedResource(savedResource);
        if (savedTime) setSelectedTime(savedTime);
      } catch (e) {
        console.error("Failed to load preferences.", e);
      }
    };

    loadPreferences();
  }, []);

  /*useEffect(() => {
    // Seçili kaynak veya zaman değiştiğinde veriyi çek ve kaydet
    if (selectedResource && selectedTime) {
      searchApi(selectedResource, selectedTime);
    }

    const savePreferences = async () => {
      try {
        await AsyncStorage.setItem(RESOURCE_KEY, selectedResource);
        await AsyncStorage.setItem(TIME_KEY, selectedTime);
      } catch (e) {
        console.error("Failed to save preferences.", e);
      }
    };

    savePreferences();
  }, [selectedResource, selectedTime]);*/

  /*useEffect(() => {
    // Uygulama ilk açıldığında veriyi çek
    searchApi(selectedResource, selectedTime);
    console.log("useeffect "+selectedResource);
  }, [selectedResource, selectedTime]);*/



 return (
    <ResultsContext.Provider value={{ selectedResource, selectedTime, selectedMenuTime, selectedRes, setSelectedRes, setSelectedMenuTime, setSelectedResource, setSelectedTime, results, errorMessage, loading, searchApi }}>
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsProvider;
