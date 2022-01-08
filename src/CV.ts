import iiro from './assets/iiro_kiviluoma.jpg'
import rasputin from './assets/rasputin.png'

interface GeneralInfo {
  readonly name: string
  readonly description: string
  readonly image: string
}

interface TimelineItem {
  readonly timeSpan: string
  readonly mainTitle: string
  readonly subTitle?: string
  readonly listItems?: string[]
  readonly color?: string
}

interface CardItem {
  readonly title: string
  readonly description?: string
  readonly image?: string
  readonly link?: string
}

interface ContactInfo {
  readonly email: string
  readonly phoneNumber: string
  readonly address: string
}

interface CurriculumVitae {
  readonly GENERAL: GeneralInfo
  readonly EXPERIENCE: TimelineItem[]
  readonly EDUCATION: TimelineItem[]
  readonly PROJECTS: CardItem[]
}

const CV: CurriculumVitae = {
  GENERAL: {
    name: 'Iiro Kiviluoma',
    description: `
      Hei! Olen 24-vuotias tietotekniikan DI-opiskelija Tampereelta ja tavoitteenani on kasvaa
      ohjelmistotuotannon rautaiseksi ammattilaiseksi. Tällä hetkellä teen myös oman alan töitä
      opintojeni ohella ja vapaa-aikaani olen käyttänyt omien, lähinnä web-pohjaisten,
      ohjelmistoprojektien väsäämiseen.
    `,
    image: iiro
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
  EDUCATION: [],
  PROJECTS: [
    {
      title: 'Rasputin',
      description: `
        Rasputin-teekkarilaulukirja on Tampereen teekkariyhteisössä laajalti käytössä oleva laulukirja,
        jolle toteutin full stack -web-sovelluksen. Toteutus sisältää palvelimen ja kaksi käyttöliittymää:
        varsinainen laulukirja ja sisällön hallintapaneeli. Käytetyt tekniikat: TypeScript, React, Redux,
        Node.js, Express.
      `,
      image: rasputin,
      link: 'https://rasputin.fi'
    }
  ]
}

export default CV
