import React from 'react';
import Store from './components/useTaskData';
import HeaderComponent from './components/Header'
import TabsComponent from './components/Tabs';

import 'semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './App.css';

function App() {
  return (
    <div>
      <Store>
        <HeaderComponent />
        <TabsComponent />
      </Store>
    </div>
  );
}

export default App;
