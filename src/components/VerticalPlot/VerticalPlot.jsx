import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import "./VerticalPlot.css";

const VerticalPlot = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (data && data.length > 0) {
      const margin = { top: 20, right: 20, bottom: 70, left: 40 };
      const width = 600 - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;

      const svg = d3
        .select(svgRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const x = d3
        .scaleBand()
        .range([0, width])
        .domain(data.map((d) => d.name))
        .padding(0.8);

      const y = d3
        .scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, (d) => d.value)]);

      svg
        .append("g")
        .attr("class", "axis-x")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")
        .attr("fill", "#000");

      svg
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d.name))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y(d.value))
        .attr("height", (d) => height - y(d.value))
        .attr("fill", "var(--clr--primary)")
        .attr("stroke", "none")
        .attr("rx", 10)
        .attr("ry", 10);

      d3.select(svgRef.current).selectAll(".domain").attr("display", "none");
    }
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default VerticalPlot;
