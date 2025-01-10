import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'

type Props = {}

const NewsCard = (props: Props) => {
  const router = useRouter()
  const onNewDetail = () => {
    router.push(ERouteTable.NEWS_DETAIL)
  }

  return (
    <TouchableOpacity onPress={onNewDetail}>
      <View className="w-full gap-3">
        <View className="rounded-2xl overflow-hidden w-full min-h-52">
          <ImageBackground
            source={images.practice1}
            className="flex-1 flex-row items-start justify-end p-3 object-cover"
          ></ImageBackground>
        </View>
        <View className="">
          <Text className="text-white font-semibold text-base" numberOfLines={2}>
            Cách bơi ngửa cho người mới bắt đầu
          </Text>
          <Text className="text-text-default text-sm" numberOfLines={2}>
            Học tất cả các bài tập bơi cần thiết để thành thạo nghệ thuật bơi lội tại đây!
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default NewsCard
