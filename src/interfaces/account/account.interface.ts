import { Category } from "../category/category.interface"
import { User } from "../user/user.interface"

export interface Account {
  id: string
  user: User
  category: Category
  title: string
  description: string
  type: string
  value: number
  date: Date
  created_at: Date
  updated_at: Date
}

export interface AccountData {
  id: string
  user_id: string
  category_id: string
  title: string
  description: string
  type: string
  value: number
  date: Date
  created_at: Date
  updated_at: Date
}

export interface AccountGraph {
  count_debit: number
  count_receivement: number
}


export interface AccountReports {
  sum_debit: number
  sum_receivement: number
  total: number
}