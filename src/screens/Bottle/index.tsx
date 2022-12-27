import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";

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
  console.log('id ', drinkId)
  return(
    <>
      <View style={styles.container}>
        <Image />
        <View style={styles.content} >
          <View style={styles.containerImage}>  
            <Image 
              source={drinkList[+drinkId - 1].url} 
              style={styles.image}
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
        <View>
          <Text>
            Provedor: 
          </Text>
          <Text>
            Armazén: 12
          </Text>
        </View>
      </View>
    </>
   
  );
}