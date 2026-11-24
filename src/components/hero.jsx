
import { useEffect, useState } from 'react'
import {
  motion,
  animate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import homepagePhoto from '../assets/hero/homepage.webp'

const CHAIN = 150
const DROP_FROM = 1000

function Hero() {
  const [isDragging, setIsDragging] = useState(false)

  // Portrait drop animation
  const dropY = useMotionValue(-DROP_FROM)

  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)

  const tilt = useTransform(dragX, [-70, 0, 70], [-10, 0, 10])

  const rotation = useSpring(tilt, {
    stiffness: 110,
    damping: 9,
    mass: 0.9,
  })

  // Chain follows the pendant as it drops and moves.
  const chainEndY = useTransform(
    [dragY, dropY],
    ([y, drop]) => Math.max(0, CHAIN + y + drop)
  )

  const chainOpacity = useTransform(
    chainEndY,
    [0, 20],
    [0, 1]
  )

  const leftChain = useTransform(
    [dragX, chainEndY],
    ([x, y]) =>
      `M-35 0 C-35 ${y * 0.45} ${x - 35} ${y * 0.75} ${x} ${y}`
  )

  const rightChain = useTransform(
    [dragX, chainEndY],
    ([x, y]) =>
      `M35 0 C35 ${y * 0.45} ${x + 35} ${y * 0.75} ${x} ${y}`
  )

  // Drop the portrait after the headline begins appearing.
  useEffect(() => {
    const controls = animate(dropY, 0, {
      type: 'spring',
      stiffness: 35,
      damping: 8,
      mass: 1.2,
      delay: 1,
    })

    return () => controls.stop()
  }, [dropY])

  // Entrance animation variants
  const reveal = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const handleDragEnd = () => {
    setIsDragging(false)

    animate(dragX, 0, {
      type: 'spring',
      stiffness: 55,
      damping: 7,
      mass: 1,
    })

    animate(dragY, 0, {
      type: 'spring',
      stiffness: 55,
      damping: 8,
      mass: 1,
    })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FFF6E9] px-5 pb-10 pt-32 sm:px-10 sm:pt-36 lg:px-16"
    >
      {/* Pastel background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-peach/50 blur-[100px] sm:h-96 sm:w-96" />
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-lavender/40 blur-[100px] sm:h-112 sm:w-md" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-aqua/30 blur-[100px]" />
        <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-sage/30 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{
            duration: 0.9,
            ease: 'easeOut',
          }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-ink" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted sm:text-xs">
            A personal developmental journey
          </p>
        </motion.div>

        {/* Hero composition */}
        <div className="relative">
          {/* Main headline */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{
              staggerChildren: 0.25,
              delayChildren: 0.3,
            }}
            className="relative z-10"
          >
            <motion.p
              variants={reveal}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#C18F88] sm:text-sm"
            >
              C A N D I C E
            </motion.p>

            <motion.h1
              variants={reveal}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl font-body text-[clamp(3.5rem,9vw,8.5rem)] font-black leading-[0.9] tracking-[-0.075em] text-ink"
            >
              Every chapter
              <br />
              shapes{' '}
              <span className="font-display font-medium italic text-[#C18F88]">
                who
              </span>
              <br />
              we become.
            </motion.h1>
          </motion.div>

          {/* Hanging portrait pendant */}
          <div
            className="relative z-20 mx-auto mt-14 w-[58%] max-w-70 sm:mt-16 sm:w-[38%] sm:max-w-75 lg:absolute lg:right-[5%] lg:top-[-15%] lg:mt-0 lg:w-[28%] lg:max-w-80"
            style={{ paddingTop: CHAIN }}
          >
            {/* Animated chain */}
            <svg
              className="pointer-events-none absolute left-1/2 top-0 z-0 h-[700px] w-px overflow-visible"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="0" cy="2" r="7" fill="#A9824C" />
              <circle cx="0" cy="2" r="3.5" fill="#FFF0C9" />

              <motion.g style={{ opacity: chainOpacity }}>
                <motion.path
                  d={leftChain}
                  stroke="#A9824C"
                  strokeWidth="4"
                  strokeDasharray="1.5 5"
                  strokeLinecap="round"
                />

                <motion.path
                  d={leftChain}
                  stroke="#F6E3B9"
                  strokeWidth="1.2"
                  strokeDasharray="1.5 5"
                  strokeLinecap="round"
                />

                <motion.path
                  d={rightChain}
                  stroke="#C9A66B"
                  strokeWidth="4"
                  strokeDasharray="1.5 5"
                  strokeLinecap="round"
                />

                <motion.path
                  d={rightChain}
                  stroke="#F6E3B9"
                  strokeWidth="1.2"
                  strokeDasharray="1.5 5"
                  strokeLinecap="round"
                />
              </motion.g>
            </svg>

            {/* Pendant drop animation */}
            <motion.div
              style={{ y: dropY }}
              className="relative z-10"
            >
              {/* Draggable portrait */}
              <motion.div
                drag
                dragMomentum={false}
                dragElastic={0.12}
                dragConstraints={{
                  left: -65,
                  right: 65,
                  top: -45,
                  bottom: 65,
                }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                style={{
                  x: dragX,
                  y: dragY,
                  rotate: rotation,
                  transformOrigin: '50% 0%',
                  cursor: isDragging ? 'grabbing' : 'grab',
                }}
                className="relative touch-none select-none"
              >
                {/* Chain connector */}
                <div className="absolute -top-3 left-1/2 z-30 h-7 w-7 -translate-x-1/2 rounded-full border-[4px] border-[#C9A66B] bg-[#FFF0C9] shadow-sm" />

                {/* Peach frame */}
                <div className="absolute -inset-3 rotate-[-4deg] rounded-t-[45%] rounded-b-4xl bg-peach sm:-inset-4" />

                {/* Original portrait */}
                <div className="relative aspect-4/5 overflow-hidden rounded-t-[45%] rounded-b-4xl border-8 border-[#FFF6E9] shadow-xl">
                  <img
                    src={homepagePhoto}
                    alt="Portrait of Candice"
                    draggable="false"
                    className="h-full w-full object-cover object-[center_35%]"
                  />
                </div>

                {/* Floating caption */}
                <div className="pointer-events-none absolute -bottom-5 -left-8 z-30 rotate-[-4deg] rounded-xl bg-cream px-4 py-3 shadow-md sm:-left-12 sm:px-5 sm:py-4">
                  <p className="font-display text-base italic text-ink sm:text-lg">
                    Still becoming.
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-muted sm:text-[9px]">
                    A story in progress
                  </p>
                </div>

                {/* Sage accent */}
                <div className="pointer-events-none absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage shadow-sm sm:-right-7 sm:-top-7 sm:h-14 sm:w-14">
                  <Sparkles size={21} className="text-ink" />
                </div>
              </motion.div>
            </motion.div>

            <p className="mt-7 text-center text-[9px] font-medium uppercase tracking-[0.2em] text-muted">
              {isDragging
                ? 'Move your memories ✧'
                : 'Grab the portrait and move it'}
            </p>
          </div>

          {/* Supporting description */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{
              duration: 0.9,
              delay: 2.1,
              ease: 'easeOut',
            }}
            className="relative z-10 mt-14 max-w-md sm:mt-16 lg:mt-20"
          >
            <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
              A collection of memories, milestones, and experiences
              that shaped the person I am today — and the person
              I am still becoming.
            </p>

            <a
              href="#eras"
              className="group mt-7 inline-flex items-center gap-4 border-b border-ink/30 pb-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              Explore my journey

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Bottom details */}
        <div className="mt-20 flex items-center justify-between gap-4 border-t border-ink/15 pt-5">
          <p className="text-[9px] uppercase tracking-[0.15em] text-muted sm:text-xs sm:tracking-[0.2em]">
            Memories · Growth · Becoming
          </p>

          <a
            href="#eras"
            className="flex shrink-0 items-center gap-2 text-xs text-ink transition-colors hover:text-muted"
          >
            Explore
            <ArrowDown size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
