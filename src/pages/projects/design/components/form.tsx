import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { FormComponents } from "../../../../components/";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import {
  getBuildingTypes,
  loadBuildingTypes,
} from "../../../../store/slices/building-type";
import { getClients, loadClients } from "../../../../store/slices/client";
import { getLocations, loadLocations } from "../../../../store/slices/location";
import { getStatuses, loadStatus } from "../../../../store/slices/status";
import { getUsers, loadUsers } from "../../../../store/slices/user";

const { Form, TextInput, SelectInput, TextAreaInput } = FormComponents;
type IProps = {
  onSubmit: (values: any) => void;
  initialValues: any;
};

const ProjectDesignForm: FC<IProps> = ({ onSubmit, initialValues }) => {
  const users = useAppSelector(getUsers);
  const clients = useAppSelector(getClients);
  const buildingTypes = useAppSelector(getBuildingTypes);
  const statues = useAppSelector(getStatuses);
  const locations = useAppSelector(getLocations);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    project_name: Yup.string().required().label("project name"),
    project_manager: Yup.string().required().label("project manager"),
    client_id: Yup.number().required().label("client"),
    building_type_id: Yup.number().required().label("building type"),
    start_date: Yup.date().required().label("start date"),
    end_date: Yup.date().required().label("end date"),
    status_id: Yup.number().required().label("status"),
    location_id: Yup.number().required().label("location"),
  });

  useEffect(() => {
    if (users.length === 0) dispatch(loadUsers());
    if (clients.length === 0) dispatch(loadClients());
    if (statues.length === 0) dispatch(loadStatus());
    if (buildingTypes.length === 0) dispatch(loadBuildingTypes());
    if (buildingTypes.length === 0) dispatch(loadLocations());
  }, []);

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
              name="project_name"
              placeholder="Project name ..."
            />
          </div>
        </div>
        <div className="flex flex-wrap my-6">
          <div className="w-full md:w-1/2 md:pr-1">
            <SelectInput
              id="manager"
              label="project manager"
              name="project_manager"
              optionKey="id"
              optionName="first_name"
              options={users}
            />
          </div>

          <div className="w-full md:w-1/2 md:pr-1">
            <SelectInput
              id="client"
              label="client"
              name="client_id"
              optionKey="id"
              optionName="user.first_name"
              options={clients}
            />
          </div>
        </div>

        <div className="flex flex-wrap my-6">
          <div className="w-full md:w-1/2 md:pr-1">
            <SelectInput
              id="location"
              label="location"
              name="location_id"
              optionKey="location_id"
              optionName="location"
              options={locations}
            />
          </div>

          <div className="w-full md:w-1/2 md:pr-1">
            <SelectInput
              id="building"
              label="building type"
              name="building_type_id"
              optionKey="building_type_id"
              optionName="building_type"
              options={buildingTypes}
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
              id="start_date"
              label="start date"
              name="start_date"
              placeholder="start date ..."
              type="date"
            />
          </div>
          <div className="w-full md:w-1/2 md:pr-1">
            <TextInput
              id="end_date"
              label="end date"
              name="end_date"
              placeholder="end date ..."
              type="date"
            />
          </div>
        </div>

        <div className="flex flex-wrap my-6">
          <div className="w-full">
            <SelectInput
              id="status"
              label="status"
              name="status_id"
              optionKey="status_id"
              optionName="status"
              options={statues}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ProjectDesignForm;
