import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import library from '../constants/library';

const { height, width } = Dimensions.get('window');

const Results = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [users, setUsers] = useState([]);

  const generateRandomName = () => {
    const firstNames = ['Zeus', 'Hera', 'Poseidon', 'Athena', 'Apollo', 'Artemis', 'Ares', 'Demeter', 'Hermes', 'Hestia'];
    const lastNames = ['Odin', 'Ra', 'Thor', 'Anubis', 'Bastet', 'Horus', 'Loki', 'Isis', 'Hades', 'Hephaestus'];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
  };

  const generateRandomImage = () => {
    const randomArticle = library[Math.floor(Math.random() * library.length)];
    return randomArticle.image;
  };

  const generateUsers = () => {
    const generatedUsers = [];
    for (let i = 0; i < 10; i++) {
      const user = {
        name: generateRandomName(),
        score: Math.floor(Math.random() * (4500) + 500),
        image: generateRandomImage(),
      };
      generatedUsers.push(user);
    }
    setUsers(generatedUsers);
  };

  useEffect(() => {
    const fetchTotalScore = async () => {
      const score = await AsyncStorage.getItem('totalScore');
      setTotalScore(score ? parseInt(score) : 0);
    };

    fetchTotalScore();
    generateUsers();
  }, []);

  return (
    <ImageBackground source={require('../assets/newDiz/back.png')} style={{flex: 1}}>
    <View style={styles.container}>
      <Text style={styles.totalScore}>{totalScore}</Text>
      
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Image source={item.image} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userScore}>{item.score}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: height * 0.07,
    paddingBottom: height * 0.12,
  },
  totalScore: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FDF3E7',
    marginBottom: height * 0.03,
  },
  userContainer: {
    width: width * 0.85,
    padding: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7b4c1c',
  },
  userScore: {
    fontSize: 16,
    color: '#555',
  },
});

export default Results;
