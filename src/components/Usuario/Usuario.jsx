import React from 'react'

import { Usuarioconteiner, UsuarioStyles } from './styles';

const Usuario = ({ imagem, nome, destaque, corSpan, corNome }) => {
  return (
  <>
    <Usuarioconteiner>
      <UsuarioStyles>
        <img src={imagem} alt={`Imagem de ${nome}`} />
        <p style={{ color: destaque ? "hsl(219, 29%, 14%)" : "hsl(210, 46%, 95%)" }}>
          <span style={{ color: corNome || (destaque ? "hsl(219, 29%, 14%)" : "hsl(210, 46%, 95%)") }}>
            {nome}
          </span>
          <span style={{ color: corSpan ? "blue" : "hsl(0, 0%, 81%)" }}> Verified Graduate</span>
        </p>
      </UsuarioStyles>
    </Usuarioconteiner>
  </>
  );
};

export default Usuario;