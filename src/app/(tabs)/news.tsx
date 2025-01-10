import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import LatestCard from '@/components/news/LatestCard'
import NewsCard from '@/components/news/NewsCard'

const Bookmark = () => {
  return (
    <ScrollView className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
      <SafeAreaView className={'pb-8'} style={{ paddingTop: StatusBar.currentHeight }}>
        <Header title="Bài viết" />
        <View className="gap-4 pl-4">
          <Text className="text-2xl text-primary-500 font-bold">MỚI THÊM</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4, 5].map((item) => (
              <View key={item} className="w-40 mr-4">
                <LatestCard />
              </View>
            ))}
          </ScrollView>
        </View>
        <View className="gap-4 px-4 mt-7">
          <Text className="text-2xl text-primary-500 font-bold">TẤT CẢ BÀI VIẾT</Text>
          <View className="gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <View key={item} className="">
                <NewsCard />
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Bookmark
