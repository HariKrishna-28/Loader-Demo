import { CircleLoader, EllipsisLoader, FaceBookLoader, RingLoader, GridLoader, RippleLoader, RotateLoader } from 'load-animations-react'
import React, { useState } from 'react'

const Demo = () => {
    const [color, setColor] = useState("")

    return (
        <>
            <div className="flex flex-col align-center items-center justify-center">
                <p className='text-center mb-1 font-semibold mt-5 lg:mt-10'>Enter the colour</p>
                <input type="text"
                    className='border-2 text-center border-blue-600 outline-none p-1 rounded'
                    onChange={(e) => {
                        if (!e.target.value)
                            return
                        setColor(e.target.value)
                        // console.log(color);
                    }} />
                <button
                    className="bg-blue-700 hover:bg-blue-500 text-white mt-2 py-2 px-4 rounded align-center"
                    style={{ outline: "none", border: "0" }}
                    onClick={() => setColor("black")}>
                    Reset
                </button>
            </div>

            <div className='flex flex-ccol align-center justify-center items-center mt-5'>
                <div >
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-12'>
                        <div className="flex flex-col my-2">
                            <p className='text-center mt-2 mb-2'>CircleLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <CircleLoader color={color} />
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

                        <div className="flex lg:hidden flex-col my-2">
                            <p className='text-center mt-2 mb-2'>RotateLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <RotateLoader color={color} />
                            </div>
                        </div>

                        <div className="flex lg:hidden flex-col my-2">
                            <p className='text-center mt-2 mb-2'>GridLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <GridLoader color={color} />
                            </div>
                        </div>

                        <div className="flex lg:hidden align-center items-center justify-center">
                            <div className="flex flex-col my-2">
                                <p className='text-center mt-2 mb-2'>RippleLoader</p>
                                <div className="flex align-center items-center justify-center">
                                    <RippleLoader color={color} />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="hidden lg:flex items-center justify-center align-center mt-4 gap-12">

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

                        <div className="flex flex-col my-2">
                            <p className='text-center mt-2 mb-2'>RippleLoader</p>
                            <div className="flex align-center items-center justify-center">
                                <RippleLoader color={color} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demo
