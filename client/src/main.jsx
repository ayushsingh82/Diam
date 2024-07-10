import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import { Route } from 'react-router-dom'
import './index.css'
import Home from './Home.jsx'
import Navbar from './components/Navbar.jsx'
import Swap from './components/Swap.jsx'
import CreateWallet from './components/CreateWallet.jsx'

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  sepolia,
  optimismGoerli,
  arbitrumGoerli,
  polygonMumbai,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { WalletProvider } from './WalletContext.jsx'

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'e7fa7d19fd057ecd9403a0e89bd62b8b',
  chains: [sepolia, optimismGoerli, arbitrumGoerli, polygonMumbai],
  ssr: false
});

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Home/>}/>
    <Route path='/swap' element={<Swap/>}/>
    <Route path='/account' element={<CreateWallet/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WalletProvider>

  <WagmiProvider config={config}>
  <QueryClientProvider client={queryClient}>
    <RainbowKitProvider>
   <Navbar/>
   <RouterProvider router={router}/>
    </RainbowKitProvider>
  </QueryClientProvider>
  </WagmiProvider>
    </WalletProvider>
  </React.StrictMode>,
)
