
import React, { createContext } from 'react';
import { UserRole } from '../types';

interface UserRoleContextType {
  userRole: UserRole | null;
  setUserRole: React.Dispatch<React.SetStateAction<UserRole | null>>;
}

export const UserRoleContext = createContext<UserRoleContextType>({
  userRole: null,
  setUserRole: () => {},
});
