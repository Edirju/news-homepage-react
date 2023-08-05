import { NavBar } from './NavBar'
import Logo from '../assets/images/logo.svg'

export const Header = () => {
  return (
    <header className='flex place-content-between items-center mb-8'>
      <img src={Logo} alt="Logo" />
      <NavBar />
    </header>
  )
}

