import { View } from "react-native";

export function Card({ color, width, aspectRatio }){
    return (
      <View
        style={{
          backgroundColor: color,
          width: width,
          height: width * aspectRatio,
          marginBottom: 10,
          borderRadius: 10
        }}
      />
    );
  };