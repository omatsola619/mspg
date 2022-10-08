import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from "./screens/Welcome";
import EnglishScreen from "./screens/EnglishScreen";
import FrenchScreen from "./screens/FrenchScreen";
import SpanishScreen from "./screens/SpanishScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            <Stack.Navigator>
                <Stack.Screen name='welcome' component={Welcome}/>
                <Stack.Screen name={'english'} component={EnglishScreen} options={{
                    headerShown: true
                }}
                />
                <Stack.Screen name={'french'} component={FrenchScreen} options={{
                    headerShown: true
                }}
                />
                <Stack.Screen name={'spanish'} component={SpanishScreen} options={{
                    headerShown: true
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
        ;
}

