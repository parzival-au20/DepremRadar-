import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React ,{ useState, useEffect } from 'react';
import {useResults, useResultsContext} from '../hooks/useResults'
import ResultsList from '../components/ResultsList';
import ResultsAfadList from '../components/ResultsAfadList';
import FilterButtons from '../components/FilterButtons';


export default function Home() {
  const { selectedResource, selectedTime } = useResultsContext();
  const { selectedMenuTime, selectedRes, setSelectedRes } = useResultsContext();
  const { results, errorMessage, loading } = useResultsContext();
  const [imageSource, setImageSource] = useState(require('../assets/kandilli.png'));
  const [selectedFilterTime, setSelectedFilterTime] = useState(selectedTime);
  const [newImageSource, setNewImageSource] = useState(imageSource);

  useEffect(() => {
    setSelectedRes(selectedResource);
  }, [selectedResource]);

  useEffect(() => {
    // selectedResource değerine göre hangi görüntünün gösterileceğini belirleyin
    let newImageSource;
    if (selectedRes === 'kandilli') {
      newImageSource = require('../assets/kandilli.png');
    } else if (selectedRes === 'afad') {
      newImageSource = require('../assets/AFAD.png');
    } else if (selectedRes === 'csem') {
      newImageSource = require('../assets/csem1.jpg');
    }
    // Görüntüyü güncelleyin
    setImageSource(newImageSource);
  }, [selectedRes]);

  useEffect(() => {
      setSelectedFilterTime(selectedMenuTime);
  }, [selectedMenuTime, selectedTime]);

  useEffect(() => {
    setSelectedFilterTime(selectedTime);
    }, [selectedTime]);

  console.log("Homescreen "+selectedResource);
  //console.log(results);
  const filterResultsByTime = (filteredResults) => {
    console.log("filteredTime: "+selectedFilterTime);
    const currentTime = new Date();
    const selectedTimeMilliseconds = selectedFilterTime * 60 * 60 * 1000;
    const endTime = new Date(currentTime.getTime() - selectedTimeMilliseconds);
    
    filteredResults = filteredResults.filter(result => {
      let resultDate =""
      if (result.formattedDate != undefined){
        resultDate = DateFormatting(result.formattedDate)
      }
      //console.log(resultDate+"   "+endTime+"  "+currentTime+" "+selectedTime);
      return resultDate >= endTime && resultDate <= currentTime;
    });
    //setFilteredResults(filteredResults);
    return filteredResults;
  }
  const filterResultsByMag = () => {
    let filteredResults = [...results];
    //console.log(results);
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
    return filterResultsByTime(filteredResults);
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
          {imageSource && (
            <Image
              source={imageSource}
              style={{ width: 85, height: 50, marginLeft: 5 }}
            />
          )}
          <FilterButtons buttonClicked={buttonClicked} onButtonClick={handleButtonClick} />
      </View>
        {errorMessage ? (<Text style = {styles.errorMessage}>{errorMessage}</Text>) : 
        <>
        {results.length === 0 ? (
                <Text style={styles.errorMessage}>Aradığınız Terim Bulunamadı !</Text>
              ) : (
                (selectedResource === 'kandilli') ? (
                  <ResultsList results={(filterResultsByMag())} />
                ) : (
                  <ResultsAfadList results={filterResultsByMag()} />
                )
              )}
            </>
          }
      </View>
  );
}
function DateFormatting(resultDate){
  let dateObject;

  if (resultDate.includes('T')) {
    dateObject = new Date(resultDate);
    dateObject.setHours(dateObject.getHours() + 3);
  } else {
    // Birinci formatı işleme
    const dateTimeParts = resultDate.split(' ');
    const dateParts = dateTimeParts[0].split('.');
    const timeParts = dateTimeParts[1].split(':');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // JavaScript'te ay 0'dan başlar, bu yüzden 1 çıkarıyoruz
    const day = parseInt(dateParts[2]);
    const hour = parseInt(timeParts[0]);
    const minute = parseInt(timeParts[1]);
    const second = parseInt(timeParts[2]);

    dateObject = new Date(year, month, day, hour, minute, second);
  }
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

