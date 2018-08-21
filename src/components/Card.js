import React from 'react'
import Button from '../components/Button';

const Card = ({ picture, name, make, model, availability, onClick }) => {
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
                    <div className="card__availability card--text">{ availability }</div>
                </div>
                <Button hidden={ true ? availability == "Out of Stock" : false } onClick={onClick} />
            </div>
        </div>
    )
}

export default Card;