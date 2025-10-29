import React from 'react'
import girl1 from "../../assets/cardgirl-1.jpg";
import girl2 from "../../assets/cardgirl2.jpg";
import girl3 from "../../assets/cardgirl-3.jpg";
import { MoveRight } from 'lucide-react'
import RightCardContent from './RightCardContent';
const RightCard = (props) => {
    return (
        <div className='h-full w-80 bg-red-500 rounded-4xl relative  overflow-hidden shrink-0'>
            <img src={props.img} alt="card-1" className="rounded-xl h-full w-full object-cover" />
            <RightCardContent  id={props.id} tag={props.tag}/>
        </div>
    )
}

export default RightCard
