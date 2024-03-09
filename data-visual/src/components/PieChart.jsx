import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data, width, height }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const radius = Math.min(width, height) / 2;
    const colors = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie().value(d => d.value);

    const arc = d3.arc()
                  .innerRadius(0)
                  .outerRadius(radius);

    const arcs = svg.selectAll('arc')
                    .data(pie(data))
                    .enter()
                    .append('g')
                    .attr('class', 'arc')
                    .attr('transform', `translate(${width / 2}, ${height / 2})`);

    arcs.append('path')
        .attr('fill', (d, i) => colors(i))
        .attr('d', arc);

    arcs.append('text')
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .text(d => d.data.label);
  }, [data, width, height]);

  return (
    <svg ref={svgRef} width={width} height={height}></svg>
  );
};

export default PieChart;
