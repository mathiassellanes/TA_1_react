import { FC } from "react";

import "./index.css";

const Card: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default Card;
