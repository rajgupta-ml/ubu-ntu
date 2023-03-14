import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ROUTES from '../../Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES[0].path}
          element={ROUTES[0].page}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
