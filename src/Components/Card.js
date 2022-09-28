import React from "react";


const Card = ({id, name, email}) => {
    return (
        <div className="bg-light-green dib pa3 ma3 grow bw2 shadow-5 tc">
            <img src={"https://robohash.org/"+ id +"?200x200"} alt="Robot" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;