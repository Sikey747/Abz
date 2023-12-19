import { useMeasure } from 'react-use';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ThemeProvider from '../provider/ThemeProvider';
import Layouts from './Layouts';
import Header from './components/Header/Header';

function App() {
  const [ref, { height }] = useMeasure();
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  return (
    <div className="App">
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Header intRef={ref} />
          <div style={{ height }} />
          <Layouts />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
