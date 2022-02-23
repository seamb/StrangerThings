import React from 'react';

const Home = ({user}) => {
    return(
        <h1>
            WELCOME HOME {user.username.toUpperCase()}!
        </h1>
    )
    }

export default Home;