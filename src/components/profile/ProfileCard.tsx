import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'
import { ArrowRight2 } from 'iconsax-react-native'
import { useAppDispatch } from '@/redux'
import { removeUser } from '@/redux/features/userSlice'

type Props = {
  route: ERouteTable
  title: string
  Icon: React.ElementType
  hasArrow?: boolean
}

const ProfileCard = ({ route, title, Icon, hasArrow = true }: Props) => {
  const dispatch = useAppDispatch()
  const onProfileCard = () => {
    if (route === ERouteTable.SIGIN_IN) {
      dispatch(removeUser())
    }
    router.push(route)
  }
  return (
    <TouchableOpacity
      className="flex-row justify-between items-center pb-2 border-b border-border-default mt-2"
      onPress={onProfileCard}
    >
      <View className="flex flex-row gap-2 items-center">
        <View className="p-3 bg-home-card rounded-lg">
          <Icon color="#71717A" variant="Broken" size={24} />
        </View>
        <Text className="font-bold text-base text-white">{title}</Text>
      </View>
      {hasArrow && <ArrowRight2 size="24" color="#71717A" />}
    </TouchableOpacity>
  )
}

export default ProfileCard
