import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Lesson } from '@/models/lessons.model'
import { levelTitle } from '@/constants/common'
import { useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'

type Props = {
  lesson: Lesson
  groupTitle: string
}

const LectureCard = ({ lesson, groupTitle }: Props) => {
  const router = useRouter()
  const onPracticeDetail = () => {
    router.push({
      pathname: ERouteTable.PRACTICE_DETAIL,
      params: {
        lessonId: lesson.id,
        groupTitle,
      },
    })
  }
  return (
    <TouchableOpacity onPress={onPracticeDetail}>
      <View className="bg-home-card p-3 rounded-xl gap-1">
        <View className="flex-row items-center justify-between">
          <Text className="text-white text-base font-semibold" numberOfLines={1}>
            {levelTitle[lesson.level]}
          </Text>
          <Text className="text-xs text-text-default" numberOfLines={1}>
            60 phút
          </Text>
        </View>
        <Text className="text-xs text-text-default">{lesson.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default LectureCard
