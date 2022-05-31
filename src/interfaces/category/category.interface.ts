import { User } from "../user/user.interface"

export interface Category {
  id: string
  user: User
  title: string
  description: string
  type: string
  created_at: Date
  updated_at: Date
}

export interface CategoryData {
  id: string
  user_id: string
  title: string
  description: string
  type: string
  created_at: Date
  updated_at: Date
}