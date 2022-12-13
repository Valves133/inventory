import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export default function Drinks() {
  return(
      <>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textoButton}> Vino blanco</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textoButton}> Vino Tintos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textoButton}>Cavas y Champagne</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textoButton}>Sake</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textoButton}>Licores</Text>
          </TouchableOpacity>

        </View>
      </>
  )}