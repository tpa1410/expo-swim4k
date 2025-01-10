import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView, StatusBar } from 'react-native'

const AuthLayout = () => {
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />
      <SafeAreaView
        className="flex-1 bg-background"
        style={{ paddingTop: StatusBar.currentHeight }}
      >
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </SafeAreaView>
    </>
  )
}

export default AuthLayout
