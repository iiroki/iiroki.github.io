import { Skills } from './Skills'

export interface GeneralInfo {
  readonly name: string
  readonly image: string
  readonly description: string
  readonly about?: string
  readonly skills: Skills
}
