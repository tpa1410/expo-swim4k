import { Image, StatusBar, View } from 'react-native'
import { useEffect } from 'react'
import { router } from 'expo-router'
import { images } from '@/constants'
import { ERouteTable } from '@/constants/route-table'
import { useAppSelector } from '@/redux'

export default function Root() {
  const profile = useAppSelector((state) => state.user.data.profile) // lấy thông tin người dùng

  useEffect(() => {
    const timer = setTimeout(() => {
      if (profile) {
        return router.replace(ERouteTable.HOME)
      }
      return router.replace(ERouteTable.SIGIN_IN)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar translucent backgroundColor={'transparent'} barStyle="light-content" />
      <Image source={images.splash} className="w-full h-full" />
    </View>
  )
}
