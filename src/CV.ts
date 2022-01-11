import { CurriculumVitae } from './interfaces/CurriculumVitae'
import iiro from './assets/iiro_kiviluoma.jpg'
import rasputin from './assets/rasputin.png'
import eventCalendar from './assets/event-calendar-fullstack.png'

const CV: CurriculumVitae = {
  GENERAL: {
    name: 'Iiro Kiviluoma',
    image: iiro,
    description: `
      Hei! Olen 24-vuotias tietotekniikan DI-opiskelija Tampereelta ja tavoitteenani on kasvaa
      ohjelmistotuotannon rautaiseksi ammattilaiseksi. Teen tällä hetkellä myös ohjelmistoalan
      töitä opintojeni ohella ja vapaa-aikaani olen käyttänyt omien, lähinnä web-pohjaisten,
      ohjelmistoprojektien väsäämiseen. Nautin ohjelmistotyössä eniten siitä, että pystyn oman
      koodini avulla tuottamaan aidosti hyötyä käyttäjille/asiakkaille.
    `,
    skills: {
      major: [
        'JavaScript/TypeScript',
        'React',
        'Node.js',
        'Java'
      ],
      minor: [
        'C++',
        'Python',
        'SQL',
        'MongoDB',
        'Docker',
        'Git',
        'DevOps (Jenkins, GitLab CI, Travis CI)',
        'Linux'
      ]
    },
    languages: [
      {
        language: 'Suomi',
        level: 5
      },
      {
        language: 'Englanti',
        level: 4.5
      }
    ]
  },
  PROJECTS: [
    {
      title: 'Rasputin',
      description: `
        Rasputin-teekkarilaulukirja on Tampereen teekkariyhteisössä laajalti käytössä oleva laulukirja,
        jolle toteutin full stack -web-sovelluksen. Toteutus sisältää palvelimen ja kaksi käyttöliittymää:
        varsinaisen laulukirjan ja sisällön hallintapaneelin. Motivaationa toteutukselle oli oman oppimisen lisäksi
        myös sen koko teekkariyhteisölle tuoma hyöty ja lisäarvo. Projekti on otettu hyvin vastaan ja se alkaa
        olla tuttu näky teekkaritapahtumissa, joihin liittyy laulua. Käytetyt tekniikat: TypeScript, React, Node.js,
        Express.
      `,
      image: rasputin,
      link: 'https://rasputin.fi'
    },
    {
      title: 'Web CV',
      description: `
        Tämän Reactin ja GitHub Pagesin avulla toteutetun web-pohjaisen CV:n tehtävänä oli alunperin esitellä omia
        projektejani, mutta lopulta tämä CV päätyi itsekin tänne projektiksi. #recursion
      `,
      link: 'https://github.com/iiroki/iiroki.github.io'
    },
    {
      title: 'Event Calendar Full Stack',
      description: `
        Ensimmäinen itse suunnittelemani ja toteuttamani full stack -web-sovellus, joka pohjautuu Full Stack 2020
        -kurssin harjoitustyöhöni. Projektin lähdekoodissa näkyy, että toteutushetkellä ollaan vielä opeteltu
        full stack -sovellusten kehittämistä, minkä vuoksi näin jälkiviisaana toteuttaisin monen asian toisin. Pidän
        projektia kuitenkin ylpeänä esillä muistutuksena siitä, että jostain on lähdetty liikkeelle :) Käytetyt
        tekniikat: JavaScript, React, Redux, Node.js, Express.
      `,
      image: eventCalendar,
      link: 'https://github.com/iiroki-projects/event-calendar-fullstack'
    }
  ],
  EXPERIENCE: {
    work: [
      {
        timeSpan: '2021/05 -',
        mainTitle: 'Insta',
        subTitle: 'Ohjelmistosuunnittelija Trainee',
        listItems: [
          'Ohjelmistokehitys (Java, Spring Beans, Maven, SQL)',
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
    organization: [
      {
        timeSpan: '2019 -',
        mainTitle: 'Koneenrakentajakilta',
        listItems: [
          'Puheenjohtaja 2021',
          'Varapuheenjohtaja 2020',
          'Tapahtumatoimihenkilö 2019'
        ],
        color: '#ff0000'
      }
    ]
  },
  EDUCATION: {
    school: [
      {
        timeSpan: '2021 -',
        mainTitle: 'Tampereen yliopisto',
        subTitle: 'Tietotekniikan diplomi-insinööri (120 op)',
        listItems: ['Pääaine: Ohjelmistotuotanto'],
        color: '#4e008e'
      },
      {
        timeSpan: '2017 - 2020',
        mainTitle: 'Tampereen yliopisto',
        subTitle: 'Konetekniikan kandidaatti (180 op)',
        listItems: [
          'Pääaine: Kone- ja tuotantotekniikka',
          'Sivuaine: Ohjelmistotekniikka'
        ],
        color: '#4e008e'
      },
      {
        timeSpan: '2013-2016',
        mainTitle: 'Seinäjoen lukio',
        subTitle: 'Ylioppilastutkinto + lukion oppimäärä'
      }
    ],
    other: [
      {
        timeSpan: '2020',
        mainTitle: 'Full Stack Open 2020'
      }
    ]
  },
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
