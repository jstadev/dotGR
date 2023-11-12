import React from 'react';
import Layout from '@theme/Layout';
import logo from '../../static/img/logogr.png'
import frontStyle from './front.css'

export default function frontpage() {
  return (
    
    <Layout title="PolkadotGreece" description="Η πρώτη βιβλιοθήκη για το Polkadot" style={
      {
        height:'100vh !important'

      }
    }>
      
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '87vh',
          fontSize: '20px',
        }}>
        <div>
        <div class="hero-image">
  <div class="hero-text">
    <img className="front-logo" src={logo} alt='logo'/>
    <div className='fronttext'>
    <h1>Polkadot Greece</h1>
    <p>Η πρωτη βιβλιοθηκη στα<br/> ελληνικα για το polkadot</p>
    </div>
    <a href='/docs'>
    <button class="btn-default">Εισοδος</button>
    </a>
    
  </div>
</div>
        </div>
      </div>
    </Layout>
    
  );
}