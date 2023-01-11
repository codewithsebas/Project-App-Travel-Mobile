import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };
  return (
    <TouchableOpacity
      className="items-center justify-center gap-3"
      onPress={handlePress}
    >
      <View
        className={`w-24 h-24 p-2 shadow-black/30 border-[0.3px] border-black/30 rounded-md items-center justify-center space-y-2 ${
          type === title.toLowerCase() ? "bg-lime-100" : ""
        }`}
      >
        <Image source={imageSrc} className="w-full h-full object-contain" />
      </View>
      <Text className="text-[#00BCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;