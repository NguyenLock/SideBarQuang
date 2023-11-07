import React from 'react'
import { BsCart3, BsFillArchiveFill, BsFillGrid3X3GapFill, BsGrid1X2, BsPeople } from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSideBar}) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? 'sidebar-responsive' : ''}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3 className='icon_header'/> SHOP
                {/* edit code Logo ở đây */}
            </div>
            <span className='icon close_icon' onClick={OpenSideBar}>X</span>
        </div>
        <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2 className='icon'/> Dashboard
                </a>
                {/* edit code icon và đổi tên sidebar ở đây */}
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
                {/* edit code icon và đổi tên sidebar ở đây */}
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
                {/* edit code icon và đổi tên sidebar ở đây */}
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeople className='icon'/> Customers
                </a>
                {/* edit code icon và đổi tên sidebar ở đây */}
            </li>

        </ul>
    </aside>
  )
}

export default Sidebar