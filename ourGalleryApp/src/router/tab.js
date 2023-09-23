import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Home, Favorite, Collections, Upload, Personal } from '../pages';
import { CustomTabBarButton } from '../components/TabBar/CustomTabBarButton';

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
                           return <AntDesign name="home" size={size} color="#FF6745" />
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
                            return <Ionicons name="folder-outline" size={24} color="#FF6745" />
                        }
                        return <Ionicons name="folder-outline" size={size} color={color} />
                    }
                }}
            />
            
            <Tab.Screen
                name='Upload'
                component={Upload}
                options={{
                    tabBarIcon: ({size, focused}) => {
                        if (focused) { 
                            return <AntDesign name="plus" size={24} color="#fff" />
                        }
                        return <AntDesign name="plus" size={size} color="#fff" />
                    },
                    tabBarButton: (props) => {
                        return <CustomTabBarButton {...props} />
                    }
                }}
            />
            
            <Tab.Screen 
            name="Favorites" 
            component={Favorite}
            options={{
                tabBarIcon: ({color, size, focused}) => {
                    if (focused){
                        return <Ionicons name="heart-outline" color="#FF6745" size={size}/>
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
                            return <Ionicons name="person-outline" size={24} color="#FF6745" />
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
        position: 'absolute',
        bottom: 15,
        left: 10,
        right: 10,
        height: 70,
        width: 340,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    }
}