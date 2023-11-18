import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home";
import DetailPage from "@/pages/detail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/detail",
      element: <DetailPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
