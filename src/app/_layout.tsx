import { Stack } from 'expo-router'
import { Provider } from 'react-redux'
import store, { persistor } from '@/redux'
import '~/global.css'
import { PersistGate } from 'redux-persist/integration/react'
import LoadingScreen from '@/components/LoadingScreen'

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <Stack screenOptions={{ headerShown: false }}></Stack>
      </PersistGate>
    </Provider>
  )
}
