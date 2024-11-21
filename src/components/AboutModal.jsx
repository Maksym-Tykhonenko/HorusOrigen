import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icons from './Icons';

const AboutModal = ({ visible, onClose }) => {

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                <ScrollView style={styles.ScrollView}>
                    <Text style={styles.modalText}>
                    Welcome to <Text style={styles.bold}>Horos Ancient Quizzes</Text> - your essential companion on a journey through the world of ancient civilizations and mythology! Our platform is designed for anyone eager to learn, explore, and discover new horizons of knowledge through interactive quizzes and engaging features.
                    </Text>
                    <Text style={styles.subTitle}>Key Features:</Text>
                    <Text style={styles.modalText}>
                    <Text style={styles.bold}>Knowledge Library:</Text> Explore our catalog that contains detailed descriptions of gods and mythological beings from various cultures. You will learn about their legends, attributes, and roles in the lives of ancient peoples, helping you to gain a deeper understanding of their worldview.
                    </Text>
                    <Text style={styles.modalText}>
                    <Text style={styles.bold}>Artifact Museum:</Text> Your journey in Horos Ancient Quizzes becomes even more exciting with the Artifact Museum. As you progress through the quizzes, you will unearth unique artifacts that hold significance for different civilizations. Each artifact comes with a detailed description, revealing its history, cultural significance, and role in the lives of ancient peoples.
                    </Text>
                    <Text style={styles.modalText}>
                    <Text style={styles.bold}>Archaeological Digs:</Text> Participate in an engaging archaeological quiz where you need to answer questions to uncover artifacts and learn more about ancient cultures. This combines elements of gaming and education.
                    </Text>
                    <Text style={styles.modalText}>
                    <Text style={styles.bold}>Player Results</Text> Keep track of your progress in each civilization and view the top 10 participants of the week. This allows you to compare your achievements with other players.
                    </Text>
                    <Text style={styles.modalText}>
                    <Text style={styles.bold}>Articles on Civilizations:</Text> Read articles that reveal interesting facts about various civilizations, their cultural achievements, and unique characteristics.
                    </Text>
                    <Text style={styles.modalText}>
                    <Text style={styles.bold}>Daily Bonus:</Text> Enjoy daily bonuses that will make your learning experience even more enjoyable and help you in your research.
                    </Text>
                    <Text style={styles.modalText}>
                    <Text style={styles.bold}>Account Registration:</Text> Create your account and choose an authentic avatar to showcase your uniqueness in the world of Horos Ancient Quizzes.
                    </Text>
                    <Text style={styles.modalText}>
                    <Text style={styles.bold}>Music:</Text> Enjoy atmospheric music that accompanies your journey through the world of ancient civilizations, creating a unique atmosphere for learning and exploration.
                    </Text>
                    <Text style={styles.subTitle}>Explore, Learn, and Play!</Text>
                    <Text style={styles.modalText}>
                    <Text style={styles.bold}>Horos Ancient Quizzes:</Text> is not just an app, but your opportunity to immerse yourself in a world of knowledge and fascinating facts. We invite you to embark on an exciting journey into the past! Start your exploration today!
                    </Text>
                    </ScrollView>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Icons type={'close'}/>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '90%',
        height: '60%',
        padding: 20,
        paddingTop: 50,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
        color: '#3C3C3C'
    },
    subTitle: {
        color: '#7b4c1c',
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: '900'
    },
    bold: {
        fontWeight: '600',
        color: '#7b4c1c'
    },
    closeButton: {
        padding: 10,
        width: 42,
        height: 42,
        position: 'absolute',
        top: 10,
        right: 10,
    }
});

export default AboutModal;
