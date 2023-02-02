import React from 'react'
import '../header/header.scss'
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { useState } from 'react';

export default function Header({ handelSidebar }) {
    // const profile = useSelector(state => state.auth.user.photo);
    // const [photourl,setphotourl]=useState()
    // useEffect(() => {
    //     setphotourl(profile)
    // })


    return (
        <div className='border border-dark header'>

            <FaBars className='header__menu' size={26} onClick={() => handelSidebar()} />

            <img
                src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                alt=''
                className='header__logo' />

            <form>
                <input type='text' placeholder='Search'></input>
                <button>
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className='header__icon'>
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img
                    src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
                    alt='avatar ' />
            </div>
        </div>
    )
}
