import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'
import { INew } from '@/constants/common'

type Props = {
  data: INew
}

const NewsCard = ({ data }: Props) => {
  const router = useRouter()
  const onNewDetail = () => {
    router.push({
      pathname: ERouteTable.NEWS_DETAIL,
      params: {
        id: data.id,
      },
    })
  }

  return (
    <TouchableOpacity onPress={onNewDetail}>
      <View className="w-full gap-3">
        <View className="rounded-2xl overflow-hidden w-full min-h-52">
          <ImageBackground
            source={{ uri: data.thumbnail }}
            className="flex-1 flex-row items-start justify-end p-3 object-cover"
          ></ImageBackground>
        </View>
        <View className="">
          <Text className="text-white font-semibold text-base" numberOfLines={2}>
            {data.title}
          </Text>
          <Text className="text-text-default text-sm" numberOfLines={2}>
            {data.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default NewsCard
