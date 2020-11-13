import React from 'react';
import logo from './logo.svg';
import {ButtonTree} from './components/ButtonTree'
import {Fabric} from '@fluentui/react'
import './App.css';

function App() {
  return (
      <Fabric className="App">
        <ButtonTree buttons={[
        {text: 'foo'},
        {text: 'bar'},
        {text: 'baz'},
        {text: 'biz'},
        {text: 'buzz'},
        {text: 'business'},
        {text: 'done'},
        ]} />
      </Fabric>
      );
}

export default App;
