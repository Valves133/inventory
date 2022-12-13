import { StatusBar } from "react-native";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle = 'light-content'
        backgroundColor = 'transparent'
        translucent
      />

      <Routes />
    </>
  );
}
