import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Stopwatch} from 'react-native-stopwatch-timer';

const App = () => {
  const [stopwatchStart, setStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const options = {
    container: {
      backgroundColor: '#566573',
      padding: 5,
      borderRadius: 5,
      width: 200,
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
      color: '#fff',
      marginLeft: 7,
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
       React Native  Stopwatch
        </Text>
        <View style={styles.sectionStyle}>
          <Stopwatch
          laps
          msecs
   
            start={stopwatchStart}
            
            reset={resetStopwatch}
           
            options={options}
            
          
            getTime={(time) => {
              console.log(time);
            }}
          />
          <TouchableHighlight
            onPress={() => {
              setStopwatchStart(!stopwatchStart);
              
              setResetStopwatch(false);
            }}>
            <Text style={styles.buttonText}>
              {!stopwatchStart ? 'START' : 'STOP'}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setStopwatchStart(false);
              setResetStopwatch(true);
            }}>
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableHighlight>
        </View>
      
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },
});

