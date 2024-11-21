import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ImageBackground } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import avatarOptions from '../constants/avatar';
import WelcomeModal from './WelcomeModal';
import BonusModal from './DailyBonus';
import SettingsModal from './SettingsModal';
import UserProfile from './UserProfile';
import AboutModal from './AboutModal';

const { height } = Dimensions.get('window');

const Home = () => {
    const navigation = useNavigation();
    const [welcomeModalVisible, setWelcomeModalVisible] = useState(true);
    const [bonusModalVisible, setBonusModalVisible] = useState(false);
    const [aboutModalVisible, setAboutModalVisible] = useState(false);
    const [userProfileModalVisible, setUserProfileModalVisible] = useState(false);
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);
    const [uploadedImage, setUploadedImage] = useState({ uri: Image.resolveAssetSource(require('../assets/avatars/user.png')).uri });
    const [userName, setUserName] = useState('');  
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [timeLeft, setTimeLeft] = useState('00:00:00');
    const [intervalId, setIntervalId] = useState(null);

    const loadAvatar = async () => {
        try {
          const storedProfileImage = await AsyncStorage.getItem('profileImage');
      
          if (storedProfileImage) {
            const parsedImage = JSON.parse(storedProfileImage);
      
            if (parsedImage.type === 'uploaded') {
              setUploadedImage({ uri: parsedImage.uri });
            } else if (parsedImage.type === 'avatar') {
              setUploadedImage(avatarOptions[parsedImage.index].source);
            } else if (parsedImage.type === 'default') {
              setUploadedImage({ uri: parsedImage.uri });
            }
          } else {
            setUploadedImage({ uri: Image.resolveAssetSource(require('../assets/avatars/user.png')).uri });
          }
        } catch (error) {
          console.error('Error loading avatar:', error);
        }
      };      
    
      const loadName = async () => {
        try {
          const storedName = await AsyncStorage.getItem('userProfile');
          setUserName(storedName || '');
        } catch (error) {
          console.error('Error loading name:', error);
        }
      };
    
      const loadTimer = async () => {
        try {
          const lastClaimTime = await AsyncStorage.getItem('lastClaimTime');
          const currentTime = new Date().getTime();
          if (lastClaimTime) {
            const timeDifference = currentTime - parseInt(lastClaimTime);
            const timeRemaining = 86400000 - timeDifference;
            if (timeRemaining > 0) {
              setButtonDisabled(true);
              setTimeLeft(formatTime(timeRemaining));
              startCountdown(timeRemaining);
            } else {
              setButtonDisabled(false);
              setTimeLeft('00:00:00');
            }
          } else {
            setButtonDisabled(false);
            setTimeLeft('00:00:00');
          }
        } catch (error) {
          console.error('Error loading timer:', error);
        }
      };
    
      const startCountdown = (timeRemaining) => {
        if (intervalId) {
          clearInterval(intervalId);
        }
    
        const newIntervalId = setInterval(() => {
          if (timeRemaining <= 0) {
            clearInterval(newIntervalId);
            setButtonDisabled(false);
            setTimeLeft('00:00:00');
          } else {
            setTimeLeft(formatTime(timeRemaining));
            timeRemaining -= 1000;
          }
        }, 1000);
    
        setIntervalId(newIntervalId);
      };
    
      const formatTime = (milliseconds) => {
        const hours = Math.floor(milliseconds / 3600000);
        const minutes = Math.floor((milliseconds % 3600000) / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
      };
    
      const padTime = (time) => {
        return time < 10 ? `0${time}` : time;
      };
    
      const handleBonusPress = async () => {
        if (buttonDisabled) return;
    
        setBonusModalVisible(true);
        const currentTime = new Date().getTime();
        await AsyncStorage.setItem('lastClaimTime', currentTime.toString());
    
        setButtonDisabled(true);
        loadTimer();
      };


      const closeUserProfileModal = async () => {
        setUserProfileModalVisible(false);
        await loadAvatar();
        await loadName();
    };

    const closeSettingsModal = async () => {
        setSettingsModalVisible(false);
        setUploadedImage({ uri: Image.resolveAssetSource(require('../assets/avatars/user.png')).uri });
        await loadAvatar();
        await loadName();
        await loadTimer();
    };

    useFocusEffect(
        useCallback(() => {
          loadAvatar();
          loadName();
          loadTimer();
        }, [])
      );

      useEffect(() => {
        return () => {
          if (intervalId) {
            clearInterval(intervalId);
          }
        };
      }, [intervalId]);

    return(
        <ImageBackground source={require('../assets/newDiz/back.png')} style={{flex: 1}}>
        <View style={styles.container}>

            <TouchableOpacity style={styles.userContainer} onPress={() => setUserProfileModalVisible(true)}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={uploadedImage} 
                        style={styles.avatarImage}
                    />
                </View>
                    <View style={styles.nameBox}>
                        <Text style={styles.name}>{userName || "User"}</Text>
                    </View>
            </TouchableOpacity>

            <Image source={require('../assets/decor/home.png')} style={styles.image} />

            <View style={styles.btnContainer}>

            <TouchableOpacity
                style={[styles.btn, buttonDisabled && {opacity: 0.6}]}
                onPress={handleBonusPress}
                disabled={buttonDisabled}
                >
                <Text style={styles.btnTxt}>
                    {buttonDisabled ? `${timeLeft}` : 'Daily bonus'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ArticlesScreen')}>
                <Text style={styles.btnTxt}>Articles</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => setAboutModalVisible(true)}>
                <Text style={styles.btnTxt}>About us</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => setSettingsModalVisible(true)}>
                <Text style={styles.btnTxt}>Settings</Text>
            </TouchableOpacity>

            </View>

            <WelcomeModal visible={welcomeModalVisible} onClose={() => setWelcomeModalVisible(false)} />
            <BonusModal visible={bonusModalVisible} onClose={() => setBonusModalVisible(false)} />
            <UserProfile visible={userProfileModalVisible} onClose={closeUserProfileModal}/>
            <AboutModal visible={aboutModalVisible} onClose={() => setAboutModalVisible(false)}/>
            <SettingsModal visible={settingsModalVisible} onClose={closeSettingsModal}/>
        </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 30,
        paddingTop: height * 0.07,
    },

    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,
        paddingHorizontal: 7,
        borderRadius: 15,
        backgroundColor: 'rgba(220, 201, 163, 0.55)',
        zIndex: 10,
        marginBottom: height * 0.05
    },

    imageContainer: {
        padding: 0,
        width: height * 0.07,
        height: height * 0.07,
        alignItems: 'center',
        borderRadius: 13,
        overflow: 'hidden',
        marginRight: 10,
    },

    avatarImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    nameBox: {
        padding: 5, 
        borderRadius: 10, 
        backgroundColor: '#f9f9f9', 
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 7,
    },

    name: {
        fontSize: 22,
        fontWeight: '600',
        color: '#3C3C3C',
        textAlign: 'center'
    },

    image: {
        width: '100%',
        height: height * 0.35,
        resizeMode: 'cover',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: height * 0.08
    },

    title: {
        fontSize: 23,
        fontWeight: '700',
        color: '#7b4c1c',
        lineHeight: 23,
        textAlign: 'center',
        marginBottom: height * 0.01
    },

    btnContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    btn: {
        padding: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '47%',
        height: height * 0.075,
        borderWidth: 0.5,
        borderColor: '#7b4c1c',
        backgroundColor: '#dcc9a3',
        borderRadius: 12,
        marginBottom: 10,
        zIndex: 10
    },

    btnTxt: {
        fontSize: 18,
        fontWeight: '900',
        color: '#7b4c1c'
    }
});

export default Home;