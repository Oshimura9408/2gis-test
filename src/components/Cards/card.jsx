import React, { PureComponent } from 'react';

class Card extends PureComponent {

    render() {
        const { card, onClick } = this.props;

        return (
                <div onClick={onClick} className={`cards__item cards__item--${card.type}`}>
                    <div className="circle">

                        <div className="number">
                            {card.index}
                        </div>
                    </div>
                </div>
        );
    }
}

export default Card;