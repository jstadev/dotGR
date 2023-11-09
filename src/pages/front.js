import React from 'react';
import Layout from '@theme/Layout';

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
    {/* <img src='../../static/img/logogr.png'/> */}
    <h1>Polkadot Greece</h1>
    <p>Η πρωτη βιβλιοθηκη στα ελληνικα για το polkadot</p>
    <a href='/'>
    <button class="btn-default">βιβλιοθηκη</button>
    </a>
    
  </div>
</div>
        </div>
      </div>
    </Layout>
  );
}