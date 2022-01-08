import React from 'react'
import { Card } from 'antd'
import PageBase from './PageBase'
import CV from '../CV'

const ProjectPage: React.FC = () => (
  <PageBase>
    {
      CV.PROJECTS.map(i => (
        <Card
          key={i.title}
          cover={i.image && <img src={i.image} alt={i.title} />}
          hoverable
          style={{ width: 240 }}
        >
          <Card.Meta title={<h4><b>Rasputin</b></h4>} />
          <Card.Meta description={i.description} />
        </Card>
      ))
    }
  </PageBase>
)

export default ProjectPage
