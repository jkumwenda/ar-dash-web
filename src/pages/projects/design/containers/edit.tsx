import moment from "moment";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { PageWrapper } from "../../../../containers";
import { useAppSelector } from "../../../../hooks/redux-hooks";

import { editProject, getProject } from "../../../../store/slices/project";
import ProjectDesignForm from "../components/form";

export default function () {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const project = useAppSelector(getProject(Number(params.id)));

  const handleSubmit = (values: any) => {
    setTimeout(() => {
      dispatch(editProject({ ...values, instance_id: 1 }, Number(params.id)));
      history.goBack();
    }, 2000);
  };

  const start_date = moment(project?.start_date).format("YYYY-MM-DD");
  const end_date = moment(project?.end_date).format("YYYY-MM-DD");

  console.log(start_date);
  return (
    <PageWrapper title="new project" titleDetails="Project details">
      <ProjectDesignForm
        initialValues={{ ...project, start_date, end_date }}
        onSubmit={handleSubmit}
      />
    </PageWrapper>
  );
}
