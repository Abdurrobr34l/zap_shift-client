import React from 'react';
import { MdKeyboardArrowDown, MdNotificationsNone } from 'react-icons/md';
import useAuth from '../../Hooks/useAuth';

const DashBoardProfile = () => {
  const {user} = useAuth();

  return (
<div className="flex items-center gap-6">
  <MdNotificationsNone size={26} className="text-gray-500 cursor-pointer" />

  <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-300">
    <img src={user?.photoURL} alt="User" className="w-full h-full object-cover" />
  </div>

  <div className="flex flex-col leading-tight">
    <span className="text-sm font-semibold">{user?.displayName}</span>
    <span className="text-xs text-gray-500">Admin</span>
  </div>

  <MdKeyboardArrowDown size={22} className="text-gray-600" />
</div>

  );
};

export default DashBoardProfile;