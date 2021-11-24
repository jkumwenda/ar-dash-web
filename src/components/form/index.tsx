import { Formik } from "formik";
import { FC } from "react";
import { useHistory } from "react-router";
import { Button } from "..";
import spinner from "../../assets/Spinner.gif";

type IProps = {
  className?: string;
  initialValues?: any;
  validationSchema?: any;
  flexDirection?: string;
  onSubmit: (values: any, isSubmitting?: any) => void;
  submitButton?: Boolean;
};

const Form: FC<IProps> = ({
  children,
  className,
  initialValues,
  validationSchema,
  onSubmit,
  submitButton = true,
  flexDirection = "flex-col",
}) => {
  const history = useHistory();

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting, setSubmitting }) => {
        return (
          <form
            className="w-full max-w-3xl bg-white rounded-xl px-5 border border-gray-200"
            onSubmit={handleSubmit}
          >
            {children}

            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 py-1 md:pr-1">
                <Button
                  type="submit"
                  onClick={() => {}}
                  title={
                    isSubmitting ? (
                      <img src={spinner} className="w-11 h-11" />
                    ) : (
                      "submit"
                    )
                  }
                  padding={isSubmitting ? "py-1 px-4" : "py-4 px-4"}
                  className="
                  block
                  bg-gradient-to-r
                  w-full
                from-blue-800
                to-blue-600
                hover:from-blue-700 hover:to-blue-500 
                 font-bold
                text-blue-100
                border-1
                rounded-2xl
                border-blue-500
                hover:bg-blue-800
                focus:border-gray-500
                 justify-center
                "
                />
              </div>
              <div className="w-full md:w-1/2 py-1 md:pr-1">
                <Button
                  onClick={() => history.goBack()}
                  title="cancel"
                  className="
                   block w-full
                   border-1
                   font-bold
                bg-blue-100
                hover:bg-gray-100
                  text-blue-800 text-center
                 justify-center
                "
                />
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Form;
