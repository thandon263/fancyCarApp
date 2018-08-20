import React from 'react'

const Card = ({ picture, name, make, model, availability }) => {
    return (
        <div className="card">
            <div className="card__content">
                <img src={ picture } alt="Card Images"/>
                <div className="card__article">
                    <h3 className="card--title">{ name }</h3>
                    <div className="card__section">
                        <p className="card--text">{ model }</p>
                        <p className="card--text">{ make }</p>
                    </div>
                    <div className="card__availability card--text">{ availability }</div>
                </div>
            </div>
        </div>
    )
}

export default Card;