import React from 'react';

const ProfileDetails = props => {
  const { avatarUrl, name, username, bio,  } = props;
  return (
    <aside>
      <img
        src={avatarUrl ||'https://avatars3.githubusercontent.com/u/22136398?s=460&v=4'} alt="profile"
      />
      <h3 className="name">{name}</h3>
      <h4 className="username grey-text">{username}</h4>
      <p className="grey-text bio">{bio}</p>
      <p className="grey-text report">Block or report user</p>
    </aside>
  );
}

export default ProfileDetails;
