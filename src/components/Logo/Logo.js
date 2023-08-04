import { Image, StyleSheet, Text, View } from 'react-native';

// const logo = '../../assets/logo 2 black.png'
export function Logo(){
    return (
        <View style={style.header}>
            <Text style={style.text}>Didis e</Text>
            <Text style={style.text}>Gatinho</Text>
            {/* <Image source={logo} /> */}
        </View>
    )
}

const style = StyleSheet.create({
    header:{
        alignSelf: "flex-start",
        padding: 10,
        paddingLeft: 16,
        paddingRight:20,
        marginBottom: 6
    },
    text: {
      fontSize: 26,
      fontWeight: "bold",
    }
})