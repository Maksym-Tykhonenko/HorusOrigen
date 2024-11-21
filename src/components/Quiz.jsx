import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Modal, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icons from './Icons';

const { height } = Dimensions.get('window');

const Quiz = ({ image, topic, quiz }) => {
  const navigation = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [lives, setLives] = useState(4);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showHintModal, setShowHintModal] = useState(false);
  const [showLivesModal, setShowLivesModal] = useState(false);
  const [showSkipModal, setShowSkipModal] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [timer, setTimer] = useState(60);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  const saveArtifact = async (artifactImage, artifactName) => {
    try {
      const storedArtifacts = await AsyncStorage.getItem('artifacts');
      const artifacts = storedArtifacts ? JSON.parse(storedArtifacts) : [];

      console.log(storedArtifacts)
  
      const isArtifactExists = artifacts.some(
        (artifact) => artifact.artifactName === artifactName
      );
  
      if (!isArtifactExists) {
        const newArtifact = { artifactImage, artifactName };
        const updatedArtifacts = [...artifacts, newArtifact];
        await AsyncStorage.setItem('artifacts', JSON.stringify(updatedArtifacts));
      }
    } catch (error) {
      console.error('Error saving artifact:', error);
    }
  };
  

  useEffect(() => {
    setFilteredOptions(quiz.questions[currentQuestionIndex].options);
  }, [quiz]);  

  useEffect(() => {
    if (isTimerPaused || isQuizFinished) return;
  
    if (timer === 0) {
      setIsQuizFinished(true);
      saveTotalScore(score);
      return;
    }
  
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);
  
    return () => clearInterval(interval);
  }, [timer, isTimerPaused, isQuizFinished]);  

  useEffect(() => {
    const loadTotalScore = async () => {
      const storedScore = await AsyncStorage.getItem('totalScore');
      if (storedScore) {
        setTotalScore(parseInt(storedScore, 10));
      }
    };
    loadTotalScore();
  }, []);

  useEffect(() => {
    setFilteredOptions(quiz.questions[currentQuestionIndex].options);
    setHintUsed(false);
  }, [currentQuestionIndex]);

  const saveTotalScore = async (finalScore) => {
    const newTotalScore = totalScore + finalScore;
    await AsyncStorage.setItem('totalScore', newTotalScore.toString());
    setTotalScore(newTotalScore);
  };

  const handleHintPurchase = () => {
    if (score < 50) {
      setShowHintModal(false);
      alert("Not enough points to buy a hint.");
      return;
    }

    const currentOptions = quiz.questions[currentQuestionIndex].options;
    const incorrectOptions = currentOptions
      .map((option, index) => ({ ...option, index }))
      .filter(option => !option.correct);

    const remainingOptions = currentOptions.filter(
      (option, index) => 
        incorrectOptions.slice(0, incorrectOptions.length - 2).some(o => o.index === index) || option.correct
    );

    setScore(score - 50);
    setFilteredOptions(remainingOptions);
    setHintUsed(true);
    setShowHintModal(false);
  };

  const handleLivesPurchase = () => {
    if (score < 100) {
      setShowLivesModal(false);
      alert("Not enough points to buy a life.");
      return;
    }

    if (lives < 4) {
      setScore(score - 100);
      setLives(lives + 1);
    } else {
      alert("You already have the maximum number of lives.");
    }

    setShowLivesModal(false);
  };

  const handleHintModalOpen = () => {
        if(!hintUsed) {
            setIsTimerPaused(true);
            setShowHintModal(true);    
        }
      };
      
      const handleLivesModalOpen = () => {
        if(lives < 4) {
            setIsTimerPaused(true);
            setShowLivesModal(true);    
        }
      };
      
      const handleHintModalClose = () => {
        setIsTimerPaused(false);
        setShowHintModal(false);
      };
      
      const handleLivesModalClose = () => {
        setIsTimerPaused(false);
        setShowLivesModal(false);
      };
      
      const handleSkipModalOpen = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
          setIsTimerPaused(true);
          setShowSkipModal(true);
        }
      };
      
      const handleSkipModalClose = () => {
        setIsTimerPaused(false);
        setShowSkipModal(false);
      };

  const handleSkipPurchase = () => {
    if (score < 70) {
      alert("Not enough points to skip the question.");
      setShowSkipModal(false);
      return;
    }
    setScore(score - 70);
    setShowSkipModal(false);
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
      saveTotalScore(score);
    }
  };

  const handleAnswer = (optionIndex) => {
    setSelectedAnswerIndex(optionIndex);
    setPressed(true);

    const isCorrect = quiz.questions[currentQuestionIndex].options[optionIndex].correct;

    if (isCorrect) {
      setScore(prevScore => prevScore + 100);
    } else {
      setLives(prevLives => prevLives - 1);
    }

    setTimeout(() => {
      if (lives === 1) {
        setIsQuizFinished(true);
        saveTotalScore(score);
      } else {
        if (currentQuestionIndex < quiz.questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setPressed(false);
          setSelectedAnswerIndex(null);
        } else {
          setIsQuizFinished(true);
          saveTotalScore(score);
        }
      }
    }, 1000);
  };

  const handleTryAgain = async () => {
    setCurrentQuestionIndex(0);
    setFilteredOptions(quiz.questions[currentQuestionIndex].options);
    setSelectedAnswerIndex(null);
    setIsQuizFinished(false);
    setPressed(false);
    setLives(4);
    setScore(0);
    setHintUsed(false);
    setTimer(60);
    setIsTimerPaused(false);

    const artifactImage = quiz.artifactImage;
    const artifactName = quiz.artifactName;
    await saveArtifact(artifactImage, artifactName);
  };

  const handleGoBack = async () => {
    navigation.goBack('');

    const artifactImage = quiz.artifactImage;
    const artifactName = quiz.artifactName;
    await saveArtifact(artifactImage, artifactName);
  }

  const renderAnswerOptions = () => {
    return filteredOptions.map((option, index) => {
      const isSelected = selectedAnswerIndex === index;
      const isCorrect = option.correct;
      let optionStyle = styles.option;

      if (pressed) {
        if (isCorrect) {
          optionStyle = [styles.option, styles.correctOption];
        } else if (isSelected && !isCorrect) {
          optionStyle = [styles.option, styles.wrongOption];
        }
      }

      return (
        <TouchableOpacity
          key={index}
          onPress={() => handleAnswer(index)}
          style={optionStyle}
          disabled={pressed}
        >
          <Text style={styles.optionText}>{option.answer}</Text>
        </TouchableOpacity>
      );
    });
  };

  if (isQuizFinished) {
    return (
      <ImageBackground source={require('../assets/newDiz/back.png')} style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.finishTitle}>Quiz finished !</Text>
        <Text style={styles.finishText}>{quiz.finalText}</Text>
        <Image source={quiz.artifactImage} style={styles.artifactImage} />
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: height * 0.02}}>
            <Text style={[styles.scoreText, {color: '#FDF3E7'}]}>Total score: </Text>
            <View style={styles.coinIcon}>
                <Icons type={'coin'} />
            </View>
            <Text style={[styles.scoreText, {color: '#FDF3E7'}]}>{totalScore}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[styles.scoreText, {color: '#FDF3E7'}]}>Final score: </Text>
            <View style={styles.coinIcon}>
                <Icons type={'coin'} />
            </View>
            <Text style={[styles.scoreText, {color: '#FDF3E7'}]}>{score}</Text>
        </View>
        <TouchableOpacity style={styles.tryAgainBtn} onPress={handleTryAgain}>
            <Text style={styles.tryAgainBtnTxt}>Try again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backBtn} onPress={handleGoBack}>
            <Text style={styles.backBtnTxt}>Go Back</Text>
        </TouchableOpacity>

      </View>
      </ImageBackground>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <ImageBackground source={require('../assets/newDiz/back.png')} style={{flex: 1}}>
    <View style={styles.container}>

      <Text style={styles.topic}>{topic}</Text>

      <Image source={image} style={styles.image} />

      <Text style={styles.question}>{currentQuestion.question}</Text>

      <View style={styles.statsContainer}>
        <View style={styles.livesContainer}>
          {[...Array(4)].map((_, index) => (
            <View key={index} style={styles.lifeIcon}>
              <Icons type={index < lives ? 'live' : 'live-gone'} />
            </View>
          ))}
          <TouchableOpacity 
            style={[styles.plusBtn, lives === 4 && {opacity: 0.5}, score < 100 && {opacity: 0.5}]} 
            onPress={handleLivesModalOpen} 
            disabled={lives === 4 || score < 100}
            >
            <Text style={styles.plusBtnText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.hintIcon, score < 50 && {opacity: 0.5}]}
          onPress={handleHintModalOpen}
          disabled={score < 50}
        >
          <Icons type={'hint'} />
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.hintIcon, currentQuestionIndex === quiz.questions.length - 1 || score < 70 && { opacity: 0.5 }]}
            onPress={handleSkipModalOpen}
            disabled={currentQuestionIndex === quiz.questions.length - 1 || score < 70}
            >
            <Icons type={'arrow'} />
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <Text style={styles.timerText}>{timer}s</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.coinIcon}>
                <Icons type={'coin'} />
            </View>
            <Text style={styles.scoreText}>{score}</Text>
        </View>
      </View>

      <View style={{height: height * 0.02}} />

      {renderAnswerOptions()}

      <Modal
        visible={showHintModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Hint</Text>
            <Text style={styles.modalText}>
              Do you want to buy a hint for 50 points? It will eliminate 50% of the wrong options!
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handleHintModalClose} style={styles.closeBtn}>
                <Text style={styles.closeBtnText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleHintPurchase} style={styles.buyBtn}>
                <Text style={styles.buyBtnText}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={showLivesModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Lives</Text>
            <Text style={styles.modalText}>
              Do you want to buy an additional life for 100 points?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handleLivesModalClose} style={styles.closeBtn}>
                <Text style={styles.closeBtnText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLivesPurchase} style={styles.buyBtn}>
                <Text style={styles.buyBtnText}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={showSkipModal}
        transparent={true}
        animationType="slide"
        >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Skip Question</Text>
            <Text style={styles.modalText}>
                Do you want to skip this question for 70 points?
            </Text>
            <View style={styles.modalButtons}>
                <TouchableOpacity onPress={handleSkipModalClose} style={styles.closeBtn}>
                <Text style={styles.closeBtnText}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSkipPurchase} style={styles.buyBtn}>
                <Text style={styles.buyBtnText}>Buy</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
       </Modal>

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
  },
  topic: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: height * 0.05,
    color: '#FDF3E7',
    textAlign: 'center',
  },
  finishTitle: {
    fontSize: 28,
    fontWeight: '900',
    marginBottom: height * 0.05,
    color: '#FDF3E7',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: height * 0.25,
    marginBottom: height * 0.02,
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
  },
  question: {
    fontSize: 20,
    marginBottom: height * 0.02,
    color: '#FDF3E7',
    textAlign: 'center',
    fontWeight: '600',
    height: height * 0.06,
  },
  option: {
    padding: height * 0.01,
    margin: 5,
    backgroundColor: '#dcc9a3',
    borderWidth: 1,
    borderColor: '#7b4c1c',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 17,
    color: '#7b4c1c',
    fontWeight: '600',
  },
  correctOption: {
    backgroundColor: '#6aa84f',
  },
  wrongOption: {
    backgroundColor: '#e06666',
  },
  finishText: {
    fontSize: height * 0.023,
    textAlign: 'center',
    marginBottom: height * 0.03,
    color: '#FDF3E7'
  },
  livesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lifeIcon: {
    width: height * 0.03,
    height: height * 0.03,
    margin: 3,
  },
  hintIcon: {
    width: height * 0.035,
    height: height * 0.035,
  },
  statsContainer: {
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    marginBottom: height * 0.02,
    backgroundColor: '#FDF3E7',
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 10
  },
  scoreText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#7b4c1c',
  },
  totalScoreText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7b4c1c',
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
    modalContent: {
        width: '90%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#7b4c1c",
    marginBottom: 10,
  },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        color: '#3C3C3C'
  },
    modalButtons: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    closeBtn: {
        padding: 10,
        backgroundColor: "#dcc9a3",
        borderRadius: 10,
        marginRight: 10,
        flex: 1,
        alignItems: "center",
    },
    closeBtnText: {
        color: "#7b4c1c",
        fontWeight: "900",
    },
    buyBtn: {
        padding: 10,
        backgroundColor: "#7b4c1c",
        borderRadius: 10,
        flex: 1,
        alignItems: "center",
    },
    buyBtnText: {
        color: "#dcc9a3",
        fontWeight: "900",
    },
    plusBtn: {
        marginLeft: 10,
        backgroundColor: "#7b4c1c",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: height * 0.03,
        height: height * 0.03
    },
    plusBtnText: {
        color: "#dcc9a3",
        fontSize: height * 0.02,
        fontWeight: '700'
    },
    coinIcon: {
        width: height * 0.03,
        height: height * 0.03,
        marginRight: 5
    },
    timerText: {
        fontSize: 20,
        fontWeight: '900',
        color: '#7b4c1c',
    },
    artifactImage: {
        width: height * 0.2,
        height: height * 0.2,
        resizeMode: 'contain',
        marginBottom: height * 0.06
    },
    tryAgainBtn: {
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
        marginTop: height * 0.12
    },

    tryAgainBtnTxt: {
        fontSize: 18,
        fontWeight: '900',
        color: '#7b4c1c'
    },

    backBtn: {
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#7b4c1c',
        borderRadius: 12,
        marginBottom: 10,
        zIndex: 10
    },

    backBtnTxt: {
        fontSize: 18,
        fontWeight: '900',
        color: '#dcc9a3'
    },

});

export default Quiz;

