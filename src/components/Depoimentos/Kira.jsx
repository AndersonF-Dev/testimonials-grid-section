import React from "react";
import Depoimento from "./Depoimento";
import { GridDepoimento3, Depoimento3Title, Depoimento3Paragraph } from "./styles";
import imageKira from "/assets/image-kira.jpg";

const Kira = () => {
    return (
        <GridDepoimento3>
            <Depoimento 
                imagem={imageKira} 
                nome="Kira Whittle"
                corNome="hsl(219, 29%, 14%)" 
                titulo="Such a life-changing experience. Highly recommended!"
                texto="“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
                        professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
                        student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
                        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
                        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
                        could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
                        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
                        100% recommend! ”"
                Container={GridDepoimento3}
                Title={Depoimento3Title}
                Paragraph={Depoimento3Paragraph}
            />
        </GridDepoimento3>
    );
};

export default Kira;
