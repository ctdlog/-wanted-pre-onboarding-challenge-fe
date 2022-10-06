import { Children, useContext } from 'react';
import { routerContext } from './routerContext';

export const Routes = ({ children }: any) => {
  const { path } = useContext(routerContext);

  let element = null;

  Children.forEach(children, (child) => {
    if (child.props.path !== path) {
      return;
    }
    element = child.props.element;
  });

  return element;
};
