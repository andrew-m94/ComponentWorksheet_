import React from "react";

const NamesList = (props) => {
    return ( 
    <div>
        <ul>
            {props.nameList.map(names => (
                <li key={names}>{names}</li>
            ))}
        </ul>
        
    </div>
     );
}

export default NamesList;