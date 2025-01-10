import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import { images } from '@/constants'
import { ERouteTable } from '@/constants/route-table'
import { Key, Logout, User } from 'iconsax-react-native'
import ProfileCard from '@/components/profile/ProfileCard'
import { useAppSelector } from '@/redux'
import { getSupabaseUrl } from '@/services/images.service'

const Profile = () => {
  const profile = useAppSelector((state) => state.user.data.profile)
  return (
    <View className="flex-1 bg-background px-4">
      <SafeAreaView className={'pb-8'} style={{ paddingTop: StatusBar.currentHeight }}>
        <Header title="Cá nhân" />
        <View className="items-center gap-4 mt-5">
          <Image
            source={profile?.image ? { uri: getSupabaseUrl(profile.image) } : images.avatar}
            className="rounded-full w-28 h-28"
          />
          <Text className="text-2xl font-semibold text-white">{profile?.name}</Text>
        </View>
        <View className="mt-8">
          <ProfileCard title="Thông tin" route={ERouteTable.EDIT_PROFILE} Icon={User} />
          <ProfileCard title="Đổi mật khẩu" route={ERouteTable.CHANGE_PASSWORD} Icon={Key} />
          <ProfileCard
            title="Đăng xuất"
            route={ERouteTable.SIGIN_IN}
            Icon={Logout}
            hasArrow={false}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Profile
