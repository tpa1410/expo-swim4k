import { Alert, Image, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Header from '@/components/Header'
import { Calculator, Repeat, Routing, Speedometer, Timer, User } from 'iconsax-react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Lesson } from '@/models/lessons.model'
import { show } from '@/services/lesson.service'
import { levelTitle } from '@/constants/common'
import YoutubePlayer, { PLAYER_STATES } from 'react-native-youtube-iframe'
import { wp } from '@/helpers/common'

const PracticeDetail = () => {
  const router = useRouter()
  const { lessonId, groupTitle } = useLocalSearchParams<{
    lessonId: string
    groupTitle: string
  }>()

  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [playing, setPlaying] = useState(false)

  const onStateChange = useCallback((state: PLAYER_STATES) => {
    if (state === 'ended') {
      setPlaying(false)
      Alert.alert('video has finished playing!')
    }
  }, [])

  const getLessonDetail = async () => {
    // Call API
    try {
      const { data, error } = await show(Number(lessonId))
      if (error) {
        throw error
      }
      setLesson(data)
    } catch (e: any) {
      Alert.alert('Error', e.message)
      router.back()
    }
  }
  useEffect(() => {
    getLessonDetail()
  }, [])
  return (
    <ScrollView className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
      <SafeAreaView className={'pb-8'} style={{ paddingTop: StatusBar.currentHeight }}>
        <View className="px-4">
          <Header title={groupTitle} hasBack />
        </View>
        <View className="mt-4">
          <YoutubePlayer
            height={240}
            width={wp(100)}
            play={playing}
            videoId={lesson?.video_url || '8gVvGAWJGps'}
            onChangeState={onStateChange}
          />
        </View>
        <View className="px-4 gap-6 mt-6">
          {/*  */}
          <View className="gap-3">
            <Text className="text-xl text-primary-500 font-semibold">{lesson?.title}</Text>
            <View className="flex-row items-center flex-wrap -mx-2">
              {/* info-section */}
              <View className="flex-row items-center gap-2 w-1/3 mb-2 px-2">
                <Speedometer size="16" color="#fff" variant="Broken" />
                <Text className="text-white text-xs">{levelTitle[lesson?.level || 0]}</Text>
              </View>
              <View className="flex-row items-center gap-2 w-1/3 mb-2 px-2">
                <Repeat size="16" color="#fff" variant="Broken" />
                <Text className="text-white text-xs">{lesson?.repeats} lần</Text>
              </View>
              <View className="flex-row items-center gap-2 w-1/3 mb-2 px-2">
                <Timer size="16" color="#fff" variant="Broken" />
                <Text className="text-white text-xs">60 phút</Text>
              </View>
              <View className="flex-row items-center gap-2 w-1/3 mb-2 px-2">
                <User size="16" color="#fff" variant="Broken" />
                <Text className="text-white text-xs">U-{lesson?.age}</Text>
              </View>
              <View className="flex-row items-center gap-2 w-1/3 mb-2 px-2">
                <Routing size="16" color="#fff" variant="Broken" />
                <Text className="text-white text-xs">{lesson?.distance} m</Text>
              </View>
              <View className="flex-row items-center gap-2 w-1/3 mb-2 px-2">
                <Calculator size="16" color="#fff" variant="Broken" />
                <Text className="text-white text-xs">{lesson?.kcal} kcal</Text>
              </View>
            </View>
          </View>
          {/*  */}
          <View className="gap-2">
            <Text className="text-xl text-white font-semibold">Cải thiện</Text>
            <View className="flex-row items-center flex-wrap">
              {lesson?.improments &&
                lesson.improments
                  .split('\n')
                  .filter((value) => value !== '')
                  .map((item, index) => (
                    <View key={index} className="px-3 py-1 bg-home-card rounded-md mr-2 mb-2">
                      <Text className="text-sm text-white">{item}</Text>
                    </View>
                  ))}
            </View>
          </View>
          {/*  */}
          <View className="gap-2">
            <Text className="text-xl text-white font-semibold">Chuẩn bị</Text>
            <View className="gap-1">
              {lesson?.preparations &&
                lesson.preparations.split('\n').map((item, index) => (
                  <View key={index} className="flex-row items-center gap-2">
                    <Text className="text-sm text-white">
                      {index + 1}. {item}
                    </Text>
                  </View>
                ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default PracticeDetail
