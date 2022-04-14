import React from "react";
import Card from "./Card";

function Wrapper({ platform }) {

    const display = () => {
        return platform.games.map((game) => {
            return (
                <React.Fragment key={game.id}>
                    <Card game={game} />
                </React.Fragment>
            );
        });
    };

    return (
        <article>
            <h2>{platform.name}</h2>
            {display()}
        </article>
    );
}

export default Wrapper;
