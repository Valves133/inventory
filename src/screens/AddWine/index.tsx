import { useNavigation } from "@react-navigation/native";

import { Image, Text, TouchableOpacity, View, FlatList, ImageBackground } from 'react-native'
import { Header } from '../../Components/Header'
import { styles } from './styles'

export default function AddWine() {
  const drinkList = ['Vinos blanco', 'Vinos tinto', 'Vino rosado', 'Cavas y champangne', 'Sakes', 'Licores', 'Refrescos']
  
  const navigation = useNavigation();

  function handleVinos(){
    navigation.navigate('allwine')
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
            keyExtractor={item => item}
            renderItem={({item}) => (
                <TouchableOpacity 
                  style={styles.button} 
                  key={item}
                  onPress={handleVinos}
                >
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