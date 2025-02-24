import React from "react";
import Usuario from "../Usuario/Usuario";
const imageBackground = '/assets/bg-pattern-quotation.svg';
import { DepoimentoPosition } from "./styles"; 

const Depoimento = ({ 
    imagem, 
    nome, 
    titulo, 
    texto, 
    Container, 
    Title, 
    Paragraph,  
    exibirImagemBackground, 
    destaque, 
    corSpan, 
    corNome 
    }) => {
    return (
        <Container>
            <DepoimentoPosition>
                
               
            <Usuario imagem={imagem} nome={nome} destaque={destaque} corSpan={corSpan} corNome={corNome} />

            {/* Só exibe a imagem se exibirImagemBackground for true */}
            {exibirImagemBackground && (
                    <img src={imageBackground} alt="image-Background" />
            )}

            </DepoimentoPosition>  
            <Title>{titulo}</Title>
            <Paragraph>{texto}</Paragraph>
        </Container>
    );
};

export default Depoimento;
