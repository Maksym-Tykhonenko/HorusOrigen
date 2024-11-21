import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icons from './Icons';

const bonus = [
  {
    day: '1',
    bonus: 100
  },
  {
    day: '2',
    bonus: 200
  },
  {
    day: '3',
    bonus: 300
  },
  {
    day: '4',
    bonus: 400
  },
  {
    day: '5',
    bonus: 500
  },
  {
    day: '6',
    bonus: 600
  },
  {
    day: '7',
    bonus: 700
  },
];

const BonusModal = ({ visible, onClose }) => {
  const [currentBonusIndex, setCurrentBonusIndex] = useState(0);
  const [rewardMessage, setRewardMessage] = useState('');
  const [iconState, setIconState] = useState(['bonus', 'bonus']);
  const [shakingIconIndex, setShakingIconIndex] = useState(null);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const shakeAnimation = new Animated.Value(0);

  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true })
    ]).start();
  };

  useEffect(() => {
    if (!visible) return;

    const getBonusDay = async () => {
      try {
        const storedBonusDay = await AsyncStorage.getItem('bonusDay');
        if (storedBonusDay) {
          const bonusIndex = parseInt(storedBonusDay) - 1;
          setCurrentBonusIndex(bonusIndex >= 0 ? bonusIndex : 0);
        } else {
          setCurrentBonusIndex(0);
        }
      } catch (error) {
        console.error('Error loading bonus day:', error);
      }
    };

    getBonusDay();
  }, [visible]);

  const updateScore = async (bonusAmount) => {
    try {
      let storedScore = await AsyncStorage.getItem('totalScore');
      storedScore = storedScore ? parseInt(storedScore, 10) : 0;
      const updatedScore = storedScore + bonusAmount;

      await AsyncStorage.setItem('totalScore', updatedScore.toString());
      setRewardMessage(`Congratulations! You received your daily bonus of ${bonusAmount} points! Your total score is now ${updatedScore}.`);
    } catch (error) {
      console.error('Error updating totalScore:', error);
    }
  };

  const handlePressIcon = async (index) => {
    if (shakingIconIndex !== null || buttonsDisabled) return;

    setShakingIconIndex(index);
    setButtonsDisabled(true);
    shake();

    setTimeout(() => {
      const randomBonusAmount = Math.random() < 0.5 ? bonus[currentBonusIndex].bonus : 0;
      
      const updatedIconState = [...iconState];
      updatedIconState[index] = randomBonusAmount > 0 ? 'yes-bonus' : 'no-bonus';

      setIconState(updatedIconState);
      setShakingIconIndex(null);

      if (randomBonusAmount > 0) {
        updateScore(randomBonusAmount);
        setRewardMessage(`Congratulations! You received your daily bonus of ${randomBonusAmount} points!`);
      } else {
        setRewardMessage('Oops, better luck tomorrow!');
      }
    }, 1000);
  };

  const handleClose = () => {
    setIconState(['bonus', 'bonus']);
    setButtonsDisabled(false);
    onClose();
  };


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Day {bonus[currentBonusIndex].day}</Text>
          <Text style={styles.modalSubTitle}>Find your daily reward!</Text>
          <View style={styles.bonusContainer}>
            {iconState.map((type, index) => (
              <TouchableOpacity
                key={index}
                style={styles.bonusIcon}
                onPress={() => handlePressIcon(index)}
                disabled={buttonsDisabled}
              >
                <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
                  <Icons type={type} />
                </Animated.View>
              </TouchableOpacity>
            ))}
          </View>
          {rewardMessage && (
            <Text style={styles.modalDescription}>{rewardMessage}</Text>
          )}
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Icons type={'close'} />
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
  modalTitle: {
    fontSize: 26,
    fontWeight: '900',
    marginBottom: 20,
    textAlign: 'center',
    color: '#7b4c1c',
  },
  modalSubTitle: {
    color: '#ceb076',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },
  bonusContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 20,
  },
  bonusIcon: {
    width: '40%',
    height: 150,
  },
  modalDescription: {
    fontSize: 17,
    textAlign: 'center',
    color: '#3C3C3C'
  },
  closeButton: {
    padding: 10,
    width: 42,
    height: 42,
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default BonusModal;
