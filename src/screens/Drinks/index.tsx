import { Image, Text, TouchableOpacity, View, FlatList,ScrollView } from 'react-native'
import { Header } from '../../Components/Header'
import { styles } from './styles'

export default function Drinks() {
  const drinkList = ['Vinos blanco', 'Vinos tinto', 'Vino rosado', 'Cavas y champangne', 'Sakes', 'Licores', 'Refrescos']
  return(
      <>
          
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
      </>
  )}