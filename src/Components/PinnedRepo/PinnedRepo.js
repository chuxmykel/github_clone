import React from 'react';
import repoIcon from '../../img/repo.png';
import './PinnedRepo.css';

const PinnedRepo = props => {
  const { title, description, language } = props;
  return (
    <div className="pinned-repo-wrapper">
      <div className="pinned">
        <div className="flex flex-just-sp-b flex-align-c">
          <div className="flex flex-align-c pinned-title">
            <span className="repo-img"><img src={repoIcon} alt="repo" /></span>
            <span><a href="/">{title}</a></span>
          </div>
          <div>
            <i className="fas fa-bars fa-xs"></i>
          </div>
        </div>
        <div className="pinned-description">{description}</div>
        <div className="flex pinned-footer">
          <div className="language-color-ball"></div>
          <span>{language}</span>
        </div>
      </div>
    </div>
  );
}

export default PinnedRepo;
