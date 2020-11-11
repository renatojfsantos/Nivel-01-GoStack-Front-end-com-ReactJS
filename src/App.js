import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/backgroundImage.jpeg';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado e Imutabilidade
 */

  //useState retorna um arra com 2 posiçoes
  //
  //1. Variável com o seu valor inicial
  //2. Função para atualizarmos esse valor

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <img width={300} src={backgroundImage} />

      <ul>
        {projects.map(projects => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;