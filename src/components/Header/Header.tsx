import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import { memo } from 'react';
import Container from '../ui/Container/Container';
import Logo from '../../assets/Logo.svg?react';
import Button from '../ui/Button/Button';
import './Header.scss';
import HideOnScroll from '../ui/HideOnScroll/HideOnScroll';

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    ochre: true;
  }
}
interface HeaderProps {
  intRef: any;
}

const Header = memo(function Header({ intRef }: HeaderProps) {
  return (
    <HideOnScroll>
      <AppBar color="ochre" ref={intRef}>
        <Container>
          <Toolbar className="header">
            <Logo />
            <ul className="header__links">
              <li>
                <Button>Users</Button>
              </li>
              <li>
                <Button>Sign up</Button>
              </li>
            </ul>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
});
export default Header;
