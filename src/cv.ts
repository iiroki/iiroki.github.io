interface ExperienceTimelineItem {
  readonly timeSpan: string
  readonly company: string
  readonly title?: string
  readonly duties?: string[]
  readonly color?: string
}

interface EducationTimeLineItem {
  readonly timeSpan: string
  readonly school: string
}

interface Cv {
  readonly experience: ExperienceTimelineItem []
  readonly education: EducationTimeLineItem[]
}

const cv: Cv = {
  experience: [
    {
      timeSpan: '2021/05 -',
      company: 'Insta',
      title: 'Ohjelmistosuunnittelija Trainee',
      duties: [
        'Ohjelmistokehitys (Java)',
        'Ohjelmistosuunnittelu asiakasvaatimusten pohjalta'
      ],
      color: '#004b95'
    },
    {
      timeSpan: '2020/09 - 2021/05',
      company: 'Tampereen yliopisto',
      title: 'Kurssiassistentti',
      duties: [
        'Kurssit: Ohjelmointi 3: Tekniikat & Tietorakenteet ja algoritmit',
        'Viikkoharjoitusten pitäminen',
        'Harjoitustöiden tarkastaminen'
      ],
      color: '#4e008e'
    },
    {
      timeSpan: '2019/05 - 2019/09',
      company: 'Ferrum Steel',
      title: 'CNC-plasmaleikkaaja',
      color: '#ad0f0a'
    },
    {
      timeSpan: '2018/05 - 2018/09',
      company: 'Ferrum Steel',
      title: 'Tuotantotyöntekijä',
      color: '#ad0f0a'
    },
    {
      timeSpan: '2015/03 - 2016/12',
      company: 'Etelä-Pohjanmaan Osuuskauppa',
      title: 'Myyjä',
      color: '#18a949'
    }
  ],
  education: []
}

export default cv
