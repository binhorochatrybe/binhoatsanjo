import React from 'react';
import './TaxasSucesso.css'; // Para estilos específicos

export function TaxasSucesso({ data }) {
  const { chamadas, quiseram, meioFora, fora } = data;

  const taxaSucessoBruto = (quiseram / chamadas * 100).toFixed(1);
  const taxaForaBruto = (fora / chamadas * 100).toFixed(1);
  const taxaMeioFora = (meioFora / chamadas * 100).toFixed(1);
  const taxaSucessoAjustada = ((quiseram + (0.5 * meioFora)) / chamadas * 100).toFixed(1);

  return (
    <div className="card taxas-sucesso">
      <h2>🎯 Taxas do Cupido Junino</h2>
      <ul>
        <li>
          <strong>Taxa de Sucesso Bruto:</strong> {taxaSucessoBruto}% (Se entregou)
        </li>
        <li>
          <strong>Taxa de Fora Bruto:</strong> {taxaForaBruto}% (Nãoooooooooo)
        </li>
        <li>
          <strong>Taxa de Meio Fora:</strong> {taxaMeioFora}% (Quis a primeira dança, mas não quis a segunda)
        </li>
        <li>
          <strong>Taxa de Sucesso Ajustada (considerando "meio fora"):</strong> {taxaSucessoAjustada}% (A esperança é a última que morre!)
        </li>
      </ul>
    </div>
  );
}