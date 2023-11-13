import { StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store/store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavorisScreen from './screens/FavorisScreen';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function MealsStack(){
  return(
    <Stack.Navigator >
      <Stack.Screen  name='MealsDrawer' component={MealsDrawer} options={{headerShown: false}}/>
      <Stack.Screen name='Meals' component={MealsScreen}/>
      <Stack.Screen name='AboutMeal' component={MealsDetailsScreen}/>
    </Stack.Navigator>
  )
}

function MealsDrawer(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='Categories' component={CategoriesScreen}/>
      <Drawer.Screen name='Favoris' component={FavorisScreen}/>
    </Drawer.Navigator>
  )
}


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MealsStack/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
