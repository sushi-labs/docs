import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

const NotFound = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/'); // Redirect to the landing page
  }, [history]);

  return null; // Optional: Render nothing or display a "Redirecting..." message
};

export default NotFound;