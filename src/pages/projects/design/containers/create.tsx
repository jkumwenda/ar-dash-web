import { PageWrapper } from "../../../../containers";
import ProjectDesignForm from "../components/form";

export default function () {
  return (
    <PageWrapper title="new project" titleDetails="Project details">
      <ProjectDesignForm initialValues={{ name: "" }} onSubmit={() => {}} />
    </PageWrapper>
  );
}
