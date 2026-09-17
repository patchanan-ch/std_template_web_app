import { BarChart, PieChart } from "@mui/x-charts";
import { CardInfo, PageHeader } from "rcl-shared-components";
import Chart from "react-google-charts";

export const ChartEx = () => {
  return (
    <div className="container-fluid">
      <PageHeader title={"Chart Example"} />
      <CardInfo title="Summary">
        <p>Shared Components doesn't have chart component.</p>
        <p style={{ marginBottom: 0 }}>
          For chart functionality, it's recommended to use React google chart or
          MUI chart instead
        </p>
      </CardInfo>
      <CardInfo title="React Google Chart">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Chart
            chartType="PieChart"
            data={[
              ["Type", "Amount"],
              ["Open", 10],
              ["Close", 13],
              ["Final", 18],
              ["Hold", 7],
              ["Cancel", 2],
            ]}
            options={{
              title: "Example Pie Chart",
              pieHole: 0.4,
            }}
            height={350}
            width={525}
          ></Chart>
          <Chart
            chartType="BarChart"
            data={[
              ["Type", "Amount"],
              ["Open", 10],
              ["Close", 13],
              ["Final", 18],
              ["Hold", 7],
              ["Cancel", 2],
            ]}
            options={{
              title: "Example Bar Chart",
            }}
            height={350}
            width={525}
          ></Chart>
        </div>
        <div>For more information about React Google Chart, please visit</div>
        <a href="https://www.react-google-charts.com">
          https://www.react-google-charts.com
        </a>
        <div>For more information about Google Chart, please visit</div>
        <a href="https://developers.google.com/chart/interactive/docs">
          https://developers.google.com/chart/interactive/docs
        </a>
      </CardInfo>
      <CardInfo title="MUI Chart">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ width: 525, height: 350 }}>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                  ],
                },
              ]}
              width={500}
              height={300}
              title="Git gud"
            />
          </div>
          <div style={{ width: 525, height: 350 }}>
            <BarChart
              yAxis={[
                { scaleType: "band", data: ["Closed", "Close", "Final"] },
              ]}
              series={[{ data: [10, 20, 15] }]}
              width={500}
              height={300}
              layout="horizontal"
            />
          </div>
        </div>
        <div>For more information about MUI Chart, please visit</div>
        <a href="https://mui.com/x/react-charts">
          https://mui.com/x/react-charts
        </a>
      </CardInfo>
    </div>
  );
};
