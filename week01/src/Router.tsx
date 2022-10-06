import { useContext, useEffect, useState } from 'react';
import { routerContext } from './routerContext';

export const Router = ({ children }: any) => {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const handleOnpopstate = (event: PopStateEvent) => {
      setPath(event.state?.path || '/');
    };

    window.addEventListener('popstate', handleOnpopstate);

    return () => {
      window.removeEventListener('popstate', handleOnpopstate);
    };
  }, []);

  const changePath = (path: string) => {
    setPath(path);
    window.history.pushState('', '', path);
  };
  const contextValue = {
    path,
    changePath,
  };

  return (
    <routerContext.Provider value={contextValue}>
      {children}
    </routerContext.Provider>
  );
};
