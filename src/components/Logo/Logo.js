import { Image, StyleSheet, Text, View } from 'react-native';
import img from '../../assets/logo2black.png';

export function Logo(){
    return (
        <View style={style.header}>
            <Image source={img}
            style={style.img} />
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
    img: {
        width: 135,
        height: 66
    }
})