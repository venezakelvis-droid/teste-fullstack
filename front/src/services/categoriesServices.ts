import { api } from './api'
import type { Category } from '../interfaces/category'

export const categoryService = {
  getAll() {
    return api.get<Category[]>('/categories')
  },

  create(data: Omit<Category, 'id'>) {
    return api.post('/categories', data)
  },

  delete(id: string) {
    return api.delete(`/categories/${id}`)
  }
}
