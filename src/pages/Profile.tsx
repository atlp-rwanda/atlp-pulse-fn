import React from 'react';

import ProfileCoverPage from '../components/ProfileCoverpage';
import ProfileTabs from '../components/ProfileTabs';

export default function Profile() {
  return (
    <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen">
      <ProfileCoverPage currentPage="viewProfile" />
      <div className="mt-2 p-6">
        <ProfileTabs />
      </div>
    </div>
  );
}
