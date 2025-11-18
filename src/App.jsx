import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import AllStudents from './components/AllStudents';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/get" element={<AllStudents />} />
      </Routes>
    </BrowserRouter>
  );
}
