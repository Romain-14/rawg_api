import React from "react";
import {Link} from "react-router-dom";

function Card({game}) {

    return <Link to={`/GameInfo/${game.id}`}>{game.name}</Link>;
    
}

export default Card;
