import React from 'react'
import PageBase from './PageBase'
import EventTimeline from './EventTimeline'
import CV from '../CV'

const EducationPage: React.FC = () => (
  <PageBase>
    <h1 className='page-title'>Koulutus</h1>
    <EventTimeline events={CV.EDUCATION.school} />
    {CV.EDUCATION.other.length !== 0 && <h2 className='page-title'>Muut</h2>}
    <EventTimeline events={CV.EDUCATION.other} />
  </PageBase>
)

export default EducationPage
