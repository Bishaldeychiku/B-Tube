import React from 'react';
import './sidebar.scss'
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied
} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/auth.action';
export default function Sidebar({sidebar,handelSidebar}) {
const dispath=useDispatch()
const handelLogout=()=>{
dispath(logOut())
}

  return (

    <>
      <nav className={sidebar?'sidebar open':'sidebar'} onClick={()=>handelSidebar(false)}
  >
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
        <li>
          <MdSubscriptions size={23}  />
          <span>Subscriptions</span>
        </li>
        <li>
          <MdThumbUp size={23} />
          <span>Liked Videos</span>
        </li>
        <li>
          <MdHistory size={23} />
          <span>History</span>
        </li>
        <li>
          <MdLibraryBooks size={23} />
          <span>Library</span>
        </li>
        <li>
          <MdSentimentDissatisfied size={23} />
          <span>I dont know</span>
        </li>
        <hr />
        <li onClick={handelLogout}>
          <MdExitToApp size={23} />
          <span>Log out</span>
        </li>
        <hr />
      </nav>
    </>
  )
}
