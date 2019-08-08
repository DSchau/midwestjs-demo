import React from 'react'

export default props => <button onClick={() => alert('You clicked the button!')} {...props} style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '4px 8px' }} />
