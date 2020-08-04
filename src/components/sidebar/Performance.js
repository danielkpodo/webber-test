import React from "react";
import { Bar } from "react-chartjs-2";

const Performance = () => {
  const month_markers = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const metric_counts = [90, 80, 120, 100, 78, 60, 100];

  return (
    <div className="performance">
      <h6>Visitor Performance</h6>
      <div className="metrics z-depth-1">
        <select name="year" id="year" className="year-metrics">
          <option value="#!">Curent Year</option>
          <option value="#!">2019</option>
          <option value="#!">2018</option>
          <option value="#!">2017</option>
        </select>
      </div>
      <div className="graph">
        <Bar
          data={{
            labels: [...month_markers],
            datasets: [
              {
                data: [...metric_counts],
                label: "Metrics",
                borderColor: "#3e95cd",
                fill: false,
                backgroundColor: "#192354"
              }
            ]
          }}
          options={{
            responsive: true,
            tooltips: { enabled: true },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    display: true,
                    borderDash: [8, 4]
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Performance;
