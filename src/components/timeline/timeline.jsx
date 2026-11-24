import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react'

import timelineData from './timelineData'

// Established website palette, assigned chronologically to the six milestones.
const milestoneColors = [
  '#F6C4B5', // peach
  '#FFF0C9', // cream
  '#B8CBAA', // sage
  '#9ED8D9', // aqua
  '#AABCE8', // blue
  '#CBB6E8', // lavender
]

function Timeline() {
  const [selectedMilestone, setSelectedMilestone] = useState(null)
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0)
  const [isPhotoOpen, setIsPhotoOpen] = useState(false)

  const openMilestone = (milestone) => {
    setSelectedMilestone(milestone)
    setSelectedPhotoIndex(0)
    setIsPhotoOpen(false)
  }

  const closeMilestone = () => {
    setIsPhotoOpen(false)
    setSelectedMilestone(null)
  }

  const openPhoto = () => {
    setIsPhotoOpen(true)
  }

  const closePhoto = () => {
    setIsPhotoOpen(false)
  }

  const changePhoto = (direction) => {
    if (!selectedMilestone) return

    const photos = selectedMilestone.photos

    setSelectedPhotoIndex((current) => {
      return (current + direction + photos.length) % photos.length
    })
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (isPhotoOpen) {
          closePhoto()
        } else if (selectedMilestone) {
          closeMilestone()
        }
      }

      if (isPhotoOpen && event.key === 'ArrowRight') {
        changePhoto(1)
      }

      if (isPhotoOpen && event.key === 'ArrowLeft') {
        changePhoto(-1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isPhotoOpen, selectedMilestone])

  const currentPhoto = selectedMilestone?.photos[selectedPhotoIndex]

  return (
    <>
      {/* MAIN TIMELINE */}
      <section
        id="timeline"
        className="relative overflow-hidden bg-[#D9EEEE] px-5 py-24 sm:px-10 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-20 max-w-3xl text-center"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#34434A]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7C8585]">
              <CalendarDays size={14} />
              Section 04
            </span>

            <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#34434A] sm:text-5xl md:text-6xl">
              My Developmental Timeline
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#7C8585] sm:text-base">
              Every experience, every challenge, and every little achievement
              has played a part in shaping the person I am today.
            </p>

            <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-[#F6C4B5]" />
          </motion.div>

          {/* Timeline entries */}
          <div className="relative mx-auto max-w-5xl">
            {/* Vertical timeline line */}
            <div className="absolute bottom-8 left-[19px] top-8 w-px bg-[#34434A]/15 sm:left-1/2 sm:-translate-x-1/2" />

            <div className="space-y-10 sm:space-y-14">
              {timelineData.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`relative flex items-start pl-12 sm:w-1/2 sm:pl-0 ${
                    index % 2 === 0
                      ? 'sm:mr-auto sm:justify-end sm:pr-12'
                      : 'sm:ml-auto sm:justify-start sm:pl-12'
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[11px] top-7 z-10 h-[17px] w-[17px] rounded-full border-[4px] border-[#FAFAF6] sm:left-auto sm:top-8 sm:-translate-x-1/2"
                    style={{
                      backgroundColor: milestoneColors[index],
                      ...(index % 2 === 0
                        ? { right: '-8px' }
                        : { left: '-8px' }),
                    }}
                  />

                  {/* Milestone card */}
                  <button
                    type="button"
                    onClick={() => openMilestone(milestone)}
                    className="group w-full rounded-3xl border border-[#34434A]/10 bg-white p-6 text-left shadow-[0_8px_30px_rgba(52,67,74,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(52,67,74,0.10)] sm:max-w-md sm:p-7"
                  >
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span
                        className="rounded-full px-4 py-2 text-xs font-bold tracking-wide text-[#34434A]"
                        style={{ backgroundColor: milestoneColors[index] }}
                      >
                        {milestone.year}
                      </span>

                      <span className="text-xs text-[#7C8585] group-hover:text-[#7e9c9c]">
                        {milestone.age}
                      </span>
                    </div>

                    <h3 className="font-['Playfair_Display'] text-2xl leading-snug text-[#34434A] transition-colors duration-300 group-hover:text-[#7e9c9c]">
                        {milestone.title}
                        </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#7C8585] transition-colors duration-300 group-hover:text-[#7e9c9c]">
                        {milestone.description}
                        </p>

                    <div className="mt-6 flex items-center justify-between border-t border-[#34434A]/10 pt-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7C8585]">
                        Explore milestone
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAFAF6] text-[#34434A] transition group-hover:bg-[#34434A] group-hover:text-white">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center text-xs italic tracking-wide text-[#7C8585]"
          >
            Six milestones. Countless moments. One journey of becoming.
          </motion.p>
        </div>
      </section>

      {/* FULL-SCREEN MILESTONE VIEW */}
      <AnimatePresence mode="wait">
        {selectedMilestone && (
          <motion.div
            key={selectedMilestone.id}
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 35 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-[70] overflow-y-auto bg-[#FAFAF6]"
          >
            <div className="min-h-screen">
              {/* Top navigation */}
              <div className="sticky top-0 z-30 border-b border-[#34434A]/10 bg-[#FAFAF6]/90 px-5 py-4 backdrop-blur-md sm:px-10">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                  <button
                    type="button"
                    onClick={closeMilestone}
                    className="group inline-flex items-center gap-3 text-sm font-semibold text-[#34434A]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#34434A]/15 transition group-hover:bg-[#34434A] group-hover:text-white">
                      <ArrowLeft size={18} />
                    </span>

                    <span>Back to Timeline</span>
                  </button>

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C8585]">
                    {String(selectedMilestone.id).padStart(2, '0')} / 06
                  </span>
                </div>
              </div>

              {/* Milestone content */}
              <div className="mx-auto max-w-7xl px-5 py-12 sm:px-10 sm:py-16">
                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
                  {/* Text content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="order-2 lg:order-1 lg:pt-8"
                  >
                    <span
                      className="inline-flex rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#34434A]"
                      style={{
                        backgroundColor: milestoneColors[selectedMilestone.id - 1],
                      }}
                    >
                      {selectedMilestone.age}
                    </span>

                    <p className="mt-7 font-['Playfair_Display'] text-5xl text-[#34434A] sm:text-6xl">
                      {selectedMilestone.year}
                    </p>

                    <h2 className="mt-5 font-['Playfair_Display'] text-3xl leading-tight text-[#34434A] sm:text-4xl lg:text-5xl">
                      {selectedMilestone.title}
                    </h2>

                    <div
                      className="my-8 h-1 w-16 rounded-full"
                      style={{
                        backgroundColor: milestoneColors[selectedMilestone.id - 1],
                      }}
                    />

                    <div className="space-y-8">
                      <div>
                        <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#7C8585]">
                          The Milestone
                        </h3>

                        <p className="text-base leading-8 text-[#34434A]">
                          {selectedMilestone.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#7C8585]">
                          Why It Matters
                        </h3>

                        <p className="text-sm leading-8 text-[#657174] sm:text-base">
                          {selectedMilestone.significance}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Photo album */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="order-1 lg:order-2"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C8585]">
                          Captured Moments
                        </p>

                        <h3 className="mt-1 font-['Playfair_Display'] text-2xl text-[#34434A]">
                          A page from her story
                        </h3>
                      </div>

                      <Camera size={21} className="text-[#7C8585]" />
                    </div>

                    <div className="rounded-[2rem] border border-[#34434A]/10 bg-white p-3 shadow-[0_15px_50px_rgba(52,67,74,0.08)] sm:p-5">
                      <button
                        type="button"
                        onClick={openPhoto}
                        className="group relative block w-full overflow-hidden rounded-[1.5rem] bg-[#FFF0C9]"
                        aria-label="Open enlarged photograph"
                      >
                        <img
                          src={currentPhoto.src}
                          alt={currentPhoto.caption}
                          className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[480px] lg:h-[560px]"
                        />

                        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/40 via-transparent to-transparent p-6 opacity-0 transition group-hover:opacity-100">
                          <span className="rounded-full bg-white/90 px-5 py-2 text-xs font-semibold text-[#34434A]">
                            View Photograph
                          </span>
                        </div>
                      </button>

                      <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-5">
                        <p className="text-sm leading-6 text-[#7C8585]">
                          {currentPhoto.caption}
                        </p>

                        <span className="shrink-0 text-xs font-semibold text-[#7C8585]">
                          {String(selectedPhotoIndex + 1).padStart(2, '0')} /{' '}
                          {String(selectedMilestone.photos.length).padStart(
                            2,
                            '0',
                          )}
                        </span>
                      </div>

                      {selectedMilestone.photos.length > 1 && (
                        <div className="mt-4 flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => changePhoto(-1)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#34434A]/15 text-[#34434A] transition hover:bg-[#34434A] hover:text-white"
                            aria-label="Previous photo"
                          >
                            <ChevronLeft size={18} />
                          </button>

                          <button
                            type="button"
                            onClick={() => changePhoto(1)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#34434A]/15 text-[#34434A] transition hover:bg-[#34434A] hover:text-white"
                            aria-label="Next photo"
                          >
                            <ChevronRight size={18} />
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Previous / next milestone */}
                <div className="mt-16 flex items-center justify-between border-t border-[#34434A]/10 pt-8">
                  {selectedMilestone.id > 1 ? (
                    <button
                      type="button"
                      onClick={() =>
                        openMilestone(
                          timelineData[selectedMilestone.id - 2],
                        )
                      }
                      className="group flex items-center gap-3 text-left"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#34434A]/15 transition group-hover:bg-[#34434A] group-hover:text-white">
                        <ChevronLeft size={18} />
                      </span>

                      <span>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-[#7C8585]">
                          Previous
                        </span>
                        <span className="text-sm font-semibold text-[#34434A]">
                          {timelineData[selectedMilestone.id - 2].year}
                        </span>
                      </span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {selectedMilestone.id < timelineData.length && (
                    <button
                      type="button"
                      onClick={() =>
                        openMilestone(
                          timelineData[selectedMilestone.id],
                        )
                      }
                      className="group flex items-center gap-3 text-right"
                    >
                      <span>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-[#7C8585]">
                          Next
                        </span>
                        <span className="text-sm font-semibold text-[#34434A]">
                          {timelineData[selectedMilestone.id].year}
                        </span>
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#34434A]/15 transition group-hover:bg-[#34434A] group-hover:text-white">
                        <ChevronRight size={18} />
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ENLARGED PHOTO VIEWER */}
      <AnimatePresence>
        {isPhotoOpen && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 p-5 sm:p-10"
            onClick={closePhoto}
          >
            <button
              type="button"
              onClick={closePhoto}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-black"
              aria-label="Close photo viewer"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.94, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 15 }}
              transition={{ duration: 0.25 }}
              className="flex max-h-full max-w-6xl flex-col items-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={currentPhoto.src}
                alt={currentPhoto.caption}
                className="max-h-[80vh] max-w-full rounded-lg object-contain"
              />

              <p className="mt-5 text-center text-sm text-white/75">
                {currentPhoto.caption}
              </p>

              {selectedMilestone.photos.length > 1 && (
                <div className="mt-5 flex gap-4">
                  <button
                    type="button"
                    onClick={() => changePhoto(-1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white hover:text-black"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={() => changePhoto(1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white hover:text-black"
                    aria-label="Next photo"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Timeline