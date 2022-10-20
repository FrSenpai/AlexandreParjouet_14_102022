import './App.scss';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { RouterNavigation } from './layout/navigations/RouterNavigation';
import persistStore from 'redux-persist/es/persistStore';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <RouterNavigation></RouterNavigation>
        </HashRouter>
      </PersistGate>
    </Provider>

  );
}

export default App;
