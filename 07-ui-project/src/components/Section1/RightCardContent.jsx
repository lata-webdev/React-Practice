import React from 'react'
import { MoveRight } from 'lucide-react'

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-between'>
            <h2 className='h-12 w-12 bg-white rounded-full flex justify-center items-center text-2xl font-semibold'>{props.id + 1}</h2>
            <div>
                <p className='text-shadow-2xl text-xl leading-normal text-white mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto voluptate neque exercitationem dolorum, incidunt fuga.</p>

                <div className='flex justify-between'>
                    <button className=' bg-blue-600 text-white font-medium px-8 py-2 rounded-full text-sm'>{props.tag}</button>
                    <button className=' bg-blue-600 text-white font-medium px-3 py-2 rounded-full text-sm '><MoveRight /></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
