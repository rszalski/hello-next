import Link from 'next/link'
import '../styles/index.css'

const Header = () => (
  <div>
    <Link href='/'>
      <a className='mr-4'>Home</a>
    </Link>
    <Link href='/about'>
      <a className='mr-4'>About</a>
    </Link>
  </div>
)

export default Header
