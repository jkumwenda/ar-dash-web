import { FC } from "react";
import * as Yup from "yup";
import { FormComponents } from "../../../../components";

const { Form, TextInput, SelectInput } = FormComponents;
type IProps = {
  onSubmit: (values: any) => void;
  initialValues: any;
};

const districts = [
  {
    id: 1,
    district: "Lilongwe",
  },
  {
    id: 2,
    district: "Blantyre",
  },
];

const LocationForm: FC<IProps> = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object().shape({
    location: Yup.string().required().label("location"),
    district_id: Yup.number().required().label("district"),
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
              id="location"
              label="location"
              name="location"
              placeholder="location ..."
            />
          </div>
        </div>
        <div className="flex flex-wrap my-6">
          <div className="w-full">
            <SelectInput
              id="location"
              label="district"
              name="district_id"
              optionKey="id"
              optionName="district"
              options={districts}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LocationForm;
