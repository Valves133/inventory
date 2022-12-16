import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles';

export function Header(){
  return(
    <>
     <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image 
                source={require('../../images/logo2.png')}
                style={styles.logo}
            />
         <Text style={styles.title}>Enso</Text>
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