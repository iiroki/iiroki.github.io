import React from 'react'
import PageBase from './PageBase'
import EventTimeline from './EventTimeline'
import CV from '../CV'

const ExperiencePage: React.FC = () => (
  <PageBase>
    <h1 className='page-title'>Työkokemus</h1>
    <EventTimeline events={CV.EXPERIENCE} />
  </PageBase>
)

export default ExperiencePage
