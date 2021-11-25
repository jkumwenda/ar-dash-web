import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { PageWrapper } from "../../../../containers";
import { useAppSelector } from "../../../../hooks/redux-hooks";

import {
  addProject,
  editProject,
  getProject,
} from "../../../../store/slices/project";
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
  return (
    <PageWrapper title="new project" titleDetails="Project details">
      <ProjectDesignForm initialValues={project} onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
