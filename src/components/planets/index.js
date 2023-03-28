import React from "react";
import Planet from "./planet";

const clickOnPlanet = (name) => {
    console.log(`Um click no planeta: ${name}`)
}

const Planets = () => {
    return (
        <fragment>
            <h3>Planet list</h3>
            <button>Show message</button>
            <hr/>
            <Planet name="Mercurio"
                    description="O mercúrio é um elemento químico de número atômico 80 (80 prótons e 80 elétrons) e massa atómica 200,5 u. É um dos seis elementos que se apresentam líquidos à temperatura ambiente ou a temperaturas próximas."
                    img_url="https://ichef.bbci.co.uk/news/800/cpsprodpb/BA64/production/_109261774_mercurio.jpg"
                    link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(elemento_qu%C3%ADmico)#:~:text=O%20merc%C3%BArio%20%C3%A9%20um%20elemento,e%20o%20n%C3%A3o%20metal%20bromo."
                    clickOnPlanet={clickOnPlanet}
             />
             <Planet name="Venus"
                    description="O mercúrio é um elemento químico de número atômico 80 (80 prótons e 80 elétrons) e massa atómica 200,5 u. É um dos seis elementos que se apresentam líquidos à temperatura ambiente ou a temperaturas próximas."
                    img_url="https://ichef.bbci.co.uk/news/800/cpsprodpb/BA64/production/_109261774_mercurio.jpg"
                    link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(elemento_qu%C3%ADmico)#:~:text=O%20merc%C3%BArio%20%C3%A9%20um%20elemento,e%20o%20n%C3%A3o%20metal%20bromo."
             />
        </fragment>
    )
}

export default Planets