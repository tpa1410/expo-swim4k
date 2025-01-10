export type TrainingProgram = {
  id: number
  title: string
  short_content: string
  thumbnail: string
  created_at: Date
}

export type TrainingChapter = {
  id: number
  training_program_id: number
  title: string
  created_at: Date
}
