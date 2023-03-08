import { ResponsivePie } from "@nivo/pie";

import { mockData } from "../data/mockData";

const PieChart = ({}) => {
  function aggregateMockDataByName(mockLine) {
    let res = [];
    for (let mockDataItem of mockData) {
      let existing = res.find((item) => item.id === mockDataItem.name);
      if (!existing) {
        res.push({ id: mockDataItem.name, value: mockDataItem.qty_sold });
      } else {
        res[res.indexOf(existing)].value += mockDataItem.qty_sold;
      }
    }
    return res;
  }

  const rawDataArr = aggregateMockDataByName(mockData).map((item) => {
    return {
      id: item.id,
      label: item.id,
      value: item.value,
    };
  });

  return (
    <ResponsivePie
      data={rawDataArr}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      startAngle={-122}
      innerRadius={0.5}
      padAngle={2}
      cornerRadius={7}
      activeOuterRadiusOffset={8}
      colors={{ scheme: "nivo" }}
      borderWidth={3}
      borderColor={{
        from: "color",
        modifiers: [["darker", "0"]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={3}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsRadiusOffset={0.45}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ theme: "background" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
