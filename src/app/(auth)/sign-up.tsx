import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'
import { useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'
import { supabase } from '@/lib/supabase'

const SignUp = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSignUp = async () => {
    try {
      // setLoading(true)
      const formData = {
        email: email.toLowerCase().trim(),
        password: password.trim(),
        name: name.trim(),
      }
      if (
        formData.email.length === 0 ||
        formData.password.length === 0 ||
        formData.name.length === 0
      ) {
        return Alert.alert('Error', 'Please fill all the fields!')
      }

      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,

        options: {
          data: {
            name: formData.name,
          },
        },
      })
      console.log('supabase.auth.signUp', data, error)

      if (error) {
        throw error
      }
      Alert.alert('Sign Up', 'Account created successfully. Please login to continue.')
      router.replace(ERouteTable.SIGIN_IN)
    } catch (error) {
      console.error(error)
      Alert.alert('Error', 'Something went wrong!')
    } finally {
      // setLoading(false)
    }
  }
  const onSignInScreen = () => {
    router.push(ERouteTable.SIGIN_IN)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="flex-1 bg-background justify-between items-center px-4 py-8 gap-4">
          <View className="gap-20 w-full">
            {/* Logo */}
            <View className="items-center">
              <Image source={images.logo} className="max-w-52 max-h-36" />
            </View>
            {/* Form */}
            <View className="gap-8">
              {/* Title */}
              <View className="items-center gap-2">
                <Text className="text-3xl font-bold text-primary-500">Đăng Ký</Text>
                <Text className="text-sm text-text-default">Đăng ký tài khoản của bạn</Text>
              </View>
              {/* Input Field */}
              <View className="gap-3 w-full">
                <AppInput placeholder="Tên" onChangeText={setName} />
                <AppInput placeholder="Email" onChangeText={setEmail} />
                <AppInput placeholder="Mật khẩu" isPassword={true} onChangeText={setPassword} />
                {/* <AppInput placeholder="Nhập lại mật khẩu" isPassword={true} /> */}
              </View>
              {/* Button */}
              <AppButton title="Đăng ký" onPress={onSignUp} />
            </View>
          </View>
          {/* Register */}
          <View className="flex-row items-center gap-2">
            <Text className="text-sm text-text-default">Bạn đã có tài khoản?</Text>
            <TouchableOpacity onPress={onSignInScreen}>
              <Text className="text-base font-semibold text-primary-500">Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignUp
