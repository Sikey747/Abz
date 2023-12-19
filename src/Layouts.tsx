import { Suspense, lazy } from 'react';
import Preloader from './components/ui/Preloader/Preloader';

const Form = lazy(() => import('./components/Form/Form'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const WorkGET = lazy(() => import('./components/WorkGET/WorkGET'));

function Layouts() {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <WorkGET />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <Form />
      </Suspense>
    </>
  );
}

export default Layouts;
