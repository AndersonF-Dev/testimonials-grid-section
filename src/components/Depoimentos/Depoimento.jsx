import React from "react";
import Usuario from "../Usuario/Usuario";

const Depoimento = ({ imagem, nome, titulo, texto, Container, Title, Paragraph }) => {
    return (
        <Container>
            <Usuario imagem={imagem} nome={nome} />
            <Title>{titulo}</Title>
            <Paragraph>{texto}</Paragraph>
        </Container>
    );
};

export default Depoimento;
