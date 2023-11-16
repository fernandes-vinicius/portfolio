import projects from '@/data/projects.json'

import { FeaturedProject } from './featured-project'
import { Project } from './project'

export function Projects() {
  return (
    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
      {projects.map((project) => {
        if (project.isFeatured) {
          return (
            <div key={project.title} className="col-span-12">
              <FeaturedProject
                title={project.title}
                type={project.type}
                summary={project.summary}
                coverImageUrl={project.coverImageUrl}
                codeUrl={project.codeUrl}
                demoUrl={project.demoUrl}
              />
            </div>
          )
        }

        return (
          <div key={project.title} className="col-span-6 sm:col-span-12">
            <Project
              title={project.title}
              type={project.type}
              coverImageUrl={project.coverImageUrl}
              codeUrl={project.codeUrl}
              demoUrl={project.demoUrl}
            />
          </div>
        )
      })}
    </div>
  )
}
