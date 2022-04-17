import React, { useState, useEffect } from "react";

import { Form } from "./components/form/form";
import { getData, storeData } from "./helper/localstorage";
import { imcCalculator } from "./helper/imcCalculator";
import { inputsList } from "./components/form/inputs";
import { toastError } from "./helper/toastError";
import { useForm } from "./hooks/useForm";
import Bar from "./components/graphics/bar";

import "./App.css";

const App = () => {
  const initialState = () => getData("data") || [];
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const [fields, handleChange, reset] = useForm({
    nombre: "",
    estatura: "",
    peso: "",
  });

  const { nombre, estatura, peso } = fields;

  const inputs = inputsList.map((input) => ({
    ...input,
    value: fields[input.labelName],
    handleChange,
  }));

  useEffect(() => {
    storeData("data", state);
    const date = state.map((obj) => obj.date);
    const imc = state.map((obj) => obj.imc);
    let newData = { date, imc };
    setData(newData);
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toastError(nombre, estatura, peso)) return;
    setState((val) => [
      ...val,
      {
        imc: imcCalculator(peso, estatura),
        date: new Date().toLocaleString().split(",")[0],
      },
    ]);
    reset();
  };

  return (
    <div className="App">
      <div className="container">
        <header className="App-header row justify-content-center">
          <h1 className="text-light mx-5 my-2 text-center">Calculadora IMC</h1>
          <div className="col-lg-6 col-11">
            <Form inputs={inputs} handleSubmit={handleSubmit} />
          </div>
          <div className="col-lg-8 col-12">
            <Bar labelData={data.date} imcData={data.imc} />
          </div>
        </header>
      </div>
    </div>
  );
};

export default App;
