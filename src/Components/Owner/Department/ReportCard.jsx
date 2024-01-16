import React from 'react'
import './ReportCard.css'

function ReportCard({title,result,image}) {
    return (
        <div className='report__card'>
            <div className="card__info">
                <img src={image} alt="" />
                <span>{title}</span>
                <div className='card__result'>
                    <small>+</small>
                    <strong>{result}</strong>
                </div>
            </div>
        </div>
    )
}

export default ReportCard
