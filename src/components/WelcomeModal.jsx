import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const WelcomeModal = ({ visible, onClose }) => {

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>
            <Text style={styles.modalDescription}>Welcome to Horos Ancient Quizzes !</Text>
            <Text style={styles.modalDescription}>Explore ancient civilizations and test your knowledge! Ready? Let's go!</Text>
            <Text style={styles.modalDescription}>Ready? Let's go!</Text>
          </ScrollView>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.btnText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
  },
  modalDescription: {
    fontSize: 19,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    borderWidth: 0.5,
    borderColor: '#7b4c1c',
    backgroundColor: '#dcc9a3',
    borderRadius: 12,
    marginTop: 10,
    zIndex: 10
  },
  btnText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#7b4c1c'
  }
});

export default WelcomeModal;
