import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Home, Favorite, Collections, Upload, Personal } from '../pages';

const Tab = createBottomTabNavigator()

export function Tabs() {
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        if (focused){
                            <AntDesign name="home" size={size} color="#000" />
                        }
                        return <AntDesign name="home" size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name='Collections'
                component={Collections}
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        if (focused) {
                            return <Ionicons name="folder-outline" size={24} color="#000" />
                        }
                        return <Ionicons name="folder-outline" size={size} color={color} />
                    }
                }}
            />
            
            <Tab.Screen
                name='Upload'
                component={Upload}
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        if (focused) { 
                            return <AntDesign name="plus" size={24} color="#000" />
                        }
                        return <AntDesign name="plus" size={size} color={color} />
                    }
                }}
            />
            

            <Tab.Screen 
            name="Favorites" 
            component={Favorite}
            options={{
                tabBarIcon: ({color, size, focused}) => {
                    if (focused){
                        return <Ionicons name="heart" color="#FF4141" size={size}/>
                    }
                    return  <Ionicons name="heart-outline" color={color} size={size}/>
                }
            }}    
            />

            <Tab.Screen
                name='Personal'
                component={Personal}
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        if (focused) {
                            return <Ionicons name="person-outline" size={24} color="black" />
                        }
                        return <Ionicons name="person-outline" size={size} color={color} />
                    }
                }}
            />
            
        </Tab.Navigator>
    )
}

const screenOptions = {
    headerShown:false,
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#121212",
    tabBarStyle:{
        backgroundColor: "#fff",
        borderTopWidth:0
    }
}