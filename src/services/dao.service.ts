import { supabase } from '@/lib/supabase'

export enum ETableName {
  POSTS = 'posts',
  LESSONS = 'lessons',
  LESSON_GROUPS = 'lesson_groups',
  TRAINING_PROGRAMS = 'training_programs',
  TRAINING_CHAPTERS = 'training_chapters',
  CHAPTERS_TO_LESSONS = 'chapters_to_lessons',
}

export type Response<DataType> = {
  error?: string | null
  data: DataType | null
}

const SCHEMA_NAME = 'swim4k'

export function createDAO(table: ETableName) {
  return supabase.schema(SCHEMA_NAME).from(table)
}
