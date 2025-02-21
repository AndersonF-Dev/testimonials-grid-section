import React from "react";
import Depoimento from "./Depoimento";
import { GridDepoimento4, Depoimento4Title, Depoimento4Paragraph } from "./styles";
import imageJeanette from "/assets/image-jeanette.jpg";

const Jeanette = () => {
    return (
        <GridDepoimento4>
            <Depoimento 
                imagem={imageJeanette} 
                nome="Jeanette Harmon"
                titulo="An overall wonderful and rewarding experience"
                texto="“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
                        while doing something I love. ”"
                Container={GridDepoimento4}
                Title={Depoimento4Title}
                Paragraph={Depoimento4Paragraph}
            />
        </GridDepoimento4>
    );
};

export default Jeanette;
