import React from 'react'
import PageBase from './PageBase'
import EventTimeline from './EventTimeline'
import CV from '../CV'

const ExperiencePage: React.FC = () => (
  <PageBase>
    <h1 className='page-title'>Työkokemus</h1>
    <EventTimeline events={CV.EXPERIENCE.work} />
    {CV.EXPERIENCE.organization.length !== 0 && <h2 className='page-title'>Luottamustoimet</h2>}
    <EventTimeline events={CV.EXPERIENCE.organization} />
  </PageBase>
)

export default ExperiencePage
