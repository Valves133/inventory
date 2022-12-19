import { ImageBackground } from "react-native";
import { styles } from './styles';

export function Background(){
  return(
    <>
      <ImageBackground source={require('../../images/enso.jpg')} style={styles.image} />
    </>
  )
}