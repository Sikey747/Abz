import { LazyLoadImage } from 'react-lazy-load-image-component';
import Typography from '../ui/Typography/Typography';
import Button from '../ui/Button/Button';
import './Hero.scss';
import Container from '../ui/Container/Container';

function Hero() {
  return (
    <section>
      <Container>
        <div className="hero">
          <LazyLoadImage
            alt="background"
            src="./../../../public/assets/pexels-alexandr-podvalny-1227513.jpeg"
            placeholderSrc="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAEALAAAAAABAAEAAAICTAEAOw=="
          />
          <div className="filter" />
          <div className="hero__info">
            <Typography variant="h1" component="h1">
              Test assignment for front-end developer
            </Typography>
            <Typography variant="body1" component="p">
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they&lsquo;ll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </Typography>
          </div>

          <Button>Sign up</Button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
