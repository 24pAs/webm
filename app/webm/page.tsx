import Image from 'next/image'
import Link from "next/link";

export default function WebM() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex pb-5">
        <Link href={'/spine'} className='text-blue-600'>spine video 보기 가기</Link>
        <Link href={'/mp4'} className='text-blue-600'>mp4 video 보기 가기</Link>
      </div>

      <video width='600' height='auto' autoPlay muted>
        <source src='/test.webm' type='video/webm' />
        브라우저가 video 태그를 지원하지 않습니다.
      </video>

      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex pt-5">
        <Link href={'/webm'} className='text-2xl'>webM video</Link>
      </div>
    </main>
  )
}
