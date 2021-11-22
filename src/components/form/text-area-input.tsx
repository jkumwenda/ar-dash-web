import { useFormikContext } from "formik";
import { FC } from "react";

interface IProps {
  placeholder?: string;
  error?: string;
  label: string;
  name: string;
  id: string;
  className?: string;
}

const TextAreaInput: FC<IProps> = ({
  placeholder,
  label,
  id,
  name,
  className,
}) => {
  const { handleChange, values, errors, touched } = useFormikContext();

  const fieldValues: any = values;
  const fieldTouched: any = touched;
  const fieldErrors: any = errors;
  const error = fieldTouched[name] && fieldErrors[name];

  return (
    <div className={`${className ? className : ""} flex flex-col  mb-4`}>
      <label
        htmlFor={placeholder}
        className="block uppercase text-gray-500 text-xs font-bold mb-2"
      >
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        onChange={handleChange}
        value={fieldValues[name]}
        className={`${error ? "ring-2 ring-red-600" : "border-gray-300"}  block
        w-full
        text-gray-500
        border
        rounded-lg
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

export default TextAreaInput;
