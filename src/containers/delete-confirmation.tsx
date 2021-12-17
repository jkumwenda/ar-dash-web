import { useDispatch } from "react-redux";
import { Modal, Button } from "../components";
import { useAppSelector } from "../hooks/redux-hooks";
import {
  getDeleteNotification,
  onCancelButton,
} from "../store/slices/delete-notification";

export default function DeleteConfirmation() {
  const dispatch = useDispatch();
  const { isOpen, onYesClick } = useAppSelector(getDeleteNotification);

  const clickYes = () => {
    onYesClick();
    dispatch(onCancelButton());
  };

  return (
    <Modal isOpen={isOpen}>
      <div className="bg-white rounded-2xl w-2/12 p-6 flex flex-col justify-center gap-4">
        <div className="text-blue-900 text-lg">
          Are you sure you want to delete this item?
        </div>
        <div className="flex gap-1">
          <Button onClick={clickYes} title="yes" className="bg-red-100" />
          <Button
            onClick={() => dispatch(onCancelButton())}
            title="no"
            className="bg-blue-100"
          />
        </div>
      </div>
    </Modal>
  );
}
