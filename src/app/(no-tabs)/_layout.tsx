import React from 'react'
import { Stack } from 'expo-router'

const NoTabLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  )
}

export default NoTabLayout
