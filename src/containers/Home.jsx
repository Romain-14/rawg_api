import React, { useEffect, useState } from "react";
import { getList } from "../api/reqToRawg";
import Wrapper from "../components/Wrapper";

function Home() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        requestGetList();
    }, []);

    const requestGetList = async () => {
        const response = await getList();
        setGames(prevState => ([...prevState, ...response.results]));
    };

    const display = () => {
        
        if (!games.length) {
            return <p>Loading</p>;
        } else {
            return games.map((el) => {
                return (
                    <React.Fragment key={el.id}>
                        <Wrapper platform={el} />
                    </React.Fragment>
                );
            });
        }
    };

    return (
        <>
            {display()}
        </>
    );
}

export default Home;
