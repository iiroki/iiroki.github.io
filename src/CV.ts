import { EventTimelineItem } from './interfaces/EventTimelineItem'
import { Social } from './interfaces/Social'
import iiro from './assets/iiro_kiviluoma.jpg'
import rasputin from './assets/rasputin.png'
import eventCalendar from './assets/event-calendar-fullstack.png'

interface GeneralInfo {
  readonly name: string
  readonly description: string
  readonly image: string
  readonly skills: string[]
}

interface CardItem {
  readonly title: string
  readonly description?: string
  readonly image?: string
  readonly link?: string
}

interface ContactInfo {
  readonly email: string
  readonly phone?: string
  readonly address?: string
  readonly social?: Social
}

interface CurriculumVitae {
  readonly GENERAL: GeneralInfo
  readonly EXPERIENCE: EventTimelineItem[]
  readonly EDUCATION: EventTimelineItem[]
  readonly PROJECTS: CardItem[]
  readonly CONTACT: ContactInfo
}

const CV: CurriculumVitae = {
  GENERAL: {
    name: 'Iiro Kiviluoma',
    description: `
      Hei! Olen 24-vuotias tietotekniikan DI-opiskelija Tampereelta ja tavoitteenani on kasvaa
      ohjelmistotuotannon rautaiseksi ammattilaiseksi. Teen tällä hetkellä myös oman alani töitä
      opintojeni ohella ja vapaa-aikaani olen käyttänyt omien, lähinnä web-pohjaisten,
      ohjelmistoprojektien väsäämiseen. Nautin ohjelmistotyössä eniten siitä, että pystyn oman
      osaamiseni avulla tuottamaan aidosti hyötyä käyttäjille/asiakkaille.
    `,
    image: iiro,
    skills: [
      'JavaScript/TypeScript',
      'Node.js',
      'React',
      'Java',
      'C++',
      'Python',
      'SQL',
      'MongoDB',
      'Git (GitHub/GitLab)',
      'Docker',
      'DevOps (Jenkins, GitLab CI, Travis CI)'
    ]
  },
  EXPERIENCE: [
    {
      timeSpan: '2021/05 -',
      mainTitle: 'Insta',
      subTitle: 'Ohjelmistosuunnittelija Trainee',
      listItems: [
        'Ohjelmistokehitys (Java, Sping Beans, Maven, SQL)',
        'Ohjelmistosuunnittelu asiakasvaatimusten pohjalta'
      ],
      color: '#004b95'
    },
    {
      timeSpan: '2020/09 - 2021/05',
      mainTitle: 'Tampereen yliopisto',
      subTitle: 'Kurssiassistentti',
      listItems: [
        'Kurssit: Ohjelmointi 3: Tekniikat & Tietorakenteet ja algoritmit',
        'Viikkoharjoitusten pitäminen',
        'Harjoitustöiden tarkastaminen'
      ],
      color: '#4e008e'
    },
    {
      timeSpan: '2019/05 - 2019/09',
      mainTitle: 'Ferrum Steel',
      subTitle: 'Plasmaleikkaaja (CNC)',
      color: '#ad0f0a'
    },
    {
      timeSpan: '2018/05 - 2018/09',
      mainTitle: 'Ferrum Steel',
      subTitle: 'Tuotantotyöntekijä',
      color: '#ad0f0a'
    },
    {
      timeSpan: '2015/03 - 2016/12',
      mainTitle: 'Etelä-Pohjanmaan Osuuskauppa',
      subTitle: 'Myyjä',
      color: '#18a949'
    }
  ],
  EDUCATION: [
    {
      timeSpan: '2021/01 -',
      mainTitle: 'Tampereen yliopisto',
      subTitle: 'Tietotekniikan diplomi-insinööri (120 op)',
      listItems: ['Pääaine: Ohjelmistotuotanto'],
      color: '#4e008e'
    },
    {
      timeSpan: '2017/09 - 2020/12',
      mainTitle: 'Tampereen yliopisto',
      subTitle: 'Konetekniikan kandidaatti (180 op)',
      listItems: [
        'Pääaine: Kone- ja tuotantotekniikka',
        'Sivuaine: Ohjelmistotekniikka'
      ],
      color: '#4e008e'
    },
    {
      timeSpan: '...',
      mainTitle: 'TODO'
    }
  ],
  PROJECTS: [
    {
      title: 'Rasputin',
      description: `
        Rasputin-teekkarilaulukirja on Tampereen teekkariyhteisössä laajalti käytössä oleva laulukirja,
        jolle toteutin full stack -web-sovelluksen. Toteutus sisältää palvelimen ja kaksi käyttöliittymää:
        varsinainen laulukirja ja sisällön hallintapaneeli. Motivaationa toteutukselle oli oman oppimisen lisäksi
        myös sen koko teekkariyhteisölle tuoma hyöty ja lisäarvo. Käytetyt tekniikat: TypeScript, React, Redux,
        Node.js, Express.
      `,
      image: rasputin,
      link: 'https://rasputin.fi'
    },
    {
      title: 'Event Calendar Full Stack',
      description: `
        Ensimmäinen itse suunnittelemani ja toteuttamani full stack -web-sovellus, joka pohjautuu Full Stack 2020
        -kurssin harjoitustyöhöni. Projektin lähdekoodissa näkyy, että toteutushetkellä ollaan vielä opeteltu
        full stack -sovellusten kehittämistä, minkä vuoksi näin jälkiviisaana tekisin monen asian toisin. Pidän
        projektia kuitenkin ylpeänä esillä muistutuksena siitä, että jostain on aina lähdettävä liikkeelle ja kuinka
        paljon oma osaamiseni on kehittynyt projektin jälkeen :) Käytetyt tekniikat: JavaScript, React, Redux,
        Node.js, Express.
      `,
      image: eventCalendar,
      link: 'https://github.com/iiroki-projects/event-calendar-fullstack'
    }
  ],
  CONTACT: {
    email: 'iirokiviluoma@outlook.com',
    phone: '+358 0 417 6832',
    social: {
      gitHub: 'https://github.com/iiroki',
      linkedIn: 'https://www.linkedin.com/in/iiroki/',
      facebook: 'https://www.facebook.com/iiro.kiviluoma/',
      instagram: 'https://www.instagram.com/iirokiviluoma/'
    }
  }
}

export default CV
