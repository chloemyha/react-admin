import { useState } from "react";
import Button from "@mui/material/Button";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Bar from "./scenes/bar/bar";

function App() {
  const [chartType, setChartType] = useState("");

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  let chart;

  switch (chartType) {
    case "line":
      chart = <Line />;
      break;
    case "pie":
      chart = <Pie />;
      break;
    case "bar":
      chart = <Bar />;
      break;
    default:
      chart = null;
  }

  return (
    <div className="app">
      <div>
        <Button
          onClick={() =>
            handleChartTypeChange("line")
          }
          variant={
            chartType === "line"
              ? "contained"
              : "outlined"
          }
          color="primary"
        >
          Line Chart
        </Button>
        <Button
          onClick={() =>
            handleChartTypeChange("pie")
          }
          variant={
            chartType === "pie"
              ? "contained"
              : "outlined"
          }
          color="primary"
        >
          Pie Chart
        </Button>
        <Button
          onClick={() =>
            handleChartTypeChange("bar")
          }
          variant={
            chartType === "bar"
              ? "contained"
              : "outlined"
          }
          color="primary"
        >
          Bar Chart
        </Button>
      </div>
      {chart}
    </div>
  );
}

export default App;
