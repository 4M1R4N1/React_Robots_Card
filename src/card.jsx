import React from "react";

const Card = ({id, name, email}) => {

   
        return (
            <div className="bg-gray-500 w-64 rounded-lg flex flex-col items-center m-4">
                <img src={`https://robohash.org/api/${id}`} alt="Robots" />
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        );
    }


export default Card;