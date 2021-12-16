import React from 'react'
import './portfolioItem.scss'
const PortfolioItem = ({d,active}) => {
    return (
        <div className={`item ${active && 'active'}`}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
            <a href={d.link || 'https://github.com/huyhung1601'} target="_blank">{d.link || 'https://github.com/huyhung1601' }</a>
          </div>
    )
}

export default PortfolioItem
