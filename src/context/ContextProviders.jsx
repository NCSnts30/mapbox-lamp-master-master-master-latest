import React from 'react';
import { MapProvider } from './MapContext';
import Main from '../components/Main';

function ContextProviders() {
  return (
    <MapProvider>
      <Main />
    </MapProvider>
  );
}

export default ContextProviders;
