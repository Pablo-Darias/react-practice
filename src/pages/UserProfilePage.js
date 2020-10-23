import React from 'react';
import { useUserDataLoader } from '../useUserDataLoader';

export const UserProfilePage = () => {
  const user = useUserDataLoader()
  return (
    <div>
      <h3>Name: {user.name.first}{user.name.last}</h3>
      <p>Email: {user.email}</p>
    </div>
  )
}
