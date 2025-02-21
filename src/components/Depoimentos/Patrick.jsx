import React from "react";
import Depoimento from "./Depoimento";
import { GridDepoimento5, Depoimento5Title, Depoimento5Paragraph } from "./styles";
import imagePatrick from "/assets/image-patrick.jpg";

const Patrick = () => {
    return (
       
            <Depoimento 
                imagem={imagePatrick} 
                nome="Patrick Abrams"
                titulo="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
                        learning from their experiences was easy."
                texto="“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
                        gave me the confidence necessary to be able to go out in the world and present myself as a capable 
                        junior developer. The standard is above the rest. You will get the personal attention you need from 
                        an incredible community of smart and amazing people. ”"
                Container={GridDepoimento5}
                Title={Depoimento5Title}
                Paragraph={Depoimento5Paragraph}
            />
        
    );
};

export default Patrick;
