import { Alert, SafeAreaView, ScrollView, StatusBar, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '@/components/Header'
import PracticeCard from '@/components/home/PracticeCard'
import { Lesson } from '@/models/lessons.model'
import { fetchByGroup } from '@/services/lesson.service'
import { useLocalSearchParams } from 'expo-router'

const PracticeList = () => {
  const { lessonGroupId, groupTitle } = useLocalSearchParams<{
    lessonGroupId: string
    groupTitle: string
  }>()

  const [lessonList, setLessonList] = React.useState<Lesson[]>([])

  const getLessons = async () => {
    // Call API
    try {
      const { data, error } = await fetchByGroup(Number(lessonGroupId))
      if (error) {
        throw error
      }
      setLessonList(data || [])
    } catch (e: any) {
      Alert.alert('Error', e.message)
    }
  }

  useEffect(() => {
    getLessons()
  }, [])

  return (
    <ScrollView className="flex-1 bg-background " showsVerticalScrollIndicator={false}>
      <SafeAreaView className={'px-4 pb-8'} style={{ paddingTop: StatusBar.currentHeight }}>
        <Header title={groupTitle} hasBack />
        <View className="mt-5 gap-6">
          {lessonList.map((item) => (
            <View key={item.id}>
              <PracticeCard data={item} groupTitle={groupTitle} />
            </View>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default PracticeList
