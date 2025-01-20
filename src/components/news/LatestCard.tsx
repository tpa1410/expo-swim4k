import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'
import { INew } from '@/constants/common'

type Props = {
  data: INew
}

const LatestCard = ({ data }: Props) => {
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
      <View className="w-full gap-2">
        <Image source={{ uri: data.thumbnail }} className="w-40 h-24 rounded-xl" />
        <View>
          <Text className="text-sm text-white font-semibold" numberOfLines={1}>
            {data.title}
          </Text>
          <Text className="text-xs text-text-default" numberOfLines={2}>
            {data.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default LatestCard

const styles = StyleSheet.create({})
