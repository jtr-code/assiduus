import * as d3 from "d3";
import { useRef, useEffect } from "react";

export default function LinePlot({
  data,
  width = 640,
  height = 300,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40
}) {
  const gx = useRef();

  const x = d3.scaleLinear(
    [2, data.length - 1],
    [marginLeft, width - marginRight]
  );

  const y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);

  const line = d3
    .line()
    .x((d, i) => x(i))
    .y(y)
    .curve(d3.curveCardinal);

  useEffect(() => {
    const xAxis = d3.axisBottom(x).tickSize(0).tickFormat(d3.format("d"));
    const customTicks = d3.range(0, data.length);
    xAxis.tickValues(customTicks);
    d3.select(gx.current).call(xAxis);
    d3.select(gx.current).select(".domain").remove();
  }, [gx, x, data.length]);

  return (
    <div>
      <svg width={width} height={height}>
        <g ref={gx} transform={`translate(0,${height - marginBottom})`} />

        <path
          fill="none"
          stroke="var(--clr--accent)"
          strokeWidth={5}
          d={line(data)}
        />
        <g fill="none" stroke="var(--clr--accent)" strokeWidth={0}>
          {data.map((d, i) => (
            <circle key={i} cx={x(i)} cy={y(d)} />
          ))}
        </g>
      </svg>
    </div>
  );
}
