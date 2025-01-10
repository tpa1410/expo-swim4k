import { Eye, EyeSlash } from 'iconsax-react-native'
import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, TextInputProps } from 'react-native'

type AppInputProps = {
  isPassword?: boolean
  inputRef?: React.RefObject<TextInput>
} & TextInputProps

const AppInput: React.FC<AppInputProps> = ({ isPassword = false, inputRef, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <View
      className={`border ${
        isFocused ? 'border-primary-500' : 'border-border-default'
      } rounded-xl w-full flex-row items-center justify-between min-h-16`}
    >
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={'#71717A'}
        className="text-white flex-1 h-full px-4 rounded-xl"
        secureTextEntry={isPassword && !isPasswordVisible}
        ref={inputRef}
        {...props}
      />
      {isPassword && (
        <TouchableOpacity onPress={togglePasswordVisibility} className="mr-4">
          {isPasswordVisible ? (
            <Eye size="24" color="#71717A" variant="Outline" />
          ) : (
            <EyeSlash size="24" color="#71717A" variant="Outline" />
          )}
        </TouchableOpacity>
      )}
    </View>
  )
}

export default AppInput
