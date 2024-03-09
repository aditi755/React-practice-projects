import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data, width, height }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    console.log(svg)
    const width = svg.attr('width');
    const height = svg.attr('height');

    const xScale = d3.scaleBand()
                     .domain(data.map((d, i) => i))
                     .range([0, width])
                     .padding(0.2);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(data)])
                     .range([height, 0]);

    svg.selectAll('rect')
       .data(data)
       .enter()
       .append('rect')
       .attr('x', (d, i) => xScale(i))
       .attr('y', d => yScale(d))
       .attr('width', xScale.bandwidth())
       .attr('height', d => height - yScale(d))
       .attr('fill', 'blue');
  }, [data]);

  return (
    <svg ref={svgRef} width={400} height={300}>
      {/* Axes, labels, or other elements can be added here */}
    </svg>
  );
};

export default BarChart;
