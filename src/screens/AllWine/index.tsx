import { Image, Text, TouchableOpacity, View, FlatList, ImageBackground } from 'react-native'
import { Header } from '../../Components/Header'
import { styles } from './styles'

export default function AllWine() {
  const drinkList = [
    'Enrique Mendonza', 'Tarima Hill F. Barrica', 'El Grifo', 'Albret', 'Jean Leon 3055', 
    'Waltraud', 'Goda','Dávila', 'La Caña', 'Do Ferreiro', 'Tricó', 'Frore de Carme', 
    'Do Ferreiro Cepas Vellas', 'Algueira Cortezada', 'Pazo Casanova', 'Sanclodio', 'Valenciso',
    'Abel Mendoza', 'Rioja Vega', 'Monteabellón', 'Jose Pariente Sauvignon Blanc', 'Jose Pariente Verdejo',
    'Martivillí Fermentado en Barrica', 'Martivilli', 'Quinta Apolonia', 'Ossian Viñas Viejas',
    'Viñas del Vero', 'Pago de los Capellanes O Luar do Sil', 'A Coroa', 'Godeval', 'Avancia',
    'Mestizaje'
  ]

  return(
      <>
      <ImageBackground source={require('../../images/enso.jpg')} style={styles.image}>

        <View style={styles.container}>

          <Header />
          <View style={styles.listContent}>
          <View style={styles.content}>
            <FlatList 
            data={drinkList}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.button} key={item}>
                  <Image 
                  source={require('../../images/vino.png')}
                  style={styles.icon}
                  />
                  <Text style={styles.name}> {item}</Text>
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
          </View>
        </View>
        </ImageBackground>
      </>
  )}