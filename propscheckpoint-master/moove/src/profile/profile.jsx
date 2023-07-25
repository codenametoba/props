import React from "react";
import PropTypes from 'prop-types';

const Profile = ({fullName, bio, profession, handleName, children}) => {
    return(
        <div style={{textAlign: 'center'}}>
      {children}
      <h1 style={{color: 'blue'}}>{fullName}</h1>
      <h3>{bio}</h3>
      <h3>{profession}</h3>
      <button onClick={() => handleName(fullName)}>Click me</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'Angel Dorcas',
  bio: 'Beautiful inside out',
  profession: 'A Devoted Developer',
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Profile;

  




  