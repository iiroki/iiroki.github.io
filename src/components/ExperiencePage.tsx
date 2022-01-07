import React from 'react'
import { Timeline } from 'antd'
import { RightCircleTwoTone } from '@ant-design/icons'
import PageBase from './PageBase'
import cv from '../cv'

const ExperiencePage: React.FC = () => (
  <PageBase>
    <Timeline mode='left'>
      {
        cv.experience.map(i => (<Timeline.Item
          key={`${i.company}_${i.timeSpan}`}
          label={<h3 style={{ marginRight: 10 }}>{i.timeSpan}</h3>}
          dot={<RightCircleTwoTone twoToneColor={i.color} style={{ fontSize: 24 }} />}
        >
          <h3>{i.company}{i.title ? `: ${i.title}` : ''}</h3>
          <ul>
            {
              i.duties && i.duties.map(duty => <li key={duty}>{duty}</li>)
            }
          </ul>
        </Timeline.Item>))
      }
    </Timeline>
  </PageBase>
)

export default ExperiencePage
