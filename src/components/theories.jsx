import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Flower2,
  Heart,
  Leaf,
  Layers3,
  Sparkles,
} from 'lucide-react'

import winnicottPhoto from '../assets/theories/Donald_Winnicott.jpg'
import eriksonPhoto from '../assets/theories/Erik_Erikson.jpg'
import bronfenbrennerPhoto from '../assets/theories/bronfenbrenner.jpg'

const theories = [
  {
    id: 'winnicott',
    number: '01',
    name: 'Donald Winnicott',
    theory: 'Transitional Object Theory',
    short: 'The comfort we carry with us',
    image: winnicottPhoto,
    imageAlt: 'Portrait of Donald Winnicott',
    theme: {
      surface: '#F8E4DC',
      accent: '#B87569',
      soft: '#FBEFE9',
      line: '#E9C8BD',
      glow: 'rgba(222, 164, 147, 0.30)',
    },
    icon: Heart,
    overview:
      'Winnicott (1953) coined the term “transitional object” to describe infants’ and young children’s early intense attachment to physical items—such as a blanket, pillow, or stuffed toy—as they slowly outgrow the belief that their caregiver is an extension of themselves. Instead, they recognize that a caregiver is a separate person who is not always instantly available. This object helps a child self-soothe and serves as a source of comfort and care, supporting early independence.',
    experiences: [
      {
        title: 'My lifelong attachment to my plush toy, Milo',
        body:
          'From infancy all the way to early adulthood, a freebie stuffed toy, Milo, has been my emotional companion. Being surrounded with different plush toys during my infancy stage, Milo functioned as my transitional object since then. Every time I slept, ate, and played, Milo always had to be beside me. Its presence helped me feel safe even when my primary caregivers were not around.',
      },
    ],
    reflection:
      'Through the lens of Winnicott’s Theory, I came to understand that early attachments are not limited to caregivers, as physical objects can also provide comfort and a sense of security. My lifelong attachment to Milo served as an enduring and healthy way for me to self-soothe and carry the familiar sense of safety as I grew more independent. Rather than perceiving this early attachment as something childish that I have to outgrow, this theory helps me recognize that transitional objects serve as an emotional anchor I can hold onto whenever life feels overwhelming.',
  },
  {
    id: 'erikson',
    number: '02',
    name: 'Erik Erikson',
    theory: 'Psychosocial Theory',
    short: 'The stages that shape who we become',
    image: eriksonPhoto,
    imageAlt: 'Portrait of Erik Erikson',
    theme: {
      surface: '#E9E7F6',
      accent: '#8173B0',
      soft: '#F2F0FA',
      line: '#D2CBEA',
      glow: 'rgba(165, 153, 211, 0.30)',
    },
    icon: Flower2,
    overview:
      'Erikson’s Psychosocial Theory (1950) posits that our development passes through eight stages, with each stage having a central psychosocial conflict that must be resolved. The successful resolution of these conflicts results in the development of a core virtue, whereas unresolved tensions affect the succeeding stages that can hinder healthy development. These stages follow the epigenetic principle, which states that development unfolds in a sequential order where each new stage is built upon the foundation of stages that have passed before it.',
    experiences: [
      {
        title: 'Delivering a graduation address before my entire pre-kindergarten batch as the chosen Most Outstanding Student',
        body:
          'In Erikson’s play age, the basic conflict is initiative vs. guilt—the stage where children take initiative and assert control over their environment, which helps foster a deep sense of purpose. At the age of 4, it was a bold challenge for me to speak before a crowd, but as I took the microphone and spoke confidently, this is where initiative was illustrated, allowing my virtue of purpose to emerge. This sense of purpose became a bridge and laid a strong foundation for me to navigate the school age by instilling an early sense of academic drive that I carried into my succeeding school years.',
      },
      {
        title: 'Moving from my body image insecurities to reclaiming my spark again',
        body:
          'Erikson viewed the identity vs. role confusion stage as the crucial turning point of development. In my early teenage years, I was too confined by my insecurities that I did not give myself an opportunity to explore my identity in order to feel safe. With the unsolicited remarks and lingering stares, I deeply struggled to fit in nor feel accepted for who I was. However, towards the near end of my adolescence stage, I managed to find my spark and took small steps to try for the things I have missed out in my early teenage years. With that, I gradually built an authentic sense of self and the virtue of fidelity.',
      },
    ],
    reflection:
      'Through the lens of Erikson’s Theory, I came to understand that what I developed in my earlier years remains deep within me as I continuously navigate each developmental stage. Even when teenage insecurities temporarily buried my confidence, the sense of purpose I cultivated as a four year old still remained in me waiting to be tapped. As I managed to reclaim my voice and build a sense of self as I entered my early adulthood stage, there are still times when my teenage insecurities haunt me. But what I learned was that a successful development was never about completely erasing the negative feelings, rather, it is to make sure that my strengths outweigh my doubts.',
  },
  {
    id: 'bronfenbrenner',
    number: '03',
    name: 'Urie Bronfenbrenner',
    theory: 'Ecological Systems Theory',
    short: 'The environments that influence our path',
    image: bronfenbrennerPhoto,
    imageAlt: 'Portrait of Urie Bronfenbrenner',
    theme: {
      surface: '#E5EDDF',
      accent: '#66815D',
      soft: '#F0F5EC',
      line: '#C8D8BE',
      glow: 'rgba(156, 184, 137, 0.32)',
    },
    icon: Layers3,
    overview:
      'The Ecological Systems Theory by Bronfenbrenner (1979) describes development as shaped by the interconnected environmental systems that surround an individual, spanning from intimate relationships to a wider societal level which influences development. Bronfenbrenner arranged these systems depending on the amount of impact they have. These are: microsystem (immediate relationships), mesosystem (connections between microsystems), exosystem (external influences), macrosystem (cultural values and norms), and chronosystem (historical timing and life transitions)—all these systems operate and influence development simultaneously.',
    experiences: [
      {
        title: 'Letting go of nursing to pursue psychology',
        body:
          'A major chronosystem disruption altered the trajectory that I had been building since my high school years. An unexpected incident served as a non-normative influence that shattered my confidence and forced me to abandon the dream of pursuing nursing. As I navigated into a redirected path in psychology, the grief still seeped through me whenever I thought about the life I could have lived if I was able to proceed with the trajectory I was carefully planning.',
      },
    ],
    reflection:
      'Through the lens of Bronfenbrenner’s Theory, I came to understand that our developmental paths are greatly influenced by our environment and circumstances. Unexpected shifts and altered paths as a result of chronosystem disruptions and non-normative influences may bring quiet surges of grief, but they never define failure. Recognizing that not every turning point is within my control and realizing that my microsystems constantly stood by me helped me release the self-blame and the constant what ifs that still linger within me.',
  },
]

