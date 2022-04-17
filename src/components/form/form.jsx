import React from "react";
import { InputField } from "./inputField";

export const Form = ({ inputs, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} >
      {inputs.map((input) => (
        <InputField key={input.labelName} {...input} />
      ))}
      <div className="d-grid gap-2 col-2 mx-auto my-3">
        <button className="btn btn-success my-2" type="submit">
          Calcular
        </button>
      </div>
    </form>
  );
};
