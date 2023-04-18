import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets'
const HomeScreen = () => {

    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className="flex-1 relative bg-white" >
            {/* First Section */}
            <View className="px-6 space-x-2 flex-row mt-8 items-center" >
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
                </View>
                <Text className="text-[#2A2B4B] font-semibold text-3xl" >Travel</Text>
            </View>
            {/* Second Section */}
            <View className="space-y-3 px-6 mt-8">
                <Text className=" text-[42px] text-[#3C6072]">Enjoy the trip with</Text>
                <Text className="text-[38px] text-[#00BCC9] font-semibold">Good Moments</Text>
                <Text className="text-[#3C6072] text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            </View>
            {/* Circle Section */}
            <View className="w-[300px] h-[300px] absolute rounded-full bottom-14 -right-28 bg-[#00BCC9]"></View>
            <View className="w-[300px] h-[300px] absolute rounded-full -bottom-32 -left-20 bg-[#E99265]"></View>
            {/* Image Container */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image source={HeroImage}
                    animation="fadeIn"
                    easing="ease-in-out"
                    className="w-[450px] h-[450px] object-cover mt-20"
                    resizeMode="contain"
                />
                <TouchableOpacity activeOpacity={0.3} className="w-24 h-24 rounded-full absolute border-t-4 border-l-2 border-r-2 border-[#00BCC9] bottom-20 items-center justify-center">
                        <Animatable.View animation={"pulse"} easing="ease-in-out" iterationCount="infinite" className="w-20 h-20 bg-[#00BCC9] rounded-full items-center justify-center" >
                            <Text className="text-gray-50 text-[36px] font-semibold ">Go</Text>
                        </Animatable.View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen