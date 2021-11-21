import { FC } from "react";

type IProps = {
  button: any;
  dropDownContent: any;
  isOpen: boolean;
};

const DropDown: FC<IProps> = ({ button, dropDownContent, isOpen }) => {
  return (
    <>
      {button}
      {isOpen ? dropDownContent : null}
    </>
  );
};

export default DropDown;
