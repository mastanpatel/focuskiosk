import React from 'react';
import { PropertiesListProps } from './common.type';


function PropertiesList(props: PropertiesListProps) {
    const mystyle = {
        width: "150px",
        height: "150px",
        margin: "3px 5px",

    };

    const handleMouseHover = (event: any) => {
        event.target.style.outline = "1px solid black"
    }

    const handleMouseLeave = (event: any) => {
        event.target.style.outline = ""
    }

    return (
        <div>
            {props.properties.map((property) => {
                return <img src={property.propertyImageURL} alt={property.propertyName} style={mystyle} onMouseOver={handleMouseHover} onMouseLeave={handleMouseLeave} />
            })}
        </div>
    );
}

export default PropertiesList;