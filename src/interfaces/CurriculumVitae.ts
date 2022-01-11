import { GeneralInfo } from './GeneralInfo'
import { EventTimelineItem } from './EventTimelineItem'
import { CardItem } from './CardItem'
import { ContactInfo } from './ContactInfo'

export interface CurriculumVitae {
  readonly GENERAL: GeneralInfo
  readonly EXPERIENCE: EventTimelineItem[]
  readonly EDUCATION: EventTimelineItem[]
  readonly PROJECTS: CardItem[]
  readonly CONTACT: ContactInfo
}
