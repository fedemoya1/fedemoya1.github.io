import { Outlet } from 'react-router-dom'
import NaviBar from '../NaviBar'
//import Bg from '../Background'
import './index.scss'

const Layout = () => {
    return (
        <div className='app'>
            <NaviBar />
            {/*<Bg/>*/}
            <main className='page'>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;