import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { HeroImage } from "../assets";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex relative">
      {/* First Section */}
      <View className="flex-row px-6 mt-12 items-center space-x-2">
        <View className="bg-[#00BCC9] rounded-full items-center justify-center text-center w-10 h-10 ">
          <Text className="text-white text-[25px] font-semibold">Go</Text>
        </View>
        <Text className="text-[#3c6072] text-2xl font-bold">Travel</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3c6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[42px] font-bold">
          Good Moments
        </Text>

        <Text className="text-[#3c6072] text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta atque
          totam tempora amet veritatis exercitationem.
        </Text>
      </View>

      {/* Circle Section */}
      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute top-80 left-52"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute top-96 right-40"></View>

      {/* Image Section */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-contain"
        />
        <TouchableOpacity className=" w-16 h-16 items-center justify-center absolute top-64 bg-[#00BCC9] rounded-full">
          <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
            <Animatable.View
              animation={"pulse"}
              easing="ease-in-out"
              iterationCount={"infinite"}
            >
              <Text className="text-[30px] font-bold text-white">Go</Text>
            </Animatable.View>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
