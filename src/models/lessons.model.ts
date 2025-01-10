export enum ELessonLevel {
  BEGINNER = 0,
}

export const LessonText: { [key in ELessonLevel]: string } = {
  [ELessonLevel.BEGINNER]: 'Nguoi moi',
}

export type LessonGroup = {
  id: number
  title: string
  createdAt: Date
}

export type Lesson = {
  id: number
  title: string
  level: ELessonLevel
  repeats: number
  age: number
  distance: number
  kcal: number
  improments: string // phan tach boi \n
  preparations: string // phan tach boi \n
  thumbnail: string
  video_url: string
  created_at: Date
}
