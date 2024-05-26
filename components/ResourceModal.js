import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ResourceModal({ visible, onSelectResource }) {
  
  const resourceHandlerKandilli = () => {
    onSelectResource("kandilli");
  }
  const resourceHandlerCsem = () => {
    onSelectResource("csem");
  }
  const resourceHandlerAfad = () => {
    onSelectResource("afad");
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
                    <Text style={styles.modalText}>Deprem Verisi için Kaynak Seçiniz</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity style={styles.kandilliView} onPress={resourceHandlerKandilli}>
                      <View>
                          <Image style={styles.image} source={require("../assets/kandilli.png")}/>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.csemView} onPress={resourceHandlerCsem}>
                      <View>
                          <Image style={styles.imageCsem} source={require("../assets/csem.png")}/>
                      </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={resourceHandlerAfad}>
                    <View style= {styles.afadView}>
                        <Image style={styles.image} source={require("../assets/AFAD.png")}/>
                    </View>
                </TouchableOpacity>
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
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        //backgroundColor:"blue"
    },
    modalView : {
        alignItems :"center",
        justifyContent : "center",
        backgroundColor :"white",
        width:350,
        height:320,
        borderRadius: 10,
        borderColor: "red",
    },
    imageCsem:{
        width :75,
        height:75,
        backgroundColor:"red",
        borderColor: "red",
        
    },
    imageContainer : {
        flexDirection:"row",
        borderColor: "black",
        marginBottom:10,
        width:320,
        borderRadius : 10,
    },
    image : {
        width :124,
        height:75,
    },
    textView : {
        borderColor: "green",
        width:300,
        alignItems:"center",
    },
    modalText : {
        fontSize:18,
        fontWeight:"bold",
    },
    line: {
        width: '100%', // Yüzde olarak genişlik
        height: 1.5, // Çizgi kalınlığı
        backgroundColor: 'gray', // Çizgi rengi
        marginVertical: 10, // Dikey kenar boşluğu
        marginBottom:20,
      },
    csemView:{
        flex : 1,
        backgroundColor :"#FFDEDD",
        alignItems:"center",
        justifyContent : "center",
        borderRadius : 10,
        padding : 20,
    },
    kandilliView : {
        flex : 1,
        backgroundColor :"#fff0e1",
        alignItems:"center",
        justifyContent : "center",
        borderRadius : 10,
        padding : 20,
        marginRight: 10,
    },
    afadView : {
        borderColor:"red",
        width:320, 
        alignItems:"center", 
        backgroundColor:"#DDF3FF",
        padding:15,
        borderRadius : 10,
    },
})