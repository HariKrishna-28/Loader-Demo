import { CircleLoader, FlipLoader, ScaleLoader, EllipsisLoader, FaceBookLoader, RingLoader, GridLoader, RippleLoader, RotateLoader, BoxLoader, ClimbLoader, BlockLoader } from 'load-animations-react'
import React, { useState, useRef } from 'react'
import Github from '../assets/GitHub-Mark.png'
import Npm from '../assets/Npm-logo.svg'

const Demo = () => {
    const [color, setColor] = useState("black")
    const nameRef = useRef()

    return (
        <>
            <div className="flex flex-col align-center items-center justify-center">
                <p className='text-center mb-1 font-semibold mt-5 lg:mt-10'>Enter the colour</p>
                <input type="text"
                    autoFocus
                    ref={nameRef}
                    style={{ width: "300px" }}
                    className='border-2 text-center border-blue-600 outline-none p-1 rounded'
                    onChange={(e) => {
                        if (!nameRef.current.value)
                            setColor("black")

                        if (!e.target.value)
                            return

                        setColor(e.target.value)
                    }} />
                <button
                    className="bg-blue-700 hover:bg-blue-500 text-white mt-2 py-2 px-4 rounded align-center"
                    style={{ outline: "none", border: "0" }}
                    onClick={() => {
                        nameRef.current.value = ""
                        setColor("black")
                    }}
                >
                    Reset
                </button>
            </div>

            <div className='flex flex-col align-center justify-between items-center mt-5'>
                <div >

                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-12'>

                        <div className="flex flex-col my-2">
                            <p className='text-center mt-2 mb-2'>FlipLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <FlipLoader color={color} />
                            </div>
                        </div>

                        <div className="flex flex-col my-2">
                            <p className='text-center mt-2 mb-2'>BlockLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <BlockLoader color={color} />
                            </div>
                        </div>

                        <div className="flex flex-col my-2">
                            <p className='text-center mt-2 mb-2'>CircleLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <CircleLoader color={color} />
                            </div>
                        </div>

                        <div className="flex flex-col my-2">
                            <p className='text-center mt-2 mb-2'>ScaleLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <ScaleLoader color={color} />
                            </div>
                        </div>

                        <div className="flex flex-col my-2">
                            <p className='text-center mt-2 mb-2'>BoxLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <BoxLoader color={color} />
                            </div>
                        </div>

                        <div className="flex flex-col my-2">
                            <p className='text-center mt-2 mb-2'>FaceBookLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <FaceBookLoader color={color} />
                            </div>
                        </div>

                        <div className="flex flex-col my-2">
                            <p className='text-center mt-2 mb-2'>EllipsisLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <EllipsisLoader color={color} />
                            </div>
                        </div>

                        <div className="flex flex-col my-2">
                            <p className='text-center mt-2 mb-2'>RingLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <RingLoader color={color} />
                            </div>
                        </div>

                        <div className="flex flex-col my-2">
                            <p className='text-center mt-2 mb-2'>RotateLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <RotateLoader color={color} />
                            </div>
                        </div>

                        <div className="flex flex-col my-2">
                            <p className='text-center mt-2 mb-2'>GridLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <GridLoader color={color} />
                            </div>
                        </div>

                        <div className="flex align-center items-center justify-center">
                            <div className="flex flex-col my-2">
                                <p className='text-center mt-2 mb-2'>RippleLoader</p>
                                <div className="flex align-center items-center justify-center">
                                    <RippleLoader color={color} />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col my-2">
                            <p className='text-center mt-2 mb-10'>ClimbLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <ClimbLoader color={color} />
                            </div>
                        </div>
                    </div>

                    {/* <div className="hidden lg:flex items-center justify-center align-center mt-4 gap-12">

                        <div className="flex flex-col my-2">
                            <p className='text-center mt-2 mb-2'>ScaleLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <ScaleLoader color={color} />
                            </div>
                        </div>

                        <div className="hidden lg:flex flex-col my-2">
                            <p className='text-center mt-2 mb-2'>FlipLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <FlipLoader color={color} />
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="flex flex-col my-2">
                            <p className='text-center mt-2 mb-2'>RippleLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <RippleLoader color={color} />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="bg-black flex lg:hidden justify-between items-center p-3 mt-5 ">
                <a href="https://github.com/HariKrishna-28/load-animations-react" target="_blank" rel="noreferrer">
                    <img src={Github} width="40px" className='mr-2' style={{ borderRadius: "50%" }} alt='github' />
                </a>
                <a href="https://www.npmjs.com/package/load-animations-react" target="_blank" rel="noreferrer">
                    <img src={Npm} width="60px" className='mr-2' alt='npm' />
                </a>
            </div>
        </>
    )
}

export default Demo
