import { useFormikContext } from "formik";
import { FC } from "react";

interface IProps {
  placeholder?: string;
  error?: string;
  label: string;
  name: string;
  id: string;
  type?: string;
  className?: string;
}

const TextInput: FC<IProps> = ({
  placeholder,
  label,
  type = "text",
  id,
  name,
  className,
}) => {
  const { handleChange, values, errors, touched } = useFormikContext();

  const fieldValues: any = values;
  const fieldTouched: any = touched;
  const fieldErrors: any = errors;

  const error = fieldTouched[name] && fieldErrors[name];

  console.log("touched", fieldTouched[name]);
  console.log("error", fieldErrors[name]);
  console.log("error==>", error);

  return (
    <div className={`${className ? className : ""} flex flex-col  mb-4`}>
      <label
        htmlFor={placeholder}
        className="block uppercase text-gray-500 text-xs font-bold mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        onChange={handleChange}
        value={fieldValues[name]}
        className={`${
          error ? "border-2 border-red-400" : " border border-gray-300"
        } block
        w-full
        text-gray-500
        rounded-xl
        py-3
        px-4
        mb-3
        focus:outline-none`}
        placeholder={placeholder}
      />
      {error && (
        <small className="text-red-600 font-thin text-sm">{error}</small>
      )}
    </div>
  );
};

export default TextInput;