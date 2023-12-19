import Button from '@mui/material/Button';
import {
  Tooltip as TooltipMui,
  TooltipProps as TooltipPropsMui,
} from '@mui/material/';
import { shortText } from '../../../../utils/utils';
import './Tooltip.scss';

interface TooltipProps {
  children: string;
}

function Tooltip({ children }: TooltipProps) {
  return (
    <TooltipMui className="tooltip" title={children}>
      <Button
        disableRipple
        disableTouchRipple
        disableFocusRipple
        focusRipple
        color="inherit"
        variant="text"
        sx={{
          ':hover': { backgroundColor: 'transparent' },
          padding: 0,
          lineHeight: '1.625rem',
        }}
      >
        {shortText(children)}
      </Button>
    </TooltipMui>
  );
}

export default Tooltip;
