import styled from "styled-components";

// Estilos Depoimento 1 (Daniel)
export const GridDepoimento = styled.div`
    grid-row: 1 / 4;
    grid-column: 1;
    background-color: hsl(263, 55.10%, 52.00%);
    color: white;
    border-radius: .5rem;
    
    width: 33.813rem;
    height: 18.3rem;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

    @media (max-width: 850px){
        grid-row: 1;
        grid-column: 1;
        max-width: 21.5rem;
        height: 29.813rem;
        margin-left: -.3rem;
    };
    
    @media (max-width: 379px){
        max-width: 20.5rem;
        margin-left: -.59rem;
    };
`;

export const DepoimentoPosition = styled.div`
    display: flex;
    justify-content: space-between;
    
    img:nth-child(2){
        margin-right: 4rem;
        width: 120px;
    };

    @media (max-width: 850px){
        img:nth-child(2){
            margin-right: 1rem;
        };
    };
    
    @media (max-width: 379px){
        img:nth-child(2){
            margin-right: .1rem;
        };
    };
`;

export const DepoimentoTitle = styled.h2`
    font-size: 1.25rem;
    color: hsl(0, 0%, 100%);
    font-weight: 600;
    text-align: left;
    z-index: 1;
    margin: -2rem 0 0 1.3rem;

    width: 30rem;

    @media (max-width: 850px){
        max-width: 18.3rem;
        max-height: 7.688;
        font-size: 1.402rem;
    };
`;

export const DepoimentoParagraph = styled.p`
    font-size: .87rem;
    color: hsl(0, 0%, 81%);
    text-align: left;
    max-width: 30rem;
    margin: 1.3rem 0 0 1.3rem;

    @media (max-width: 850px){
        max-width: 18.3rem;
        max-height: 7.688;
        overflow: hidden;

        font-size: 1rem;

        margin-top: 1rem;
    };
`;


// Estilos Depoimento 2 (Jonathan)
export const GridDepoimento2 = styled.div`
    grid-row: 1 / 2;
    grid-column: 2;
    background-color: hsl(217, 19%, 35%);

    max-width: 17rem;
    height: 18.563rem;

    border-radius: .5rem;
    margin-left: .8rem;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

    @media (max-width: 850px){
        grid-row: 2;
        grid-column: 1;
         
        min-width: 21.9rem;
        margin-left: -.57rem;
    };
    
    @media (max-width: 379px){
        min-width: 20.997rem;
        margin-left: -1.22rem;
    };
`;

export const Depoimento2Title = styled.h2`
    color: hsl(0, 0%, 100%);
    text-align: left;
    font-size: 1.4rem;
    font-weight: 600;

    width: 220px;
    
    margin: .1rem 1.6rem;
`;

export const Depoimento2Paragraph = styled.p`
    color: hsl(0, 0%, 81%);
    font-size: 1rem;
    text-align: left;
    
    margin: .5rem 1.6rem;
`;


// Estilos Depoimento 3 (Kira)

export const GridDepoimento3 = styled.div`
    grid-row: 1 / 3;
    grid-column: 3;
    background-color: hsl(0, 0%, 100%);

    max-width: 16.063rem;
    height: 35.211rem;
    border-radius: .5rem;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

    @media (max-width: 850px){
        grid-row: 5;
        grid-column: 1;
        
        height: 31.211rem;
        min-width: 21.7rem;
        margin-left: -.4rem;
    };

    @media (max-width: 379px){
        min-width: 20.5rem;
        height: 31.211rem;
        margin-left: -.6rem;
    };
`;

export const Depoimento3Title = styled.h2`
    color: hsl(219, 29%, 14%);
    text-align: left;
    font-size: 1.4rem;
    font-weight: 600;

    margin: -.5rem 1.6rem;

    @media (max-width: 1120px){
        font-size: 1.2rem;
        
    };
    @media (max-width: 379px){
        min-width: 18.5rem;
    };
`;

export const Depoimento3Paragraph = styled.p`
    color: hsl(219, 29%, 14%);
    font-size: .88rem;
    text-align: left;

    height: 380px;

    margin: 1.3rem 1.6rem 0;

    @media (max-width: 1120px){
        font-size: .83rem;
        
    };

    @media (max-width: 850px){
        font-size: .998rem;
        margin-top: 2rem;
        height: 20.211rem;
    };

    @media (max-width: 379px){
        min-width: 18.4rem;
    };
`;


// Estilos Depoimento 4 (Jeanette)

export const GridDepoimento4 = styled.div`
    grid-row: 2 / 3;
    grid-column: 1;
    background-color: hsl(0, 0%, 100%);
    
    max-width: 17.63rem;
    height: 15.45rem;
    border-radius: .5rem;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

    @media (max-width: 850px){
        grid-row: 3;
        grid-column: 1;
        min-width: 21.7rem;
        margin-left: -.4rem;
    };

    @media (max-width: 379px){
        min-width: 20.4rem;
        margin-left: -.6rem;
    };
`;

export const Depoimento4Title = styled.h2`
    color: hsl(219, 29%, 14%);
    text-align: left;
    font-size: 1.5rem;
    font-weight: 600;

    margin: -.6rem 1.6rem;
`;

export const Depoimento4Paragraph = styled.p`
    color: hsl(219, 29%, 14%);
    font-size: .88rem;
    text-align: left;
   
    height: 80px;
    
    margin: .9rem 1.6rem 0;

    @media (max-width: 850px){
        margin-top: 2rem;
    };

    @media (max-width: 379px){
        margin-top: 2rem;
    };
`;


// Estilos Depoimento 5 (Patrick)

export const GridDepoimento5 = styled.div`
    grid-row: 2 / 5;
    grid-column: 2;
    background-color: hsl(219, 29%, 14%);
    
    width: 32.9rem;
    height: 15.55rem;
    
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

    margin: 0 0 0 -15.22rem;

    @media (max-width: 850px){
        grid-row: 4;
        grid-column: 1;
        margin: 0;
        
        max-width: 22.2rem;
        min-height: 23.55rem;
        margin-left: -.8rem;
    };

    @media (max-width: 379px){
        margin-left: -1.2rem;
        max-width: 20.999rem;
        min-height: 25.55rem;
    };
`;

export const Depoimento5Title = styled.h2`
    color: hsl(0, 0%, 100%);
    text-align: left;
    font-size: 1.17rem;
    font-weight: 600;

    overflow: hidden;
    margin: -.5rem 1.6rem;

    height: 90px;

    @media (max-width: 850px){
        height: 130px;
        margin-bottom: 1.1rem;
    };
    
    @media (max-width: 379px){
        font-size: 1.24rem;
    };
`;

export const Depoimento5Paragraph = styled.p`
    color: hsl(0, 0%, 81%);
    font-size: .79rem;
    text-align: left;

    height: 80px;

    margin: -.3rem 1.6rem 0;

    @media (max-width: 379px){
        font-size: .897rem;
    };
`;
