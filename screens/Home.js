import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React ,{ useState, useEffect } from 'react';
import {useResults, useResultsContext} from '../hooks/useResults'
import ResultsList from '../components/ResultsList';
import ResultsAfadList from '../components/ResultsAfadList';
import FilterButtons from '../components/FilterButtons';
import { useRoute } from '@react-navigation/native';
import HeaderRight from '../components/HeaderRight';

export default function Home({ navigation, route }) {
  const { selectedResource, selectedTime } = useResultsContext();
  const { results, errorMessage, loading } = useResultsContext();

  console.log("Homescreen "+selectedResource);
  //console.log(results);
  const filterResultsByTime = (filteredResults) => {
    const currentTime = new Date();
    const selectedTimeMilliseconds = selectedTime * 60 * 60 * 1000;
    const endTime = new Date(currentTime.getTime() - selectedTimeMilliseconds);
    
    filteredResults = filteredResults.filter(result => {
      const resultDate = DateFormatting(result.date)
      return resultDate >= endTime && resultDate <= currentTime;
    });

    return filteredResults;
  }
  const filterResultsByMag = () => {
    let filteredResults = results;
    if (buttonClicked[0]) {
      filteredResults = filteredResults.filter(result => result.mag < 2 );
    }
    if (buttonClicked[1]) {
      filteredResults = filteredResults.filter(result => ( 2 <= result.mag  && result.mag < 3));

    }
    if (buttonClicked[2]) {
      filteredResults = filteredResults.filter(result =>( 3 <= result.mag  && result.mag < 4));
    }
    if (buttonClicked[3]) {
      filteredResults = filteredResults.filter(result => 4 <= result.mag);
    }
    //return filterResultsByTime(filteredResults);
    return (filteredResults);
  };
  const [buttonClicked, setButtonClicked] = useState([false, false, false, false]);

  // Butonlara tıklama işlevi
  const handleButtonClick = (index) => {
    setButtonClicked(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Tıklanma durumunu tersine çevir
  
      // Diğer butonların tıklanma durumunu sıfırla
      for (let i = 0; i < newState.length; i++) {
        if (i !== index) {
          newState[i] = false;
        }
      }
      
      return newState;
    });
  };

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.main}>      
      <View style={styles.filterBar}>
          <Image
            source={require('../assets/kandilli.png')}
            style={{ width: 85, height:50, marginLeft:5,}}
          />
          <FilterButtons buttonClicked={buttonClicked} onButtonClick={handleButtonClick} />
      </View>
        {errorMessage ? (<Text style = {styles.errorMessage}>{errorMessage}</Text>) : 
        <>
        {results.length === 0 ? (
                <Text style={styles.errorMessage}>Aradığınız Terim Bulunamadı !</Text>
              ) : (
                (selectedResource === 'kandilli') ? (
                  <ResultsList results={filterResultsByMag()} />
                ) : (
                  <ResultsAfadList results={results} />
                )
              )}
            </>
          }
      </View>
  );
}
function DateFormatting(resultDate){
  const dateTimeParts = resultDate.split(' ');
  const dateParts = dateTimeParts[0].split('.');
  const timeParts = dateTimeParts[1].split(':');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1; // JavaScript'te ay 0'dan başlar, bu yüzden 1 çıkarıyoruz
  const day = parseInt(dateParts[2]);
  const hour = parseInt(timeParts[0]);
  const minute = parseInt(timeParts[1]);
  const second = parseInt(timeParts[2]);
  
  const dateObject = new Date(year, month, day, hour, minute, second);
  return dateObject;
}

const styles = StyleSheet.create({
    stackScreenMain : {
      flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : "lightcyan",
    },
    main:{
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : "lightcyan",
    },
    text: {
        fontSize : 20,
        backgroundColor : "red",
        textAlign: "center",
        color : "white",
        padding : 10,
    },
    title :{
      fontSize : 18,
      fontWeight : 'bold',
      marginBottom : 20,
      height:50,
      width:400,
      backgroundColor:"white",
      borderColor: "red",
      borderWidth:0,
      marginLeft:25,
    },
    filterBar:{
      flexDirection:"row",
      alignSelf:"flex-start",
      backgroundColor:"white",
      width:400,
      marginBottom : 20,
      borderColor: "red",
      borderWidth:0,
    },
    button: {
      paddingHorizontal: 15,
      borderRadius: 7,
      marginLeft: 18,
      height:25,
      alignSelf:"center",
      borderColor:"black",
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight:"bold",
    },
    errorMessage:{
      fontSize : 20,
      alignSelf : 'center',
      color : 'red',
      fontWeight : 'bold',
      marginTop : 50
    }
})

