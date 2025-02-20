import styled from "styled-components";


export const Usuarioconteiner = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    
    margin: .5rem 1.6rem;
    
`;

export const UsuarioStyles = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    
    img{
        width: 35px;
        border-radius: 2rem; 
        border: 2px solid hsl(0, 0%, 81%); 
    }

    p{
      display: flex;
      flex-direction: column;

      font-weight: 600;
      font-size: 1rem;
      color: hsl(210, 46%, 95%);   
    }

    span{
        color: hsl(0, 0%, 81%);
        font-weight: 500;
        font-size: .8rem; 
    }
`;

