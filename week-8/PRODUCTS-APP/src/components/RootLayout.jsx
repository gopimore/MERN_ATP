import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function RootLayout() {
    return (
    <div className="flex flex-col min-h-screen">
        <Header/>

        <div className='flex mx-20 grow'>
            <Outlet/>

        </div>
        <Footer/>
        </div>
  )
}

export default RootLayout