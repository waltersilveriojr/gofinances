import React from 'react';
import AppLoading from 'expo-app-loading';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import { Routes} from './src/routes';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Register } from './src/screens/Register';
import theme from "./src/global/styles/theme"
import { AppRoutes } from './src/routes/app.routes';
import { SignIn} from './src/screens/SignIn'

import { AuthProvider, useAuth } from './src/hooks/auth';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  const { userStorageLoading } = useAuth();
  
  if (!fontsLoaded || userStorageLoading ){
    return <AppLoading/>
  }


  return (
    <GestureHandlerRootView style={{flex : 1}}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content"/>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
