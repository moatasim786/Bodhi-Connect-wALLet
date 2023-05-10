import { ThirdwebProvider } from '@thirdweb-dev/react';
import Head from 'next/head';
import '../styles/globals.css';
import Web3 from 'web3';


// This is the chainId your dApp will work on.
const activeChain = 'goerli';

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider activeChain={activeChain}>
			<Head>
				<title>thirdweb Connect Wallet Button</title>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta
					name='description'
					content='thirdweb Example Repository to show how to use the Connect Wallet Button UI Component'
				/>
			</Head>
			<Component {...pageProps} />
		</ThirdwebProvider>
	);
}

export default MyApp;
