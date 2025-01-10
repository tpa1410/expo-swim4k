import { Text, View } from 'react-native'
import React from 'react'
import BackButton from './BackButton'

type Props = {
  hasBack?: boolean
  title: string
}

const Header = ({ hasBack = false, title }: Props) => {
  return (
    <View className="w-full flex-row justify-between items-center">
      {hasBack ? <BackButton /> : <View className="w-8" />}
      <View className="flex-1">
        <Text className="text-lg font-bold text-white uppercase text-center" numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View className="w-8" />
    </View>
  )
}

export default Header
