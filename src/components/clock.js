import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';

export default class Clock extends Component {

  constructor() {
    super();

    this.state = { currentTime: null, currentDay: null }
    this.daysArray = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];
  }

  componentDidMount() {
    this.getCurrentTime();
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'pm';

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = 'am';
    }

    this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm });

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({ currentDay: item.toUpperCase() });
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.daysText}>{this.state.currentDay}</Text>
          <Text style={styles.timeText}>{this.state.currentTime}</Text>

          <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.ponto}>Marcar Ponto</Text>
        </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#191919',
    },
    headerText: {
      fontSize: 30,
      textAlign: "center",
      margin: 10,
      color: 'black',
      fontWeight: "bold"
    },
    timeText: {
      fontSize: 70,
      color: '#f44336'
    },
    daysText: {
      color: '#35AAFF',
      fontSize: 40,
      paddingBottom: 0
    },
    ponto:{
      color: '#FFF',
    fontSize: 40,
    },
    btnSubmit:{
      backgroundColor: '#35AAFF',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7
    },
  });