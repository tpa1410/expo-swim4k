import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'
import { useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'
import { useCountdown } from '@/hooks/useCountdown'
import BackButton from '@/components/BackButton'

const VerifyScreen = () => {
  const router = useRouter()
  const [isChecked, setChecked] = useState(false)
  const { timeLeft, startCountdown, resetCountdown } = useCountdown(60) // Countdown from 60 seconds

  useEffect(() => {
    startCountdown()
  }, [])

  const onVerify = () => {
    router.replace(ERouteTable.HOME)
  }

  const onSendAgain = () => {
    // handle send again
    resetCountdown()
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="flex-1 bg-background justify-between items-center px-4 py-8 gap-4">
          <View className="w-full">
            {/* Back Button */}
            <View>
              <BackButton />
            </View>
            {/* Form */}
            <View className="gap-8">
              {/* Title */}
              <View className="items-center gap-2">
                <Text className="text-3xl font-bold text-primary-500">Xác thực tài khoản</Text>
                <Text className="text-sm text-text-default">
                  Chúng tôi phải gửi mã xác minh tới email
                </Text>
                <Text className="text-sm font-semibold text-primary-500">***demo@gmail.com</Text>
              </View>
              {/* Input Field */}
              <View className="gap-3 w-full">
                <AppInput placeholder="Nhập mã xác thực" />
              </View>
              {/* Button */}
              <AppButton title="Xác thực" onPress={onVerify} />
              {/* Info */}
              <View className="flex-row items-center justify-center gap-2">
                <Text className="text-sm text-text-default" numberOfLines={1}>
                  Gửi lại mã sau
                </Text>
                {timeLeft > 0 ? (
                  <Text className="text-sm font-semibold text-primary-500" numberOfLines={1}>
                    {timeLeft} s
                  </Text>
                ) : (
                  <TouchableOpacity onPress={onSendAgain}>
                    <Text className="text-sm font-semibold text-primary-500" numberOfLines={1}>
                      Gửi lại
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default VerifyScreen
