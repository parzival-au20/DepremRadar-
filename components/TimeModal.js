import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from 'react-native'
import {React, useState, useEffect} from 'react'
import { FontAwesome, Feather  } from '@expo/vector-icons';
import { useResultsContext } from '../hooks/useResults';

export default function ResourceModal({ visible, onSelectTime }) {

    const { selectedTime } = useResultsContext();
    const [selectedIconIndex, setSelectedIconIndex] = useState(2);

    useEffect(() => {
        // Update selectedIconIndex based on selectedTime
        switch (selectedTime) {
            case '1':
                setSelectedIconIndex(0);
                break;
            case '12':
                setSelectedIconIndex(1);
                break;
            case '24':
                setSelectedIconIndex(2);
                break;
            default:
                setSelectedIconIndex(2);
                break;
        }
    }, [selectedTime]);

    const timeHandlerOneHours = () => {
        onSelectTime("1");
        setSelectedIconIndex(0);
    }
    const timeHandlerTwelveHours = () => {
        onSelectTime("12");
        setSelectedIconIndex(1);
    }
    const timeHandlerOneDay = () => {
        onSelectTime("24");
        setSelectedIconIndex(2);
    }
return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.textView}>
                    <Text style={styles.modalText}>Deprem Verisi için Zaman Seçiniz</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.radioContainer}>
                    <TouchableOpacity style={styles.buttonView} onPress={timeHandlerOneHours} >
                        <View style={styles.rowView}>
                        {selectedIconIndex === 0 ? (
                            <FontAwesome name="circle" size={24} color="green" />
                            ) : (
                            <Feather name="circle" size={24} color="black" />
                        )}
                            <Text style={styles.timeText}>Son  1  Saat</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView} onPress={timeHandlerTwelveHours}>
                        <View style={styles.rowView}>
                        {selectedIconIndex === 1 ? (
                            <FontAwesome name="circle" size={24} color="green" />
                            ) : (
                            <Feather name="circle" size={24} color="black" />
                        )}
                            <Text style={styles.timeText}>Son 12 Saat</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView} onPress={timeHandlerOneDay}>
                        <View style={styles.rowView}>
                        {selectedIconIndex === 2 ? (
                            <FontAwesome name="circle" size={24} color="green" />
                            ) : (
                            <Feather name="circle" size={24} color="black" />
                        )}
                            <Text style={styles.timeText}>Son 24 Saat</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>       
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex:1,
        alignItems :"center",
        justifyContent : "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView : {
        alignItems :"center",
        justifyContent : "center",
        backgroundColor :"white",
        width:350,
        height:220,
        borderRadius: 10,
    },
    rowView : {
        flexDirection:"row",
        marginLeft:70,
    },
    textView : {
        marginTop:5,
        width:300,
        alignItems:"center",
    },
    radioContainer : {
        width:350,
        alignItems:"center",
    },
    buttonView : {
        paddingVertical:15,
        width:350,
      },
    modalText : {
        fontSize:18,
        fontWeight:"bold",
    },
    timeText : {
        fontSize:18,
        fontWeight:"700",
        marginLeft:50,
    },
    line: {
        width: '100%', // Yüzde olarak genişlik
        height: 1.5, // Çizgi kalınlığı
        backgroundColor: 'gray', // Çizgi rengi
        marginVertical: 10, // Dikey kenar boşluğu
      },
       
})