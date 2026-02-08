import React from 'react';
function StudentCard(props) {
  const { name, major, year, bio, imageUrl } = props;
  // We didn't import React so this won't work
  const [showBio, setShowBio] = React.useState(false);

  const toggleBio = () => {
    setShowBio(!showBio);
  };
  // this is returning the entire UI
  return (
    <div style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
    {/* This is the image. I like how the alt depends on the name that's cool */}
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      {/*This is the biggest text the  name of the person*/}
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>

      {/*This displays the major and the year of the person*/}
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>
      {/*This is the toggle button*/}
      <button onClick={toggleBio} style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
      {/*This only shows if showBio is true it seems*/}
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
}

export default StudentCard;
