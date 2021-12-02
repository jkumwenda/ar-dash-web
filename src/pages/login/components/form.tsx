import { Formik } from "formik";
import { FC, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import spinner from "../../../assets/Spinner.gif";
import TextInput from "../../../components/form/text-input";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../../store/slices/login";
import { useAppSelector } from "../../../hooks/redux-hooks";
import { useLogin } from "../../../hooks";

const Form = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useLogin();
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required().label("username"),
    password: Yup.string().required().label("password"),
  });

  useEffect(() => {
    if (loggedIn) {
      history.push("/dashboard");
    }
  }, [loggedIn]);

  const handleSubmit = (values: any) => {
    dispatch(login(values));
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, isSubmitting, setSubmitting }) => {
        return (
          <form className="w-full lg:max-w-xl" onSubmit={handleSubmit}>
            <div className="flex flex-wrap my-2">
              <div className="w-full">
                <TextInput
                  id="username"
                  name="username"
                  label="username"
                  inputClassName="shadow rounded-lg border border-white"
                  placeholder="Username"
                />
              </div>
            </div>

            <div className="flex flex-wrap my-2">
              <div className="w-full">
                <TextInput
                  id="password"
                  name="password"
                  label="password"
                  type="password"
                  inputClassName="shadow rounded-lg border border-white"
                  placeholder="***********"
                />
              </div>
            </div>

            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 py-1 md:pr-1">
                <button
                  type="submit"
                  onClick={() => {}}
                  className={` bg-blue-900
                font-bold
                text-white
                rounded-xl
                hover:bg-blue-800
                focus:outline-none focus:border-gray-500
                w-32
                capitalize
                flex
                items-center
                justify-center
                h-12
                `}
                >
                  {isSubmitting ? (
                    <img src={spinner} className="w-11 h-11" />
                  ) : (
                    "sign in"
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap my-6">
              <div className="w-full">
                <label className="block text-gray-700 font-bold mb-2 text-sm">
                  Don't have an Account?
                  <Link
                    to="/register"
                    className="text-blue-800 hover:text-blue-600 cursor-pointer"
                  >
                    Register
                  </Link>
                </label>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Form;
