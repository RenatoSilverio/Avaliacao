import React from 'react';

function CountOccurrences({ items }) {
  const countOccurrences = (stringsArray) => {
    return stringsArray.reduce((counts, currentString) => {
      counts[currentString] = (counts[currentString] || 0) + 1;
      return counts;
    }, {});
  };

  const occurrences = countOccurrences(items);

  return (
    <div>
      <h3>Contagem de Ocorrências:</h3>
      <ul>
        {Object.entries(occurrences).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Tarefa3 = () => {
  const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

  return (
    <div>
      <h1>Tarefa 3 - Contagem de Ocorrências</h1>
      <CountOccurrences items={fruits} />
      <br />
    </div>
  );
};

export default Tarefa3;
