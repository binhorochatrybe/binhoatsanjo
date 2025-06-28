import React from 'react';
import './PorEvento.css'; // Para estilos específicos

export function PorEvento({ eventos }) {
  return (
    <div className="card por-evento">
      <h2>🗂️ Detalhes por Evento (Onde o milho queimou mais!)</h2>
      {eventos.map((evento, index) => (
        <div key={index} className="evento-item">
          <h3>{evento.nome}</h3>
          <ul>
            <li>Chamadas: {evento.chamadas}</li>
            <li>Sucesso: {evento.sucesso}</li>
            {evento.meioFora > 0 && <li>Meio Fora: {evento.meioFora}</li>}
            <li>Fora: {evento.fora}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}