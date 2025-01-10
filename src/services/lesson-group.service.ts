import { supabase } from '@/lib/supabase'
import { LessonGroup } from '@/models/lessons.model'
import { createDAO, ETableName, Response } from './dao.service'

// Fetch all LessonGroup
export type LessonGroupItem = LessonGroup & {
  nLessons?: number
}

export async function fetchAll(): Promise<Response<LessonGroupItem[]>> {
  const dao = createDAO(ETableName.LESSON_GROUPS)
  const queryResult = await dao.select<
    string,
    LessonGroup & { lessons: { lesson_group_id: number }[] }
  >('*, lessons!inner(lesson_group_id)')

  if (queryResult.error || !queryResult.data) {
    return {
      error: queryResult.error.message,
      data: [],
    }
  }

  return {
    data: queryResult.data.map((item) => ({
      ...item,
      nLessons: item.lessons.length,
    })),
  }
}
