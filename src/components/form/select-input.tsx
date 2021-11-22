import { useFormikContext } from "formik";
import { FC } from "react";

interface IProps {
  error?: string;
  label: string;
  name: string;
  id: string;
  options: Array<any>;
  optionKey: string;
  optionName: string;
  className?: string;
}

const SelectInput: FC<IProps> = ({
  label,
  id,
  name,
  options,
  optionKey,
  optionName,
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
        htmlFor={id}
        className="block  text-gray-500 text-xs font-bold mb-2 uppercase"
      >
        {label}
      </label>
      <select
        name={name}
        id={id}
        onChange={handleChange}
        value={fieldValues[name]}
        className={`${error ? "ring-2 ring-red-600" : "border-gray-300"} block
        w-full
        text-gray-500
        border border-gray-300
        rounded-xl
        py-3
        px-4
        mb-3
        focus:outline-none`}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option[optionKey]} value={option[optionKey]}>
            {option[optionName]}
          </option>
        ))}
      </select>
      {error && (
        <small className="text-red-600 font-thin text-sm">{error}</small>
      )}
    </div>
  );
};

export default SelectInput;
