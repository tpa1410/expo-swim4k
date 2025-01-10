import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import { images } from '@/constants'
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'iconsax-react-native'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'
import { useAppDispatch, useAppSelector } from '@/redux'
import { updateUserData, UserProfileUpdate } from '@/services/users.service'
import { getSupabaseUrl, uploadFile } from '@/services/images.service'
import { setUser } from '@/redux/features/userSlice'
import { useRouter } from 'expo-router'

const EditProfile = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const currentProfile = useAppSelector((state) => state.user.data.profile)
  const [image, setImage] = useState<string | null | undefined>(
    getSupabaseUrl(currentProfile?.image!),
  )

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    image: currentProfile?.image,
  })

  useEffect(() => {
    setProfile({
      name: currentProfile?.name || '',
      email: currentProfile?.email || '',
      phone: currentProfile?.phone || '',
      image: currentProfile?.image,
    })
  }, [currentProfile])

  const onSubmit = async () => {
    const userData: UserProfileUpdate = {
      name: profile.name.trim(),
      email: profile.email.toLowerCase().trim(),
      phone: profile.phone.trim(),
    }

    // Upload image
    if (image && image.length) {
      const { success, message, data } = await uploadFile('images', image)
      if (!success) {
        console.log('Failed to upload image:', message)
        return Alert.alert('Profile', 'Failed to upload your image. Please try again later')
      }
      userData.image = data
    }

    if (Object.values(userData).some((value) => value.length === 0)) {
      return Alert.alert('Profile', 'Please fill all the fields before updating your profile')
    }

    // Update user data
    const { success, message, data } = await updateUserData(currentProfile!.id, userData)
    if (!success) {
      console.log('Failed to update profile:', message)
      return Alert.alert('Profile', 'Failed to update your profile. Please try again later')
    }
    dispatch(setUser({ profile: data }))
    router.back()
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.2,
    })
    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="flex-1 bg-background">
          <SafeAreaView className="flex-1" style={{ paddingTop: StatusBar.currentHeight }}>
            <View className="px-4 gap-4 flex-1 pb-8">
              <Header title="Thông tin" hasBack />
              <View className="flex-1 justify-between">
                <View>
                  {/* Avatar */}
                  <View className="flex flex-col m-auto items-center">
                    <Image
                      source={image ? { uri: image } : images.avatar}
                      className="w-[108px] h-[108px] rounded-full"
                      resizeMode="cover"
                    />
                    <TouchableOpacity className="absolute bottom-0 right-0" onPress={pickImage}>
                      <View className="p-2 bg-home-card rounded-full">
                        <Camera size={20} color="#71717A" variant="Broken" />
                      </View>
                    </TouchableOpacity>
                  </View>
                  {/* Group Input */}
                  <View className="gap-4 mt-10">
                    <AppInput
                      placeholder="họ và tên"
                      value={profile.name}
                      onChangeText={(text) => setProfile({ ...profile, name: text })}
                    />
                    <AppInput
                      placeholder="Email"
                      value={profile.email}
                      onChangeText={(text) => setProfile({ ...profile, email: text })}
                    />
                    <AppInput
                      placeholder="Số điện thoại"
                      value={profile.phone}
                      onChangeText={(text) => setProfile({ ...profile, phone: text })}
                    />
                  </View>
                </View>
                <AppButton title="Lưu" onPress={onSubmit} />
              </View>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default EditProfile
