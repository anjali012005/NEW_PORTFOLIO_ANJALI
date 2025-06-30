import React from 'react'
import './MyWork.css';
import mywork_data from '../../assets/mywork_data'
import { FaArrowRight } from "react-icons/fa6";

const MyWork = () => {
  return (
    <div className='mywork'>
      <div className='mywork-title'>
        <h1>My latest work</h1>
      </div>
      <div className='mywork-container'>
        {mywork_data.map((work,index)=>{
            return <img className='mywork-img' key={index} src={work.w_img} alt="" />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <FaArrowRight  className='mywork-arrow'/>
      </div>
    </div>
  )
}

export default MyWork
