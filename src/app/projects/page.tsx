import projectCrypto from '../../../public/images/crypto-screener-cover-image.jpg'
import { AnimatedText } from '../AnimatedText'
import { FeaturedProject } from './components/FeaturedProject'
import { Project } from './components/Project'

export const metadata = {
  title: 'Projects',
}

export default function Projects() {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="w-full h-full inline-block z-0 p-32 pt-16">
        <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />

        <div className="grid grid-cols-12 gap-24 gap-y-32">
          <div className="col-span-12">
            <FeaturedProject
              title="Crypto Screener Application"
              summary="A feature-rich Crypto Screener App using React,
              Tailwind CSS, Context API, React Router and Recharts. It shows
              detail regarding almost all the cryptocurrency. You can easily
              convert the price in your local currency."
              link="/"
              type="Featured Project"
              github="/"
              img={projectCrypto}
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              link="/"
              type="Featured Project"
              github="/"
              img={projectCrypto}
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              link="/"
              type="Featured Project"
              github="/"
              img={projectCrypto}
            />
          </div>
          <div className="col-span-12">
            <FeaturedProject
              title="Crypto Screener Application"
              summary="A feature-rich Crypto Screener App using React,
              Tailwind CSS, Context API, React Router and Recharts. It shows
              detail regarding almost all the cryptocurrency. You can easily
              convert the price in your local currency."
              link="/"
              type="Featured Project"
              github="/"
              img={projectCrypto}
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              link="/"
              type="Featured Project"
              github="/"
              img={projectCrypto}
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Crypto Screener Application"
              link="/"
              type="Featured Project"
              github="/"
              img={projectCrypto}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
