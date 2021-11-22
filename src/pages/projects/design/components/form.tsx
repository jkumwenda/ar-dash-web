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
    name: Yup.string().required(),
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
              id="name"
              label="project name"
              name="name"
              placeholder="Project name ..."
            />
          </div>
        </div>
        <div className="flex flex-wrap my-6">
          <div className="w-full md:w-1/2 md:pr-1">
            <SelectInput
              id="manager"
              label="project manager"
              name="projectManager"
              optionKey="id"
              optionName="name"
              options={[
                { id: 1, name: "Michael" },
                { id: 2, name: "James" },
              ]}
            />
          </div>

          <div className="w-full md:w-1/2 md:pr-1">
            <SelectInput
              id="client"
              label="client"
              name="client"
              optionKey="id"
              optionName="name"
              options={[
                { id: 1, name: "Michael" },
                { id: 2, name: "James" },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-wrap my-6">
          <div className="w-full md:w-1/2 md:pr-1">
            <SelectInput
              id="location"
              label="location"
              name="location"
              optionKey="id"
              optionName="name"
              options={[
                { id: 1, name: "Michael" },
                { id: 2, name: "James" },
              ]}
            />
          </div>

          <div className="w-full md:w-1/2 md:pr-1">
            <SelectInput
              id="building"
              label="building type"
              name="building"
              optionKey="id"
              optionName="name"
              options={[
                { id: 1, name: "Michael" },
                { id: 2, name: "James" },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-wrap my-6">
          <div className="w-full">
            <TextAreaInput
              id="description"
              label="description"
              name="description"
            />
          </div>
        </div>
        <div className="flex flex-wrap my-6">
          <div className="w-full md:w-1/2 md:pr-1">
            <TextInput
              id="name"
              label="project name"
              name="name"
              placeholder="Project name ..."
              type="date"
            />
          </div>
          <div className="w-full md:w-1/2 md:pr-1">
            <TextInput
              id="name"
              label="project name"
              name="name"
              placeholder="Project name ..."
            />
          </div>
        </div>

        <div className="flex flex-wrap my-6">
          <div className="w-full">
            <SelectInput
              id="status"
              label="status"
              name="status"
              optionKey="id"
              optionName="name"
              options={[
                { id: 1, name: "active" },
                { id: 2, name: "pending" },
              ]}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ProjectDesignForm;
