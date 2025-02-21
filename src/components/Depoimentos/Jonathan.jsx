import React from "react";
import Depoimento from "./Depoimento";
import { GridDepoimento2, Depoimento2Title, Depoimento2Paragraph } from "./styles";
import imageJonathan from "/assets/image-jonathan.jpg";

const Jonathan = () => {
    return (
        
            <Depoimento 
                imagem={imageJonathan} 
                nome="Jonathan Walters"
                titulo="The team was very supportive and kept me motivated"
                texto="“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
                for a big company. This was one of the best investments I’ve made in myself. ”."
                Container={GridDepoimento2}
                Title={Depoimento2Title}
                Paragraph={Depoimento2Paragraph}
            />
        
    );
};

export default Jonathan;
