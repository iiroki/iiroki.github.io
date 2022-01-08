import React from 'react'
import { Card } from 'antd'
import PageBase from './PageBase'
import CV from '../CV'

const ProjectPage: React.FC = () => (
  <PageBase>
    {
      CV.PROJECTS.map(i => (
        <a
          href={i.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Card
            className='project'
            key={i.title}
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
