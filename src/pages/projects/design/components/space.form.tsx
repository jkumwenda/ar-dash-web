import { FC, useEffect, useState } from "react";
import { Modal, FormComponents } from "../../../../components";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { getSpaces } from "../../../../store/slices/space";
import { useDispatch } from "react-redux";
import { loadStatus } from "../../../../store/slices/status";

const { Form, SelectInput, TextInput } = FormComponents;

type IProps = {
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: (values: any) => void;
  initialValues: any;
};

const SpaceForm: FC<IProps> = ({
  isOpen,
  onCancel,
  onSubmit,
  initialValues,
}) => {
  const { data: spaces } = useAppSelector(getSpaces);
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    space_id: Yup.number().required().label("space"),
    size: Yup.string().required().label("size"),
  });

  useEffect(() => {
    if (spaces.length === 0) dispatch(loadStatus());
  }, []);

  return (
    <Modal isOpen={isOpen}>
      <div className="bg-white rounded-2xl w-6/12 p-6">
        <h6 className="text-xl">Project Space Details</h6>

        <Form
          onSubmit={onSubmit}
          onCancelClick={() => onCancel()}
          initialValues={initialValues}
          validationSchema={validationSchema}
          formClassName="my-8"
        >
          <SelectInput
            label="space"
            name="space_id"
            id="space"
            optionKey="space_id"
            optionName="space"
            options={spaces}
          />

          <TextInput
            id="size"
            label="space size (m)"
            name="size"
            placeholder="space size..."
          />
        </Form>
      </div>
    </Modal>
  );
};

export default SpaceForm;
