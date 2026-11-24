
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Flower2, ArrowRight } from 'lucide-react'

const TITLE = 'A Journey in Bloom.'

const BIRTHDAY_PASSWORD = '120506'

const Intro = ({ onUnlock }) => {
  const [phase, setPhase] = useState('intro')
  const [typedTitle, setTypedTitle] = useState('')
  const [birthday, setBirthday] = useState('')
  const [error, setError] = useState('')

  // Type out the opening title
  useEffect(() => {
    if (phase !== 'intro') return

    let index = 0
    let finishTimer

    const typingTimer = setInterval(() => {
      index += 1
      setTypedTitle(TITLE.slice(0, index))

      if (index >= TITLE.length) {
        clearInterval(typingTimer)

        finishTimer = setTimeout(() => {
          setPhase('password')
        }, 1300)
      }
    }, 100)

    return () => {
      clearInterval(typingTimer)
      clearTimeout(finishTimer)
    }
  }, [phase])

  // Reveal the actual website after successful entry
  useEffect(() => {
    if (phase !== 'exit') return

    const timer = setTimeout(() => {
      onUnlock()
    }, 750)

    return () => clearTimeout(timer)
  }, [phase, onUnlock])

  // Format birthday input as MM/DD/YY
  const handleBirthdayChange = (value) => {
    const numbers = value.replace(/\D/g, '').slice(0, 6)

    let formatted = numbers

    if (numbers.length > 2) {
      formatted = `${numbers.slice(0, 2)}/${numbers.slice(2)}`
    }

    if (numbers.length > 4) {
      formatted = `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4)}`
    }

    setBirthday(formatted)
    setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const enteredPassword = birthday.replace(/\D/g, '')

    if (enteredPassword === BIRTHDAY_PASSWORD) {
      setError('')
      setPhase('exit')
    } else {
      setError('Not quite! Try again. ♡')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#ffdddf] px-6 py-10 text-[#333333]"
    >
      {/* Subtle decorative background */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/30 blur-3xl" />

      <AnimatePresence mode="wait">
        {phase === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col items-center gap-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <Flower2 size={42} strokeWidth={1.3} />
            </motion.div>

            <h1 className="min-h-[3rem] font-['Playfair_Display'] text-3xl tracking-wide sm:text-4xl md:text-5xl">
              {typedTitle}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 inline-block"
              >
                |
              </motion.span>
            </h1>
          </motion.div>
        )}

        {phase === 'password' && (
          <motion.div
            key="password"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative w-full max-w-md text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mb-8 flex justify-center"
            >
              <Flower2 size={42} strokeWidth={1.3} />
            </motion.div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]">
              A Little Question
            </p>

            <h2 className="mb-4 font-['Playfair_Display'] text-3xl sm:text-4xl">
              When was Candice born?
            </h2>

            <p className="mx-auto mb-10 max-w-sm text-sm leading-7 opacity-70">
              Before entering this little collection of memories, answer one
              question.
            </p>

            <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
              <label
                htmlFor="birthday"
                className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Her birthday
              </label>

              <input
                id="birthday"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                autoFocus
                maxLength={8}
                placeholder="MM / DD / YY"
                value={birthday}
                onChange={(event) =>
                  handleBirthdayChange(event.target.value)
                }
                className="w-full border-b border-[#333333]/40 bg-transparent px-4 py-4 text-center font-['Playfair_Display'] text-2xl tracking-[0.2em] text-[#333333] outline-none transition placeholder:text-[#333333]/35 focus:border-[#333333]"
              />

              <div className="mt-4 min-h-6">
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm"
                  >
                    {error}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                className="group mt-5 inline-flex w-full items-center justify-center gap-3 border border-[#333333] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition duration-300 hover:bg-[#333333] hover:text-[#ffdddf]"
              >
                Enter the Journey
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>

            <p className="mt-10 font-['Playfair_Display'] text-sm italic opacity-60">
              A little memory, just for you.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Intro
