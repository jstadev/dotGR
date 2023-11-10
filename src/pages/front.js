import React from 'react';
import Layout from '@theme/Layout';
import logo from '../../static/img/logogr.png'

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
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
    <a href='/dot'>
    <button class="btn-default">Εισοδος</button>
    </a>
    
  </div>
</div>
        </div>
      </div>
    </Layout>
  );
}