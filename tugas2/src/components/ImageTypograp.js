import React from "react";
import { View, Image } from "react-native";

const ImageItem = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        }}
        style={{
          width: 128,
          height: 128,
        }}
      />
    </View>
  );
};

export { ImageItem };
