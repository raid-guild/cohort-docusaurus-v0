import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../components/Header';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Memes() {
  return (
    <Layout title='Memes' description='Units of culture'>
      <Header
        title='Memes'
        tagline='An approach to evolutionary models of cultural information transfer.'
        primary={false}
      >
        <div>
          <p>Propagating ideas since 2021</p>
        </div>
      </Header>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '10vh auto',
        }}
      >
        <img
          alt='They see us rollin, they hatin'
          src={useBaseUrl('img/memes/rollin.png')}
        />

        <img
          alt='When the team is looking at your code and you notice that missing semicolon.'
          src={useBaseUrl('img/memes/semicolon.png')}
        />

        <img
          alt="When that Solidity pure function ain't so pure"
          src={useBaseUrl('img/memes/pure-function.png')}
        />
      </div>
    </Layout>
  );
}

export default Memes;
