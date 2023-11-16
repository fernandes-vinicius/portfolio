import Image from 'next/image'

export function ProfilePic() {
  return (
    <div
      className="relative col-span-3 h-max rounded-2xl border-2 border-solid
      bg-background p-8 xl:col-span-4 md:order-1 md:col-span-8"
    >
      <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-foreground" />
      <Image
        src="/images/me.jpeg"
        alt="Me"
        width={1080}
        height={1080}
        quality={100}
        priority
        // sizes="100vw"
        className="h-auto w-full rounded-2xl"
      />
    </div>
  )
}
