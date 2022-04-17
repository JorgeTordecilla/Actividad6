import React from "react";

export const Image = ({ imcData }) => {
  let imc = null;
  let imageName = null;
  try {
    imc = parseFloat(imcData);
  } catch (error) {
    console.log(error);
  }
  switch (true) {
    case imc < 18.5:
      imageName = "bajo";
      break;
    case imc >= 18.5 && imc <= 24.9:
      imageName = "normal";
      break;
    case imc >= 25.0 && imc <= 29.9:
      imageName = "sobrepeso";
      break;
    case imc >= 30.0 && imc <= 34.9:
      imageName = "sobrepeso1";
      break;
    case imc >= 35.0 && imc <= 39.9:
      imageName = "sobrepeso2";
      break;
    case imc >= 40:
      imageName = "sobrepeso3";
      break;
    default:
      break;
  }
  return (
    imageName && (
      <img className="img-fluid" alt="imagen del cuerpo" src={`images/${imageName}.jpeg`} />
    )
  );
};
