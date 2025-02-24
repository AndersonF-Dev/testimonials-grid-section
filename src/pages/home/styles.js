import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    max-width: 82%;
    grid-gap: 10px;
    
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 850px){
        grid-template-columns: auto;
        margin: 0 auto;
       
        width: 99%;

    };
`;
    

