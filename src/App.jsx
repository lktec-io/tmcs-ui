import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './component/Register';
import AllStudents from './component/AllStudents';

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
