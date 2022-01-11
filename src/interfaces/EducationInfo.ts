import { EventTimelineItem } from './EventTimelineItem'

export interface EducationInfo {
  readonly school: EventTimelineItem[],
  readonly other: EventTimelineItem[]
}
