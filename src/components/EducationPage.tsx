import React from 'react'
import PageBase from './PageBase'
import EventTimeline from './EventTimeline'
import CV from '../CV'

const EducationPage: React.FC = () => (
  <PageBase>
    <h1 className='page-title'>Koulutus</h1>
    <EventTimeline events={CV.EDUCATION} />
    <h2 className='page-title'>TODO: Muuta</h2>
    Full Stack Open 2020...
  </PageBase>
)

export default EducationPage
