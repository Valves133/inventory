import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../Components/Header";

import { styles } from './styles'

type RouteParamsProps = {
  drinkId: string;
}

export function Bottle(){
  const drinkList = [{
    id: '1',
    name: 'Enrique Mendonza',
    denominacion: 'Alicante',
    grape: 'Chardonnay',
    price: '5,40€',
    url: require('../../images/enrique_mendonza.jpg')
  },
  {
    id: '2',
    name: 'Tarima Hill F. Barrica',
    denominacion: 'Alicante',
    grape: 'Chardonnay y Merseguera',
    price: '6,40€',
    url: require('../../images/tarimahill.jpg')
  },
  {
    id: '3',
    name: 'El Grifo',
    denominacion: 'Lanzarote',
    grape: 'Malvasía',
    price: '8,60€',
    url: require('../../images/elgrifo.webp')
  },
  {
    id: '4',
    name: 'Albret',
    denominacion: 'Navarra',
    grape: 'Chardonnay',
    price: '7,20€',
    url: require('../../images/albret.webp')
  },
  {
    id: '5',
    name: 'Jean Leon 3055',
    denominacion: 'Penedés',
    grape: 'Chardonnay',
    price: '6,90€',
    url: require('../../images/jeanleon.jpg')
  },
  ];

  const navigation = useNavigation();

  const route = useRoute();

  const { drinkId } =  route.params as RouteParamsProps;

  function handleGoBack(){
    navigation.goBack();
  }
  return(
    <>
      <ImageBackground source={require('../../images/enso.jpg')} style={styles.image}>

        <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.arrow}>
              <TouchableOpacity 
                  onPress={handleGoBack}
                  style={styles.back}
                >
                <Image 
                  source={require('../../images/arrow.png')} 
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity> 
            </View>

            <View style={styles.logoContainer}>
              <Image 
                    source={require('../../images/logo2.png')}
                    style={styles.logo}
                />
              <Text style={styles.titleLogo}>Enso</Text>
            </View>  
          </View>
             

            <View style={styles.content}>
              <View style={styles.containerImage}>  
                <Image 
                  source={drinkList[+drinkId - 1].url} 
                  style={styles.imageWine}
                />
            </View>
            <View>
              <Text style={styles.title}>
                {drinkList[+drinkId - 1].name}
              </Text>
              <Text style={styles.subTitle}>
              {drinkList[+drinkId - 1].denominacion}
              </Text>
              <Text style={styles.text}>
                Uvas:  {drinkList[+drinkId - 1].grape}
              </Text>
              <Text style={styles.text}>
                Precio de compra: <Text style={styles.bold}> {drinkList[+drinkId - 1].price}</Text>
              </Text>
            </View>
            </View>

          <View style={styles.contentProvider}>
            <Text style={styles.textProvider}>
              Provedor: 
            </Text>
            <Text style={styles.textStock}>
              Armazén: 12
            </Text>
          </View>
        </View>
      </ImageBackground>
    </>
   
  );
}