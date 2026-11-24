import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  Baby,
  BookOpen,
  GraduationCap,
  Heart,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
  Camera,
  Clock3,
  Compass,
  Flower2,
} from 'lucide-react'
import newbornPhoto from '../assets/beginning/1 (1).jpg'
import babyPortraitPhoto from '../assets/beginning/IMG_20261107_125441_678.jpg'
import appetitePhoto from '../assets/beginning/Katakawan.jpg'
import toddlerFlowerPhoto from '../assets/beginning/LAST.jpg'
import miloPhoto from '../assets/beginning/milo ulit.jpg'
import pillowsPhoto from '../assets/beginning/nakaupo pero nakapalibot unan.jpg'
import miloFamilyPhoto from '../assets/beginning/pic with milo and kaaway.jpg'
import childhoodSwimmingPhoto from '../assets/childhood/childhood-swimming.webp'
import childhoodGraduationPhoto from '../assets/childhood/childhood-graduation.webp'
import childhoodPortraitPhoto from '../assets/childhood/childhood-portrait.webp'
import childhoodFamilyPhoto from '../assets/childhood/childhood-family.webp'
import childhoodToyGunPhoto from '../assets/childhood/childhood-toy-gun.webp'
import teenStagePhoto from '../assets/adolescence/teen-stage.webp'
import teenPortraitPhoto from '../assets/adolescence/teen-portrait.webp'
import teenOutdoorPhoto from '../assets/adolescence/teen-outdoor.webp'
import teenSchoolPhoto from '../assets/adolescence/teen-schooldays.webp'
import teenSiblingsPhoto from '../assets/adolescence/teen-siblings.webp'
import teenReflectionPhoto from '../assets/adolescence/teen-reflection.webp'
import choralePhoto from '../assets/adolescence/chorale.jpg'
import cookiesPhoto from '../assets/adolescence/cookies.jpg'
import presentPortraitPhoto from '../assets/current/present-portrait.webp'
import presentAdulthoodPhoto from '../assets/current/present-adulthood.webp'
import presentGraduationPhoto from '../assets/current/present-graduation.webp'
import presentHilltopPhoto from '../assets/current/present-hilltop.webp'
import presentFriendsPhoto from '../assets/current/present-friends.webp'
import presentMountainsPhoto from '../assets/current/present-mountains.webp'

const eras = [
  {
    id: 'beginning',
    number: '01',
    title: 'My Beginning',
    subtitle: 'Where it all began',
    age: 'Conception – 2 years',
    icon: Baby,
    color: '#F6C4B5',
    accent: '#B87569',
    background: 'from-[#FBE1D8] to-[#F6C4B5]',
    description:
      'Every journey has a beginning. This chapter explores the earliest moments of life, from birth and infancy to the first little milestones.',
    sections: [
      {
        icon: Heart,
        title: 'The Story of My Birth',
        prompt: 'Add the story of your birth, what your family remembers, and the stories shared by your caregivers.',
        photo: 'Add a baby or family photograph',
      },
      {
        icon: Baby,
        title: 'My First Milestones',
        prompt: 'Document early physical milestones such as sitting, crawling, standing, and taking those first steps.',
        photo: 'Add a childhood milestone photograph',
      },
      {
        icon: BookOpen,
        title: 'My First Words',
        prompt: 'Share what you first learned to say, how you communicated, and how your language developed.',
        photo: 'Add a photograph from infancy',
      },
      {
        icon: Heart,
        title: 'The People Who Cared for Me',
        prompt: 'Describe the caregivers who looked after you and the early bonds that helped you feel safe and loved.',
        photo: 'Add a family or caregiver photograph',
      },
    ],
  },
  {
    id: 'childhood',
    number: '02',
    title: 'My Childhood Years',
    subtitle: 'A world of discoveries',
    age: 'Early & Middle Childhood',
    icon: Heart,
    color: '#B8CBAA',
    accent: '#66815D',
    background: 'from-[#E4EEDC] to-[#B8CBAA]',
    description:
      'A time of curiosity, play, friendships, and discovery. This chapter captures the experiences that shaped childhood.',
    sections: [
      {
        icon: GraduationCap,
        title: 'My School Days',
        prompt: 'Write about your early school experiences, favorite subjects, teachers, and the things you learned.',
        photo: 'Add a school photograph',
      },
      {
        icon: Heart,
        title: 'Family, Friends & Play',
        prompt: 'Recall childhood memories, favorite games, friendships, family traditions, and meaningful experiences.',
        photo: 'Add a family or friends photograph',
      },
      {
        icon: BookOpen,
        title: 'Growing and Learning',
        prompt: 'Describe how your thinking, language, reading, writing, and problem-solving skills developed.',
        photo: 'Add a photograph from this stage',
      },
      {
        icon: Sparkles,
        title: 'Finding My Confidence',
        prompt: 'Share experiences that helped you become more independent, confident, and socially aware.',
        photo: 'Add a memorable childhood photograph',
      },
    ],
  },
  {
    id: 'teenage',
    number: '03',
    title: 'My Teenage Years',
    subtitle: 'Finding my own way',
    age: 'Adolescence',
    icon: GraduationCap,
    color: '#AABCE8',
    accent: '#6177B4',
    background: 'from-[#E0E7FA] to-[#AABCE8]',
    description:
      'A chapter of change, self-discovery, and growing independence. Explore the experiences that influenced identity and perspective.',
    sections: [
      {
        icon: Sparkles,
        title: 'Changes Within Me',
        prompt: 'Reflect on the physical, emotional, and cognitive changes you experienced during adolescence. Share only what you are comfortable with.',
        photo: 'Add a photograph from your teenage years',
      },
      {
        icon: Heart,
        title: 'People Who Shaped Me',
        prompt: 'Describe how friendships, family relationships, and peer experiences influenced you.',
        photo: 'Add a photograph with friends or family',
      },
      {
        icon: BookOpen,
        title: 'Discovering Who I Am',
        prompt: 'Write about your developing identity, personal values, interests, and the choices that helped shape you.',
        photo: 'Add a personal or school photograph',
      },
      {
        icon: Sparkles,
        title: 'Challenges & Turning Points',
        prompt: 'Share meaningful challenges, achievements, and experiences that changed how you saw yourself or the world.',
        photo: 'Add a photograph that represents this stage',
      },
    ],
  },
  {
    id: 'present',
    number: '04',
    title: 'My Present Self',
    subtitle: 'Still becoming',
    age: 'Emerging Adulthood',
    icon: Flower2,
    color: '#CBB6E8',
    accent: '#886BAE',
    background: 'from-[#EDE4F8] to-[#CBB6E8]',
    description:
      'The person I am today, shaped by everything that came before. This chapter looks at current goals, responsibilities, relationships, and dreams.',
    sections: [
      {
        icon: Sparkles,
        title: 'Who I Am Today',
        prompt: 'Describe your current identity, values, interests, strengths, and the person you are becoming.',
        photo: 'Add a recent photograph',
      },
      {
        icon: GraduationCap,
        title: 'Achievements & Responsibilities',
        prompt: 'Highlight accomplishments, responsibilities, and experiences that reflect your growing independence.',
        photo: 'Add an achievement or graduation photograph',
      },
      {
        icon: Heart,
        title: 'Relationships & Support',
        prompt: 'Reflect on the people who continue to support you and how your relationships have developed.',
        photo: 'Add a meaningful photograph',
      },
      {
        icon: BookOpen,
        title: 'My Goals & Future',
        prompt: 'Share your career interests, future goals, current challenges, and how you cope with them.',
        photo: 'Add a photograph that represents your aspirations',
      },
    ],
  },
]

