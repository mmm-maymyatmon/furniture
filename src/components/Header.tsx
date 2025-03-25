import { MainNavigation } from "./MainNavigation"



function Header() {
  return (
    <header className="w-full border-b">
        <div className="container flex items-center h-16">
            <MainNavigation/>
        </div>
    </header>
  )
}

export default Header