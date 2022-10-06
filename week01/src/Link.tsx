import React, { useContext } from 'react';
import { IRouterContext, routerContext } from './routerContext';

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkWithRef({ to, children }, ref) {
    const { changePath } = useContext(routerContext);
    const handleClick = (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      event.preventDefault();
      changePath(to);
    };

    return (
      <a href={to} onClick={handleClick} ref={ref}>
        {children}
      </a>
    );
  }
);
