import React from 'react';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './redux/config';
import GlobalStyle from './styles/GlobalStyle';
import AlertModal from './components/common/AlertModal/AlertModal';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AlertModal />
        <GlobalStyle />
        <Home />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
