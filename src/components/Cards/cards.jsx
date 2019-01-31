import React, { Component } from 'react';
import Card from 'components/cards/card';

class Cards extends Component {
    state = {
        cards: [
            {
                index: 1,
                type: 'narrow'
            },
            {
                index: 2,
                type: 'wide'
            },
        ]
    };

    changeCard = (e) => {
        let { cards } = this.state;

        if (e.altKey && e.shiftKey) {
            this.setState({cards:this.state.cards.concat({index:cards.length+1, type: 'wide'})});
        }

        else if(e.shiftKey) {
            this.setState({cards:this.state.cards.concat({index:cards.length+1, type: 'narrow'})});
        } else {
            this.setState(this.state.cards.splice(cards.length-1,1));
        }
    };

    render() {
        const { cards } = this.state;

        return (
            <div className="cards__wrapper">
                <div className="cards" >
                    {cards.map(card => (
                        <Card
                            onClick = {this.changeCard}
                            card = {card}
                            key = {card.index}
                        />
                    ))}
                </div>
            </div>

        );
    }
}

export default Cards;