import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native'
import React from 'react'
import { images } from '@/constants'

import BackButton from '@/components/BackButton'

type Props = {}

const NewDetail = (props: Props) => {
  return (
    <ScrollView className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
      <ImageBackground source={images.practice1} className="w-full h-64">
        <View className="absolute inset-0 bg-black opacity-45" />
        <SafeAreaView className={'pb-8 z-50'} style={{ paddingTop: StatusBar.currentHeight }}>
          <BackButton />
        </SafeAreaView>
      </ImageBackground>
      <View className="p-4 gap-4">
        <Text className="text-xl text-primary-500 font-semibold">Bơi lội và lợi ích của nó</Text>
        <Text className="text-base text-white">
          Bơi lội không chỉ giúp cải thiện sức khỏe mà còn giúp con người có thêm giá trị đạo đức
          học. Lorem ipsum dolor sit amet consectetur. Senectus ac magna egestas sit lobortis.
          Ultrices augue sit dictumst volutpat nullam. Semper ac tristique gravida leo. Dui mauris
          mattis viverra bibendum eros amet. Turpis ultricies a cum pellentesque suspendisse porta
          ipsum est. Elit facilisis maecenas lorem enim dictumst. Lorem ipsum dolor sit amet
          consectetur. Senectus ac magna egestas sit lobortis. Ultrices augue sit dictumst volutpat
          nullam. Semper ac tristique gravida leo. Dui mauris mattis viverra bibendum eros amet.
          Turpis ultricies a cum pellentesque suspendisse porta ipsum est. Elit facilisis maecenas
          lorem enim dictumst.
        </Text>
      </View>
    </ScrollView>
  )
}

export default NewDetail
