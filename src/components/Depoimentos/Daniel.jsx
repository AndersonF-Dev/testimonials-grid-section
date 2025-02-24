import React from "react";
import Depoimento from "./Depoimento";
import { GridDepoimento, DepoimentoTitle, DepoimentoParagraph } from "./styles";
import imageDaniel from "../../../public/assets/image-daniel.jpg";

const Daniel = () => {
    return (
        <GridDepoimento>
            <Depoimento 
                imagem={imageDaniel} 
                nome="Daniel Clifford"
                exibirImagemBackground={true}
                titulo="I received a job offer mid-course, and the subjects I learned were current, if not more so,
                    in the company I joined. I honestly feel I got every penny’s worth."
                texto="“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                    transition and have heard some people who had an amazing experience here. I signed up
                    for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
                    The next 12 weeks was the best - and most grueling - time of my life. Since completing
                    the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”"
                Container={GridDepoimento}
                Title={DepoimentoTitle}
                Paragraph={DepoimentoParagraph}
            />
        </GridDepoimento>
    );
};

export default Daniel;







