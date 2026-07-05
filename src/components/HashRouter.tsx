import React, { createContext, useContext, useState, useEffect } from "react";

interface RouterContextType {
  pathname: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function HashRouter({ children }: { children: React.ReactNode }) {
  const getHashPath = () => {
    const hash = window.location.hash;
    if (!hash || hash === "#" || hash === "#/") return "/";
    
    // Strip hash prefix
    let path = hash.startsWith("#") ? hash.substring(1) : hash;
    
    // Strip query parameters to handle influx of clean route segments and query tracking safely
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.substring(0, qIndex);
    }
    
    return path.startsWith("/") ? path : "/" + path;
  };

  const [pathname, setPathname] = useState(getHashPath());

  useEffect(() => {
    // Synchronize initial pathname if loaded without hash (for backward compatibility / SSR fallback)
    const initialPath = window.location.pathname;
    if (initialPath !== "/" && initialPath !== "/index.html" && !window.location.hash) {
      window.location.hash = "#" + initialPath;
    }

    const handleHashChange = () => {
      setPathname(getHashPath());
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  const navigate = (to: string) => {
    const cleanTo = to.startsWith("#") ? to : "#" + (to.startsWith("/") ? to : "/" + to);
    window.location.hash = cleanTo;
  };

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useHashRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useHashRouter must be used within a HashRouter");
  }
  return context;
}
