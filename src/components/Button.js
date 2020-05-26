import React from 'react';

const Button = ({name, fetchData}) => {
    return (
        <button style={{margin: 5}} onClick={() => fetchData(name)}>{name}</button>
    )
}

export default Button;