import { GeneralInfo } from './GeneralInfo'
import { ExperienceInfo } from './ExperienceInfo'
import { EducationInfo } from './EducationInfo'
import { CardItem } from './CardItem'
import { ContactInfo } from './ContactInfo'

export interface CurriculumVitae {
  readonly GENERAL: GeneralInfo
  readonly PROJECTS: CardItem[]
  readonly EXPERIENCE: ExperienceInfo
  readonly EDUCATION: EducationInfo
  readonly CONTACT: ContactInfo
}
