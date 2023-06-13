import React, { useEffect } from 'react';
import { useLocation, useNavigate, Location } from 'react-router';

function RemoveTokenPage() {
  const location: Location = useLocation();
  const navigate: (path: string) => void = useNavigate();

  /* istanbul ignore next */
  useEffect(() => {
    const { pathname } = location;
    const urlParts: any = pathname.split('/org/');
    if (urlParts.length > 1) {
      const newUrl: any = `${urlParts[0]}/org`;
      navigate(newUrl);
    }
  }, [location, navigate]);

  return null;
}

export default RemoveTokenPage;
