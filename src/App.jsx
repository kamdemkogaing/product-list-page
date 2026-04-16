import { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { shopData } from "./data/shopData";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import { flattenMenu } from "./utils/helpers";

function AppShell() {
  const menuItems = useMemo(() => flattenMenu(shopData), []);
  const [activeMain, setActiveMain] = useState(menuItems[0].label);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            menuItems={menuItems}
            activeMain={activeMain}
            setActiveMain={setActiveMain}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        }
      />

      <Route
        path="/kategorie/:mainSlug"
        element={
          <CategoryPage
            menuItems={menuItems}
            activeMain={activeMain}
            setActiveMain={setActiveMain}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        }
      />

      <Route
        path="/kategorie/:mainSlug/:groupSlug"
        element={
          <CategoryPage
            menuItems={menuItems}
            activeMain={activeMain}
            setActiveMain={setActiveMain}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        }
      />

      <Route
        path="/kategorie/:mainSlug/:groupSlug/:itemSlug"
        element={
          <CategoryPage
            menuItems={menuItems}
            activeMain={activeMain}
            setActiveMain={setActiveMain}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
