import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React ,{ useState, useEffect } from 'react'
import { FontAwesome5, MaterialCommunityIcons  } from '@expo/vector-icons';
import ResourceModal from '../components/ResourceModal';
import TimeModal from '../components/TimeModal';
import { useResultsContext } from '../hooks/useResults';


export default function HeaderRight() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [modalTimeIsVisible, setModalTimeIsVisible] = useState(false);
    const { selectedResource, setSelectedResource } = useResultsContext();
    const [selectedTime, setSelectedTime] = useState("24");
    //console.log(onSelectResource,onSelectTime);
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
        console.log("girdi "+resource);
        setSelectedResource(resource);
        endModal();
        //navigation.navigate('Home', { selectedResource: resource, selectedTime: selectedTime });
    };
    const selectTime = (time) => {
        setSelectedTime(time);
        endModalTime();
        //navigation.navigate('Home', { selectedResource: selectedResource, selectedTime: time });
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