import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icons from './Icons';

const { height } = Dimensions.get('window');

const MenuPanel = () => {
    const navigation = useNavigation();
    const [activeButton, setActiveButton] = useState('');

    const handleNavigate = (screen) => {
        setActiveButton(screen);
        navigation.navigate(screen)
    };    

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            const currentRoute = navigation.getState().routes[navigation.getState().index].name;
            setActiveButton(currentRoute);
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>

            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={[styles.button, activeButton === 'HomeScreen' && styles.activeButton]} 
                    onPress={() => handleNavigate('HomeScreen')}>
                    <Icons type={'home'} active={activeButton === 'HomeScreen'}/>
                </TouchableOpacity>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={[styles.button, activeButton === 'LibraryScreen' && styles.activeButton]} 
                    onPress={() => handleNavigate('LibraryScreen')}>
                    <Icons type={'lib'} active={activeButton === 'LibraryScreen'}/>
                </TouchableOpacity>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={[styles.button, activeButton === 'MuseumScreen' && styles.activeButton]} 
                    onPress={() => handleNavigate('MuseumScreen')}>
                    <Icons type={'museum'} active={activeButton === 'MuseumScreen'}/>
                </TouchableOpacity>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={[styles.button, activeButton === 'TopicsScreen' && styles.activeButton]} 
                    onPress={() => handleNavigate('TopicsScreen')}>
                    <Icons type={'dig'} active={activeButton === 'TopicsScreen'}/>
                </TouchableOpacity>
            </View>


            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={[styles.button, activeButton === 'ResultsScreen' && styles.activeButton]} 
                    onPress={() => handleNavigate('ResultsScreen')}>
                    <Icons type={'score'} active={activeButton === 'ResultsScreen'}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: height * 0.11,
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 9,
        flexDirection: 'row',
        backgroundColor: '#dcc9a3',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignSelf: "center",
    },
    
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 60,
        height: 60,
        padding: 10
    },
    activeButton: {
        backgroundColor: '#7b4c1c',
        borderRadius: 30,
        padding: 12
    }
});

export default MenuPanel;
