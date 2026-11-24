import childhood2011 from '../../assets/beginning/1.jpeg'
import childhood2012 from '../../assets/childhood/childhood-family.webp'
import chorale2023 from '../../assets/adolescence/chorale.jpg'
import concert2024 from '../../assets/adolescence/teen-stage.webp'
import psychology2025 from '../../assets/current/present-graduation.webp'
import cookies2026 from '../../assets/adolescence/cookies.jpg'

const timelineData = [
  {
    id: 1,
    year: '2011',
    age: '4 years old',
    title: 'A First Step Toward Excellence',
    description:
      'Delivered a speech for the whole pre-kindergarten batch as the Most Outstanding Student.',
    significance:
      'Standing on a stage with an entire crowd at just four years old was her first real test of courage. Earning this recognition set her confidence in her academic path and sparked an intrinsic drive for excellence that continues to mold how she approaches her studies and responsibilities today.',
    photos: [
      {
        src: childhood2011,
        caption: 'Her first experience standing before an audience.',
      },
    ],
    color: '#F6C4B5',
  },
  {
    id: 2,
    year: '2012',
    age: '6 years old',
    title: 'Becoming an Older Sister',
    description:
      'Stepping into the role of a “second caregiver” and developing a sense of responsibility upon the birth of her younger brother.',
    significance:
      'At six years old, her world expanded beyond her play routines. As the only daughter, her instinct was to step up and look after her brother, transforming her from a carefree child into a dependable older sister. This became the starting point of her nurturing instinct and established the early foundation of selflessness and responsibility that she carried in navigating the real-world demands she faces today.',
    photos: [
      {
        src: childhood2012,
        caption: 'A new chapter in her life as an older sister.',
      },
    ],
    color: '#FFF0C9',
  },
  {
    id: 3,
    year: '2023–2024',
    age: '16–17 years old',
    title: 'Finding Her Voice Again',
    description:
      'Stepping out of her shell to join their church chorale group, singing and performing at events before a large group of people.',
    significance:
      'After years of battling insecurities and retreating from social interactions—even fearing basic encounters like facing customers at their sari-sari store—this was the point where she finally had the courage to confront her vulnerability. Standing again on a stage made her slowly reclaim the confidence she had been burying for the past years and the voice she thought she had lost. It proved that even though her insecurities were still deep within her, they didn’t have to dictate her life.',
    photos: [
      {
        src: chorale2023,
        caption: 'Finding the courage to sing and perform again.',
      },
    ],
    color: '#B8CBAA',
  },
  {
    id: 4,
    year: '2024',
    age: '17 years old',
    title: 'A Concert to Remember',
    description:
      'Attending her first ever SEVENTEEN concert at 17 years old.',
    significance:
      'Beyond the coincidence of experiencing SEVENTEEN live at 17 years old, this concert was a personal breakthrough. For a long time, crowds had brought intense social anxiety, but standing inside the stadium packed with thousands of strangers and singing at the top of her lungs without hesitation made her feel free. This proved that the music that brought her comfort during the most isolated days of the pandemic had become her bridge to finally experience the joy in her teenage years.',
    photos: [
      {
        src: concert2024,
        caption: 'Experiencing the joy of a long-awaited concert.',
      },
    ],
    color: '#9ED8D9',
  },
  {
    id: 5,
    year: '2024–2025',
    age: '17–18 years old',
    title: 'A Change in Direction',
    description:
      'Letting go of her ambition to pursue nursing and pivot into psychology.',
    significance:
      'For her whole high school years, her entire academic path—starting from her choice to take the STEM strand in senior high school—was built around her aspiration to pursue nursing. Letting go of that dream after an incident that made her doubt everything about herself was a painful and disorienting decision. While she will always be haunted by the thought of pursuing nursing, choosing Psychology made her learn that redirections do not equate to failure, but rather a renewed sense of purpose.',
    photos: [
      {
        src: psychology2025,
        caption: 'Embracing a new academic path and purpose.',
      },
    ],
    color: '#CBB6E8',
  },
  {
    id: 6,
    year: '2025–2026',
    age: '18–19 years old',
    title: 'Turning a Hobby Into Something More',
    description:
      'Starting her own cookie business to begin earning independently.',
    significance:
      'What once started as a teenage hobby evolved into a tangible way to somehow earn on her own rather than relying solely on her parents. Starting this business, managing orders, handling interactions with customers, while balancing the transition and demands of college was far from easy, but it proved to herself that she could actively build her own autonomy.',
    photos: [
      {
        src: cookies2026,
        caption: 'A small hobby growing into an independent venture.',
      },
    ],
    color: '#F4B99D',
  },
]

export default timelineData