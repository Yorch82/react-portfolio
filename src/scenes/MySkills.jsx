import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

  return (
    <section id='skills' className='pt-10 pb-24'>
      {/* HEADER AND IMAGE SECTION */}
      <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          className='md:w-1/3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className='font-playfair font-semibold text-4xl mb-5'>
            MY <span className='text-red'>SKILLS</span>
          </p>
          <LineGradient width='w-1/3' />
          <p className='mt-10 mb-7'>
            I am a Full Stack Developer and Pentester. Attention to detail,
            organizational and multitasking skills are some of my qualities.
            Accustomed to working as a team throughout my professional career.
            Passionate about technologies and a high level of curiosity to investigate
            and keep learning.
          </p>
        </motion.div>

        <div className='mt-16 md:mt-0'>
          {isAboveMediumScreens ? (
            <div className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]'>
              <img alt='skills' src='assets/skills.jpg' className='z-10' />
            </div>
          ) : (
            <img alt='skills' src='assets/skills.jpg' className='z-10' />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className='md:flex md:justify-between mt-16 gap-32'>
        {/* FRONTEND */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-5xl'>01</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Frontend
              </p>
            </div>
            <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
          </div>
          <p className='mt-8 flex items-center justify-around'>
            <i class="devicon-html5-plain text-6xl"></i>
            <i class="devicon-css3-plain text-6xl"></i>
            <i class="devicon-react-original text-6xl"></i>            
            <i class="devicon-nextjs-original text-6xl"></i>
          
          </p>
        </motion.div>

        {/* BACKEND */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-5xl'>02</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Backend
              </p>
            </div>
            <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
          </div>
          <p className='mt-8 flex items-center justify-around'>
            <i class="devicon-nodejs-plain text-5xl"></i>
            <i class="devicon-mongodb-plain-wordmark text-7xl"></i>
            <i class="devicon-mysql-plain-wordmark text-7xl"></i>
            <i class="devicon-express-original text-7xl"></i>
          </p>
        </motion.div>

        {/* PENTESTING */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-5xl'>03</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                CyberSecurity
              </p>
            </div>
            <div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]' />
          </div>
          <div className='mt-8 flex items-center justify-around'>
            <a href="https://verified.elearnsecurity.com/certificates/828833e2-7d29-427c-9b3a-07172b430cd2" target="_blank" rel='noreferrer'><img src="assets/ejpt.png" width="85px" height="40px" alt="ejpt" /></a>
            <a href="https://verified.elearnsecurity.com/certificates/12832473-1e61-4505-bf66-ad5a59696629" target="_blank" rel='noreferrer'><img src="assets/ecppt.png" width="85px" height="40px" alt="ecppt"/></a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MySkills
