import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing';
import AppLoading from 'expo-app-loading';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsload] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if(!fontsload){
    return <AppLoading />
  }else{
    return (
      <>
        <Landing />
        <StatusBar style="auto" />
      </>
    );
  }
}