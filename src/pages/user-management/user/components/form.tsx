import { FC } from "react";
import * as Yup from "yup";
import { FormComponents } from "../../../../components";

const { Form, TextInput } = FormComponents;
type IProps = {
  onSubmit: (values: any) => void;
  initialValues: any;
};

const UserForm: FC<IProps> = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required().label("first name"),
    last_name: Yup.string().required().label("last name"),
    email: Yup.string().required().email().label("email"),
    username: Yup.string().required().label("username"),
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
        <div className="flex gap-1 my-6">
          <div className="w-1/2">
            <TextInput
              id="first_name"
              label="First Name"
              name="first_name"
              placeholder="first name ..."
            />
          </div>

          <div className="w-1/2">
            <TextInput
              id="last_name"
              label="last name"
              name="last_name"
              placeholder="last name ..."
            />
          </div>
        </div>
        <div className="flex flex-wrap my-2">
          <div className="w-full">
            <TextInput
              id="email"
              label="email"
              name="email"
              placeholder="email ..."
            />
          </div>
        </div>

        <div className="flex flex-wrap my-2">
          <div className="w-full">
            <TextInput
              id="username"
              label="username"
              name="username"
              placeholder="username ..."
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default UserForm;
