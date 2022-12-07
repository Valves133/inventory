import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles';

export default function Home() {
  return(
    <>
      <View style={styles.container}>
      <View style={styles.content}>
        <Image 
            source={require('../../images/logo.png')}
            style={styles.logo}
          />
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
      <View style={styles.listContent}>
          <TouchableOpacity style={styles.square}>
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