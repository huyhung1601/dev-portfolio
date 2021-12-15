import React from 'react'
import './portfolioList.scss'
const PortfolioList = ({item, active, setSelected}) => {
    return (
        <li className={ active ? 'portfolioList active' : 'portfolioList'} onClick={()=>setSelected(item.id)}>
            {item.title}
        </li >
    )
}

export default PortfolioList