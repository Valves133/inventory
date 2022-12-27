import { ActivityIndicator, StatusBar } from "react-native";
import { Routes } from "./src/routes";
import { Cormorant_400Regular, useFonts, Cormorant_700Bold } from '@expo-google-fonts/cormorant';

export default function App() {
  let [fontsLoaded] = useFonts({
    Cormorant_400Regular,
    Cormorant_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
    <StatusBar
        barStyle = 'light-content'
        backgroundColor = 'transparent'
        translucent 
        />
      { fontsLoaded ?  
        <Routes />
      :
      <ActivityIndicator />}
    </>
  );
}
