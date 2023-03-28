import React from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from '../../shared/descriptionWithLink'

const Planet = (props) => {
    return (
        <div onClick={() => props.clickOnPlanet(props.name)}>
            <h4>{props.name}</h4>
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url}/>
        </div>
    )
}

export default Planet