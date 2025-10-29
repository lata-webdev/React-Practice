import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    console.log(props.users);
    return (
        <div id='right' className='h-full flex flex-nowrap gap-10 overflow-x-auto rounded-4xl p-6 w-2/3 '>
          {props.users.map(function(elem,idx){
            return <RightCard img={elem.img} tag={elem.tag} key={idx} id={idx}/>
          })}
        </div>
    )
}

export default RightContent
