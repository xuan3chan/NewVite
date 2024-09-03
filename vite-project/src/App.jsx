import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "@/pages/auth"; // Đảm bảo đây là import mặc định

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to='/auth' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
