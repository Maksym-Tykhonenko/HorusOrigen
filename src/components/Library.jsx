import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import library from '../constants/library.js';

const { height, width } = Dimensions.get("window");

const Library = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Image source={item.image} style={styles.itemImage} />
                <Text style={styles.itemName}>{item.name}</Text>
                <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() =>
                        navigation.navigate('DetailsScreen', {
                            image: item.image,
                            name: item.name,
                            description: item.description,
                            attributes: item.attributes,
                            significance: item.significance,
                            cult: item.cult,
                            fact: item.fact,
                        })
                    }
                >
                    <Text style={styles.detailsText}>Read</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <ImageBackground source={require('../assets/newDiz/back.png')} style={{flex: 1}}>
        <View style={styles.container}>
            <FlatList
                data={library}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
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
        padding: 20,
        paddingTop: height * 0.07,
        paddingBottom: height * 0.12,
    },
    listContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: width * 0.85,
    },
    itemContainer: {
        width: width * 0.85,
        marginBottom: 30,
        alignItems: 'center',
    },
    itemImage: {
        width: '100%',
        height: height * 0.3,
        borderRadius: 10,
    },
    itemName: {
        marginTop: 10,
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
        color: '#ccb59a',
    },
    detailsButton: {
        marginTop: 10,
        backgroundColor: '#ceb076',
        paddingVertical: 6,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    detailsText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '900',
    },
});

export default Library;
