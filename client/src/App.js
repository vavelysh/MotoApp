import Layout from './hoc/Layout';
import AppContent from './hoc/AppContent';
import Theme from './components/UI/Theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Theme>
        <Layout>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </Layout>
      </Theme>
    </QueryClientProvider>
  );
};

export default App;
