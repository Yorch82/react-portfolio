import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const Project = ({ title, description, imagePath, projectUrl, githubLink }) => {
  const overlayStyles= `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className='relative'>
      <div className={overlayStyles}>
        <p className='text-2xl font-playfair'>{title}</p>
        <p className='mt-7'>
          {description}
        </p>
        <div className='mt-5'>
          <a href={projectUrl} target="_blank" rel='noreferrer'><i className='bx bx-link text-4xl'></i></a>
          <a href={githubLink} target="_blank" rel='noreferrer'><i className='devicon-github-original text-4xl'></i></a>
        </div>
      </div>
      <img src={imagePath} alt={projectTitle} />
    </motion.div>
  )
};

const Projects = () => {
  return (
    <section id='projects' className='pt-48 pb-48'>
      {/* HEDINGS */}
      <motion.div
        className='md:w-2/4 mx-auto text-center' 
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-red'>PRO</span>JECTS
          </p>
          <div className='flex justify-center mt-5'>
            <LineGradient width='w-1/3' />
          </div>
        </div>        
        <p className='mt-10 mb-10'>
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className='flex justify-center'>
        <motion.div
          className='sm:grid sm:grid-cols-3' 
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          <div
            className='flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="MemeStack (Frontend)"
            description="MemeStack is a meme-based social network for developers. Users will register, log in and publish using the social network API. This project has been developed with the REACT/REDUX framework."
            imagePath="../assets/project-1.jpeg"
            projectUrl="https://memestack.vercel.app/"
            githubLink="https://github.com/Yorch82/SocialFrontend"
          />
          <Project
            title="MemeStack API (Backend)"
            description="API REST for social network where users can register, log in, post and like posts. This project has been developed with Node + Express technologies, in addition to MongoDB/Mongoose."
            imagePath="../assets/project-2.jpeg"
            projectUrl="https://memestack-backend.adaptable.app/api-docs/"
            githubLink="https://github.com/Yorch82/SocialBackend"
          />

          {/* ROW 2 */}
          <Project
            title="Tech Shop (Frontend)"
            description="Tech Shop is an e-commerce where users will register, log in, view products, create orders and make the payment with Stripe. This project has been developed with the REACT/REDUX framework."
            imagePath="../assets/project-3.jpeg"
            projectUrl="https://thetechshop.vercel.app/"
            githubLink="https://github.com/Yorch82/ShopFrontend"
          />
          <Project
            title="Tech Shop API (Backend)"
            description="API REST for e-commerce where users can register, log in, view products, create orders and make the payment with Stripe. This project has been developed with Node + Express technologies, in addition to MongoDB/Sequelize."
            imagePath="../assets/project-2.jpeg"
            projectUrl="https://shopbackend-4l9f-dev.fl0.io/api-docs/"
            githubLink="https://github.com/Yorch82/ShopBackend"
          />
          <Project
            title="Trivia Quiz"
            description="The project consists of developing a Quiz, capable of showing the wrong and correct results. The Quiz consists of 10 questions that come from an API and is presented in SPA (single-page application) format."
            imagePath="../assets/project-4.jpeg"
            projectUrl="https://spa-trivial.netlify.app/"
            githubLink="https://github.com/Yorch82/Proyecto-SPA--Quizz-"
          />

          {/* ROW 3 */}
          <Project
            title="Weather App"
            description=""
            imagePath="../assets/project-6.jpeg"
            projectUrl="https://theweather2.netlify.app/"
            githubLink="https://github.com/Yorch82/WeatherApp"
          />
          <Project
            title="Ethical Hacking Blog"
            description="My personal blog where you can find Writeups from HackTheBox and VulnHub CTF machines, news and technical information of interest about the world of cybersecurity and pentesting."
            imagePath="../assets/project-5.jpeg"
            projectUrl="https://yorch82.github.io/"
            githubLink="https://github.com/Yorch82/Yorch82.github.io"
          />
          <div
            className='flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
