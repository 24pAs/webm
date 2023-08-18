import Image from 'next/image'
import Link from "next/link";

export default function Mp4() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex pb-5">
        <Link href={'/webm'} className='text-blue-600'>webM video 보기 가기</Link>
      </div>

      <video width='600' height='auto' autoPlay muted>
        <source src='/mov.mp4' type='video/mp4' />
        브라우저가 video 태그를 지원하지 않습니다.
      </video>

      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex pt-5">
        <Link href={'/webm'} className='text-2xl'>mp4 video</Link>
      </div>
    </main>
  )
}