function BeginningChapter({ onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] overflow-y-auto bg-[#FAFAF6]"
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.985 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chapter-title"
    >
      <div className="min-h-screen">
        <header className="relative overflow-hidden bg-[#F6C4B5]/35 px-5 pb-16 pt-8 sm:px-10 sm:pt-=10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#F6C4B5]/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#FFF0C9]/80 blur-3xl" />

          <div className="relative mx-auto max-w-5xl">
            <button
              type="button"
              onClick={onClose}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#34434A]/10 bg-white/80 px-5 py-3 text-sm font-medium text-[#34434A] shadow-sm transition hover:-translate-x-1 hover:bg-white"
            >
              <ArrowLeft size={17} />
              Back to My Era's
            </button>

            <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#9B7169]">
                  Chapter 01 · December 5, 2006
                </p>
                <h2 id="chapter-title" className="font-display text-5xl leading-[1.08] text-[#34434A] sm:text-6xl md:text-7xl">
                  My Beginning<span className="text-[#B87569]">.</span>
                </h2>
                <p className="mt-4 font-display text-2xl italic text-[#9B7169]">
                  Where it all began
                </p>
                <p className="mt-7 max-w-xl text-base leading-8 text-[#667174]">
                  Before I could make memories of my own, my family was already
                  collecting stories about me. Mine began with a long labor,
                  a big appetite, tiny milestones, and a little stuffed friend
                  named Milo.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-[#B87569]/20 bg-white/65 px-4 py-2 text-xs font-medium text-[#8F6259]">Second-born</span>
                  <span className="rounded-full border border-[#B87569]/20 bg-white/65 px-4 py-2 text-xs font-medium text-[#8F6259]">Only daughter</span>
                  <span className="rounded-full border border-[#B87569]/20 bg-white/65 px-4 py-2 text-xs font-medium text-[#8F6259]">0–2 years old</span>
                </div>
              </div>

              <motion.figure
                initial={{ opacity: 0, rotate: 4, y: 18 }}
                animate={{ opacity: 1, rotate: 2, y: 0 }}
                transition={{ delay: 0.15, duration: 0.65 }}
                className="mx-auto w-full max-w-sm rotate-2 rounded-[1.5rem] bg-white p-3 pb-5 shadow-[0_24px_65px_rgba(52,67,74,0.16)]"
              >
                <img src={newbornPhoto} alt="Newborn baby resting in a hospital bassinet" className="aspect-[4/5] w-full rounded-xl object-cover" />
                <figcaption className="px-2 pt-4 text-center font-display text-lg italic text-[#7C8585]">
                  The little girl who took her time arriving.
                </figcaption>
              </motion.figure>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-5xl space-y-20 px-5 py-16 sm:px-10 sm:py-24">
          <section className="grid items-center gap-9 md:grid-cols-[0.9fr_1.1fr]">
            <figure className="relative mx-auto w-full max-w-md -rotate-2 rounded-2xl bg-white p-3 pb-5 shadow-[0_16px_45px_rgba(52,67,74,0.10)]">
              <img src={newbornPhoto} alt="Newborn photograph from the day of birth" className="aspect-[4/3] w-full rounded-xl object-cover" />
              <figcaption className="px-2 pt-3 text-center font-display text-base italic text-[#7C8585]">December 5, 2006</figcaption>
            </figure>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#B87569]">01 · The day I arrived</p>
              <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">A dramatic entrance</h3>
              <div className="mt-5 space-y-4 text-sm leading-8 text-[#667174] sm:text-base">
                <p>
                  Hearing my birth story growing up, I learned that I had quite
                  an exhausting and dramatic arrival. I was the second-born and
                  the only daughter in the family, welcomed on December 5, 2006,
                  after a 36-hour labor.
                </p>
                <p>
                  According to family lore, I was far too comfortable asleep in
                  my mom's womb—apparently too lazy to face the outside world.
                  An emergency cesarean was almost called, but fortunately, I
                  made it through normal delivery with no complications. Let's
                  just gloss over the fact that my umbilical cord was wrapped
                  around my neck.
                </p>
              </div>
              <div className="mt-7 rounded-2xl border-l-4 border-[#D9A397] bg-[#F6C4B5]/20 px-5 py-4">
                <p className="font-display text-xl italic text-[#8F6259]">“36 hours of waiting for one little arrival.”</p>
                <p className="mt-1 text-xs text-[#9B7169]">A story my family kept telling</p>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] bg-[#FFF0C9]/55 p-6 sm:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#A17D42]">02 · A little bundle of appetite</p>
                <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">Always hungry, apparently.</h3>
                <p className="mt-5 text-sm leading-8 text-[#667174] sm:text-base">
                  As an infant, I had an insatiable appetite. My mother used to
                  say, “Manyuka ne, ali ya pa rin bisang tuknang dumedi.” I would
                  demand to be fed—even to the point of regurgitating. It seems
                  I had a very strong opinion about mealtime from the very start.
                </p>
              </div>
              <figure className="mx-auto w-full max-w-sm rotate-2 rounded-2xl bg-white p-3 pb-5 shadow-[0_16px_45px_rgba(52,67,74,0.12)]">
                <img src={appetitePhoto} alt="Baby photograph associated with the family story about feeding" className="aspect-[4/5] w-full rounded-xl object-cover" />
                <figcaption className="px-2 pt-3 text-center font-display text-base italic text-[#7C8585]">A very hungry little one.</figcaption>
              </figure>
            </div>
          </section>

          <section>
            <div className="mb-9 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#7C8585]">03 · Growing at my own pace</p>
              <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">Little steps, big beginnings</h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#7C8585]">
                During my first two years, I slowly discovered how to move,
                explore, and communicate with the world around me.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <figure className="rounded-[1.7rem] bg-white p-3 shadow-[0_14px_40px_rgba(52,67,74,0.08)]">
                <img src={pillowsPhoto} alt="Baby sitting with pillows and stuffed toys around her" className="aspect-[4/3] w-full rounded-[1.2rem] object-cover" />
                <figcaption className="px-3 pb-2 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B87569]">4 months old</span>
                  <p className="mt-1 font-display text-xl text-[#34434A]">Learning to sit</p>
                  <p className="mt-2 text-sm leading-6 text-[#7C8585]">I began sitting with support, surrounded by pillows and stuffed toys. My fondness for plush companions was already beginning.</p>
                </figcaption>
              </figure>
              <figure className="rounded-[1.7rem] bg-white p-3 shadow-[0_14px_40px_rgba(52,67,74,0.08)]">
                <img src={babyPortraitPhoto} alt="Baby portrait from early childhood" className="aspect-[4/3] w-full rounded-[1.2rem] object-cover" />
                <figcaption className="px-3 pb-2 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B87569]">A little snapshot</span>
                  <p className="mt-1 font-display text-xl text-[#34434A]">The baby years</p>
                  <p className="mt-2 text-sm leading-6 text-[#7C8585]">I was actually bald, so my parents made every effort to dress me up and style my hair to make me look like a girl.</p>
                </figcaption>
              </figure>
            </div>

            <div className="relative mt-10 rounded-[1.7rem] border border-[#34434A]/[0.07] bg-white px-6 py-8 sm:px-10">
              <div className="absolute left-10 right-10 top-[3.15rem] hidden h-px bg-[#E8D4CC] sm:block" />
              <div className="grid gap-8 sm:grid-cols-3">
                {[
                  { age: '4 months', title: 'Sitting with support', detail: 'Pillows and stuffed toys helped surround me as I learned to sit.' },
                  { age: '6 months', title: 'On the move', detail: 'I began crawling and exploring the house.' },
                  { age: '18 months', title: 'Finding my words', detail: 'I began speaking in short phrases.' },
                ].map((milestone, index) => (
                  <div key={milestone.age} className="relative">
                    <span className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#F6C4B5] text-xs font-bold text-[#8F6259] shadow-sm">{index + 1}</span>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B87569]">{milestone.age}</p>
                    <h4 className="mt-2 font-display text-xl text-[#34434A]">{milestone.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-[#7C8585]">{milestone.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid items-center gap-9 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#B87569]">04 · My little companion</p>
              <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">A friend named Milo</h3>
              <p className="mt-5 text-sm leading-8 text-[#667174] sm:text-base">
                Among all my stuffed toys, one became especially meaningful:
                Milo. He was a freebie that came with my diapers, but he soon
                became more than just a toy. Milo was my emotional companion,
                and I kept him with me all the way into early adulthood.
                Something that began as a simple freebie became a little piece
                of comfort that stayed with me as I grew.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-[#9B7169]">
                <Heart size={17} fill="currentColor" />
                <span className="font-display text-lg italic">Some companions stay with us.</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <figure className="rotate-[-3deg] rounded-xl bg-white p-2 pb-4 shadow-[0_12px_35px_rgba(52,67,74,0.12)]">
                <img src={miloPhoto} alt="Childhood photograph with Milo the stuffed toy" className="aspect-[3/4] w-full rounded-lg object-cover" />
                <figcaption className="pt-3 text-center font-display text-sm italic text-[#7C8585]">Litol me</figcaption>
              </figure>
              <figure className="mt-8 rotate-[3deg] rounded-xl bg-white p-2 pb-4 shadow-[0_12px_35px_rgba(52,67,74,0.12)]">
                <img src={miloFamilyPhoto} alt="Childhood photograph with family and Milo" className="aspect-[3/4] w-full rounded-lg object-cover" />
                <figcaption className="pt-3 text-center font-display text-sm italic text-[#7C8585]">My kuya and Milo</figcaption>
              </figure>
              <figure className="col-span-2 mx-auto w-2/3 -rotate-2 rounded-xl bg-white p-2 pb-4 shadow-[0_12px_35px_rgba(52,67,74,0.12)] sm:w-1/2">
                <img src={toddlerFlowerPhoto} alt="Toddler childhood photograph holding a flower" className="aspect-[4/3] w-full rounded-lg object-cover" />
                <figcaption className="pt-3 text-center font-display text-sm italic text-[#7C8585]">A little piece of my early years</figcaption>
              </figure>
            </div>
          </section>

          <section className="overflow-hidden rounded-[2rem] bg-[#34434A] px-7 py-12 text-center text-white sm:px-12">
            <Sparkles className="mx-auto mb-4 text-[#F6C4B5]" size={25} />
            <p className="font-display text-3xl sm:text-4xl">And so, my story began.</p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">
              From a long-awaited arrival to the little milestones that followed,
              these first two years became the opening pages of a much longer
              journey. I was growing at my own pace, one little moment at a time.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#34434A] transition hover:-translate-y-0.5 hover:bg-[#FFF0C9]"
            >
              Return to the chapters <ArrowUpRight size={16} />
            </button>
          </section>
        </main>
      </div>
    </motion.div>
  )
}


function ChildhoodChapter({ onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] overflow-y-auto bg-[#FAFAF6]"
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.985 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chapter-title"
    >
      <div className="min-h-screen">
        <header className="relative overflow-hidden bg-[#B8CBAA]/40 px-5 pb-16 pt-8 sm:px-10 sm:pt-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#B8CBAA]/70 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#FFF0C9]/80 blur-3xl" />

          <div className="relative mx-auto max-w-5xl">
            <button
              type="button"
              onClick={onClose}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#34434A]/10 bg-white/80 px-5 py-3 text-sm font-medium text-[#34434A] shadow-sm transition hover:-translate-x-1 hover:bg-white"
            >
              <ArrowLeft size={17} />
              Back to My Era's
            </button>

            <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#66815D]">
                  Chapter 02 · Early & Middle Childhood
                </p>
                <h2 id="chapter-title" className="font-display text-5xl leading-[1.08] text-[#34434A] sm:text-6xl md:text-7xl">
                  My Childhood Years<span className="text-[#66815D]">.</span>
                </h2>
                <p className="mt-4 font-display text-2xl italic text-[#66815D]">
                  A world of discoveries
                </p>
                <p className="mt-7 max-w-xl text-base leading-8 text-[#667174]">
                  My childhood was filled with make-believe houses, summer
                  swimming, school achievements, familiar friendships, and
                  the first little responsibilities I chose to take on.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-[#66815D]/20 bg-white/65 px-4 py-2 text-xs font-medium text-[#58734F]">Play & imagination</span>
                  <span className="rounded-full border border-[#66815D]/20 bg-white/65 px-4 py-2 text-xs font-medium text-[#58734F]">Little achiever</span>
                  <span className="rounded-full border border-[#66815D]/20 bg-white/65 px-4 py-2 text-xs font-medium text-[#58734F]">Big sister at 6</span>
                </div>
              </div>

              <motion.figure
                initial={{ opacity: 0, rotate: 4, y: 18 }}
                animate={{ opacity: 1, rotate: 2, y: 0 }}
                transition={{ delay: 0.15, duration: 0.65 }}
                className="mx-auto w-full max-w-sm rotate-2 rounded-[1.5rem] bg-white p-3 pb-5 shadow-[0_24px_65px_rgba(52,67,74,0.16)]"
              >
                <img
                  src={childhoodGraduationPhoto}
                  alt="Childhood graduation portrait"
                  className="aspect-[4/5] w-full rounded-xl object-cover"
                  loading="lazy"
                />
                <figcaption className="px-2 pt-4 text-center font-display text-lg italic text-[#7C8585]">
                  A little student with big dreams.
                </figcaption>
              </motion.figure>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-5xl space-y-20 px-5 py-16 sm:px-10 sm:py-24">
          <section>
            <div className="mb-9 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#66815D]">01 · A world of our own</p>
              <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">My first playmate was Kuya.</h3>
              <p className="mt-5 text-sm leading-8 text-[#667174] sm:text-base">
                During my childhood years, my first-ever playmate was my Kuya.
                One of our favorite games was something we called “room-room,”
                our own version of bahay-bahayan. We divided our single bedroom
                into separate imaginary houses using extra blankets and pillows.
                With just a little creativity, our room became an entire
                neighborhood of our own.
              </p>
            </div>

            <div className="grid items-start gap-7 md:grid-cols-[1.05fr_0.95fr]">
              <figure className="rounded-[1.7rem] bg-white p-3 shadow-[0_14px_40px_rgba(52,67,74,0.08)]">
                <img
                  src={childhoodSwimmingPhoto}
                  alt="Childhood summer swimming memory with a playmate"
                  className="aspect-[4/3] w-full rounded-[1.2rem] object-cover"
                  loading="lazy"
                />
                <figcaption className="px-3 pb-2 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66815D]">Summer memories</span>
                  <p className="mt-1 font-display text-xl text-[#34434A]">Swimming season was the best season.</p>
                  <p className="mt-2 text-sm leading-6 text-[#7C8585]">
                    We counted down to summer vacation, when we could spend
                    hours splashing in our two-foot-deep inflatable pool,
                    fully geared up in our life vests.
                  </p>
                </figcaption>
              </figure>

              <div className="space-y-6">
                <div className="rounded-[1.7rem] bg-[#FFF0C9]/65 p-6 sm:p-7">
                  <p className="font-display text-2xl italic text-[#8A744B]">“Room-room”</p>
                  <p className="mt-3 text-sm leading-7 text-[#667174]">
                    Blankets became walls, pillows became boundaries, and
                    one bedroom became two imaginary homes.
                  </p>
                </div>
                <figure className="mx-auto w-full max-w-xs rotate-2 rounded-2xl bg-white p-3 pb-5 shadow-[0_16px_40px_rgba(52,67,74,0.10)]">
                  <img
                    src={childhoodToyGunPhoto}
                    alt="Childhood photograph holding a toy gun"
                    className="aspect-[4/5] w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                  <figcaption className="px-2 pt-3 text-center font-display text-base italic text-[#7C8585]">
                    Definitely not a doll kind of kid.
                  </figcaption>
                </figure>
                <p className="text-sm leading-7 text-[#667174]">
                  Looking through old photo albums, you would rarely find me
                  holding dolls—they actually terrified me. Instead, I was
                  often proudly gripping a toy gun and striking a salute.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] bg-[#E4EEDC]/75 p-6 sm:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
              <figure className="mx-auto w-full max-w-sm -rotate-2 rounded-2xl bg-white p-3 pb-5 shadow-[0_16px_45px_rgba(52,67,74,0.12)]">
                <img
                  src={childhoodGraduationPhoto}
                  alt="Graduation portrait from early schooling"
                  className="aspect-[4/5] w-full rounded-xl object-cover"
                  loading="lazy"
                />
                <figcaption className="px-2 pt-3 text-center font-display text-base italic text-[#7C8585]">
                  One of my earliest school milestones.
                </figcaption>
              </figure>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#66815D]">02 · The little achiever</p>
                <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">My school journey began early.</h3>
                <div className="mt-5 space-y-4 text-sm leading-8 text-[#667174] sm:text-base">
                  <p>
                    I first started school at four years old through a summer
                    pre-kindergarten program, where I began learning to read
                    three-letter words. Even at that young age, I was already
                    showing strength in my academics.
                  </p>
                  <p>
                    I was chosen as the Most Outstanding Student across our
                    batch and even delivered a speech. That recognition
                    continued into my formal schooling, where I was once again
                    selected upon graduating from preschool.
                  </p>
                </div>
                <div className="mt-7 rounded-2xl border-l-4 border-[#8DA77F] bg-white/75 px-5 py-4">
                  <p className="font-display text-xl italic text-[#58734F]">“A little voice, a proud moment.”</p>
                  <p className="mt-1 text-xs text-[#7C8585]">Remembering my first academic recognition</p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid items-center gap-9 md:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#66815D]">03 · Independent, but still a little anxious</p>
              <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">Learning to find my place.</h3>
              <p className="mt-5 text-sm leading-8 text-[#667174] sm:text-base">
                When it came to schoolwork, I usually completed my tasks
                independently, without needing help from adults. But behind
                that self-reliance was a more anxious little kid. Every first
                day of school, I would cry whenever my guardian disappeared
                from my sight.
              </p>
              <p className="mt-4 text-sm leading-8 text-[#667174] sm:text-base">
                Making friends gradually became easier as the years went by.
                In fourth grade, I met the core circle of friends I remain
                deeply connected with today. What began as childhood
                friendships became relationships that continued well beyond
                those school years.
              </p>
              <div className="mt-7 flex items-center gap-3 text-sm text-[#66815D]">
                <Heart size={17} fill="currentColor" />
                <span className="font-display text-lg italic">Some childhood friendships grow up with us.</span>
              </div>
            </div>
            <figure className="rounded-[1.7rem] bg-white p-3 shadow-[0_14px_40px_rgba(52,67,74,0.08)]">
              <img
                src={childhoodPortraitPhoto}
                alt="Childhood portrait"
                className="aspect-[4/5] w-full rounded-[1.2rem] object-cover"
                loading="lazy"
              />
              <figcaption className="px-3 pb-2 pt-4">
                <p className="font-display text-xl text-[#34434A]">Growing more confident, one school year at a time.</p>
                <p className="mt-2 text-sm leading-6 text-[#7C8585]">
                  Learning independence did not mean I never felt nervous.
                  Both sides were part of growing up.
                </p>
              </figcaption>
            </figure>
          </section>

          <section className="overflow-hidden rounded-[2rem] bg-[#FFF0C9]/65 p-6 sm:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_1fr]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#9A7B42]">04 · Learning to care</p>
                <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">Becoming a big sister.</h3>
                <p className="mt-5 text-sm leading-8 text-[#667174] sm:text-base">
                  At six years old, my sense of responsibility began to grow
                  with the birth of my younger brother. As the only daughter,
                  I instinctively felt that I needed to step up and help my
                  mother take care of him.
                </p>
                <p className="mt-4 text-sm leading-8 text-[#667174] sm:text-base">
                  Without being told, I took on the role of my baby brother's
                  second caregiver. It was an early lesson in nurturing and
                  looking after someone other than myself.
                </p>
              </div>
              <figure className="mx-auto w-full max-w-md rotate-2 rounded-2xl bg-white p-3 pb-5 shadow-[0_16px_45px_rgba(52,67,74,0.12)]">
                <img
                  src={childhoodFamilyPhoto}
                  alt="Childhood family photograph with siblings"
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                  loading="lazy"
                />
                <figcaption className="px-2 pt-3 text-center font-display text-base italic text-[#7C8585]">
                  A growing family, and a new role for me.
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="rounded-[2rem] bg-[#34434A] px-7 py-12 text-center text-white sm:px-12">
            <Sparkles className="mx-auto mb-4 text-[#B8CBAA]" size={25} />
            <p className="font-display text-3xl sm:text-4xl">Growing up meant discovering who I could be.</p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">
              I was a playful sister, a proud student, a sometimes-anxious
              child, a loyal friend, and a caring big sister. Each experience
              added another little piece to the person I was becoming.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#34434A] transition hover:-translate-y-0.5 hover:bg-[#FFF0C9]"
            >
              Return to the chapters <ArrowUpRight size={16} />
            </button>
          </section>
        </main>
      </div>
    </motion.div>
  )
}


function TeenageChapter({ onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] overflow-y-auto bg-[#FAFAF6]"
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.985 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chapter-title"
    >
      <div className="min-h-screen">
        <header className="relative overflow-hidden bg-[#AABCE8]/35 px-5 pb-16 pt-8 sm:px-10 sm:pt-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#AABCE8]/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#CBB6E8]/60 blur-3xl" />

          <div className="relative mx-auto max-w-5xl">
            <button
              type="button"
              onClick={onClose}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#34434A]/10 bg-white/80 px-5 py-3 text-sm font-medium text-[#34434A] shadow-sm transition hover:-translate-x-1 hover:bg-white"
            >
              <ArrowLeft size={17} />
              Back to My Era's
            </button>

            <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#6177B4]">
                  Chapter 03 · Adolescence
                </p>
                <h2 id="chapter-title" className="font-display text-5xl leading-[1.08] text-[#34434A] sm:text-6xl md:text-7xl">
                  My Teenage Years<span className="text-[#6177B4]">.</span>
                </h2>
                <p className="mt-4 font-display text-2xl italic text-[#6177B4]">
                  Finding my own way
                </p>
                <p className="mt-7 max-w-xl text-base leading-8 text-[#667174]">
                  These were years of learning to live with the stories I had
                  started believing about myself, while slowly discovering
                  interests, responsibilities, and the courage to try again.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-[#6177B4]/20 bg-white/65 px-4 py-2 text-xs font-medium text-[#53689F]">Self-discovery</span>
                  <span className="rounded-full border border-[#6177B4]/20 bg-white/65 px-4 py-2 text-xs font-medium text-[#53689F]">Family</span>
                  <span className="rounded-full border border-[#6177B4]/20 bg-white/65 px-4 py-2 text-xs font-medium text-[#53689F]">Finding courage</span>
                </div>
              </div>

              <motion.figure
                initial={{ opacity: 0, rotate: 3, y: 18 }}
                animate={{ opacity: 1, rotate: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.65 }}
                className="mx-auto w-full max-w-sm rotate-1 rounded-[1.5rem] bg-white p-3 pb-5 shadow-[0_24px_65px_rgba(52,67,74,0.16)]"
              >
                <img
                  src={teenPortraitPhoto}
                  alt="Portrait from my teenage years"
                  className="aspect-[4/5] w-full rounded-xl object-cover"
                />
                <figcaption className="px-2 pt-4 text-center font-display text-lg italic text-[#7C8585]">
                  A chapter of growing into myself.
                </figcaption>
              </motion.figure>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-5xl space-y-20 px-5 py-16 sm:px-10 sm:py-24">
          <section className="grid items-center gap-9 md:grid-cols-[1.05fr_0.95fr]">
            <div className="order-2 md:order-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#6177B4]">01 · The weight of other people's words</p>
              <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">Learning to see myself.</h3>
              <div className="mt-5 space-y-4 text-sm leading-8 text-[#667174] sm:text-base">
                <p>
                  This was the chapter when I became especially conscious of
                  myself. Compared with my peers, I was often seen as the
                  “big” kid, and that reality cast a long shadow over my
                  confidence—one that still influences how I carry myself
                  today.
                </p>
                <p>
                  Remarks and stares from family, relatives, and acquaintances
                  gradually became an echo I carried with me. My perception
                  of my body grew more difficult, reaching its lowest point
                  during the pandemic. Being alone with those thoughts, I
                  sometimes turned that pain inward and treated myself harshly.
                </p>
                <p>
                  It took time to understand how deeply those experiences had
                  affected the way I saw myself. This part of my story is not
                  about a quick transformation; it is about acknowledging
                  what I was carrying.
                </p>
              </div>
            </div>

            <figure className="order-1 mx-auto w-full max-w-md rotate-2 rounded-2xl bg-white p-3 pb-5 shadow-[0_16px_45px_rgba(52,67,74,0.12)] md:order-2">
              <img
                src={teenOutdoorPhoto}
                alt="Outdoor photograph from adolescence"
                className="aspect-[4/5] w-full rounded-xl object-cover"
                loading="lazy"
              />
              <figcaption className="px-2 pt-3 text-center font-display text-base italic text-[#7C8585]">
                Learning to make peace with the person in the picture.
              </figcaption>
            </figure>
          </section>

          <section className="rounded-[2rem] bg-[#E9EDF9] px-7 py-9 sm:px-10 sm:py-11">
            <div className="grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#6177B4]">02 · Behind my comfort zone</p>
                <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">When the outside world felt overwhelming.</h3>
              </div>
              <div className="space-y-4 text-sm leading-8 text-[#667174] sm:text-base">
                <p>
                  As my confidence declined, socializing became difficult.
                  I grew afraid of strangers, and even looking after our
                  family sari-sari store felt agonizing because it meant
                  facing customers. I withdrew into my own shell, believing
                  that staying hidden was the safest choice.
                </p>
                <p>
                  These experiences affected how freely I could interact with
                  other people. They became part of the challenge I would
                  eventually have to face as I grew older.
                </p>
              </div>
            </div>
          </section>

          <section className="grid items-center gap-9 md:grid-cols-[0.9fr_1.1fr]">
            <figure className="mx-auto w-full max-w-md -rotate-2 rounded-2xl bg-white p-3 pb-5 shadow-[0_16px_45px_rgba(52,67,74,0.12)]">
              <img
                src={teenSiblingsPhoto}
                alt="A photograph with my younger sibling"
                className="aspect-[4/3] w-full rounded-xl object-cover"
                loading="lazy"
              />
              <figcaption className="px-2 pt-3 text-center font-display text-base italic text-[#7C8585]">
                My brothers became an important part of my growing-up years.
              </figcaption>
            </figure>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#6177B4]">03 · A responsibility I grew into</p>
              <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">Growing up as a caregiver.</h3>
              <div className="mt-5 space-y-4 text-sm leading-8 text-[#667174] sm:text-base">
                <p>
                  Taking care of my younger brothers had gradually become
                  second nature to me. When my youngest brother was born,
                  that responsibility grew even more.
                </p>
                <p>
                  At just 12 years old, I helped look after both my
                  six-year-old brother and my months-old youngest brother,
                  especially when our parents were occupied. I learned to
                  be attentive to their needs and to help care for them
                  alongside the responsibilities of being a child myself.
                </p>
              </div>
            </div>
          </section>

          <section className="grid items-center gap-9 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#6177B4]">04 · Finding little joys</p>
              <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">Interests that made the days brighter.</h3>
              <div className="mt-5 space-y-4 text-sm leading-8 text-[#667174] sm:text-base">
                <p>
                  Thankfully, my teenage years were not defined only by
                  insecurities and responsibilities. I discovered an interest
                  in cooking and baking—activities that gave me something
                  enjoyable to learn and create.
                </p>
                <p>
                  My friends also introduced me to the world of K-pop, and
                  I became a fan of SEVENTEEN. Their music and the experience
                  of being part of a fandom became a memorable part of my
                  teenage years.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#F6C4B5]/60 px-4 py-2 text-xs font-medium text-[#805D56]">Cooking</span>
                <span className="rounded-full bg-[#FFF0C9] px-4 py-2 text-xs font-medium text-[#806D3D]">Baking</span>
                <span className="rounded-full bg-[#CBB6E8]/55 px-4 py-2 text-xs font-medium text-[#765E96]">SEVENTEEN</span>
              </div>
            </div>

            <div className="mx-auto grid w-full max-w-md grid-cols-2 items-center gap-3 sm:gap-4">
              <figure className="-rotate-2 rounded-2xl bg-white p-2 pb-4 shadow-[0_16px_45px_rgba(52,67,74,0.12)] sm:p-3 sm:pb-5">
                <img
                  src={teenStagePhoto}
                  alt="A memorable live-event atmosphere from my teenage years"
                  className="aspect-[4/5] w-full rounded-xl object-cover"
                  loading="lazy"
                />
                <figcaption className="px-1 pt-3 text-center font-display text-xs italic leading-5 text-[#7C8585] sm:text-sm">
                  Music and fandom.
                </figcaption>
              </figure>
              <figure className="translate-y-5 rotate-2 rounded-2xl bg-white p-2 pb-4 shadow-[0_16px_45px_rgba(52,67,74,0.12)] sm:p-3 sm:pb-5">
                <img
                  src={cookiesPhoto}
                  alt="Cookies from my teenage baking memories"
                  className="aspect-[4/5] w-full rounded-xl object-cover"
                  loading="lazy"
                />
                <figcaption className="px-1 pt-3 text-center font-display text-xs italic leading-5 text-[#7C8585] sm:text-sm">
                  Little things I loved making.
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="grid items-center gap-9 md:grid-cols-[0.9fr_1.1fr]">
            <figure className="mx-auto w-full max-w-md -rotate-2 rounded-2xl bg-white p-3 pb-5 shadow-[0_16px_45px_rgba(52,67,74,0.12)]">
              <img
                src={choralePhoto}
                alt="A chorale photograph from my teenage years"
                className="aspect-[4/5] w-full rounded-xl object-cover"
                loading="lazy"
              />
              <figcaption className="px-2 pt-3 text-center font-display text-base italic text-[#7C8585]">
                A reminder that I could stand in front of others.
              </figcaption>
            </figure>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#6177B4]">05 · Taking a step forward</p>
              <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">Fear did not get the final say.</h3>
              <div className="mt-5 space-y-4 text-sm leading-8 text-[#667174] sm:text-base">
                <p>
                  Near the end of this stage, I found the courage to slowly
                  step outside my comfort zone. I began trying things I had
                  once been too afraid to attempt, including standing on a
                  stage in front of a crowd again.
                </p>
                <p>
                  It did not erase every insecurity overnight, but it showed
                  me that fear did not have to make every decision for me.
                  Taking that step became proof that I could try, even while
                  still feeling uncertain.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 sm:grid-cols-2">
            <figure className="rounded-2xl bg-white p-3 pb-5 shadow-[0_12px_35px_rgba(52,67,74,0.08)]">
              <img
                src={teenSchoolPhoto}
                alt="A school-related photograph from my teenage years"
                className="aspect-[4/3] w-full rounded-xl object-cover"
                loading="lazy"
              />
              <figcaption className="px-2 pt-3 text-center font-display text-base italic text-[#7C8585]">
                The people and places that shaped this chapter.
              </figcaption>
            </figure>
            <figure className="rounded-2xl bg-white p-3 pb-5 shadow-[0_12px_35px_rgba(52,67,74,0.08)]">
              <img
                src={teenReflectionPhoto}
                alt="A quiet outdoor memory from my teenage years"
                className="aspect-[4/3] w-full rounded-xl object-cover"
                loading="lazy"
              />
              <figcaption className="px-2 pt-3 text-center font-display text-base italic text-[#7C8585]">
                Still growing, even when progress felt quiet.
              </figcaption>
            </figure>
          </section>

          <section className="rounded-[2rem] bg-[#34434A] px-7 py-12 text-center text-white sm:px-12">
            <Sparkles className="mx-auto mb-4 text-[#AABCE8]" size={25} />
            <p className="font-display text-3xl sm:text-4xl">I was still becoming, and that was enough to begin.</p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">
              My teenage years held insecurity, responsibility, friendship,
              new interests, and small acts of courage. I did not leave every
              fear behind, but I learned that I could move forward with it.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#34434A] transition hover:-translate-y-0.5 hover:bg-[#FFF0C9]"
            >
              Return to the chapters <ArrowUpRight size={16} />
            </button>
          </section>
        </main>
      </div>
    </motion.div>
  )
}


const collegePressures = [
  { icon: BookOpen, title: 'Academic demands' },
  { icon: Heart, title: 'Family problems' },
  { icon: Compass, title: 'Personal matters' },
]

const nowMilestones = [
  {
    label: 'Now, I earn',
    title: 'Making my own way',
    detail: 'I find ways to earn on my own instead of relying solely on my parents.',
  },
  {
    label: 'Now, I step out',
    title: 'Leaving my comfort zone',
    detail: 'Reaching my aspirations means stepping completely out of my comfort zone.',
  },
  {
    label: 'Now, I accept',
    title: 'Learning to compromise',
    detail: 'Not everything will turn out the way I want, and I am learning to accept that.',
  },
]

function PresentChapter({ onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] overflow-y-auto bg-[#FAFAF6]"
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.985 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chapter-title"
    >
      <div className="min-h-screen">
        <header className="relative overflow-hidden bg-[#CBB6E8] px-5 pb-16 pt-8 sm:px-10 sm:pt-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#CBB6E8]/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#F6C4B5]/60 blur-3xl" />

          <div className="relative mx-auto max-w-5xl">
            <button
              type="button"
              onClick={onClose}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#34434A]/10 bg-white/80 px-5 py-3 text-sm font-medium text-[#34434A] shadow-sm transition hover:-translate-x-1 hover:bg-white"
            >
              <ArrowLeft size={17} />
              Back to My Era's
            </button>

            <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#886BAE]">
                  Chapter 04 · Emerging Adulthood
                </p>
                <h2 id="chapter-title" className="font-display text-5xl leading-[1.08] text-[#34434A] sm:text-6xl md:text-7xl">
                  My Present Self<span className="text-[#886BAE]">.</span>
                </h2>
                <p className="mt-4 font-display text-2xl italic text-[#886BAE]">
                  Still becoming
                </p>
                <p className="mt-7 max-w-xl text-base leading-8 text-[#667174]">
                  Adulthood was the stage I feared most. It came with heavier
                  responsibilities, harder decisions, and a freedom that
                  carried its own weight. This is where I am now: still
                  learning, still growing, and still becoming.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-[#886BAE]/20 bg-white/65 px-4 py-2 text-xs font-medium text-[#775C9B]">Psychology student</span>
                  <span className="rounded-full border border-[#886BAE]/20 bg-white/65 px-4 py-2 text-xs font-medium text-[#775C9B]">Learning independence</span>
                  <span className="rounded-full border border-[#886BAE]/20 bg-white/65 px-4 py-2 text-xs font-medium text-[#775C9B]">Friends who stayed</span>
                </div>
              </div>

              <motion.figure
                initial={{ opacity: 0, rotate: 4, y: 18 }}
                animate={{ opacity: 1, rotate: 2, y: 0 }}
                transition={{ delay: 0.15, duration: 0.65 }}
                className="mx-auto w-full max-w-sm rotate-2 rounded-[1.5rem] bg-white p-3 pb-5 shadow-[0_24px_65px_rgba(52,67,74,0.16)]"
              >
                <img
                  src={presentMountainsPhoto}
                  alt="Making peace signs at a mountain viewpoint"
                  className="aspect-[4/5] w-full rounded-xl object-cover"
                />
                <figcaption className="px-2 pt-4 text-center font-display text-lg italic text-[#7C8585]">
                  Still becoming, one summit at a time.
                </figcaption>
              </motion.figure>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-5xl space-y-20 px-5 py-16 sm:px-10 sm:py-24">
          <section className="grid items-center gap-9 md:grid-cols-[1.05fr_0.95fr]">
            <div className="order-2 md:order-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#886BAE]">01 · The stage I feared</p>
              <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">Stepping into adulthood.</h3>
              <div className="mt-5 space-y-4 text-sm leading-8 text-[#667174] sm:text-base">
                <p>
                  This is the stage I have always feared stepping into.
                  Adulthood was a sensitive topic for me because it meant
                  heavier responsibilities in exchange for “greater freedom.”
                </p>
                <p>
                  But that freedom carries a greater burden, because every
                  decision, consequence, and responsibility now rests on my
                  shoulders.
                </p>
              </div>
              <div className="mt-7 rounded-2xl border-l-4 border-[#B7A0D6] bg-[#CBB6E8]/20 px-5 py-4">
                <p className="font-display text-xl italic text-[#775C9B]">“Greater freedom, and a greater weight to carry.”</p>
                <p className="mt-1 text-xs text-[#886BAE]">What adulthood means to me</p>
              </div>
            </div>

            <figure className="order-1 mx-auto w-full max-w-md rotate-2 rounded-2xl bg-white p-3 pb-5 shadow-[0_16px_45px_rgba(52,67,74,0.12)] md:order-2">
              <img
                src={presentAdulthoodPhoto}
                alt="Standing outdoors in a floral dress beside a building and plants"
                className="aspect-[4/5] w-full rounded-xl object-cover object-[54%_center]"
                loading="lazy"
              />
              <figcaption className="px-2 pt-3 text-center font-display text-base italic text-[#7C8585]">
                Walking into a stage I once feared.
              </figcaption>
            </figure>
          </section>

          <section className="rounded-[2rem] bg-[#CBB6E8]/35 p-6 sm:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
              <figure className="mx-auto w-full max-w-sm -rotate-2 rounded-2xl bg-white p-3 pb-5 shadow-[0_16px_45px_rgba(52,67,74,0.12)]">
                <img
                  src={presentPortraitPhoto}
                  alt="Portrait of me in a white uniform top"
                  className="aspect-[4/5] w-full rounded-xl object-cover object-top"
                  loading="lazy"
                />
                <figcaption className="px-2 pt-3 text-center font-display text-base italic text-[#7C8585]">
                  A psychology student, with nursing still in my heart.
                </figcaption>
              </figure>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#886BAE]">02 · A turning point</p>
                <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">From nursing to psychology.</h3>
                <div className="mt-5 space-y-4 text-sm leading-8 text-[#667174] sm:text-base">
                  <p>
                    For years, I was completely certain that nursing was the
                    field I would take. It was the main reason I chose the
                    STEM strand in senior high school.
                  </p>
                  <p>
                    Then an incident became a major turning point and made me
                    doubt whether I could continue pursuing that field. That
                    led me to choose psychology instead.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium">
                  <span className="rounded-full bg-white/80 px-4 py-2 text-[#775C9B]">STEM strand</span>
                  <span aria-hidden="true" className="text-[#B7A0D6]">→</span>
                  <span className="rounded-full bg-white/80 px-4 py-2 text-[#775C9B]">Nursing</span>
                  <span aria-hidden="true" className="text-[#B7A0D6]">→</span>
                  <span className="rounded-full bg-[#886BAE] px-4 py-2 text-white">Psychology</span>
                </div>
                <div className="mt-7 rounded-2xl border-l-4 border-[#B7A0D6] bg-[#CBB6E8] px-5 py-4">
                  <p className="font-display text-xl italic text-[#775C9B]">“Nursing will always be my TOTGA.”</p>
                  <p className="mt-1 text-xs text-[#7C8585]">The one that got away</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] bg-[#CBB6E8]/35 px-7 py-9 sm:px-10 sm:py-11">
            <div className="grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#886BAE]">03 · Life in college</p>
                <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">Everything at once, and still showing up.</h3>
              </div>
              <div className="space-y-4 text-sm leading-8 text-[#667174] sm:text-base">
                <p>
                  Now that I am in college, things are far from easy compared
                  to my earlier years. Academic demands, family problems, and
                  personal matters all come at once.
                </p>
                <p>
                  Yet I am grateful that I am able to manage all of it and
                  still continue to excel in my academics, even with greater
                  responsibilities on my shoulders.
                </p>
              </div>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {collegePressures.map((item) => {
                const PressureIcon = item.icon

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-2xl bg-white/80 px-5 py-4 shadow-[0_12px_35px_rgba(52,67,74,0.06)]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#CBB6E8]/45 text-[#886BAE]">
                      <PressureIcon size={19} strokeWidth={1.7} />
                    </span>
                    <span className="font-display text-lg text-[#34434A]">{item.title}</span>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 text-sm text-[#775C9B]">
              <GraduationCap size={18} />
              <span className="font-display text-lg italic">…and still excelling in my academics.</span>
            </div>
          </section>

          <section>
            <div className="grid items-center gap-9 md:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#886BAE]">04 · Things have changed</p>
                <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">I can’t lean on anyone the way I used to.</h3>
                <p className="mt-5 text-sm leading-8 text-[#667174] sm:text-base">
                  Things have fundamentally changed. I can no longer depend on
                  anyone the way I did when I was young, and I am learning
                  what it means to stand on my own two feet.
                </p>
              </div>

              <figure className="mx-auto w-full max-w-sm rotate-2 rounded-2xl bg-white p-3 pb-5 shadow-[0_16px_45px_rgba(52,67,74,0.12)]">
                <img
                  src={presentHilltopPhoto}
                  alt="Smiling on a hillside viewpoint with mountains and a clear sky behind"
                  className="aspect-[4/5] w-full rounded-xl object-cover object-bottom"
                  loading="lazy"
                />
                <figcaption className="px-2 pt-3 text-center font-display text-base italic text-[#7C8585]">
                  Learning to climb on my own.
                </figcaption>
              </figure>
            </div>

            <div className="relative mt-10 rounded-[1.7rem] bg-[#CBB6E8] px-6 py-8 sm:px-10">
              <div className="absolute left-10 right-10 top-[3.15rem] hidden h-px bg-[#886BAE]/25 sm:block" />
              <div className="grid gap-8 sm:grid-cols-3">
                {nowMilestones.map((milestone, index) => (
                  <div key={milestone.label} className="relative">
                    <span className="relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#EAE2F1] bg-[#CBB6E8] text-xs font-bold text-[#6B4F91] shadow-sm">{index + 1}</span>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#886BAE]">{milestone.label}</p>
                    <h4 className="mt-2 font-display text-xl text-[#34434A]">{milestone.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-[#667174]">{milestone.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid items-center gap-9 md:grid-cols-[0.9fr_1.1fr]">
            <figure className="mx-auto w-full max-w-sm -rotate-2 rounded-2xl bg-white p-3 pb-5 shadow-[0_16px_45px_rgba(52,67,74,0.12)]">
              <img
                src={presentFriendsPhoto}
                alt="Four friends at a graduation ceremony holding up their medals"
                className="aspect-[4/5] w-full rounded-xl object-cover"
                loading="lazy"
              />
              <figcaption className="px-2 pt-3 text-center font-display text-base italic text-[#7C8585]">
                Celebrating with the people who stayed.
              </figcaption>
            </figure>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#886BAE]">05 · The people who stayed</p>
              <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">The constant in my life.</h3>
              <div className="mt-5 space-y-4 text-sm leading-8 text-[#667174] sm:text-base">
                <p>
                  If there is one constant thing I hold dearly, it is my
                  long-time friends. Our priorities have shifted and our
                  schedules rarely line up, yet nothing about our
                  relationship has changed.
                </p>
                <p>
                  If anything, our bond has only grown stronger through it
                  all, and that is one of the things I am most deeply
                  grateful for.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-[#886BAE]">
                <Heart size={17} fill="currentColor" />
                <span className="font-display text-lg italic">Some bonds only grow stronger.</span>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-[2rem] bg-[#CBB6E8]/35 p-6 sm:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_1fr]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#886BAE]">06 · Looking ahead</p>
                <h3 className="font-display text-3xl text-[#34434A] sm:text-4xl">A new set of letters.</h3>
                <p className="mt-5 text-sm leading-8 text-[#667174] sm:text-base">
                  In the future, I hope to finally see RPm and RPsy attached
                  to my name, the exact same way I once envisioned having RN
                  and MD after it :&gt;
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-dashed border-[#C9BBDD] bg-white/55 px-5 py-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A59BB5]">Once pictured</p>
                    <p className="mt-1 font-display text-2xl text-[#A59BB5]">RN · MD</p>
                  </div>
                  <div className="rounded-2xl bg-white px-5 py-4 shadow-[0_12px_35px_rgba(52,67,74,0.10)]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#886BAE]">Now working toward</p>
                    <p className="mt-1 font-display text-2xl text-[#6B4F91]">RPm · RPsy</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-[#9A92A8]">Registered Psychometrician · Registered Psychologist</p>
              </div>

              <figure className="mx-auto w-full max-w-sm rotate-2 rounded-2xl bg-white p-3 pb-5 shadow-[0_16px_45px_rgba(52,67,74,0.12)]">
                <img
                  src={presentGraduationPhoto}
                  alt="Graduation portrait wearing a sash"
                  className="aspect-[4/5] w-full rounded-xl object-cover object-top"
                  loading="lazy"
                />
                <figcaption className="px-2 pt-3 text-center font-display text-base italic text-[#7C8585]">
                  Dreaming of the next graduation.
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="overflow-hidden rounded-[2rem] bg-[#34434A] px-7 py-12 text-center text-white sm:px-12">
            <Sparkles className="mx-auto mb-4 text-[#CBB6E8]" size={25} />
            <p className="font-display text-3xl sm:text-4xl">I’m still becoming, and the story isn’t finished.</p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">
              Adulthood still feels heavy some days, but I am earning, studying,
              stepping out of my comfort zone, and holding on to the people who
              matter. This chapter is still being written.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#34434A] transition hover:-translate-y-0.5 hover:bg-[#FFF0C9]"
            >
              Return to the chapters <ArrowUpRight size={16} />
            </button>
          </section>
        </main>
      </div>
    </motion.div>
  )
}



function ChapterView({ era, onClose }) {
  if (era.id === 'beginning') {
    return <BeginningChapter onClose={onClose} />
  }

  if (era.id === 'childhood') {
    return <ChildhoodChapter onClose={onClose} />
  }

  if (era.id === 'teenage') {
    return <TeenageChapter onClose={onClose} />
  }

  if (era.id === 'present') {
    return <PresentChapter onClose={onClose} />
  }

  const Icon = era.icon

  return (
    <motion.div
      className="fixed inset-0 z-[70] overflow-y-auto bg-[#FAFAF6]"
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.985 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chapter-title"
    >
      <div className="min-h-screen">
        <div className="relative overflow-hidden px-5 pb-14 pt-8 sm:px-10 sm:pt-10">
          <div
            className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full opacity-60 blur-3xl"
            style={{ backgroundColor: era.color }}
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
            style={{ backgroundColor: era.color }}
          />

          <div className="relative mx-auto max-w-5xl">
            <button
              type="button"
              onClick={onClose}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#34434A]/10 bg-white/75 px-5 py-3 text-sm font-medium text-[#34434A] shadow-sm transition hover:-translate-x-1 hover:bg-white"
            >
              <ArrowLeft size={17} />
              Back to My Era's
            </button>

            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#7C8585]">
                  Chapter {era.number} · {era.age}
                </p>
                <h2
                  id="chapter-title"
                  className="max-w-3xl font-display text-4xl leading-tight text-[#34434A] sm:text-5xl md:text-6xl"
                >
                  {era.title}
                  <span style={{ color: era.accent }}>.</span>
                </h2>
                <p className="mt-4 font-display text-xl italic text-[#7C8585] sm:text-2xl">
                  {era.subtitle}
                </p>
              </div>

              <div
                className="hidden h-24 w-24 items-center justify-center rounded-full md:flex"
                style={{ backgroundColor: `${era.color}80`, color: era.accent }}
              >
                <Icon size={42} strokeWidth={1.3} />
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#667174] sm:text-lg">
              {era.description}
            </p>

            <div className="mt-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#7C8585]">
              <span className="h-px w-10 bg-[#B8CBAA]" />
              The memories that made me
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-5 pb-24 sm:px-10">
          <div className="grid gap-5 md:grid-cols-2">
            {era.sections.map((section, index) => {
              const SectionIcon = section.icon

              return (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.07, duration: 0.45 }}
                  className="rounded-[2rem] border border-[#34434A]/[0.07] bg-white p-6 shadow-[0_12px_40px_rgba(52,67,74,0.045)] sm:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${era.color}75`, color: era.accent }}
                    >
                      <SectionIcon size={22} strokeWidth={1.7} />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#A4AAAA]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl text-[#34434A]">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#7C8585]">
                    {section.prompt}
                  </p>

                  <div className="mt-7 flex min-h-36 flex-col items-center justify-center rounded-2xl border border-dashed border-[#C8CECA] bg-[#FAFAF6] px-5 py-6 text-center">
                    <div
                      className="mb-3 flex h-10 w-10 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${era.color}75`, color: era.accent }}
                    >
                      <Camera size={18} />
                    </div>
                    <p className="text-xs font-medium text-[#7C8585]">
                      {section.photo}
                    </p>
                    <span className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#A4AAAA]">
                      Photo placeholder
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs text-[#A0A8A6]">
                    <Clock3 size={14} />
                    <span>Personal story and milestone details to be added</span>
                  </div>
                </motion.article>
              )
            })}
          </div>

          <div className="mt-12 rounded-[2rem] bg-[#34434A] px-7 py-9 text-center text-white sm:px-12 sm:py-12">
            <Sparkles className="mx-auto mb-4 text-[#F6C4B5]" size={25} />
            <p className="font-display text-2xl sm:text-3xl">
              Every little moment matters.
            </p>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-white/65">
              This chapter will grow with your stories, photographs, and the
              milestones that made this part of your journey meaningful.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#34434A] transition hover:-translate-y-0.5 hover:bg-[#FFF0C9]"
            >
              Return to the chapters
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Eras() {
  const [activeEra, setActiveEra] = useState(null)

  useEffect(() => {
    if (!activeEra) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveEra(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeEra])

  return (
    <section
      id="eras"                             //bg-[#F4B99D]
      className="relative overflow-hidden bg-[#fff1f1] px-5 py-24 sm:px-10 sm:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#F6C4B5]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#CBB6E8]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-20"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#34434A]/10 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7C8585]">
            <BookOpen size={14} />
            The chapters of my life
          </div>

          <h2 className="font-display text-4xl leading-tight text-[#34434A] sm:text-5xl md:text-6xl">
            My Era's<span className="text-[#C18F88]">.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#7C8585] sm:text-base">
            A collection of moments, memories, and milestones that tell the
            story of who I was, who I am, and who I am becoming.
          </p>

          <div className="mx-auto mt-8 h-px w-20 bg-[#D9B5A8]" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {eras.map((era, index) => {
            const Icon = era.icon

            return (
              <motion.button
                key={era.id}
                type="button"
                onClick={() => setActiveEra(era)}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -9, rotate: index % 2 === 0 ? -1 : 1 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#AABCE8]/60"
                aria-label={`Open chapter: ${era.title}`}
              >
                <div
                  className="relative min-h-[390px] overflow-hidden rounded-[1.7rem] p-5 shadow-[0_18px_45px_rgba(52,67,74,0.12)] transition-shadow duration-500 group-hover:shadow-[0_26px_55px_rgba(52,67,74,0.18)] sm:min-h-[420px] sm:p-6"
                  style={{
                    background: `linear-gradient(145deg, ${era.color}, ${era.color}B8)`,
                  }}
                >
                  <div className="pointer-events-none absolute inset-[7px] rounded-[1.3rem] border border-white/45" />

                  <div className="relative flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.3em]" style={{ color: era.accent }}>
                      CHAPTER {era.number}
                    </span>
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/35 text-[#34434A] transition-transform duration-500 group-hover:rotate-45"
                    >
                      <ArrowUpRight size={17} />
                    </span>
                  </div>

                  <div className="relative flex min-h-[205px] items-center justify-center sm:min-h-[225px]">
                    <div className="absolute h-40 w-40 rounded-full border border-white/35 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute h-32 w-32 rounded-full border border-white/35" />
                    <div
                      className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white/40 shadow-inner backdrop-blur-sm transition-transform duration-700 group-hover:scale-110"
                      style={{ color: era.accent }}
                    >
                      <Icon size={43} strokeWidth={1.25} />
                    </div>
                    <Sparkles
                      className="absolute right-[18%] top-[25%] text-white/80"
                      size={19}
                    />
                    <Sparkles
                      className="absolute bottom-[23%] left-[19%] text-white/70"
                      size={14}
                    />
                  </div>

                  <div className="relative">
                    <p
                      className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em]"
                      style={{ color: era.accent }}
                    >
                      {era.age}
                    </p>
                    <h3 className="max-w-[220px] font-display text-[1.7rem] leading-tight text-[#34434A] sm:text-3xl">
                      {era.title}
                    </h3>
                    <p className="mt-3 font-display text-base italic text-[#34434A]/65">
                      {era.subtitle}
                    </p>
                  </div>

                  <div className="relative mt-6 flex items-center justify-between border-t border-white/40 pt-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#34434A]/60">
                      Open this chapter
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/40 text-[#34434A] transition-all duration-300 group-hover:bg-white/75">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center font-display text-base italic text-[#9AA19E]"
        >
          Each chapter holds a piece of the person I am today.
        </motion.p>
      </div>

      <AnimatePresence>
        {activeEra && (
          <ChapterView
            key={activeEra.id}
            era={activeEra}
            onClose={() => setActiveEra(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Eras
