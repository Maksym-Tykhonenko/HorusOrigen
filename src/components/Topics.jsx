import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions, Modal, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import quiz from "../constants/quiz.js";

const { height } = Dimensions.get("window");

const Topics = () => {
    const navigation = useNavigation();
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleNavigate = () => {
        setModalVisible(false);
        if (selectedLocation) {
            navigation.navigate("QuizScreen", {
                topic: selectedLocation.location,
                image: selectedLocation.image,
                quiz: selectedLocation.quiz,
            });
        }
    };

    return (
        <ImageBackground source={require('../assets/newDiz/back.png')} style={{flex: 1}}>
        <View style={styles.container}>
            <Text style={styles.title}>
                {selectedTopic ? selectedTopic.name : "Select a Topic"}
            </Text>

            <ScrollView style={styles.scrollContainer}>
                {!selectedTopic ? (
                    <View style={styles.topicsContainer}>
                        {quiz.map((topic, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.topicButton}
                                onPress={() => setSelectedTopic(topic)}
                            >
                                <Image source={topic.image} style={styles.topicImage} />
                                <View style={styles.topicContainer}>
                                    <Text style={styles.topicName}>{topic.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                ) : (
                    <View style={[styles.topicsContainer, { paddingBottom: height * 0.12 }]}>
                        {selectedTopic.topics.map((location, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.topicButton}
                                onPress={() => {
                                    setSelectedLocation(location);
                                    setModalVisible(true);
                                }}
                            >
                                <Image source={location.image} style={styles.topicImage} />
                                <View
                                    style={[
                                        styles.topicContainer,
                                        {
                                            backgroundColor: "#7b4c1c",
                                        },
                                    ]}
                                >
                                    <Text style={[styles.topicName, { color: "#dcc9a3" }]}>
                                        {location.location}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}

                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => setSelectedTopic(null)}
                        >
                            <Text style={styles.backButtonText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>

            {selectedLocation && (
                <Modal
                    visible={modalVisible}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>{selectedLocation.location}</Text>
                            <Text style={styles.modalText}>{selectedLocation.modalMessage}</Text>

                            <View style={styles.modalButtons}>
                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.closeButtonText}>Close</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.proceedButton}
                                    onPress={handleNavigate}
                                >
                                    <Text style={styles.proceedButtonText}>Start</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 30,
        paddingTop: height * 0.08,
    },
    title: {
        fontSize: 24,
        fontWeight: "900",
        color: "#FDF3E7",
        marginBottom: height * 0.02,
        textAlign: "center",
    },
    scrollContainer: {
        width: "100%",
    },
    topicsContainer: {
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        paddingBottom: height * 0.1,
    },
    topicButton: {
        width: "100%",
        margin: 10,
        alignItems: "center",
    },
    topicImage: {
        width: "100%",
        height: height * 0.25,
        borderRadius: 15,
    },
    topicContainer: {
        borderRadius: 10,
        padding: 7,
        backgroundColor: "#dcc9a3",
        alignItems: "center",
        justifyContent: "center",
        marginTop: height * 0.015,
        width: "100%",
    },
    topicName: {
        fontSize: 17,
        fontWeight: "600",
        color: "#7b4c1c",
        textAlign: "center",
    },
    backButton: {
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
        borderWidth: 0.5,
        borderColor: "#7b4c1c",
        backgroundColor: "#dcc9a3",
        borderRadius: 12,
        marginTop: height * 0.02,
    },
    backButtonText: {
        fontSize: 18,
        fontWeight: "900",
        color: "#7b4c1c",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "80%",
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 20,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: "900",
        color: "#7b4c1c",
        marginBottom: 10,
    },
    modalText: {
        fontSize: 17,
        color: "#3C3C3C",
        textAlign: "center",
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    closeButton: {
        padding: 10,
        backgroundColor: "#dcc9a3",
        borderRadius: 10,
        marginRight: 10,
        flex: 1,
        alignItems: "center",
    },
    closeButtonText: {
        color: "#7b4c1c",
        fontWeight: "900",
    },
    proceedButton: {
        padding: 10,
        backgroundColor: "#7b4c1c",
        borderRadius: 10,
        flex: 1,
        alignItems: "center",
    },
    proceedButtonText: {
        color: "#dcc9a3",
        fontWeight: "900",
    },
});

export default Topics;
