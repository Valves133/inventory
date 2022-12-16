import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Header } from "../../Components/Header";
import { styles } from './styles';

export default function Home() {

  const navigation = useNavigation();

  function handleVinos(){
    navigation.navigate('drinkList')
  }

  return(
    <>
      <View style={styles.container}>
        <Header />
     
      <View style={styles.listContent}>
          <TouchableOpacity 
            style={styles.square}
            onPress={handleVinos}
          >
            <Image
              source={require('../../images/vino.png')}
              style={styles.squareLogo}
              />
            <Text style={styles.textSquare}>Listar vinos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.square}>
          <Image
              source={require('../../images/vino.png')}
              style={styles.squareLogo}
              />
            <Text style={styles.textSquare}>Añadir vino</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.square}>
          <Image
              source={require('../../images/provedores.png')}
              style={styles.squareLogo}
              />
            <Text style={styles.textSquare}>Listar provedores</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.square}>
          <Image
              source={require('../../images/vino.png')}
              style={styles.squareLogo}
              />
            <Text style={styles.textSquare}>Vino</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}