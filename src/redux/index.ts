import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'

import errorReducer from './features/errorSlice'
import languageReducer from './features/languageSlice'
import loadingReducer from './features/loadingSlice'
import userReducer from './features/userSlice'
import counterReducer from './features/counterSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Use AsyncStorage for React Native
  whitelist: ['user', 'language'], // State slices to persist
}

// Root reducer
const rootReducer = combineReducers({
  loading: loadingReducer,
  language: languageReducer,
  error: errorReducer,
  counter: counterReducer,
  user: userReducer,
})

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        // Ignore these paths in the state
        ignoredPaths: ['register', 'rehydrate'],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Persistor
export const persistor = persistStore(store)

export default store
