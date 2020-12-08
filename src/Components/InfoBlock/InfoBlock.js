import React from 'react'
import './InfoBlock.css'

const InfoBlock = ({ heading, location, description, subtext, date, body, summaryAlignRight = false }) =>
    <div className={'InfoBlock grid summary-' + (summaryAlignRight === true ? 'right' : 'left')}>
        <div className="summary">
            <h2 className="heading">{heading}</h2>
            {
                location
                    ? <div className="location">{location}</div>
                    : null
            }
            {
                description
                    ? <div className="description">{description}</div>
                    : null
            }
            {
                subtext
                    ? <div className="subtext">- {subtext}</div>
                    : null
            }
            {
                date
                    ? <div className="date">{date}</div>
                    : null
            }
        </div>
        <div className="body">
            {
                body
                    .split('\\n')
                    .map((text, key) => <p key={key}>{text}</p>)
            }
        </div>
    </div>

export default InfoBlock
