import React from 'react';
import './ResumoTotal.css';

export function ResumoTotal({ data }) {
  const { chamadas, quiseram, meioFora, fora } = data;
  const totalForasPonderados = fora + (0.5 * meioFora);

  return (
    <div className="card resumo-total">
      <h2>📊 Resumo Geral do Arraiá</h2>
      <table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Quantidade</th>
            <th>Observação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chamadas pra dançar</td>
            <td>{chamadas}</td>
            <td>Repetidas não contam</td>
          </tr>
          <tr>
            <td>Toparam dançar</td>
            <td>{quiseram}</td>
            <td>Dancei 2 músicas ou mais</td>
          </tr>
          <tr>
            <td>Meio fora</td>
            <td>{meioFora}</td>
            <td>Começou, mas não quis continuar</td>
          </tr>
          <tr>
            <td>Fora direto</td>
            <td>{fora}</td>
            <td> Não quis nem um boa noite</td>
          </tr>
        </tbody>
      </table>
      <p className="foras-ponderados">
        Considerando "meio fora" como 0.5:<br />
        <strong>Total de foras ponderados: {totalForasPonderados}</strong>
      </p>
    </div>
  );
}
