import React, { useState, useMemo } from 'react'
import { HomeScreen, CategoriesScreen, LaptopsScreen } from 'app/screens/home'
import { SearchScreen } from 'app/screens/search'
import { BasketScreen } from 'app/screens/basket'
import { UserScreen } from 'app/screens/user'
import {
  FirstScreen,
  LargeScreen,
  ExclusivityScreen,
  PriceScreen,
  AutorizationScreen,
  CreateAccountScreen,
  SignInScreen
} from 'app/screens/authorization'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthContext } from 'app/context'
import { FontAwesome } from '@expo/vector-icons';

const AuthStack = createStackNavigator();
const AppTabStack = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const HomeStackScreen = () =>
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Categories" component={CategoriesScreen} />
    <HomeStack.Screen name="Laptops" component={LaptopsScreen} />
  </HomeStack.Navigator>

const RootStack = createStackNavigator();

const AppStackScreen = () =>
  <AppTabStack.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#0001FC',
      inactiveTintColor: '#a7a7a7',
      showLabel: false
    }}>
    <AppTabStack.Screen name="Home" component={HomeStackScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" size={26} color={color} />
        ),
      }} />
    <AppTabStack.Screen name="SearchScreen" component={SearchScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="search" size={22} color={color} />
        ),
      }} />
    <AppTabStack.Screen name="BasketScreen" component={BasketScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="cart-arrow-down" size={24} color={color} />
        ),
      }} />
    <AppTabStack.Screen name="UserScreen" component={UserScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="user-o" size={22} color={color} />
        ),
      }} />
  </AppTabStack.Navigator>

const AuthStackScreen = () =>
  <AuthStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerLeft: null,
      headerShown: false,
      headerStyle: {
        backgroundColor: '#0001FC',
        height: 120,
        shadowColor: 'transparent',
        shadowOpacity: 0,
        shadowOffset: { height: 0, },
        shadowRadius: 0,
        elevation: 0,
      },
      headerTitleStyle: {
        color: '#fff', fontSize: 24,
      },
      headerTintColor: '#fff',
      cardStyle: {
        backgroundColor: '#0001FC',
        padding: 0,
        paddingLeft: 32,
        paddingRight: 32,
      }
    }}
    initialRouteName={"FirstScreen"}
  >
    <AuthStack.Screen name="FirstScreen" component={FirstScreen} />
    <AuthStack.Screen name="LargeScreen" component={LargeScreen} />
    <AuthStack.Screen name="ExclusivityScreen" component={ExclusivityScreen} />
    <AuthStack.Screen name="PriceScreen" component={PriceScreen} />
    <AuthStack.Screen name="AutorizationScreen" component={AutorizationScreen} options={{
      headerShown: true
    }}
    />
    <AuthStack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{
      headerShown: true
    }}
    />
    <AuthStack.Screen name="SignInScreen" component={SignInScreen} options={{
      headerShown: true,
      title: 'Sign In'
    }}
    />
  </AuthStack.Navigator>

const RootStackScreen = ({ userToken }) =>
  <RootStack.Navigator headerMode="none">
    {userToken ?
      <RootStack.Screen name="App" component={AppStackScreen} /> :
      <RootStack.Screen name="Auth" component={AuthStackScreen} />}
  </RootStack.Navigator>


const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(null)
  const authContext = useMemo(() => {
    return {
      signIn: (token) => {
        setIsLoading(false)
        setUserToken(token)
      },
      signOut: () => {
        setIsLoading(false)
        setUserToken(null)
      },
    }
  }, [])

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;