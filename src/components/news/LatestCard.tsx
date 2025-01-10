import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'

type Props = {}

const LatestCard = (props: Props) => {
  const router = useRouter()
  const onNewDetail = () => {
    router.push(ERouteTable.NEWS_DETAIL)
  }

  return (
    <TouchableOpacity onPress={onNewDetail}>
      <View className="w-full gap-2">
        <Image source={images.news1} className="w-40 h-24 rounded-xl" />
        <View>
          <Text className="text-sm text-white font-semibold">
            Giá trị đạo đức học được từ bơi lội
          </Text>
          <Text className="text-xs text-text-default" numberOfLines={2}>
            Bơi lội không chỉ giúp cải thiện sức khỏe mà còn giúp con người có thêm giá trị đạo đức
            học.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default LatestCard

const styles = StyleSheet.create({})
