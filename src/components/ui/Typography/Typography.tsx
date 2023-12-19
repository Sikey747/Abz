import './Typography.scss';
import {
  Typography as TypographyMui,
  TypographyProps as TypographyPropsMui,
} from '@mui/material';
import { memo } from 'react';

interface TypographyProps extends TypographyPropsMui {
  fontFamily?: 'f1' | 'f2';
}

const Typography = memo(function Typography({
  fontFamily,
  children,
  ...props
}: TypographyProps) {
  return (
    <TypographyMui
      {...props}
      sx={{
        ...(fontFamily === 'f2' && { fontFamily: 'Hedvig Letters Serif' }),
      }}
    >
      {children}
    </TypographyMui>
  );
});

export default Typography;
