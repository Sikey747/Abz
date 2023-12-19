import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Slide, SlideProps } from '@mui/material';

function HideOnScroll({ children, ...props }: SlideProps) {
  const trigger = useScrollTrigger();
  return <Slide in={!trigger}>{children}</Slide>;
}
export default HideOnScroll;
