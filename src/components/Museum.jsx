import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import artifactsData from '../constants/artifacts';

const { width, height } = Dimensions.get('window');

const Museum = () => {
  const navigation = useNavigation();
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    const loadArtifacts = async () => {
      try {
        const storedArtifacts = await AsyncStorage.getItem('artifacts');
        if (storedArtifacts) {
          setArtifacts(JSON.parse(storedArtifacts));
        }
      } catch (error) {
        console.error('Error loading artifacts:', error);
      }
    };

    loadArtifacts();
  }, []);

  const handleDetails = (artifactName) => {
    const matchingArtifact = artifactsData.find((artifact) => artifact.name === artifactName);
  
    if (matchingArtifact) {
      navigation.navigate('ArtifactDetailsScreen', {
        name: matchingArtifact.name,
        image: matchingArtifact.image,
        article: matchingArtifact.description,
      });
    }
  };
  

  const renderArtifact = ({ item }) => (
    <View style={styles.artifactContainer}>
      <Image source={item.artifactImage} style={styles.artifactImage} />
      <Text style={styles.artifactName}>{item.artifactName}</Text>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => handleDetails(item.artifactName)}
      >
        <Text style={styles.detailsButtonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground source={require('../assets/newDiz/back.png')} style={{flex: 1}}>
    <View style={styles.container}>
      <Text style={styles.title}>Museum</Text>
      {artifacts.length > 0 ? (
        <FlatList
          data={artifacts}
          numColumns={2}
          keyExtractor={(item) => item.artifactName}
          renderItem={renderArtifact}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={{width: '100%', alignItems: 'center'}}>
            <Text style={styles.noArtifactsText}>No artifacts unlocked yet ! Complete at least one quiz, to unlock your first artifact !</Text>
            <TouchableOpacity
                style={styles.navigateButton}
                onPress={() => navigation.navigate('TopicsScreen')}
            >
                <Text style={styles.navigateButtonText}>Go to Topics</Text>
            </TouchableOpacity>
        </View>
      )}
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
    padding: 30,
    paddingTop: height * 0.07,
    paddingBottom: height * 0.12,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: height * 0.02,
    textAlign: 'center',
    color: '#ccb59a',
  },
  noArtifactsText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#ccb59a',
  },
  listContent: {
    width: width * 0.85,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBottom: height * 0.05
  },
  artifactContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.36,
    height: height * 0.2,
    margin: width * 0.04,
    marginBottom: height * 0.12,
  },
  artifactImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  artifactName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FDF3E7',
    textAlign: 'center',
    height: 60
  },
  detailsButton: {
    marginTop: 8,
    backgroundColor: '#ccb59a',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  detailsButtonText: {
    color: '#7b4c1c',
    fontSize: 14,
    fontWeight: 'bold',
  },
  navigateButton: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#7b4c1c',
    backgroundColor: '#dcc9a3',
    borderRadius: 12,
    marginBottom: 10,
    zIndex: 10,
    marginTop: height * 0.15
  },
  navigateButtonText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#7b4c1c'
  }
});

export default Museum;