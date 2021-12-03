import { FC } from "react";

type IProps = {
  isOpen: boolean;
};

const Modal: FC<IProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        flex
        fixed
        inset-0
        justify-center
        items-center
        bg-gray-800 bg-opacity-75
      "
    >
      {children}
    </div>
  );
};

export default Modal;