const references = [
  {
    text: 'Guy-Evans, O. (2026). Bronfenbrenner’s Ecological Systems Theory. Simply Psychology.',
    url: 'https://www.simplypsychology.org/bronfenbrenner.html',
    link: 'simplypsychology.org/bronfenbrenner.html',
  },
  {
    text: 'Litt, C. J. (1986). Theories of Transitional Object Attachment: An Overview. International Journal of Behavioral Development, 9(3), 383–399.',
    url: 'https://doi.org/10.1177/016502548600900308',
    link: 'doi.org/10.1177/016502548600900308',
  },
  {
    text: 'Psychology, S. (2026, September 17). Erikson’s Stages of Development. Simply Psychology.',
    url: 'https://www.simplypsychology.org/erik-erikson.html',
    link: 'simplypsychology.org/erik-erikson.html',
  },
  {
    text: 'Simply Psychology. (2026, September 17). Chronosystem (Bronfenbrenner).',
    url: 'https://www.simplypsychology.org/bronfenbrenner-chronosystem.html',
    link: 'simplypsychology.org/bronfenbrenner-chronosystem.html',
  },
  {
    text: 'Writer, S. (2026, July 21). Transitional Objects: Why Your Child’s Blanket Matters. Chicago Psychoanalytic Institute.',
    url: 'https://chicagoanalysis.org/blog/psychoanalytic-principles/transitional-objects/',
    link: 'chicagoanalysis.org/blog/psychoanalytic-principles/transitional-objects/',
  },
]

