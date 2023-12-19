import CircularProgress from '@mui/material/CircularProgress';
import Container from '../Container/Container';

function Preloader() {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress
        className="preloader"
        color="secondary"
        value={75}
        style={{ width: '48px', height: '48px' }}
      />
    </Container>
  );
}

export default Preloader;
