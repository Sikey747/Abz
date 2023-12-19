import './Container.scss';
import { memo } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: any;
}

const Container = memo(function Container({
  children,
  style,
  className = '',
}: ContainerProps) {
  return (
    <div style={style} className={`container ${className}`}>
      {children}
    </div>
  );
});

export default Container;
