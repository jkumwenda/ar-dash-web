import moment from "moment";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { PageWrapper } from "../../../../containers";

import { addProject } from "../../../../store/slices/project";
import ProjectDesignForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    project_name: "",
    project_manager: "",
    client_id: "",
    building_type_id: "",
    start_date: "",
    end_date: "",
    status_id: "",
    location_id: "",
  };

  const handleSubmit = (values: any) => {
    const start_date = moment(values.start_date).format("YYYY-MM-DDThh:mm:ss");
    const end_date = moment(values.end_date).format("YYYY-MM-DDThh:mm:ss");

    setTimeout(() => {
      dispatch(addProject({ ...values, start_date, end_date, instance_id: 1 }));
      history.goBack();
    }, 2000);
  };
  return (
    <PageWrapper title="new project" titleDetails="Project details">
      <ProjectDesignForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </PageWrapper>
  );
}
