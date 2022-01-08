import rasputin from './assets/rasputin.png'

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
}

interface CurriculumVitae {
  readonly EXPERIENCE: TimelineItem[]
  readonly EDUCATION: TimelineItem[]
  readonly PROJECTS: CardItem[]
}

const CV: CurriculumVitae = {
  EXPERIENCE: [
    {
      timeSpan: '2021/05 -',
      mainTitle: 'Insta',
      subTitle: 'Ohjelmistosuunnittelija Trainee',
      listItems: [
        'Ohjelmistokehitys (Java)',
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
      subTitle: 'CNC-plasmaleikkaaja',
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
      description: 'Rasputin-teekkarilaulukirja...',
      image: rasputin
    }
  ]
}

export default CV
