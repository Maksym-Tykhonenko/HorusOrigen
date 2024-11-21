import React from "react";
import { View, Image, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icons from "./Icons";

const { height } = Dimensions.get("window");

const Details = ({ image, name, description, attributes, significance, cult, fact }) => {
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
                    <Text style={styles.subTitle}>Description</Text>
                    <Text style={styles.text}>{description}</Text>
                    <Text style={styles.subTitle}>Attributes</Text>
                    <Text style={styles.text}>{attributes}</Text>
                    <Text style={styles.subTitle}>Significance</Text>
                    <Text style={styles.text}>{significance}</Text>
                    <Text style={styles.subTitle}>Cult</Text>
                    <Text style={styles.text}>{cult}</Text>
                    <Text style={styles.subTitle}>Interesting fact</Text>
                    <Text style={styles.text}>{fact}</Text>
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
        fontWeight: "900",
        fontSize: 26,
        textAlign: "center",
        marginBottom: height * 0.03,
        color: "#FDF3E7",
    },

    subTitle: {
        fontWeight: "800",
        fontSize: 22,
        textAlign: "center",
        marginBottom: height * 0.015,
        color: "#dcc9a3",
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

export default Details;
