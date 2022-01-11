import React from 'react'
import { List, Card, Image } from 'antd'
import PageBase from './PageBase'
import CV from '../CV'

const ProjectPage: React.FC = () => (
  <PageBase>
    <h1 className='page-title'>Projektit</h1>
    <List
      split={false}
      dataSource={CV.PROJECTS}
      renderItem={i => (
        <List.Item
          key={i.title}
        >
          <a
            href={i.link}
            target='_blank'
            rel='noopener noreferrer'
            style={{ width: '100%' }}
          >
            <Card
              hoverable
              cover={i.image && <Image src={i.image} alt={i.title} preview={false} />}
              >
              <Card.Meta title={<h2>{i.title}</h2>} />
              <Card.Meta description={i.description} />
            </Card>
          </a>
        </List.Item>
      )}
    />
  </PageBase>
)

export default ProjectPage
