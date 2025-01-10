import { Alert, Image, ScrollView, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { images } from '@/constants'
import HomeCard from '@/components/home/HomeCard'
import { fetchAll, LessonGroupItem } from '@/services/lesson-group.service'

const Home = () => {
  const [lessonGroup, setLessonGroup] = React.useState<LessonGroupItem[]>([])

  const getLessons = async () => {
    // Call API
    try {
      const { data, error } = await fetchAll()
      if (error) {
        throw error
      }
      setLessonGroup(data || [])
    } catch (e) {
      Alert.alert('Lỗi', 'Có lỗi xảy ra khi tải dữ liệu')
    }
  }

  useEffect(() => {
    getLessons()
  }, [])

  return (
    <ScrollView className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
      <Image source={images.homeBanner} className="w-full h-[500px] rounded-b-3xl object-cover" />
      <View className="px-4 py-6 gap-6">
        <Text className="text-2xl font-bold text-white uppercase">Tập luyện</Text>
        <View className="flex-row flex-wrap -mx-2">
          {lessonGroup.map((item) => (
            <View key={item.id} className="w-1/2 px-2 mb-2">
              <HomeCard data={item} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default Home
