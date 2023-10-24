import HomeScreen from './Screens/Restaurant/HomeScreen';
import RecipeDetailScreen from './Screens/Restaurant/RecipeDetailScreen';
import WelcomeScreen from './Screens/Restaurant/WelcomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartPage from './Screens/Restaurant/CartPage';
import { Provider } from 'react-redux';
import store from './store';
import QrcodePage from './Screens/Restaurant/QrcodePage';
import MenuMamaQueen from './Screens/Restaurant/MenuMamaQueen';
// import { Stack } from 'expo-router';

export default function App() {
  // return <RecipeDetailScreen recipe={DATA[0].recipes[1]} />;
  // return <HomeScreen />
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Welcome'>
          <Stack.Screen name='Welcome' component={WelcomeScreen}/>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='MenuMamaQueen' component={MenuMamaQueen} />
          <Stack.Screen name='Detail' component={RecipeDetailScreen} />
          <Stack.Screen name='CartPage' component={CartPage} />
          <Stack.Screen name='QrcodePage' component={QrcodePage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
    )
}

