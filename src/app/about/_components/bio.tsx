export function Bio() {
  return (
    <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
      <h2 className="mb-4 text-lg font-bold uppercase text-foreground/75">
        Biografia
      </h2>

      <p className="font-medium">
        Olá, sou Vinícius Fernandes, um desenvolvedor frontend apaixonado por
        criar experiências digitais elegantes, funcionais e centradas no
        usuário.
      </p>

      <p className="mt-4 font-medium">
        Com mais de 5 anos de experiência na área, estou sempre buscando evoluir
        meus conhecimentos como desenvolvedor. Trabalho diariamente com React e
        frameworks como Next.js. Também possuo habilidades em administração e
        gestão de projetos, funções administrativas (Liderança, Direção,
        Planejamento e Controle) e Gestão de TI.
      </p>

      <div className="mt-5 flex flex-col">
        <strong>Minhas especialidades técnicas:</strong>
        <p className="mt-4 font-medium">
          HTML, CSS, Sass, JavaScript, TypeScript, Next.js, React, Redux, Redux
          Saga, Redux Thunk, React Query, SWR, React Router, JSX, Tailwind CSS,
          Material UI, Styled Components, Ant Design, Rest APIs, GraphQL,
          Socket.io, Context API, Hooks, Git, Github, Gitflow, SQL (PostgreSQL),
          Supabase, Prisma, UI/UX (Figma).
        </p>
      </div>

      <div className="mt-5 flex flex-col">
        <strong>DevOps:</strong>
        <p className="mt-4 font-medium">
          - Experiência com ferramentas de versionamento de projetos (
          <strong>Git</strong>, <strong>GitHub</strong>,{' '}
          <strong>Gitflow</strong>)
        </p>
        <p className="mt-4 font-medium">
          - Experiência com técnicas de prototipagem de projetos aplicando
          conceitos de UI/UX utilizando ferramentas como <strong>Figma</strong>.
        </p>

        <p className="mt-4 font-medium">
          - Experiência com metodologias de desenvolvimento (
          <strong>Scrum</strong>, <strong>Kanban</strong>, etc.)
        </p>
      </div>

      <p className="mt-4 font-medium">
        &ldquo;Acredito que o processo de desenvolvimento frontend é mais do que
        apenas tornar as coisas bonitas - trata-se de resolver problemas e criar
        experiências intuitivas e agradáveis para os usuários.&rdquo;
      </p>
    </div>
  )
}
