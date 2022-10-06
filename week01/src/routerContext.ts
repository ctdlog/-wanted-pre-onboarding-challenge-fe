import { createContext } from 'react';

export interface IRouterContext {
  path: string;
  changePath: React.Dispatch<React.SetStateAction<any>>;
}

export const routerContext = createContext<IRouterContext>(
  {} as IRouterContext
);

routerContext.displayName = 'RouterContext';
