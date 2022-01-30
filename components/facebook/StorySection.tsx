import Link from 'next/link'
import Image from 'next/image'
import famyshImage from '../../assets/famysh-story.png'

export default function StorySection() {
  return (
    <div className="mt-8 flex flex-row sm:w-full sm:justify-center lg:w-2/4 lg:justify-evenly">
      <Link href="">
        <a className="mr-2 flex h-[198px] w-[111px] flex-col items-center justify-center rounded-xl bg-gray-700 font-bold shadow-sm">
          <span className="py-2 font-bold text-white">Check Out</span>
          <span className="py-2 font-bold text-white">These Cool</span>
          <span className="py-2 font-bold text-white">Projects</span>
        </a>
      </Link>
      <Link href="/facebook/projects/famysh">
        <a className="mr-2 h-[198px] w-[111px] rounded-xl bg-white p-[2px] shadow-sm hover:p-[0px]">
          <Image
            className="rounded-xl"
            src={famyshImage}
            height={198}
            width={111}
          />
        </a>
      </Link>
      <Link href="">
        <a className="mr-2 h-[198px] w-[111px] rounded-xl bg-gray-700 p-[2px] shadow-sm hover:p-[0px]"></a>
      </Link>
      <Link href="">
        <a className="mr-2 h-[198px] w-[111px] rounded-xl bg-gray-700 p-[2px] shadow-sm hover:p-[0px]"></a>
      </Link>
      <Link href="">
        <a className=" h-[198px] w-[111px] rounded-xl bg-gray-700 p-[2px] shadow-sm hover:p-[0px]"></a>
      </Link>
    </div>
  )
}
