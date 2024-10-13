import {Slide, ToastContainer} from 'react-toastify';

import {RouterProvider, ThemeProvider, URQLProvider} from './providers';

import 'react-toastify/dist/ReactToastify.css';
import './app.css';

const App = () => (
  <URQLProvider>
    <ThemeProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <RouterProvider />
    </ThemeProvider>
  </URQLProvider>
);

export default App;
