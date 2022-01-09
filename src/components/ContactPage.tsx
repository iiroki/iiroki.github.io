import React from 'react'
import { Descriptions } from 'antd'
import PageBase from './PageBase'
import SocialBar from './SocialBar'
import CV from '../CV'

const ContactPage: React.FC = () => (
  <PageBase>
    <h1 className='page-title'>Ota yhteyttä</h1>
    <Descriptions
      column={1}
      bordered
      contentStyle={{ backgroundColor: '#ffffff' }}
    >
      <Descriptions.Item className='contact-info' label='Sähköposti'>
        <a href={`mailto:${CV.CONTACT.email}`}>{CV.CONTACT.email}</a>
      </Descriptions.Item>

      {
        CV.CONTACT.phone && (
          <Descriptions.Item className='contact-info' label='Puhelin'>
            <a href={`tel:${CV.CONTACT.phone?.split(' ').join('')}`}>{CV.CONTACT.phone}</a>
          </Descriptions.Item>
        )
      }

      {
        CV.CONTACT.address && (
          <Descriptions.Item className='contact-info' label='Osoite'>
            {CV.CONTACT.address}
          </Descriptions.Item>
        )
      }
    </Descriptions>

    {
      CV.CONTACT.social && <SocialBar social={CV.CONTACT.social} />
    }
  </PageBase>
)

export default ContactPage
