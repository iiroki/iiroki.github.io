import { EventTimelineItem } from './EventTimelineItem'

export interface ExperienceInfo {
  readonly work: EventTimelineItem[],
  readonly organization: EventTimelineItem[]
}
