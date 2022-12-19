import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddWine from '../screens/AddWine';
import AllWine from '../screens/AllWine';
import Drinks from '../screens/Drinks';
import Home from '../screens/Home/';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen 
        name = 'home'
        component={Home} 
      />
      <Screen 
        name = 'drinkList'
        component={Drinks} 
      />
      <Screen 
        name = 'addwine'
        component={AddWine} 
      />
       <Screen 
        name = 'allwine'
        component={AllWine} 
      />
    </Navigator>
  )
}