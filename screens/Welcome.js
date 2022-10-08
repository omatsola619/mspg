import {View, StyleSheet, Text, ImageBackground, Image, Dimensions} from "react-native";
import {StatusBar} from "expo-status-bar";
import {LinearGradient} from 'expo-linear-gradient';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback, useEffect} from "react";
import LangButton from "../components/LangButton";
import { useFocusEffect } from '@react-navigation/native';

function Welcome({navigation}) {
    const [fontsLoaded] = useFonts({
        'Cairo-Black': require('../assets/fonts/cairo/Cairo-Black.ttf'),
        'Cairo-Bold': require('../assets/fonts/cairo/Cairo-Bold.ttf')
    });


    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    useEffect(() => {
        // This will run when component is `focused` or mounted.
        StatusBar.setHidden(true);

        // This will run when component is `blured` or unmounted.
        return () => {
            StatusBar.setHidden(false);
        }
    }, []);

    const handleEnglish = () => {
        navigation.navigate('english')
    }
    const handleFrench = () => {
        navigation.navigate('french')
    }
    const handleSpanish = () => {
        navigation.navigate('spanish')
    }

    return (
        <ImageBackground source={require('../assets/image/view2.jpg')} style={styles.container} resizeMode="cover"
        >
            <LinearGradient colors={['transparent', 'black']} style={styles.background}>
                <StatusBar hidden/>
                <View style={styles.screenWrapper}>
                    <View>
                        <Image source={require('../assets/image/tbj4.jpg')} style={styles.introImage}/>
                    </View>
                    <View style={styles.infoWrapper}>
                        <View style={styles.textWrapper}>
                            <Text style={styles.introText}>GOOD MORNING</Text>
                            <Text style={styles.desc}>Please select your language to continue</Text>
                        </View>
                        <View style={styles.buttonWrapper}>
                            <LangButton onPress={handleEnglish}>English</LangButton>
                            <LangButton onPress={handleFrench}>French</LangButton>
                            <LangButton onPress={handleSpanish}>Spanish</LangButton>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>

    )
}

const windowWidth = Dimensions.get("window").width

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        paddingTop: 100
    },
    introImage: {
        width: windowWidth > 500 ? 300 : 200,
        height: windowWidth > 500 ? 300 : 200,
        borderRadius: 100,
        alignSelf: 'center'
    },
    introText: {
        textAlign: 'center',
        paddingTop: 10,
        color: 'white',
        fontSize: 30,
        fontFamily: 'Cairo-Black'
    },
    infoWrapper: {
        paddingTop: 70
    },
    textWrapper: {},
    desc: {
        textAlign: 'center',
        color: '#c7c5c5',
        fontFamily: 'Cairo-Bold',
        fontSize: 17,
    },
    buttonWrapper: {
        marginTop: 20
    }

})