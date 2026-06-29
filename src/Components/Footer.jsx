import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white text-center py-6 mt-10 fixed bottom-0 inset-x-0">
      <h2 className="text-lg font-semibold text-blue-500">Shoplit</h2>

      <p className="text-sm text-slate-400 mt-2">
          &copy; {new Date().getFullYear()} Shoplit. All rights reserved.
      </p>

      <p className="text-xs text-slate-500 mt-1">
        Built by Sara Sheikh
      </p>
    </footer>
  );
};

export default Footer;