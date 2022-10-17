import React from 'react'

import './CurrenMusic.css'

import { AiOutlineHeart } from 'react-icons/ai';
import { ImLoop } from 'react-icons/im';
import { GiSpeaker } from 'react-icons/gi';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { MdQueueMusic, MdDevices } from 'react-icons/md';
import { BsShuffle, BsFillPlayCircleFill } from 'react-icons/bs';

import ProgressBar from '../MusicProgressBar/ProgressBar';

function CurrenMusic() {
    return (
        <>
            <section className='current'>
                <div className="container">
                    <div className="d-flex justify-content-between flex-wrap">
                        <div className="d-flex justify-content-center">
                            <div>
                                <img className='py-3' style={{ height: '6rem' }} src="https://images.hungama.com/c/1/9c1/196/38949486/38949486_300x300.jpg" alt="" />
                            </div>
                            <div className='m-4' style={{ color: 'white' }} >
                                <h6> <b> Be Alright </b></h6>
                                <p>Dean Lewis</p>
                            </div>
                            <div>
                                <AiOutlineHeart className='icons' />
                            </div>
                        </div>
                        <div>
                            <div className="d-flex-justify-content-between text-center">
                                <BsShuffle className='icons' />
                                <BiSkipPrevious className='icons' />
                                <BsFillPlayCircleFill className='icons' />
                                <BiSkipNext className='icons' />
                                <ImLoop className='icons' />
                            </div>
                            <div>
                                <ProgressBar />
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between">
                                <MdQueueMusic className='icons' />
                                <MdDevices className='icons' />
                                <GiSpeaker className='icons' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CurrenMusic
