import { Social } from './Social'

export interface ContactInfo {
  readonly email: string
  readonly phone?: string
  readonly address?: string
  readonly social?: Social
}
