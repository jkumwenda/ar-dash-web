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
    setTimeout(() => {
      dispatch(addProject({ ...values, instance_id: 1 }));
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
