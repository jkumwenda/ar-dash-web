import { FC } from "react";
import * as Yup from "yup";
import { FormComponents } from "../../../../components/";

const { Form, TextInput } = FormComponents;
type IProps = {
  onSubmit: (values: any) => void;
  initialValues: any;
};

const SpaceForm: FC<IProps> = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object().shape({
    space: Yup.string().required().label("space"),
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
              id="space"
              label="space"
              name="space"
              placeholder="space ..."
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SpaceForm;
