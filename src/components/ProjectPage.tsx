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
            key={i.title}
            hoverable
            cover={i.image && <img src={i.image} alt={i.title} />}
            style={{ width: '100%' }}
            >
            <Card.Meta title={<h4><b>Rasputin</b></h4>} />
            <Card.Meta description={i.description} />
          </Card>
        </a>
      ))
    }
  </PageBase>
)

export default ProjectPage
