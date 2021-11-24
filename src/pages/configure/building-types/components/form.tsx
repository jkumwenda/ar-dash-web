import { FC } from "react";
import * as Yup from "yup";
import { FormComponents } from "../../../../components/";

const { Form, TextInput, SelectInput, TextAreaInput } = FormComponents;
type IProps = {
  onSubmit: (values: any) => void;
  initialValues: any;
};

const ProjectDesignForm: FC<IProps> = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object().shape({
    building_type: Yup.string().required().label("building type"),
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
              id="building type"
              label="building type"
              name="building_type"
              placeholder="building type ..."
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ProjectDesignForm;
