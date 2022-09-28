import React from "react";
import Card  from "./Card";

const CardList = ({robots}) => {
    const RobotsCards = robots.map(user => {
        return (<Card key={user.id} id={user.id} name={user.name} email={user.email}/>)
    });

    return (
        <div>
            { RobotsCards }
        </div>
    );
}

export default CardList;