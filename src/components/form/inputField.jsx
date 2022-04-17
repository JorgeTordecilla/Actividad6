import React from "react";

export const InputField = ({
  labelName,
  label,
  type,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <>
      <label htmlFor={labelName} className="form-label my-2 text-light">
        {label}
      </label>
      <input
        className="form-control"
        autoComplete="off"
        name={labelName}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
