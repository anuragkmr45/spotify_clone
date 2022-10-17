import React from 'react'

import Logo from '../../Images/logo.png'

import './Navbar.css'

import { AiOutlinePlusSquare } from 'react-icons/ai';
import { BiHomeAlt, BiLibrary } from 'react-icons/bi';
import { BsSearch, BsFillHeartFill } from 'react-icons/bs';

function Navbar() {
    return (
        <>
            <section>
                <div className="">
                    <div className="navbar">
                        <div className="container">
                            <img src={Logo} style={{height: '5rem'}} className='mx-auto' alt="" />
                            <div>
                                <ul>
                                    <li className="list-link">
                                        <BiHomeAlt className='m-2' />
                                        Home
                                    </li>
                                    <li className="list-link">
                                        <BsSearch className='m-2' />
                                        Search
                                    </li>
                                    <li className="list-link">
                                        <BiLibrary className='m-2' />
                                        Your Library
                                    </li>
                                    <li className="list-link mt-3">
                                        <AiOutlinePlusSquare className='m-2' />
                                        Crete Playlist
                                    </li>
                                    <li className="list-link">
                                        <BsFillHeartFill className='m-2' />
                                        Liked Song
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <hr />
                            </div>
                            <div>
                                <ul>
                                    <li className="list-link">Lorem, ipsum dolor.</li>
                                    <li className="list-link">Lorem, ipsum dolor.</li>
                                    <li className="list-link">Lorem, ipsum dolor.</li>
                                    <li className="list-link">Lorem, ipsum dolor.</li>
                                    <li className="list-link">Lorem, ipsum dolor.</li>
                                    <li className="list-link">Lorem, ipsum dolor.</li>
                                    <li className="list-link">Lorem, ipsum dolor.</li>
                                    <li className="list-link">Lorem, ipsum dolor.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Navbar
