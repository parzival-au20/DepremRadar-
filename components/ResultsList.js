import { StyleSheet, Text, View , FlatList, TouchableOpacity, ActivityIndicator} from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';
import { useNavigation } from "@react-navigation/native";

export default function ResultsList({ results }) {

  //console.log("resultsList ==> "+results[0].mag);
  const navigation = useNavigation();

  return (
    <View style = {styles.container}>
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator = {false}
        data={results}
        style={{width: '100%'}}
        renderItem={({ item }) =>{
            return (
                <TouchableOpacity 
                  onPress={()=>
                    navigation.navigate("Harita")
                  }>
                    <ResultDetail result={item} />
                </TouchableOpacity>
            );
        }}
        initialNumToRender={10}/>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        marginBottom : 10,
        width: "auto",
        flex:1,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
})