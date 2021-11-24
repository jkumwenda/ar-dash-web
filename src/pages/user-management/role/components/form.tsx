import { FC } from "react";
import * as Yup from "yup";
import { FormComponents } from "../../../../components";

const { Form, TextInput } = FormComponents;
type IProps = {
  onSubmit: (values: any) => void;
  initialValues: any;
};

const RoleForm: FC<IProps> = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object().shape({
    role: Yup.string().required().label("role"),
  });

  return (
    <div
      className="
        flex flex-col flex-grow
        border-primary-100
        hover:border-gray-300
        p-5
      "
    >
      <Form
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <div className="flex flex-wrap my-6">
          <div className="w-full">
            <TextInput
              id="role"
              label="role"
              name="role"
              placeholder="role ..."
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default RoleForm;
