import { Logo } from "./Loho";

export function Header(){
  return (
   <header className="w-full py-7 flex items-center justify-center bg-gray-700 border-b border-gray-600">
     <Logo />
   </header>
  )
}