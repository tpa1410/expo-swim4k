import { Alert, Image, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { images } from '@/constants'
import Header from '@/components/Header'
import LectureCard from '@/components/lesson/LectureCard'
import { useLocalSearchParams } from 'expo-router'
import { ProgramDetail, show } from '@/services/training.service'

const LessonDetail = () => {
  const [trainingDetail, setTrainingDetail] = React.useState<ProgramDetail | null>(null)
  const { trainingId, groupTitle } = useLocalSearchParams<{
    trainingId: string
    groupTitle: string
  }>()

  const totalLesson = trainingDetail?.chapters.reduce((acc, item) => acc + item.lessons.length, 0)

  const getTraining = async () => {
    // Call API
    try {
      const { data, error } = await show(Number(trainingId))
      if (error) {
        throw error
      }
      setTrainingDetail(data)
    } catch (e: any) {
      Alert.alert('Error', e.message)
    }
  }

  useEffect(() => {
    getTraining()
  }, [])
  return (
    <ScrollView className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
      <SafeAreaView className={'pb-8'} style={{ paddingTop: StatusBar.currentHeight }}>
        <View className="px-4">
          <Header title={groupTitle} hasBack />
        </View>
        <View className="mt-4">
          <Image
            source={
              trainingDetail?.programs.thumbnail
                ? { uri: trainingDetail?.programs.thumbnail }
                : images.practice1
            }
            className="w-full h-64"
          />
        </View>
        <View className="px-4 gap-6 mt-6">
          {/*  */}
          <View className="gap-3">
            <Text className="text-xl text-primary-500 font-semibold">
              {trainingDetail?.programs.title}
            </Text>
            <Text className="text-sm text-text-default">
              {trainingDetail?.programs.short_content}
            </Text>
          </View>
          <View className="flex-row items-center gap-4">
            <Text className="text-white text-sm">
              {trainingDetail?.chapters.length} <Text className="text-text-default"> Bài học</Text>
            </Text>
            <Text className="text-white text-sm">
              {totalLesson} <Text className="text-text-default"> Chương</Text>
            </Text>
          </View>

          {/* List Lecture */}
          <View className="gap-6">
            {trainingDetail?.chapters.map((item, index) => (
              <View className="gap-4" key={`chapter${item.chapter.id}`}>
                <Text className="text-lg text-white font-semibold">Bài học {index + 1}</Text>
                <View className="gap-2">
                  {item.lessons.map((lesson, index2) => {
                    return (
                      <View key={`lesson${lesson.id} -${index}-${index2}`}>
                        <LectureCard lesson={lesson} groupTitle={groupTitle} />
                      </View>
                    )
                  })}
                </View>
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default LessonDetail
