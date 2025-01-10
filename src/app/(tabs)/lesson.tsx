import { Alert, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import LessonCard from '@/components/lesson/LessonCard'
import { fetchAll } from '@/services/training.service'
import { TrainingProgram } from '@/models/training.model'

const Lesson = () => {
  const [training, setTraining] = useState<TrainingProgram[]>([])

  const getTrainings = async () => {
    // Call API
    try {
      const { data, error } = await fetchAll()
      if (error) {
        throw error
      }
      setTraining(data || [])
    } catch (e: any) {
      Alert.alert('Error', e.message)
    }
  }

  useEffect(() => {
    getTrainings()
  }, [])
  return (
    <ScrollView className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
      <SafeAreaView className={'pb-8'} style={{ paddingTop: StatusBar.currentHeight }}>
        <Header title="Giáo án tập luyện" />
        <View className="p-4 gap-4">
          <Text className="text-2xl text-primary-500 font-bold">TẤT CẢ GIÁO ÁN</Text>
          <View className="gap-6">
            {training.map((item) => (
              <View key={item.id}>
                <LessonCard data={item} />
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Lesson
