import React, { useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import ChakraReactTable from 'chakra-react-table';

const App = () => {
  const columns =  [{ Header: 'ID', accessor: 'id' }, { Header: 'Name', accessor: 'name' }]
  const data =  [{ id: '1', name: 'Test 1' }, { id: '2', name: 'Test 2' }]
  return (
    <ChakraReactTable columns={columns} data={data} />
  );
}

export default App;
