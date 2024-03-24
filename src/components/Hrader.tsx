import { LibraryBig, Menu, UserRound } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full py-4 border-b">
      <div className="mx-4 flex justify-between items-center">
        <div className="flex justify-center items-center text-[#9C6644] font-bold lg:text-3xl md:text-2xl text-xl">
          <span className="text-3xl  font-mono">re</span>
          <LibraryBig className="text-red-400" width={40} height={35} />
        </div>
        <div className='font-mono text-2xl text-red-400 font-bold'>
          TutTrue&Sarah
        </div>
        <div className="border p-3 shadow hover:shadow-lg rounded-full flex justify-center items-center gap-2 text-red-400">
          <Menu />
          <UserRound />
        </div>
      </div>
    </header>
  )
}
