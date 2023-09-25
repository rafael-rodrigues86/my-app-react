import React from "react";

function Layout({ children }) {
  return (
    <div className={`roboto bg-gray-200 `}>
      <div className="min-h-screen items-center justify-center">{children}</div>
    </div>
  );
}

export default Layout;
