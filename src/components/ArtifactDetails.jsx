import React from "react";
import { View, Image, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icons from "./Icons";

const { height, width } = Dimensions.get("window");

const ArtifactDetails = ({ name, article, image }) => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../assets/newDiz/back.png')} style={{flex: 1}}>
        <View style={styles.container}>

            <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                <Icons type={"back"} />
            </TouchableOpacity>

            <Image source={image} style={styles.image} />

            <View style={styles.textContainer}>
                <Text style={styles.title}>{name}</Text>
                <ScrollView style={{ width: "100%" }}>
                    <Text style={styles.text}>{article}</Text>
                    <View style={{ height: 50 }} />
                </ScrollView>
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
        justifyContent: "center",
        paddingBottom: height * 0.2,
        paddingTop: height * 0.2,
    },

    image: {
        width: width * 0.85,
        height: height * 0.25,
        resizeMode: 'contain',
        marginBottom: height * 0.02,
    },

    title: {
        fontWeight: "900",
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

    text: {
        fontWeight: "400",
        fontSize: 18,
        textAlign: "justify",
        color: "#FDF3E7",
        paddingBottom: height * 0.03
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
});

export default ArtifactDetails;
