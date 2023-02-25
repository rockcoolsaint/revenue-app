import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Demo"
>;

const DemoScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className='bg-[#E5962D] flex-1'>
      <TouchableOpacity onPress={navigation.goBack} className='flex-row items-center p-5'>
        <Ionicons name="arrow-back" size={50} color="white" />
        <Text>Go Back</Text>
      </TouchableOpacity>
      
      <View className='flex-1 items-center justify-center px-10'>
        <Text className='text-white text-2xl font-extrabold'>Hooray!</Text>
        <Text className='text-white text-2xl font-extrabold'>You have access to this feature</Text>
        <Ionicons name='build-outline' size={200} color="white" />
        <View className='-mt-16 -ml-8'>
          <Ionicons name='checkmark-circle-sharp' size={60} color="#96F550" />
        </View>
        <Text>
          This is where you create a new screen & change the rest of the app so
          the navigation is as follows: navigation.navigate('ThePageYouWant')
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default DemoScreen