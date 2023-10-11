'use client'

import { useTranslations } from 'next-intl'

import { FeaturedProject } from './FeaturedProject'
import { Project } from './Project'

export function ProjectsList() {
  const t = useTranslations('Projects')

  return (
    <div
      className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8
      md:gap-y-24 sm:gap-x-0"
    >
      <div className="col-span-12">
        <FeaturedProject
          title={t('projects.1.title')}
          type={t('projects.1.type')}
          summary={t('projects.1.summary')}
          coverImagePath="/images/projects/ignite-call.png"
          codeUrl="https://github.com/fernandes-vinicius/ignite-call"
          demoUrl="https://ignite-call-ashy.vercel.app"
        />
      </div>

      {/* Coffee Delivery */}
      <div className="col-span-6 sm:col-span-12">
        <Project
          title={t('projects.2.title')}
          type={t('projects.2.type')}
          coverImagePath="/images/projects/coffee-delivery.png"
          codeUrl="https://github.com/fernandes-vinicius/coffee-delivery-react"
          demoUrl="https://coffee-delivery-react-one.vercel.app"
        />
      </div>

      {/* That Movie */}
      <div className="col-span-6 sm:col-span-12">
        <Project
          title={t('projects.3.title')}
          type={t('projects.3.type')}
          coverImagePath="/images/projects/that-movie.png"
          codeUrl="https://github.com/fernandes-vinicius/that-movie"
          demoUrl="https://that-movie.vercel.app"
        />
      </div>

      {/* Portfolio */}
      <div className="col-span-12">
        <FeaturedProject
          title={t('projects.4.title')}
          type={t('projects.4.type')}
          summary={t('projects.4.summary')}
          coverImagePath="/images/projects/portfolio.png"
          codeUrl="https://github.com/fernandes-vinicius/portfolio"
          demoUrl="https://portfolio-viniciusfernandes.vercel.app"
        />
      </div>

      {/* Quotify */}
      <div className="col-span-6 sm:col-span-12">
        <Project
          title={t('projects.5.title')}
          type={t('projects.5.type')}
          coverImagePath="/images/projects/quotify.png"
          codeUrl="https://github.com/fernandes-vinicius/quotify"
          demoUrl="https://quotify-two.vercel.app"
        />
      </div>

      {/* Todo List App */}
      <div className="col-span-6 sm:col-span-12">
        <Project
          title={t('projects.6.title')}
          type={t('projects.6.type')}
          coverImagePath="/images/projects/todo-list.png"
          codeUrl="https://github.com/fernandes-vinicius/todo-list-react"
          demoUrl="https://todo-list-react-roan.vercel.app"
        />
      </div>

      {/* The Fit Club */}
      <div className="col-span-12">
        <FeaturedProject
          title={t('projects.7.title')}
          type={t('projects.7.type')}
          summary={t('projects.7.summary')}
          coverImagePath="/images/projects/the-fit-club.png"
          codeUrl="https://github.com/fernandes-vinicius/gym-website"
          demoUrl="https://the-fit-club-web.vercel.app"
        />
      </div>

      {/* CarHub */}
      <div className="col-span-6 sm:col-span-12">
        <Project
          title={t('projects.8.title')}
          type={t('projects.8.type')}
          coverImagePath="/images/projects/carhub.png"
          codeUrl="https://github.com/fernandes-vinicius/car-hub"
          demoUrl="https://web-carhub.vercel.app"
        />
      </div>

      {/* React + Redux + Zustand */}
      <div className="col-span-6 sm:col-span-12">
        <Project
          title={t('projects.9.title')}
          type={t('projects.9.type')}
          coverImagePath="/images/projects/react-redux-zustand.png"
          codeUrl="https://github.com/fernandes-vinicius/react-redux-zustand"
          demoUrl="https://react-redux-zustand-six.vercel.app"
        />
      </div>
    </div>
  )
}
