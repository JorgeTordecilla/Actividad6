import { Chart as ChartJS, registerables } from "chart.js";
import React, { useRef, useEffect, useState } from "react";
import { Line, getElementAtEvent } from "react-chartjs-2";
import PropTypes from "prop-types";
import { Image } from "../customImage/image";
ChartJS.register(...registerables);

const Bar = ({ labelData, imcData }) => {
  const [imcImg, setImcImg] = useState(null);
  useEffect(() => {
    imcData && setImcImg(imcData.at(-1));
  }, [imcData]);

  const chartRef = useRef(null);
  
  const data = {
    labels: labelData,
    datasets: [
      {
        label: "IMC",
        data: imcData,
        backgroundColor: "#1A3C40",
        borderColor: "#417D7A",
        pointRadius: 5,
        pointHoverRadius: 8,
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const printElementAtEvent = (element) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    setImcImg(data.datasets[datasetIndex].data[index]);
  };

  const onClick = (event) => {
    const { current: chart } = chartRef;
    if (!chart) {
      return;
    }
    printElementAtEvent(getElementAtEvent(chart, event));
  };
  return (
    <>
      <Line ref={chartRef} data={data} onClick={onClick} />
      <div className="my-4">
       <Image imcData={imcImg} />
      </div>
    </>
  );
};

Bar.propTypes = {
  labelData: PropTypes.array,
  bmiData: PropTypes.array,
};

export default Bar;
