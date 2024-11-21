import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import articles from "../constants/articles";
import Icons from "./Icons";

const { height } = Dimensions.get("window");

const Articles = () => {
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
    };

    const { title, article, image } = articles[currentIndex];

    return (
        <ImageBackground source={require('../assets/newDiz/back.png')} style={{flex: 1}}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                <Icons type={"back"} />
            </TouchableOpacity>

            <Image source={image} style={styles.image} />

            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <ScrollView style={{ width: "100%" }}>
                    <Text style={styles.story}>{article}</Text>
                    <View style={{ height: 50 }} />
                </ScrollView>
            </View>

            <View style={styles.navigationContainer}>
                <TouchableOpacity style={[styles.navButton, {transform: [{ rotate: '-180deg' }]}]} onPress={handlePrevious}>
                    <Icons type={'arrow'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={handleNext}>
                    <Icons type={'arrow'} />
                </TouchableOpacity>
            </View>
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
        paddingBottom: height * 0.2,
    },
    image: {
        width: "100%",
        height: height * 0.33,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        marginBottom: height * 0.02,
    },
    title: {
        fontWeight: "800",
        fontSize: 26,
        textAlign: "center",
        marginBottom: height * 0.03,
        color: "#ccb59a",
    },
    textContainer: {
        width: "100%",
        height: height * 0.56,
        paddingHorizontal: 20,
    },
    story: {
        fontWeight: "400",
        fontSize: 18,
        textAlign: "justify",
        color: "#FDF3E7",
    },
    icon: {
        width: 60,
        height: 60,
        padding: 10,
        position: "absolute",
        top: height * 0.04,
        left: 10,
        zIndex: 10,
    },
    navigationContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        position: "absolute",
        bottom: height * 0.012,
    },
    navButton: {
        width: 50,
        height: 50,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 7,
    }
});

export default Articles;
