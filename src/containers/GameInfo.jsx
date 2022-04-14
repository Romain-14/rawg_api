import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../api/reqToRawg";

function GameInfo() {
    const { id } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        requestGameById();
        
        // eslint-disable-next-line
    }, []);

    const requestGameById = async () => {
        const response = await getGameById(id);
        setGame(prevState => ({...prevState, ...response}));
    };

    const display = () => {
        if (!game) {
            return <p>Loading</p>;
        } else {
            return (
                    <article>
                        <img src={game.background_image} alt=""/>
                        <h2>{game.name}</h2>
                        <p>score metacritic - <a target="_blank" href={game.metacritic_url} without rel="noreferrer"> {game.metacritic}</a></p>
                        <p>Official website : <a target="_blank" href={game.website} without rel="noreferrer">{game.website}</a></p>
                        
                        <ul>publishers : 

                        {
                            game.publishers?.map(publisher => {
                                return <li key={publisher.id}>{publisher.name}</li>
                                
                            })
                        }
                        </ul>
                        <p>etc ..</p>
                        <p>etc ..</p>
                        <p>etc ..</p>
                    
                    </article>
            );
        }
    };

    return <>{display()}</>;
}

export default GameInfo;
