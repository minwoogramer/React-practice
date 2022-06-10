import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import{ QueryClient, QueryClientProvider} from"react-query"
import App from "./App";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();
const rootNode = document.getElementById('root');



if (!rootNode) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
     <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
 
);
reportWebVitals();