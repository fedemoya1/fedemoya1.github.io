import { Outlet } from 'react-router-dom'
import NaviBar from '../NaviBar'
import './index.scss'

const Layout = () => {
    return (
        <div className='app'>
            <NaviBar />
            
            <div className='page'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;