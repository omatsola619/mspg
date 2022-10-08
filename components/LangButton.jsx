import {Pressable, View, Text, StyleSheet} from "react-native";
import {useFonts} from "expo-font";


function LangButton({children, onPress}) {
    const [fontsLoaded] = useFonts({
        'Cairo-Black': require('../assets/fonts/cairo/Cairo-Black.ttf'),
        'Cairo-Bold': require('../assets/fonts/cairo/Cairo-Bold.ttf')
    });


    if (!fontsLoaded) {
        return null;
    }

    return (

        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] :
                    styles.buttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{
                    color: '#014fa1'
                }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>


    )
}

export default LangButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 7,
        borderRadius: 3,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#002D62',
        paddingVertical: 8,
        width: '80%',
        alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Cairo-Bold',
    },
    pressed: {
        opacity: 0.75,
    }
})