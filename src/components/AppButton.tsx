import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'

type Props = {
  title: string
  containerStyle?: string
  textStyle?: string
  isLoading?: boolean
} & TouchableOpacityProps

const AppButton = ({ title, containerStyle = '', textStyle = '', isLoading, ...props }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-primary-500 w-full rounded-xl py-3 justify-center 
          items-center ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}
      {...props}
      disabled={isLoading}
    >
      <Text className={`text-white font-semibold text-base ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton
