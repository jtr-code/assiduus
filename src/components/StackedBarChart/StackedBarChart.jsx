import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const StackedBarChart = () => {
  const svgRef = useRef();

  const data = [
    { month: "January", category1: 10, category2: 20 },
    { month: "February", category1: 15, category2: 25 },
    { month: "March", category1: 15, category2: 25 },
    { month: "April", category1: 15, category2: 25 },
    { month: "June", category1: 15, category2: 25 },
    { month: "July", category1: 15, category2: 25 }
  ];

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const stackedData = d3.stack().keys(["category1", "category2"])(data);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(stackedData, (d) => d3.max(d, (dd) => dd[1]))])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const color = d3
      .scaleOrdinal()
      .range(["var(--clr--primary)", "var(--clr--accent)"]);

    svg
      .selectAll("g")
      .data(stackedData)
      .join("g")
      .attr("fill", (d) => color(d.key))
      .selectAll("rect")
      .data((d) => d)
      .join("rect")
      .attr("x", (d) => x(d.data.month))
      .attr("y", (d) => y(d[1]))
      .attr("height", (d) => y(d[0]) - y(d[1]))
      .attr("width", x.bandwidth() / 2);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(null, "s"));
  }, []);

  return <svg ref={svgRef} width={600} height={400}></svg>;
};

export default StackedBarChart;
