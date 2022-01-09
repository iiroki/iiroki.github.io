import React from 'react'
import { Timeline } from 'antd'
import { RightCircleTwoTone } from '@ant-design/icons'
import { EventTimelineItem } from '../interfaces/EventTimelineItem'

interface EventTimelineProps {
  readonly events: EventTimelineItem[]
}

const EventTimeline: React.FC<EventTimelineProps> = ({ events }) => (
  <Timeline className='timeline' mode='left'>
      {
        events.map(i => (
          <Timeline.Item
            key={`${i.mainTitle}_${i.timeSpan}`}
            label={
              <h3 className='timeline-title-main' style={{ marginRight: 10 }}>
                {i.timeSpan}
              </h3>
            }
            dot={<RightCircleTwoTone twoToneColor={i.color} style={{ fontSize: 30 }} />}
          >
            <h3 className='timeline-title-main'>{i.mainTitle}</h3>
            <h4 className='timeline-title-sub'>{i.subTitle}</h4>
            <ul>
              {
                i.listItems && i.listItems.map(duty => (
                  <li className='timeline-list' key={duty}>{duty}</li>
                ))
              }
            </ul>
          </Timeline.Item>)
        )
      }
    </Timeline>
)

export default EventTimeline
