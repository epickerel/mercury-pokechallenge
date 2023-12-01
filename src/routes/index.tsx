/*
After getting the list page and search done, I went to create routes and noticed that react-router-dom was not installed.
I'm not sure if that was intentional or not, but I installed it and created the routes.
*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PokeListView from "../views/PokeListView";
import PokeDetailView from "../views/PokeDetailView";

// Side note: all this was working well, then I took a tea break and came back to find the dreaded
// "useRoutes() may be used only in the context of a <Router> component." error.
// It was a silly error where I had changed the name of the const at the last minute, but not the default export.
// The error message was not helpful.
const PokeRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokeListView />} />
        <Route path="/detail/:id" element={<PokeDetailView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PokeRoutes;
