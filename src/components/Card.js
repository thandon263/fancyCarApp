import React from 'react'

const Card = ({ picture, name, make, model, availability }) => {
    return (
        <div className="card">
            <div className="card__content">
                <div className="card__imageContainer"><img src={ picture } alt="Card Images"/></div>
                <div className="card__article">
                    <h3 className="card--title">{ name }</h3>
                    <div className="card__section">
                        <p className="card--text">{ model }</p>
                        <p className="card--text">{ make }</p>
                    </div>
                    <div className="card__availability card--text" style={{ backgroundColor: "#c62828" ? availability === "Out of Stock" : "#64dd17" }} >{ availability }</div>
                </div>
            </div>
        </div>
    )
}

export default Card;