function TheoryDetail({ theory, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[70] overflow-y-auto bg-[#FAFAF6]"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${theory.id}-detail-title`}
    >
      <div className="min-h-screen">
        <header
          className="relative overflow-hidden px-5 pb-14 pt-7 sm:px-10 sm:pb-20 sm:pt-9"
          style={{ backgroundColor: theory.theme.surface }}
        >
          <div
            className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full blur-3xl"
            style={{ backgroundColor: theory.theme.glow }}
          />
          <div
            className="pointer-events-none absolute -bottom-36 -left-24 h-80 w-80 rounded-full blur-3xl"
            style={{ backgroundColor: theory.theme.soft }}
          />

          <div className="relative mx-auto max-w-5xl">
            <button
              type="button"
              onClick={onClose}
              className="mb-9 inline-flex items-center gap-2 rounded-full border border-[#34434A]/10 bg-white/75 px-4 py-2.5 text-sm font-medium text-[#34434A] shadow-sm transition hover:-translate-x-1 hover:bg-white"
            >
              <ArrowLeft size={16} />
              Back to Theories
            </button>

            <div className="grid items-center gap-8 md:grid-cols-[1fr_220px] md:gap-12">
              <div>
                <p
                  className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] sm:text-xs"
                  style={{ color: theory.theme.accent }}
                >
                  Theory {theory.number} · Developmental Psychology
                </p>
                <h2
                  id={`${theory.id}-detail-title`}
                  className="max-w-3xl font-display text-4xl leading-[1.08] text-[#34434A] sm:text-5xl md:text-6xl"
                >
                  {theory.name}
                  <span style={{ color: theory.theme.accent }}>.</span>
                </h2>
                <p className="mt-4 font-display text-xl italic text-[#667174] sm:text-2xl">
                  {theory.theory}
                </p>
              </div>
              <div className="relative mx-auto w-40 sm:w-48 md:w-full">
                <div
                  className="absolute inset-2 rounded-[2rem] rotate-6"
                  style={{ backgroundColor: theory.theme.accent, opacity: 0.2 }}
                />
                <img
                  src={theory.image}
                  alt={theory.imageAlt}
                  className="relative aspect-[4/5] w-full rounded-[1.7rem] border-[6px] border-white/80 object-cover object-top shadow-xl"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-5 py-12 sm:px-10 sm:py-16">
          <section className="mb-12">
            <div className="mb-5 flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-2xl"
                style={{ backgroundColor: theory.theme.surface, color: theory.theme.accent }}
              >
                <BookOpen size={19} strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9AA19E]">
                  The concept
                </p>
                <h3 className="font-display text-2xl text-[#34434A] sm:text-3xl">
                  Understanding the theory
                </h3>
              </div>
            </div>
            <p className="rounded-[1.6rem] border border-[#34434A]/[0.07] bg-white p-6 text-[0.95rem] leading-8 text-[#667174] shadow-[0_12px_40px_rgba(52,67,74,0.04)] sm:p-8 sm:text-base">
              {theory.overview}
            </p>
          </section>

          <section className="mb-12">
            <div className="mb-6">
              <p
                className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em]"
                style={{ color: theory.theme.accent }}
              >
                My story · {theory.experiences.length === 1 ? 'A lived experience' : 'Lived experiences'}
              </p>
              <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">
                Where theory meets life
              </h3>
            </div>
            <div className="space-y-5">
              {theory.experiences.map((experience, index) => (
                <motion.article
                  key={experience.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative overflow-hidden rounded-[1.6rem] border bg-white p-6 shadow-[0_12px_40px_rgba(52,67,74,0.045)] sm:p-8"
                  style={{ borderColor: theory.theme.line }}
                >
                  <div
                    className="absolute bottom-0 left-0 top-0 w-1.5"
                    style={{ backgroundColor: theory.theme.accent }}
                  />
                  <div className="pl-2 sm:pl-3">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9AA19E]">
                      Experience {String(index + 1).padStart(2, '0')}
                    </p>
                    <h4 className="font-display text-xl leading-snug text-[#34434A] sm:text-2xl">
                      {experience.title}
                    </h4>
                    <p className="mt-4 text-sm leading-8 text-[#667174] sm:text-base">
                      {experience.body}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <div
              className="rounded-[1.8rem] p-6 sm:p-9"
              style={{ backgroundColor: theory.theme.soft }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/75"
                  style={{ color: theory.theme.accent }}
                >
                  <Sparkles size={19} />
                </span>
                <div>
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                    style={{ color: theory.theme.accent }}
                  >
                    Personal reflection
                  </p>
                  <h3 className="font-display text-2xl text-[#34434A] sm:text-3xl">
                    What this theory helped me understand
                  </h3>
                </div>
              </div>
              <p className="text-sm leading-8 text-[#59676A] sm:text-base">
                {theory.reflection}
              </p>
            </div>
          </section>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full border border-[#34434A]/10 bg-white px-6 py-3 text-sm font-medium text-[#34434A] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <ArrowLeft size={16} />
              Return to all theories
            </button>
          </div>
        </main>
      </div>
    </motion.div>
  )
}

function References() {
  return (
    <div className="mx-auto mt-16 max-w-5xl border-t border-[#34434A]/10 pt-8">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF0C9] text-[#9B8050]">
          <BookOpen size={17} />
        </span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9AA19E]">
            Sources & citations
          </p>
          <h3 className="font-display text-2xl text-[#34434A]">References</h3>
        </div>
      </div>
      <ol className="space-y-3 pl-5 text-xs leading-6 text-[#7C8585] sm:text-sm">
        {references.map((reference) => (
          <li key={reference.url} className="pl-1">
            {reference.text}{' '}
            <a
              href={reference.url}
              target="_blank"
              rel="noreferrer"
              className="break-all font-medium text-[#66818A] underline decoration-[#66818A]/30 underline-offset-4 transition hover:text-[#34434A]"
            >
              {reference.link}
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Theories() {
  const [activeTheory, setActiveTheory] = useState(null)

  return (
    <section
      id="theories"
      className="relative overflow-hidden bg-[#d8ebdc] px-5 py-20 sm:px-8 sm:py-28"
    >
      {/* Soft decorative shapes keep the yellow background warm, not flat. */}
      <div className="pointer-events-none absolute -left-32 top-16 -z-10 h-80 w-80 rounded-full bg-white/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-12 -z-10 h-96 w-96 rounded-full bg-[#F6C4B5]/35 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-[42%] -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#B8CBAA]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section 03 introduction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#34434A]/10 bg-white/55 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#66815D]" />
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#667174] sm:text-[10px]">
              Section 03 · Making sense of my story
            </p>
          </div>
          <h2 className="font-display text-4xl leading-[1.08] tracking-[-0.035em] text-[#34434A] sm:text-5xl md:text-6xl">
            The Theories Behind
            <span className="mt-1 block font-display italic text-[#8B7950]">My Becoming.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#59676A] sm:text-base sm:leading-8">
            The experiences that shaped me can also be understood through the ideas of developmental psychologists. Explore the people and theories that helped me see my own journey from a different perspective.
          </p>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3 text-[#8B7950]/70">
            <span className="h-px w-12 bg-current" />
            <Leaf size={17} strokeWidth={1.5} />
            <span className="h-px w-12 bg-current" />
          </div>
        </motion.div>

        {/* Three theorist cards */}
        <div className="grid items-stretch gap-5 md:grid-cols-3 md:gap-6">
          {theories.map((theory, index) => {
            const Icon = theory.icon

            return (
              <motion.button
                key={theory.id}
                type="button"
                onClick={() => setActiveTheory(theory)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.985 }}
                aria-label={`Explore ${theory.name}: ${theory.theory}`}
                className="group relative flex min-h-[490px] flex-col overflow-hidden rounded-[2rem] border border-[#34434A]/10 bg-[#FFFDF5] p-4 text-left shadow-[0_18px_55px_rgba(75,69,38,0.10)] transition-[box-shadow,transform] duration-500 hover:shadow-[0_28px_70px_rgba(75,69,38,0.18)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#34434A]/20 sm:min-h-[520px] sm:rounded-[2.2rem] sm:p-5"
              >
                {/* Card accent glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-70 blur-3xl transition-transform duration-700 group-hover:scale-125"
                  style={{ backgroundColor: theory.theme.glow }}
                />

                <div className="relative flex items-center justify-between px-1 pb-4">
                  <span
                    className="inline-flex items-center gap-2 rounded-full border bg-white/75 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em]"
                    style={{ borderColor: `${theory.theme.accent}35`, color: theory.theme.accent }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: theory.theme.accent }} />
                    Theory {theory.number}
                  </span>
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F0E4] text-[#34434A]/70 transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#34434A] group-hover:text-white"
                    aria-hidden="true"
                  >
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                {/* Portrait feature */}
                <div
                  className="relative mx-1 overflow-hidden rounded-[1.55rem] px-4 pt-5"
                  style={{ backgroundColor: theory.theme.surface }}
                >
                  <div
                    className="pointer-events-none absolute -left-8 -top-10 h-36 w-36 rounded-full border-[1px]"
                    style={{ borderColor: `${theory.theme.accent}35` }}
                  />
                  <div
                    className="pointer-events-none absolute -bottom-16 -right-8 h-48 w-48 rounded-full border-[1px]"
                    style={{ borderColor: `${theory.theme.accent}35` }}
                  />
                  <div className="relative mx-auto flex h-[205px] items-end justify-center sm:h-[220px]">
                    <div
                      className="absolute bottom-0 h-[82%] w-[72%] rounded-t-[48%]"
                      style={{ backgroundColor: `${theory.theme.accent}18` }}
                    />
                    <img
                      src={theory.image}
                      alt={theory.imageAlt}
                      loading="lazy"
                      className="relative z-10 h-[94%] max-w-[72%] rounded-t-[48%] object-cover object-top shadow-[0_12px_28px_rgba(52,67,74,0.16)] grayscale-[15%] transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                    />
                    <span
                      className="absolute bottom-4 right-[9%] z-20 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white bg-white shadow-md"
                      style={{ color: theory.theme.accent }}
                    >
                      <Icon size={18} strokeWidth={1.7} />
                    </span>
                  </div>
                </div>

                {/* Card title and theory */}
                <div className="relative px-2 pb-2 pt-6">
                  <p
                    className="mb-2 text-[9px] font-semibold uppercase tracking-[0.19em] sm:text-[10px]"
                    style={{ color: theory.theme.accent }}
                  >
                    {theory.short}
                  </p>
                  <h3 className="font-display text-[1.65rem] leading-[1.1] tracking-[-0.025em] text-[#34434A] sm:text-[1.8rem]">
                    {theory.name}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-[#667174] sm:text-sm">
                    {theory.theory}
                  </p>
                </div>

                <div className="relative mt-auto flex items-center justify-between border-t border-[#34434A]/10 px-2 pt-4">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.19em] text-[#667174]/80 sm:text-[10px]">
                    Discover the connection
                  </span>
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1"
                    style={{ backgroundColor: theory.theme.soft, color: theory.theme.accent }}
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </motion.button>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-10 text-center font-display text-base italic text-[#776D4C] sm:text-lg"
        >
          Different theories, different lenses, one unfolding story.
        </motion.p>

        <References />
      </div>

      <AnimatePresence>
        {activeTheory && (
          <TheoryDetail
            key={activeTheory.id}
            theory={activeTheory}
            onClose={() => setActiveTheory(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Theories

