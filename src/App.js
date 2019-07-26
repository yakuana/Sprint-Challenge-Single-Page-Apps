import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';

import Grid from "./components/Grid"; 

export default function App() {
  return <main>
    <Grid />
    <Header />
    <TabNav />
    <AppRouter />
  </main>
}