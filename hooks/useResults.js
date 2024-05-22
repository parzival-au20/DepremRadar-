import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import getData from '../api/kandilliAPI';
import getDataAfad from '../api/afadAPI';
import getDataCsem from '../api/csemAPI';
import DepremDataAFAD from "../models/DepremData";
import DepremDataKandilli from '../models/DepremDataKandilli';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  const currentTime = new Date();
  const oneDayAgo = new Date(currentTime.getTime() - (24 * 60 * 60 * 1000));

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
    searchApi(selectedResource, selectedTime);
    console.log("useeffect "+selectedResource);
  }, [selectedResource, selectedTime]);

  /*useEffect(() => {
    // selectedResource veya selectedTime değiştiğinde veriyi tekrar çek
    searchApi(selectedResource, selectedTime);
  }, [selectedResource, selectedTime]);*/


 return (
    <ResultsContext.Provider value={{ selectedResource, selectedTime, setSelectedResource, setSelectedTime, results, errorMessage, loading, searchApi }}>
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsProvider;
