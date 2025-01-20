import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import LatestCard from '@/components/news/LatestCard'
import NewsCard from '@/components/news/NewsCard'
import { getRandomElements } from '@/helpers/function'
import { INew, news } from '@/constants/common'

const News = () => {
  const latestNews = getRandomElements<INew>(news, 4)
  return (
    <ScrollView className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
      <SafeAreaView className={'pb-8'} style={{ paddingTop: StatusBar.currentHeight }}>
        <Header title="Bài viết" />
        <View className="gap-4 pl-4">
          <Text className="text-2xl text-primary-500 font-bold">MỚI THÊM</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {latestNews.map((item) => (
              <View key={`latest-${item.id}`} className="w-40 mr-4">
                <LatestCard data={item} />
              </View>
            ))}
          </ScrollView>
        </View>
        <View className="gap-4 px-4 mt-7">
          <Text className="text-2xl text-primary-500 font-bold">TẤT CẢ BÀI VIẾT</Text>
          <View className="gap-4">
            {news.map((item) => (
              <View key={`all-${item.id}`} className="">
                <NewsCard data={item} />
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default News
