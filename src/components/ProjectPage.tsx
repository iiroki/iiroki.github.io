import React from 'react'
import { Card } from 'antd'
import PageBase from './PageBase'
import CV from '../CV'

const ProjectPage: React.FC = () => (
  <PageBase>
    <h1 className='page-title'>Projektit</h1>
    {
      CV.PROJECTS.map(i => (
        <a
          key={i.title}
          href={i.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Card
            className='project'
            hoverable
            cover={i.image && <img src={i.image} alt={i.title} />}
            style={{ width: '100%' }}
            >
            <Card.Meta title={<h3>{i.title}</h3>} />
            <Card.Meta description={i.description} />
          </Card>
        </a>
      ))
    }
  </PageBase>
)

export default ProjectPage
