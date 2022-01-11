import React from 'react'
import { Image, Tag, Rate } from 'antd'
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
    <p>
      {CV.GENERAL.about && CV.GENERAL.about}
    </p>
    <h2 className='page-title'>Osaaminen</h2>
    {
      CV.GENERAL.skills.major.map(i => (
        <Tag className='skill-tag skill-tag-major' key={i}>{i}</Tag>
      ))
    }
    {
      CV.GENERAL.skills.minor.map(i => (
        <Tag className='skill-tag skill-tag-minor' key={i}>{i}</Tag>
      ))
    }
    <h2 className='page-title'>Kielitaito</h2>
    {
      CV.GENERAL.languages.map(i => (
        <span className='language' key={i.language}>
          {i.language}
          <Rate disabled allowHalf defaultValue={i.level} style={{ marginLeft: 5 }}/>
        </span>
      ))
    }
  </PageBase>
)

export default GeneralPage
