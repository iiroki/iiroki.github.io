import React from 'react'
import { Image, Tag } from 'antd'
import PageBase from './PageBase'
import CV from '../CV'

const GeneralPage: React.FC = () => (
  <PageBase>
    <Image className='cv-image' src={CV.GENERAL.image} />
    <h1 className='page-title'>
      {CV.GENERAL.name}
    </h1>
    <p>
      {CV.GENERAL.description}
    </p>
    <h2 className='page-title'>Osaaminen</h2>
    {
      CV.GENERAL.skills.map(i => (
        <Tag className='skill-tag' key={i}>{i}</Tag>
      ))
    }
  </PageBase>
)

export default GeneralPage
