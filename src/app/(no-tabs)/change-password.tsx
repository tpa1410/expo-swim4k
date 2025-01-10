import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native'
import React, { useState } from 'react'
import Header from '@/components/Header'
import * as ImagePicker from 'expo-image-picker'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'

type Props = {}

const ChangePassword = (props: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="flex-1 bg-background">
          <SafeAreaView className="flex-1" style={{ paddingTop: StatusBar.currentHeight }}>
            <View className="px-4 gap-4 flex-1 pb-8">
              <Header title="Đổi mật khẩu" hasBack />
              <View className="gap-6">
                <Text className="text-sm text-text-default">
                  Mật khẩu mới của bạn phải khác với mật khẩu đã sử dụng trước đó
                </Text>
                <View className="gap-4">
                  <AppInput placeholder="Mật khẩu cũ" isPassword />
                  <AppInput placeholder="Mật khẩu mới" isPassword />
                  <AppInput placeholder="Nhập lại mật khẩu" isPassword />
                </View>
                <View className="mt-6">
                  <AppButton title="Lưu" />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default ChangePassword
