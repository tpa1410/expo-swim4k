import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'
import { TrainingProgram } from '@/models/training.model'

type Props = {
  data: TrainingProgram
}

const LessonCard = ({ data }: Props) => {
  const router = useRouter()
  const onPracticeDetail = () => {
    router.push({
      pathname: ERouteTable.LESSON_DETAIL,
      params: { trainingId: data.id, groupTitle: data.title },
    })
  }

  return (
    <TouchableOpacity onPress={onPracticeDetail}>
      <View className="w-full gap-3">
        <View className="rounded-2xl overflow-hidden w-full min-h-52">
          <ImageBackground
            source={data.thumbnail ? { uri: data.thumbnail } : images.practice1}
            className="flex-1 flex-row items-start justify-end p-3 object-cover"
          ></ImageBackground>
        </View>
        <View className="">
          <Text className="text-white font-semibold text-base" numberOfLines={2}>
            {data.title}
          </Text>
          <Text className="text-text-default text-sm" numberOfLines={2}>
            {data.short_content}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default LessonCard
