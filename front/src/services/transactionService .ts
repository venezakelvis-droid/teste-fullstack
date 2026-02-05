import type { Transaction } from '../interfaces/transection'
import { api } from './api'

export const transactionService = {
  getAll() {
    return api.get<Transaction[]>('/transactions')
  },

  create(data: Omit<Transaction, 'id'>) {
    return api.post('/transactions', data)
  },

  delete(id: string) {
    return api.delete(`/transactions/${id}`)
  }
}
