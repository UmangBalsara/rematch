import { memo } from "react";

const Header = () => {
  return (
    <div className="h-20 bg-red-50 flex items-center shadow sticky top-0 z-10">
      <h3 className="container font-semibold text-2xl text-purple-800">
        Rematch Example With Next JS
      </h3>
    </div>
  );
};

export default memo(Header);
