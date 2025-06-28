import React from 'react';
import './App.css'; // Importa os estilos globais do dashboard
import { ResumoTotal } from './components/ResumoTotal';
import { TaxasSucesso } from './components/TaxasSucesso';
import { PorEvento } from './components/PorEvento';

// Dados do seu "Arraiá do Cupido" - Mantenha eles aqui ou mova para um arquivo separado se preferir
const dadosSaoJoao = {
  resumoTotal: {
    chamadas: 33,
    quiseram: 22,
    meioFora: 2,
    fora: 9,
  },
  porEvento: [
    { nome: 'Festa da empresa', chamadas: 6, sucesso: 6, fora: 0, meioFora: 0 },
    { nome: 'Dia 1 – Festival da Mandioca', chamadas: 10, sucesso: 6, meioFora: 1, fora: 3 },
    { nome: 'Dia 2 – Festival da Mandioca', chamadas: 4, sucesso: 3, fora: 1, meioFora: 0 },
    { nome: 'Dia 3 – Festival da Mandioca', chamadas: 13, sucesso: 7, meioFora: 1, fora: 5 },
  ],
};

function App() {
  return (
    <div className="dashboard-container">
      {/* Título do Dashboard */}
      <h1>Arraiá do Cupido - Dashboard de Foras e Sucessos Juninos</h1>
      <p className="subtitle">Métricas importantes do meu Sanjo</p>

      {/* Container para a sua foto de perfil */}
      <div className="profile-icon-container">
        {/*
          IMPORTANTE:
          Coloque sua imagem (ex: 'minha-foto.jpg') dentro da pasta 'public'
          na raiz do seu projeto Vite. Assim, você pode referenciá-la diretamente
          como '/minha-foto.jpg' no atributo 'src' como no exemplo abaixo.
        */}
        <img src="https://i.imgur.com/1qyi5al.jpeg" alt="Sua Foto de Perfil" />
      </div>

      {/* Componente de Resumo Total */}
      <ResumoTotal data={dadosSaoJoao.resumoTotal} />

      {/* Componente de Taxas de Sucesso */}
      <TaxasSucesso data={dadosSaoJoao.resumoTotal} />

      {/* Componente de Dados Por Evento */}
      <PorEvento eventos={dadosSaoJoao.porEvento} />

      {/* Rodapé do Dashboard */}
      <footer className="footer">
        <p>Tarrrrrrrrrrrrrrrrrrrrr</p>
      </footer>
    </div>
  );
}

export default App;