import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';

import { Logo } from '../components/Logo/Logo';
import { InputSearch } from '../components/InputSearch/InputSearch';
import { Card } from '../components/Card/Card';

const images= [
  {
    id: 1,
    aspectRatio: 150 / 200,
    color: "#ffcdd2",
  },
  {
    id: 2,
    aspectRatio: 1,
    color: "#bbdefb",
  },
  {
    id: 3,
    aspectRatio: 120 / 100,
    color: "#c8e6c9",
  },
  {
    id: 4,
    aspectRatio: 200 / 150,
    color: "#ffccbc",
  },
  {
    id: 5,
    aspectRatio: 375 / 400,
    color: "#d1c4e9",
  },
  {
    id: 6,
    aspectRatio: 500 / 400,
    color: "#bbdefb",
  },
  {
    id: 7,
    aspectRatio: 1040 / 500,
    color: "#ffcdd2",
  },
  {
    id: 8,
    aspectRatio: 2 / 1,
    color: "#bbdefb",
  },
  {
    id: 9,
    aspectRatio: 1,
    color: "#c8e6c9",
  },
  {
    id: 10,
    aspectRatio: 375 / 400,
    color: "#ffccbc",
  },
  {
    id: 11,
    aspectRatio: 1,
    color: "#d1c4e9",
  },
];

export function Home({navigation}) {
  const width = Dimensions.get('window').width / 2;
  return (
    <SafeAreaView style={style.container}>
    <View style={style.header}>
        <Logo />
        <InputSearch />
        {/* teclado sobre junto com tabs*/}
    </View>  

    {/* gallery */}
    <ScrollView>
          <View style={style.gallery}> 
            <View style={{marginRight: 5}}>
              {images.filter((i) => i.id % 2 === 0).map((img) => (
                <Card
                  key={img.id}
                  color={img.color}
                  aspectRatio={img.aspectRatio}
                  width={width}
                />
              ))}
            </View>
            <View style={{marginLeft: 5}}>
              {images.filter((i) => i.id % 2 !== 0).map((img) => (
                <Card
                  key={img.id}
                  color={img.color}
                  aspectRatio={img.aspectRatio}
                  width={width}
                />
              ))}
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      },
    header:{
      paddingTop: 35,
    },
    gallery: {
      flexDirection: 'row'
    }
})