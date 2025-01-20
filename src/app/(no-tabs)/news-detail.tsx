import { Alert, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import YoutubePlayer, { PLAYER_STATES } from 'react-native-youtube-iframe'

import { useLocalSearchParams } from 'expo-router'
import { news } from '@/constants/common'
import Header from '@/components/Header'
import { wp } from '@/helpers/common'

type Props = {}

const NewDetail = (props: Props) => {
  const { id } = useLocalSearchParams<{
    id: string
  }>()

  const newData = news.find((item) => item.id === Number(id))
  const [playing, setPlaying] = useState(false)

  const onStateChange = useCallback((state: PLAYER_STATES) => {
    if (state === 'ended') {
      setPlaying(false)
      Alert.alert('video has finished playing!')
    }
  }, [])
  return (
    <ScrollView className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
      <SafeAreaView className={'pb-8'} style={{ paddingTop: StatusBar.currentHeight }}>
        <View className="px-4">
          <Header title={newData?.title || ''} hasBack />
        </View>
        <View className="mt-4">
          <YoutubePlayer
            height={240}
            width={wp(100)}
            play={playing}
            videoId={newData?.youtubeId || '8gVvGAWJGps'}
            onChangeState={onStateChange}
          />
        </View>
        <View className="p-4 gap-4">
          <Text className="text-xl text-primary-500 font-semibold">{newData?.title || ''}</Text>
          <Text className="text-base text-white">{newData?.description || ''}</Text>
          <View className="gap-4">
            {newData?.body.map((item, idx) => (
              <View className="" key={`${item.title}-${idx}`}>
                <Text className="text-base text-primary-500 font-semibold">{item.title || ''}</Text>
                <View className="ml-4 gap-1">
                  {item.content.map((cnt) => (
                    <Text className="text-base text-white" key={cnt}>
                      + {cnt}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default NewDetail
