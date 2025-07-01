import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
    sepolia,
    polygonAmoy,
} from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'DonateX',
    projectId: 'YOUR_PROJECT_ID',
    chains: [sepolia, polygonAmoy],
    ssr: true, // If your dApp uses server side rendering (SSR)
});