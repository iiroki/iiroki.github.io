import { Skills } from './Skills'

export interface GeneralInfo {
  readonly name: string
  readonly image: string
  readonly description: string
  readonly about?: string
  readonly skills: Skills
  readonly languages: {
    readonly language: string
    readonly level: number // 0.0 - 5.0
  }[]
}
