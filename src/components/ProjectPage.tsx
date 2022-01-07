import React from 'react'
import { Card } from 'antd'
import PageBase from './PageBase'
import rasputin from '../assets/rasputin.png'

const ProjectPage: React.FC = () => (
  <PageBase>
    <Card
      cover={<img src={rasputin} alt='Rasputin-teekkarilaulukirja'/>}
      hoverable
      style={{ width: 240 }}
    >
      <Card.Meta title={<h4><b>Rasputin</b></h4>} />
      <Card.Meta description='Rasputin-teekkarilaulukirja...' />
    </Card>
  </PageBase>
)

export default ProjectPage
