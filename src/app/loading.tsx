import { Skeleton } from "@/components/ui/skeleton";

function SectionSkeletonHeader() {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-9 w-56" />
      <Skeleton className="h-4 w-80" />
    </div>
  );
}

function HeroSkeleton() {
  return (
    <section className="flex min-h-svh items-center justify-center px-6">
      <div className="flex w-full max-w-5xl flex-col items-center gap-6 pt-36 pb-28 text-center">
        <Skeleton className="h-5 w-32 rounded-full" />
        <Skeleton className="h-20 w-3/4 max-w-xl" />
        <Skeleton className="h-4 w-48" />
        <div className="flex w-full max-w-md flex-col gap-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="mx-auto h-4 w-5/6" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-10 w-36 rounded-lg" />
          <Skeleton className="h-10 w-28 rounded-lg" />
        </div>
        <div className="mt-4 grid w-full max-w-lg grid-cols-2 gap-8 md:grid-cols-4">
          {["m1", "m2", "m3", "m4"].map((key) => (
            <div key={key} className="flex flex-col items-center gap-1">
              <Skeleton className="h-7 w-16" />
              <Skeleton className="h-3 w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeSkeleton() {
  return (
    <div className="flex gap-6 overflow-hidden px-6 py-8">
      {["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8"].map((key) => (
        <Skeleton key={key} className="h-8 w-20 shrink-0 rounded-md" />
      ))}
    </div>
  );
}

function StatsSkeleton() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-0 overflow-hidden rounded-xl border border-border md:grid-cols-4">
          {["s1", "s2", "s3", "s4"].map((key) => (
            <div key={key} className="flex flex-col items-center gap-2 p-6">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-3 w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSkeleton() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <SectionSkeletonHeader />
        <div className="flex flex-col gap-4">
          {["e1", "e2", "e3"].map((key) => (
            <div
              key={key}
              className="flex flex-col gap-3 rounded-xl border border-border p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-4 w-28" />
                </div>
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-4/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSkeleton() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionSkeletonHeader />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {["p1", "p2", "p3", "p4"].map((key) => (
            <div
              key={key}
              className="overflow-hidden rounded-xl border border-border"
            >
              <Skeleton className="h-48 w-full rounded-none" />
              <div className="flex flex-col gap-3 p-6">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-3/4" />
                <div className="mt-1 flex gap-2">
                  {["tag-a", "tag-b", "tag-c"].map((tag) => (
                    <Skeleton key={tag} className="h-5 w-14 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSkeleton() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionSkeletonHeader />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((key) => (
            <div
              key={key}
              className="flex flex-col gap-3 rounded-xl border border-border p-6"
            >
              <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-md" />
                <Skeleton className="h-5 w-28" />
              </div>
              <div className="mt-1 flex flex-wrap gap-2">
                {["chip-a", "chip-b", "chip-c", "chip-d"].map((chip) => (
                  <Skeleton key={chip} className="h-5 w-16 rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentialsSkeleton() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-9 w-48" />
          <Skeleton className="h-4 w-72" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {["d1", "d2", "d3", "d4"].map((key) => (
            <div
              key={key}
              className="flex flex-col gap-3 rounded-xl border border-border p-6"
            >
              <div className="flex items-center gap-3">
                <Skeleton className="h-9 w-9 rounded-md" />
                <Skeleton className="h-5 w-36" />
              </div>
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-4/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSkeleton() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-6 rounded-xl border border-border p-10 text-center md:p-16">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-14 w-72" />
          <div className="flex w-full max-w-md flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="mx-auto h-4 w-4/5" />
          </div>
          <div className="flex w-full max-w-lg flex-col gap-3 sm:flex-row">
            <Skeleton className="h-20 flex-1 rounded-xl" />
            <Skeleton className="h-20 flex-1 rounded-xl" />
          </div>
          <Skeleton className="h-10 w-32 rounded-lg" />
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          {["social-1", "social-2", "social-3", "social-4"].map((key) => (
            <Skeleton key={key} className="h-10 w-24 rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Loading() {
  return (
    <main aria-busy="true" aria-label="Loading page content">
      <HeroSkeleton />
      <MarqueeSkeleton />
      <StatsSkeleton />
      <ExperienceSkeleton />
      <ProjectsSkeleton />
      <SkillsSkeleton />
      <DifferentialsSkeleton />
      <ContactSkeleton />
    </main>
  );
}
