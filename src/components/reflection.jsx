
import { motion } from 'motion/react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const dimensions = [
  {
    number: '01',
    title: 'Physically',
    text: 'I have travelled a painful path of hyper-fixating on body insecurities and self-punishing habits during adolescence toward self-acceptance.',
  },
  {
    number: '02',
    title: 'Cognitively',
    text: 'The child who showed early academic excellence has carried that drive to college, continuing to excel in her academics while simultaneously facing life’s contradictions, career pivots, and the expanded responsibilities.',
  },
  {
    number: '03',
    title: 'Emotionally',
    text: 'The anxious child who cried every first day of school when her guardian had left her sight, and the teenager who feared people and was consumed by insecurities and self–doubt, has grown into a grounded young woman who can carry adult burdens independently without losing her center.',
  },
  {
    number: '04',
    title: 'Socially',
    text: 'The girl who lived entirely in her shell, fearing to take even a single step outside is now slowly learning to take up space—finally having the courage to gradually take risks.',
  },
]

const Reflection = () => {
  return (
    <section
      id="reflection"
      className="relative overflow-hidden bg-[#e8ceed] px-5 py-24 sm:px-10 sm:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-white/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Editorial header */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mb-20 border-b border-[#34434A]/25 pb-10 sm:mb-28 sm:pb-14"
        >
          <div className="mb-12 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#34434A]/70">
              A Journey in Bloom
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#34434A]/70">
              Chapter 05
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#80699F]">
                Personal Reflection
              </p>

              <h2 className="max-w-4xl font-['Playfair_Display'] text-5xl leading-[1.1] text-[#34434A] sm:text-6xl md:text-7xl lg:text-8xl">
                The Person
                <br />
                <span className="italic">I Am Becoming</span>
              </h2>
            </div>

            <p className="max-w-[180px] font-['Playfair_Display'] text-lg italic leading-relaxed text-[#34434A]/65 md:pb-2">
              Every chapter leaves something behind.
            </p>
          </div>
        </motion.header>

        {/* Opening paragraph */}
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mb-24 grid gap-8 md:grid-cols-[180px_1fr] md:gap-16"
        >
          <div>
            <span className="font-['Playfair_Display'] text-5xl italic text-[#80699F]/70">
              01
            </span>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#34434A]/60">
              Looking Back
            </p>
          </div>

          <p className="max-w-3xl font-['Playfair_Display'] text-2xl leading-[1.8] text-[#34434A] sm:text-3xl sm:leading-[1.7]">
            Looking back across all chapters of my life—from the 36-hour
            arrival into the world to the present realities of college—this
            allowed me to trace back to every experience, challenges, and
            triumphs that molded me into the woman I am becoming today.
          </p>
        </motion.article>

        {/* Identity and relationships */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mb-24 border-y border-[#34434A]/25 py-12 sm:py-16"
        >
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-['Playfair_Display'] text-5xl italic text-[#80699F]/70">
                02
              </span>

              <h3 className="mt-3 font-['Playfair_Display'] text-3xl text-[#34434A] sm:text-4xl">
                The Making of My Identity
              </h3>
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34434A]/55">
              Identity & Influence
            </span>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#80699F]">
                The Self
              </p>

              <p className="text-base leading-[2] text-[#34434A]/85">
                The mold of my core identity is not anchored in a single,
                isolated milestone, rather, it is the totality of my adolescence.
                From being at war with myself in a battlefield of negative
                self-perception and social withdrawal, stepping up as a
                12-year-old caregiver for both of my younger brothers, and
                fighting for my way back to my spark—all these forged my
                endurance despite all difficulties. Although this stage
                completely broke down my childhood innocence and tested each
                edge I had, it ultimately taught me to gather the courage to
                reclaim my voice beneath all the layers of fear that has piled up.
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#80699F]">
                The People Around Me
              </p>

              <p className="text-base leading-[2] text-[#34434A]/85">
                This evolution is significantly influenced by the people that
                surrounded me. Within our home, being the only daughter and
                caring for my brothers at such an early age developed my sense
                of responsibility and nurturing instincts—though I would admit
                that I have felt that I did not had the chance to completely be
                a child as I’ve felt the need to grow and mature earlier than my
                peers for me to efficiently do my responsibilities as the
                daughter. Outside our home, my constants were my core circle of
                friends from third grade and from church. Amidst differences in
                priorities and the chaos of navigating the world’s realities,
                their presence reminded me that authentic connections require
                no performance or pretense.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Four dimensions */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="mb-12 grid gap-6 md:grid-cols-[180px_1fr] md:gap-16">
            <div>
              <span className="font-['Playfair_Display'] text-5xl italic text-[#80699F]/70">
                03
              </span>

              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#34434A]/60">
                Personal Growth
              </p>
            </div>

            <div>
              <h3 className="mb-5 font-['Playfair_Display'] text-3xl text-[#34434A] sm:text-4xl">
                A Journey Through Change
              </h3>

              <p className="max-w-3xl text-base leading-[2] text-[#34434A]/80">
                Tracing my journey, it is quite a navigation of a rough, bumpy
                road.
              </p>
            </div>
          </div>

          <div className="grid border-t border-[#34434A]/25 sm:grid-cols-2">
            {dimensions.map((dimension, index) => (
              <motion.article
                key={dimension.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`group border-b border-[#34434A]/25 py-9 sm:px-8 sm:py-10 ${
                  index % 2 === 0 ? 'sm:border-r sm:border-[#34434A]/25 sm:pl-0' : 'sm:pr-0'
                }`}
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="text-sm font-semibold tracking-widest text-[#80699F]">
                    {dimension.number}
                  </span>

                  <div className="h-px flex-1 bg-[#34434A]/15 transition-colors duration-300 group-hover:bg-[#80699F]" />
                </div>

                <h4 className="mb-4 font-['Playfair_Display'] text-2xl italic text-[#34434A] sm:text-3xl">
                  {dimension.title}
                </h4>

                <p className="text-sm leading-[2] text-[#34434A]/80 sm:text-base">
                  {dimension.text}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Realization / pull quote */}
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mb-24 border-y border-[#34434A]/25 py-12 sm:py-16"
        >
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-['Playfair_Display'] text-5xl italic text-[#80699F]/70">
                04
              </span>

              <h3 className="mt-3 font-['Playfair_Display'] text-3xl text-[#34434A] sm:text-4xl">
                What I Have Realized
              </h3>
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34434A]/55">
              Self-Discovery
            </span>
          </div>

          <p className="max-w-4xl text-base leading-[2] text-[#34434A]/85">
            Through this project, I have realized that I was never defined by
            a single category—my body, my title, my fears, my original life
            plans—all of those are simply chapters that carried who I am today.
            For a long time, I was so consumed by my perceived flaws that it
            made me believe that they would stay permanently ingrained within
            me, forever dictating my self-worth. Now, I see that those enduring
            years have provided me with layers of empathy and resilience that
            I would never trade away. It proved to me that the time I took to
            hide within my shell was also the exact same time where I was
            quietly gathering the strength to break out of it.
          </p>

          <blockquote className="relative my-14 border-l-2 border-[#80699F] py-3 pl-7 sm:my-16 sm:pl-12">
            <span className="absolute -top-8 left-5 font-['Playfair_Display'] text-7xl text-[#80699F]/30 sm:left-10">
              “
            </span>

            <p className="max-w-3xl font-['Playfair_Display'] text-2xl italic leading-relaxed text-[#34434A] sm:text-3xl md:text-4xl">
              The time I took to hide within my shell was also the exact same
              time where I was quietly gathering the strength to break out of it.
            </p>
          </blockquote>
        </motion.article>

        {/* Looking ahead */}
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16"
        >
          <div>
            <span className="font-['Playfair_Display'] text-5xl italic text-[#80699F]/70">
              05
            </span>

            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#34434A]/60">
              The Future
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#80699F]">
              Looking Ahead
            </p>

            <h3 className="mb-8 font-['Playfair_Display'] text-4xl leading-tight text-[#34434A] sm:text-5xl md:text-6xl">
              Becoming, <span className="italic">with purpose.</span>
            </h3>

            <p className="max-w-3xl text-base leading-[2] text-[#34434A]/85">
              In the future, I hope for the stars to finally align with my
              aspirations. I hope to carry the RPm and RPsy beside my name to
              support individuals quietly fighting their own battles. More than
              anything, I aspire to be a woman who can finally attain peace
              with herself. Someone who can embrace herself for who she is,
              and not for what she has. Someone who can be stable enough to
              stand tall with compassion, with an authentic voice, and with
              freedom.
            </p>

            <div className="mt-12 border-t border-[#34434A]/25 pt-7">
              <p className="font-['Playfair_Display'] text-xl italic text-[#34434A]/75 sm:text-2xl">
                Still growing. Still learning. Still becoming.
              </p>
            </div>
          </div>
        </motion.article>

        {/* Footer */}
        <footer className="mt-24 border-t border-[#34434A]/25 pt-7 sm:mt-32">
          <div className="flex flex-col justify-between gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#34434A]/60 sm:flex-row">
            <span>A Journey in Bloom</span>
            <span>End of Reflection · Chapter 05</span>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Reflection
