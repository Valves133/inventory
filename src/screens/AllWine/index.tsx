import { Image, Text, TouchableOpacity, View, FlatList, ImageBackground } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Header } from '../../Components/Header'
import { styles } from './styles';



export default function AllWine() {
  const drinkList = [{
    id: '1',
    name: 'Enrique Mendonza',
    denominacion: 'Alicante',
    grape: 'Chardonnay',
    price: '5,40€',
  },
  {
    id: '2',
    name: 'Tarima Hill F. Barrica',
    denominacion: 'Alicante',
    grape: 'Chardonnay y Merseguera',
    price: '6,40€',
  },
  {
    id: '3',
    name: 'El Grifo',
    denominacion: 'Lanzarote',
    grape: 'Malvasía',
    price: '8,60€',
  },
  {
    id: '4',
    name: 'Albret',
    denominacion: 'Navarra',
    grape: 'Chardonnay',
    price: '7,20€',
  },
  {
    id: '5',
    name: 'Jean Leon 3055',
    denominacion: 'Penedés',
    grape: 'Chardonnay',
    price: '6,90€',
  },
    // , '', 'El Grifo', 'Albret', 'Jean Leon 3055', 
    // 'Waltraud', 'Goda','Dávila', 'La Caña', 'Do Ferreiro', 'Tricó', 'Frore de Carme', 
    // 'Do Ferreiro Cepas Vellas', 'Osian', 'Algueira Cortezada', 'Pazo Casanova', 'Sanclodio', 'Valenciso',
    // 'Abel Mendoza', 'Rioja Vega', 'Monteabellón', 'Jose Pariente Sauvignon Blanc', 'Jose Pariente Verdejo',
    // 'Martivillí Fermentado en Barrica', 'Martivilli', 'Quinta Apolonia', 'Ossian Viñas Viejas',
    // 'Viñas del Vero', 'Pago de los Capellanes O Luar do Sil', 'A Coroa', 'Godeval', 'Avancia',
    // 'Mestizaje'
  ];

  const navigation = useNavigation();

  function handleWine(drinkId: string){
    navigation.navigate('bottle', { drinkId });
  }

  return(
      <>
      <ImageBackground source={require('../../images/enso.jpg')} style={styles.image}>

        <View style={styles.container}>

          <Header />
          <View style={styles.listContent}>
          <View style={styles.content}>
            <FlatList 
            data={drinkList}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <TouchableOpacity 
                  style={styles.button} 
                  key={item.id}
                  onPress={() => handleWine(item.id)}
                >
                  <Image 
                  source={require('../../images/vino.png')}
                  style={styles.icon}
                  />
                  <Text style={styles.name}> {item.name}</Text>
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