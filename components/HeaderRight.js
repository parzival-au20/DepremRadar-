import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React ,{ useState, useEffect } from 'react'
import { FontAwesome5, MaterialCommunityIcons  } from '@expo/vector-icons';
import ResourceModal from '../components/ResourceModal';
import TimeModal from '../components/TimeModal';
import { useResultsContext } from '../hooks/useResults';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HeaderRight() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [modalTimeIsVisible, setModalTimeIsVisible] = useState(false);
    const [ selectedResource, setSelectedResource]= useState();
    const [ selectedTime, setSelectedTime] = useState();
    const {searchApi } = useResultsContext();
    const { selectedRes, setSelectedRes} = useResultsContext();
    const { selectedMenuTime, setSelectedMenuTime } = useResultsContext();
    //console.log(selectedTime,selectedResource);

    // AsyncStorage anahtarları
  const RESOURCE_KEY = 'selectedResource';
  const TIME_KEY = 'selectedTime';

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

      useEffect(() => {
        if (selectedRes) {
          searchApi(selectedRes);
        }
      }, [selectedRes]);


    const startModal = () => {
        setModalIsVisible(true);
    };
    const endModal = () => {
        setModalIsVisible(false);
    };
    const startModalTime = () => {
        setModalTimeIsVisible(true);
    };
    const endModalTime = () => {
        setModalTimeIsVisible(false);
    };
    const selectResource = (resource) => {
        //console.log("girdi "+resource);
        setSelectedRes(resource);
        endModal();
    };
    const selectTime = (time) => {
        setSelectedMenuTime(time);
        endModalTime();
    };
  return (
    <View style={{ flexDirection: 'row', marginRight: 20 }}>
        <TouchableOpacity onPress={startModal}>
            <FontAwesome5 name="clipboard-list" size={32} color="white" style={{ marginRight:25 }}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={startModalTime}>
            <MaterialCommunityIcons name="clock-edit" size={32} color="white"/>
        </TouchableOpacity>
        <ResourceModal visible={modalIsVisible} onSelectResource={selectResource}></ResourceModal>
        <TimeModal  visible={modalTimeIsVisible} onSelectTime={selectTime}></TimeModal>
    </View>
  )
}

const styles = StyleSheet.create({})