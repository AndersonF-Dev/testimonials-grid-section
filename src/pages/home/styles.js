import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    max-width: 82%;
    grid-gap: 10px;
    
    

    width: 100%;
    max-width: 1200px;
    /* margin: 0 auto; */
    padding: 20px;
    background-color:rgb(212, 71, 71);

    @media (max-width: 850px){
        background-color:rgb(158, 212, 71);
        grid-template-columns: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 99%;
    }
`;

//TODO Estilos GridDepoimento
export const GridDepoimento = styled.div`
    grid-row: 1 / 4;
    grid-column: 1;
    background-color: hsl(263, 55.10%, 52.00%);
    overflow: hidden;

    /* width: 541px; */
    max-width: 33.813rem;
    height: 17.688rem;
    border-radius: 1rem;
    /* padding: 0 2rem; */

    @media (max-width: 850px){
        grid-row: 1;
        grid-column: 1;
        min-width: 21rem;
        height: 29.813rem;
    }

`;
export const DepoimentoPosition = styled.div`
    display: flex;
    justify-content: space-between;
    /* margin-right: 1rem; */
    /* background-color: aqua; */

    img:nth-child(2){
        margin-right: 4rem;
        width: 120px;
    }

    @media (max-width: 850px){
        img:nth-child(2){
        margin-right: 1rem;
        
        }
    }
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
        /* background-color: chocolate; */
        max-width: 18.3rem;
        max-height: 7.688;
        font-size: 1.402rem;
    }
`;
export const DepoimentoParagraph = styled.p`
    font-size: .87rem;
    color: hsl(0, 0%, 81%);
    text-align: left;
    max-width: 30rem;

    margin-left: 1.3rem;

    @media (max-width: 850px){
        /* background-color: aqua; */
        max-width: 18.3rem;
        max-height: 7.688;
        font-size: 1rem;
        overflow: hidden;
        margin-top: 1rem;
    }
`;

//TODO Estilos GridDepoimento2
// export const GridDepoimento2 = styled.div`
//     grid-row: 1 / 2;
//     grid-column: 2;
//     background-color: hsl(217, 19%, 35%);

//     max-width: 17rem;
//     height: 17.563rem;
//     border-radius: 1rem;
//     margin-left: .8rem;

//     @media (max-width: 850px){
//         grid-row: 2;
//         grid-column: 1;
//         min-width: 21rem;
        

//         margin-left: 0;
//     }
    
// `;
// export const Depoimento2Title = styled.h2`
//     color: hsl(0, 0%, 100%);
//     text-align: left;
//     font-size: 1.4rem;
//     font-weight: 600;

//     margin: .5rem 1.6rem;
// `;
// export const Depoimento2Paragraph = styled.p`
//     color: hsl(0, 0%, 81%);
//     font-size: 1rem;
//     text-align: left;

//     margin: .5rem 1.6rem;
// `;

//TODO Estilos GridDepoimento3
export const GridDepoimento3 = styled.div`
    grid-row: 1 / 3;
    grid-column: 3;
    background-color: hsl(0, 0%, 100%);

    max-width: 16.063rem;
    height: 35.813rem;
    border-radius: 1rem;

    @media (max-width: 850px){
        grid-row: 5;
        grid-column: 1;
        background-color: blueviolet;
        min-width: 21rem;
    }
    
`;
export const Depoimento3Title = styled.h2`
    color: hsl(219, 29%, 14%);
    text-align: left;
    font-size: 1.4rem;
    font-weight: 600;

    margin: .5rem 1.6rem;
`;
export const Depoimento3Paragraph = styled.p`
    color: hsl(219, 29%, 14%);
    font-size: .88rem;
    text-align: left;
    
    height: 380px;
    /* overflow: hidden; */
    margin: 1.3rem 1.6rem 0;
`;

//TODO Estilos GridDepoimento4
export const GridDepoimento4 = styled.div`
    grid-row: 2 / 6;
    grid-column: 1;
    background-color: hsla(0, 0.00%, 100.00%);

    max-width: 17.63rem;
    height: 16.75rem;
    border-radius: 1rem;

    margin-top: 1rem;

    @media (max-width: 850px){
        grid-row: 3;
        grid-column: 1;
        min-width: 21rem;
    }

`;

