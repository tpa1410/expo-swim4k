import { Post } from '@/models/posts.model'
import { createDAO, ETableName, Response } from './dao.service'

// TODO: Fetch all posts
export async function fetchAll(): Promise<Response<Post[]>> {
  const dao = createDAO(ETableName.LESSONS)
  const queryResult = await dao.select<string, Post>('*')

  if (queryResult.error) {
    return {
      error: queryResult.error.message,
      data: null,
    }
  }

  return {
    data: queryResult.data,
  }
}

// TODO: Fetch post detail
export async function show(id: number): Promise<Response<Post>> {
  const dao = createDAO(ETableName.POSTS)
  const queryResult = await dao.select<string, Post>('*').eq('id', id).single()

  if (queryResult.error) {
    return {
      error: queryResult.error.message,
      data: null,
    }
  }

  return {
    data: queryResult.data,
  }
}
