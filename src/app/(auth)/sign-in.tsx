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
import Checkbox from 'expo-checkbox'
import AppButton from '@/components/AppButton'
import { useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'
import { Session } from '@supabase/supabase-js'
import { getUserData } from '@/services/users.service'
import { useAppDispatch } from '@/redux'
import { setUser } from '@/redux/features/userSlice'
import { supabase } from '@/lib/supabase'

const SignIn = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()
  const [isChecked, setChecked] = useState(false)

  async function updateProfileState(session: Session) {
    try {
      const res = await getUserData(session.user.id)
      if (res.success) {
        dispatch(setUser({ session, profile: res.data }))
        router.replace(ERouteTable.HOME)
        return { session, profile: res.data }
      } else {
        Alert.alert('getUserData', res.message)
      }
    } catch (error: any) {
      console.error(error)
      Alert.alert('Error', error)
    }
  }

  const onSignIn = async () => {
    try {
      // setLoading(true)
      const formData = {
        email: email.toLowerCase().trim(),
        password: password.trim(),
      }
      if (formData.email.length === 0 || formData.password.length === 0) {
        return Alert.alert('Error', 'Please fill all the fields!')
      }

      const { error, data } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (error) {
        throw error
      }
      await updateProfileState(data!.session)
    } catch (error) {
      console.error(error)
      Alert.alert('Login', 'There was an error logging in', [{ text: 'OK' }])
    } finally {
      // setLoading(false)
    }
  }

  const onSignUpScreen = () => {
    router.push(ERouteTable.SIGIN_UP)
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
                <Text className="text-3xl font-bold text-primary-500">Đăng nhập</Text>
                <Text className="text-sm text-text-default">Đăng nhập vào tài khoản của bạn</Text>
              </View>
              {/* Input Field */}
              <View className="gap-3 w-full">
                <AppInput placeholder="Email" onChangeText={setEmail} />
                <AppInput placeholder="Mật khẩu" isPassword={true} onChangeText={setPassword} />
                <View className="flex-row items-center justify-between mt-1">
                  <View className="flex-row items-center gap-2">
                    <Checkbox value={isChecked} onValueChange={setChecked} />
                    <Text className="text-sm text-text-default">Ghi nhớ đăng nhập</Text>
                  </View>
                  <TouchableOpacity>
                    <Text className="text-sm text-text-link" numberOfLines={1}>
                      Quên mật khẩu?
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* Button */}
              <AppButton title="Đăng nhập" onPress={onSignIn} />
            </View>
          </View>
          {/* Sign Up */}
          <View className="flex-row items-center gap-2">
            <Text className="text-sm text-text-default">Bạn chưa có tài khoản?</Text>
            <TouchableOpacity onPress={onSignUpScreen}>
              <Text className="text-base font-semibold text-primary-500">Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignIn
