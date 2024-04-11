import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/app/redux/UiSlice";
const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
  };

  return (
    <div>
      <li
        className="rounded-md p-2 cursor-pointer hover:bg-gray-200"
        onClick={handleLogout}
      >
        Logout
      </li>
    </div>
  );
};

export default Logout;
