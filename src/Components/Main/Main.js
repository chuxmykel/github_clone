import React from 'react';
import PinnedRepo from '../PinnedRepo';
import ProfileDetails from '../ProfileDetails';
import './Main.css';

const Main = props => {
  return (
    <main>
      <div className="main-content">
        <ProfileDetails />
        <section className="repo-n-nav">
        <nav>
          <ul className="repo-nav">
            <li className="active">Overview</li>
            <li>Repositories 20</li>
            <li>Projects 0</li>
            <li>Stars 0</li>
            <li>Followers 20</li>
            <li>Following 20</li>
          </ul>
        </nav>
        <h3 className="repos-title">Pinned</h3>
        <section className="repositories">
          <PinnedRepo />
          <PinnedRepo />
          <PinnedRepo />
          <PinnedRepo />
          <PinnedRepo />
          <PinnedRepo />     
        </section>
        </section>
      </div>
    </main>
  );
}

export default Main;
