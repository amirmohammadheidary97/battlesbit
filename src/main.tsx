import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {setupIonicReact} from '@ionic/react';

import '@ionic/react/css/core.css';

import App from '@/App';

setupIonicReact();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
