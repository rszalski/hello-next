import Header from './Header'
import '../styles/index.css'

const Layout = props => (
  <div className='container m-4 p-4 border'>
    <Header />
    {props.children}
  </div>
)

export default Layout
