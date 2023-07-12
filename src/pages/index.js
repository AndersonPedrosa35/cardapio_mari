import Image from 'next/image'

export default function Home() {
  return (
    <main
      className='h-full w-full bg-slate-200 flex justify-center items-center'
    >
      <Image
        src="/cardapio.jpg"
        alt="Cardapio"
        className="h-full w-full"
        width={500}
        height={1000}
        priority
      />
    </main>
  )
}
