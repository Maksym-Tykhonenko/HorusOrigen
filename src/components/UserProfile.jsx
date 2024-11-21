import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Modal, Dimensions, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';
import avatarOptions from '../constants/avatar.js';
import Icons from './Icons.jsx';

const { height } = Dimensions.get('window');

const UserProfile = ({ visible, onClose }) => {
  const [name, setName] = useState("");
  const [uploadedImage, setUploadedImage] = useState({ uri: Image.resolveAssetSource(require('../assets/avatars/user.png')).uri });
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [avatarDescription, setAvatarDescription] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [buttonText, setButtonText] = useState("Create account");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
        try {
          const storedName = await AsyncStorage.getItem('userProfile');
          const storedProfileImage = await AsyncStorage.getItem('profileImage');
      
          if (storedName) {
            setName(storedName);
            setButtonText("Save changes");
          } else {
            setName("");
            setButtonText("Create account");
          }
      
          if (storedProfileImage) {
            const parsedImage = JSON.parse(storedProfileImage);
      
            if (parsedImage.type === 'uploaded') {
              setUploadedImage({ uri: parsedImage.uri });
              setSelectedAvatar(null);
            } else if (parsedImage.type === 'avatar') {
              setUploadedImage(null);
              setSelectedAvatar(parsedImage.index);
              setAvatarDescription(avatarOptions[parsedImage.index].description);
            } else if (parsedImage.type === 'default') {
              setUploadedImage({ uri: parsedImage.uri });
              setSelectedAvatar(null);
            }
          } else {
            setUploadedImage({ uri: Image.resolveAssetSource(require('../assets/avatars/user.png')).uri });
            setSelectedAvatar(null);
          }
      
          setErrorMessage("");
        } catch (error) {
          console.error('Error loading user profile:', error);
        }
      };      

    if (visible) {
      loadProfile();
    }
  }, [visible]);

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleSubmit = async () => {
    if (name.length > 20) {
      setErrorMessage("Name cannot exceed 20 characters.");
      return;
    }
  
    try {
      await AsyncStorage.setItem('userProfile', name);
  
      if (uploadedImage) {
        await AsyncStorage.setItem('profileImage', JSON.stringify({ type: 'uploaded', uri: uploadedImage.uri }));
      } else if (selectedAvatar !== null) {
        await AsyncStorage.setItem('profileImage', JSON.stringify({ type: 'avatar', index: selectedAvatar }));
      } else {
        await AsyncStorage.setItem(
          'profileImage',
          JSON.stringify({ type: 'default', uri: Image.resolveAssetSource(require('../assets/avatars/user.png')).uri })
        );
      }
  
      console.log('User profile saved successfully!');
      setButtonText("Save changes");
      onClose();
    } catch (error) {
      console.error('Error saving user profile:', error);
    }
  };  

  const uploadImageFromLibrary = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 1 },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          Alert.alert('Error', response.errorMessage);
        } else {
          const imageUri = response.assets[0].uri;
          setUploadedImage({ uri: imageUri });
          setSelectedAvatar(null);
        }
      }
    );
  };

  const selectAvatar = (index) => {
    setSelectedAvatar(index);
    setUploadedImage(null);
    setAvatarDescription(avatarOptions[index].description);
  };

  useEffect(() => {
    if (!visible) {
      setAvatarDescription("");
      setShowDescription(false);
    }
  }, [visible]);

  const toggleAvatarDescription = (description) => {
    if (showDescription && avatarDescription === description) {
      setShowDescription(false);
      setAvatarDescription("");
    } else {
      setAvatarDescription(description);
      setShowDescription(true);
    }
  };  
  

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.innerContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                  <Icons type={'close'}/>
                </TouchableOpacity>

                <ScrollView style={{width: '100%'}}>
                <View style={styles.upperContainer}>
                  <Text style={styles.title}>Account</Text>
                  <View style={[styles.avatarPlaceholder, uploadedImage || selectedAvatar !== null ? styles.imagePlaceholder : null]}>
                    {uploadedImage ? (
                        <Image source={uploadedImage} style={styles.uploadedAvatarImage} />
                    ) : (
                        selectedAvatar !== null && (
                        <Image source={avatarOptions[selectedAvatar].source} style={styles.uploadedAvatarImage} />
                        )
                    )}
                  </View>
                  <TouchableOpacity style={styles.btnUploadImage} onPress={uploadImageFromLibrary}>
                    <Text style={styles.btnText}>Upload photo</Text>
                  </TouchableOpacity>

                  <View style={styles.avatarSelectionContainer}>
                    {avatarOptions.map((avatar, index) => (
                        <View key={index} style={styles.avatarOptionContainer}>
                        <TouchableOpacity onPress={() => selectAvatar(index)} style={styles.avatarOption}>
                            <Image source={avatar.source} style={styles.avatarImage} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => toggleAvatarDescription(avatar.description)}
                            style={styles.readButton}
                        >
                            <Text style={styles.readButtonText}>
                            {showDescription && avatarDescription === avatar.description ? "Hide" : "Read"}
                            </Text>
                        </TouchableOpacity>
                        </View>
                    ))}
                  </View>
                  {showDescription && avatarDescription && (
                    <Text style={styles.avatarDescription}>{avatarDescription}</Text>
                  )}

                    <View style={styles.inputContainer}>
                      <TextInput
                        value={name}
                        placeholder="Enter your name"
                        placeholderTextColor="#7b4c1c"
                        onChangeText={handleNameChange}
                        style={styles.input}
                      />
                      {errorMessage ? (
                        <Text style={styles.errorText}>{errorMessage}</Text>
                      ) : null}
                      <TouchableOpacity style={styles.btnCreate} onPress={handleSubmit}>
                        <Text style={styles.btnCreateText}>{buttonText}</Text>
                      </TouchableOpacity>
                    </View>

                </View>
                </ScrollView>

              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};


const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    padding: 15,
    flexDirection: "column", 
    justifyContent: "flex-start",
    alignItems: "center",
    width: '90%',
    height: '60%',
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  closeButton: {
    padding: 10,
    width: 40,
    height: 40,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10
  },
  upperContainer: {
    width: "100%",
    padding: 20,
    alignItems: "center"
  }, 

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: -15,
    color: '#7b4c1c'
  },

  avatarPlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 20
  },

  imagePlaceholder: {
    padding: 0
  },

  uploadedAvatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },

  avatarSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: '100%',
  },
  avatarOption: {
    width: 75,
    height: 75,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#ccc',
    marginHorizontal: 5,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  avatarOptionContainer: {
    alignItems: 'center',
  },
  readButton: {
    marginTop: 7,
    backgroundColor: '#dcc9a3',
    paddingVertical: 3,
    width: 70,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  readButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  avatarDescription: {
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center',
    color: '#7b4c1c',
  },

  inputContainer: {
    width: "100%",
  },

  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: height * 0.05,
    borderWidth: 1,
    borderColor: "#7b4c1c",
    borderRadius: 10,
    width: "100%",
    fontSize: 17,
    color: '#7b4c1c',
  },

  btnCreate: {
    width: "100%",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#dcc9a3',
  },

  btnCreateText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500'
  },

  btnText: {
    fontSize: 18,
    color: '#817a6e',
    fontWeight: '500'
  },

  btnUploadImage: {
    padding: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#817a6e',
    borderRadius: 10,
    width: '100%'
  },

  errorText: {
    color: '#e1251b',
    fontSize: 14,
    position: 'absolute',
    top: 100
  }
};

export default UserProfile;