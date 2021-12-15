import React from 'react'
import { useState,useEffect } from 'react'
import './circularMenu.scss'
const CircularMenu = () => {
    const [electric,setElectric] = useState('')
    const [toggle,setToggle] = useState(true)
    const label =['html','css','js','react','git','api','npm','node','jest','mui']

    useEffect(() => {
        setInterval(Random, 5000);
        function Random () {
            const index = Math.floor(Math.random() * 10)
          setElectric(label[index]);
        }       
      }, []);
    return (
        <div className='circular-menu '>
            <div className={`toggle ${toggle && 'active'}`} >
                <img src="./images/setting.png" alt=""/>
            </div>
            {label.map((item,index)=>(
                <li key={index} className={`active ${electric == item && 'activate'}`}>
                    <h6>{item}</h6>
                    <span className={`electric ${electric == item && 'activate'}` }></span>
                    {/* <img src={`./images/${item}.png`} alt=""  /> */}
                </li>
            ))}
            <div className="circle1"></div>
            <div className="circle2"></div>            
        </div>
    )
}

export default CircularMenu