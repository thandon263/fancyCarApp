import React from 'react'

const Card = ({ picture, name, make, model, availability }) => {
    return (
        <div className="card">
            <div className="card__content">
                <img src={ picture } alt="Card Images"/>
                <div>
                    <h3 className="card--title">{ name }</h3>
                    <p className="card--text">{ make }</p>
                    <p className="card--text">{ model }</p>
                    <span className="card--text">{ availability }</span>
                </div>
            </div>
        </div>
    )
}

export default Card;