import './App.css';
import CamelCaseInput from './components/camel-case-input';
import PascalCaseInput from './components/pascal-case-input';
import KebabCaseInput from './components/kebab-case-input';
import SnakeCaseInput from './components/snake-case-input';
import { useState } from 'react';

function App() {

  const [stringElements, setStringElements] = useState([]);

  return (
    <div>
      <CamelCaseInput value={stringElements} onChange={(newValue) => { setStringElements(newValue) }}></CamelCaseInput>
      <PascalCaseInput value={stringElements} onChange={(newValue) => { setStringElements(newValue) }}></PascalCaseInput>
      <SnakeCaseInput value={stringElements} onChange={(newValue) => { setStringElements(newValue) }}></SnakeCaseInput>
      <KebabCaseInput value={stringElements} onChange={(newValue) => { setStringElements(newValue) }}></KebabCaseInput>
    </div>
  );
}

export default App;