export const Depoimento4Title = styled.h2`
    color: hsl(219, 29%, 14%);
    text-align: left;
    font-size: 1.5rem;
    font-weight: 600;

    margin: .5rem 1.6rem;
`;
export const Depoimento4Paragraph = styled.p`
    color: hsl(219, 29%, 14%);
    font-size: .88rem;
    text-align: left;
    
    height: 80px;
    
    margin: .9rem 1.6rem 0;
`;

//TODO Estilos GridDepoimento5
export const GridDepoimento5 = styled.div`
    grid-row: 2 / 3;
    grid-column: 2;
    background-color: hsl(219, 29%, 14%);

    width: 31rem;
    height: 17.15rem;
    border-radius: 1rem;

    margin: 1rem 0 0 -13.22rem;
    
    @media (max-width: 850px){
        grid-row: 4;
        grid-column: 1;
        margin: 0;

        max-width: 19rem;
    }

`;
export const Depoimento5Title = styled.h2`
    color: hsl(0, 0%, 100%);
    text-align: left;
    font-size: 1.17rem;
    font-weight: 600;
    
    overflow: hidden;
    margin: .5rem 1.6rem;

    height: 90px;
`;
export const Depoimento5Paragraph = styled.p`
    color: hsl(0, 0%, 81%);
    font-size: .79rem;
    text-align: left;
    
    height: 80px;
    
    margin: -.3rem 1.6rem 0;
`;


// import styled from "styled-components";

// export const Container = styled.div`
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//     gap: 10px;
//     max-width: 1200px;
//     width: 100%;
//     padding: 20px;
//     background-color: rgb(212, 71, 71);
    
//     @media (max-width: 850px) {
//         background-color: rgb(158, 212, 71);
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         width: 100%;
//     }
// `;

// //TODO Estilos GridDepoimento
// export const GridDepoimento = styled.div`
//     background-color: hsl(263, 55.1%, 52%);
//     overflow: hidden;
//     max-width: 34rem;
//     height: auto;
//     border-radius: 1rem;
//     padding: 20px;
    
//     @media (max-width: 850px) {
//         min-width: 21rem;
//         height: auto;
//     }
// `;

// export const DepoimentoPosition = styled.div`
//     display: flex;
//     justify-content: space-between;

//     img:nth-child(2) {
//         margin-right: 4rem;
//         width: 120px;
//     }

//     @media (max-width: 850px) {
//         img:nth-child(2) {
//             margin-right: 1rem;
//         }
//     }
// `;

// export const DepoimentoTitle = styled.h2`
//     font-size: 1.25rem;
//     color: hsl(0, 0%, 100%);
//     font-weight: 600;
//     text-align: left;
//     margin: -2rem 0 0 1.3rem;
//     width: 100%;

//     @media (max-width: 850px) {
//         max-width: 18.3rem;
//         font-size: 1.4rem;
//     }
// `;

// export const DepoimentoParagraph = styled.p`
//     font-size: 0.87rem;
//     color: hsl(0, 0%, 81%);
//     text-align: left;
//     max-width: 100%;
//     margin-left: 1.3rem;

//     @media (max-width: 850px) {
//         max-width: 18.3rem;
//         font-size: 1rem;
//         margin-top: 1rem;
//     }
// `;

// //TODO Ajuste dos demais GridDepoimentos para maior responsividade
// export const GridDepoimento2 = styled(GridDepoimento)`
//     background-color: hsl(217, 19%, 35%);
//     max-width: 17rem;
//     height: auto;
//     margin-left: 0.8rem;
// `;

// export const GridDepoimento3 = styled(GridDepoimento)`
//     background-color: hsl(0, 0%, 100%);
//     max-width: 16rem;
//     height: auto;
    
//     @media (max-width: 850px) {
//         background-color: blueviolet;
//         min-width: 21rem;
//     }
// `;

// export const GridDepoimento4 = styled(GridDepoimento)`
//     background-color: hsla(0, 0%, 100%);
//     max-width: 18rem;
//     height: auto;
//     margin-top: 1rem;
// `;

// export const GridDepoimento5 = styled(GridDepoimento)`
//     background-color: hsl(219, 29%, 14%);
//     width: 31rem;
//     height: auto;
//     margin: 1rem 0 0 -13.22rem;
    
//     @media (max-width: 850px) {
//         max-width: 19rem;
//         margin: 0;
//     }
// `;

// export const DepoimentoTitleCommon = styled.h2`
//     text-align: left;
//     font-weight: 600;
//     margin: 0.5rem 1.6rem;
// `;

// export const DepoimentoParagraphCommon = styled.p`
//     text-align: left;
//     margin: 0.5rem 1.6rem;
// `;
