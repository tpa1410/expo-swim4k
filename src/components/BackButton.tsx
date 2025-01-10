import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ArrowLeft2 } from 'iconsax-react-native'
import { useRouter } from 'expo-router'

type Props = {}

const BackButton = (props: Props) => {
  const router = useRouter()
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <ArrowLeft2 size="24" color="#fff" variant="Outline" />
    </TouchableOpacity>
  )
}

export default BackButton
