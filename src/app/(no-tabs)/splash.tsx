import { Image, SafeAreaView, StatusBar, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import AppButton from '@/components/AppButton'
import { useRouter } from 'expo-router'

const SplashScreen = () => {
  const router = useRouter()

  const onStart = () => {
    router.push('/home')
  }

  return (
    <SafeAreaView
      className="bg-white flex-1 justify-center"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View className="px-8 py-4 gap-y-6 justify-center items-center">
        <Image source={images.cards} className="w-[350px] h-[350px]" />
        <AppButton title="Bắt đầu" onPress={onStart} />
      </View>
    </SafeAreaView>
  )
}

export default SplashScreen
