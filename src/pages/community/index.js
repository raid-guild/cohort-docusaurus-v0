import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../components/Header';
import Link from '@docusaurus/Link';

function Community() {
  return (
    <Layout title='Community' description='Units of culture'>
      <Header
        title='Community'
        tagline='Humans are at the core of Web3 technology.'
        primary={false}
      >
        <div>
          <p>Slaying Moloch requires coordination</p>
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
        <div>
          <h2>DAO</h2>
          <p>We are a Moloch DAO powered by our homies at DAOhaus</p>
          <p>
            Check out the{' '}
            <Link to='https://app.daohaus.club/dao/0x64/0x10e31c10fb4912bc408ce6c585074bd8693f2158'>
              Raid Guild season1
            </Link>{' '}
            overview and explore our DAO related details and stats.
          </p>
          <p>
            Pledge to the next season when you{' '}
            <Link to='https://raidguild.org/join'>
              Apply to Join Raid Guild
            </Link>
          </p>
        </div>
        <div>
          <h2>Channels</h2>
          <ul>
            <li>
              <Link to='https://discord.gg/ent9Gxs2UB'>Discord</Link>
            </li>
            <li>
              <Link to='https://twitter.com/i/lists/1395786573682257921'>
                Twitter
              </Link>
            </li>
            <li>
              <Link to='https://github.com/raid-guild'>GitHub</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>🎉 Haus Party</h2>
          <p>
            Get lit on <Link to='https://www.twitch.tv/daohaus'>Twitch</Link>{' '}
            for HAUS Party LIVE! on Thursdays at 18:00 Coordinated Universal
            Time (UTC).
          </p>
        </div>
        <div>
          <h2>🍻 Happy Hour</h2>
          <p>
            Grab a drink with us in the{' '}
            <Link to='https://discord.gg/HDCw6rweeU'>-tavern-hh-chat</Link> to
            celebrate the week on Fridays at 17:00 Coordinated Universal Time
            (UTC).
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Community;
