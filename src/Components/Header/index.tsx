import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles';

export function Header(){
  return(
    <>
     <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image 
                source={require('../../images/logo.png')}
                style={styles.logo}
            />
        </View>          
        <Text style={styles.subTitle}>Inventário creado para el control de los vinos de enso alicante</Text>
          
          <View style={styles.form}>
            <TextInput 
              style={styles.input} 
              placeholder='Buscar vino'
              placeholderTextColor='#aaa'
              keyboardType='default'
              />
            <TouchableOpacity

              style={styles.button}
            >
            <Text style={styles.buttonText}>
              +
            </Text>
            </TouchableOpacity>
        </View>
      </View>
    </>
  )
}