import { ConnectWallet } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.css';
import Web3 from 'web3';
import React from 'react';
 
export default function Home() {
  return (
    <div className={styles.container}>
      <ConnectWallet
        theme='dark'
        dropdownPosition={{
          align: 'center',
          side: 'bottom',
        }}
      />
  
    </div>  
  );
}
