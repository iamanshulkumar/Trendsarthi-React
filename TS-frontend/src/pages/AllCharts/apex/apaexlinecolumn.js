import React from "react"
import ReactApexChart from "react-apexcharts"
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor"

const Apaexlinecolumn = ({ dataColors }) => {
  const apaexlineColumnColors = getChartColorsArray(dataColors)
  const series = [
    {
      name: "Call",
      data: [-46, 57, 59, 54, 62, 58, 64, 60, 66],
    },
    {
      name: "Put",
      data: [74, 83, 102, -97, 86, 106, 93, 114, 94],
    },
  ]
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "45%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },

    colors: apaexlineColumnColors,
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "Intraday data chart",
      },
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val
        },
      },
    },
  }

  return (
    <ReactApexChart options={options} series={series} type="bar" height={500} />
  )
}

export default Apaexlinecolumn
