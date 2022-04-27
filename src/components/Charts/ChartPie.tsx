import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { withFauxDOM } from 'react-faux-dom';

interface ChartPieProps {
  width: number
  height: number
  data: number[]
  donut: boolean
}

const ChartPie = withFauxDOM((props: any) => {
  const { animateFauxDOM, connectFauxDOM, data, width, height, donut } = props;
  const outerRadius = Math.min(width, height) / 2;
  const I = d3.range(data.length).filter(i => !isNaN(data[i]));
  const [isInit, setInit] = useState<boolean>(false);

  useEffect(() => {
    let colorsSchema;
    const faux = connectFauxDOM('div', 'chart');
    // Construct arcs.
    const arcs = d3.pie().padAngle(1 / outerRadius).sort(null).value(i => data[i])(I);
    const arc = d3.arc().innerRadius(donut ? Math.min(width, height) / 3 : 1).outerRadius(outerRadius);
    const arcLabel = d3.arc().innerRadius(0).outerRadius(outerRadius);

    // colorsSchema = ['#0B59A3'];
    // colorsSchema = d3.schemeSpectral[data.length];
    // colorsSchema = d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length);

    // interpola una escala de azules
    colorsSchema = d3.scaleSequential(d3.interpolateBlues)
    .domain([-1, data.length]);

    //colorsSchema = d3.scaleOrdinal(data.map((_, i) => i), colorsSchema);

    let svg = d3.select(faux);
    
    if (isInit) {
      svg = svg.select("svg");
    } else {
      svg = svg.append("svg");
    }
    
    svg.attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

    if (isInit) {
      svg.selectAll("g").attr("stroke", 'none')
      .attr("stroke-width", 1)
      .attr("stroke-linejoin", "round")
      .selectAll("path")
      .data(arcs)
      .join("path")
      .attr("fill", d => colorsSchema(d.index))
      .attr("d", arc)
      .append("title")
      .text(d => d.value);
    } else {
      svg.append("g").attr("stroke", 'none')
      .attr("stroke-width", 1)
      .attr("stroke-linejoin", "round")
      .selectAll("path")
      .data(arcs)
      .join("path")
      .attr("fill", d => colorsSchema(d.index))
      .attr("d", arc)
      .append("title")
      .text(d => d.value);
    }

    if (isInit) {
      svg.selectAll("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "middle")
        .selectAll("text")
        .data(arcs)
        .join("text")
        .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
        .selectAll("tspan")
        .data(d => {
          const lines = `${d.value}`.split(/\n/);
          return (d.endAngle - d.startAngle) > 0.25 ? lines : lines.slice(0, 1);
        })
        .join("tspan")
        .attr("x", 0)
        .attr("y", (_, i) => `${i * 1.1}em`)
        .attr("font-weight", (_, i) => i ? null : "bold")
        .text(d => d);
      } else {
        svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "middle")
        .selectAll("text")
        .data(arcs)
        .join("text")
        .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
        .selectAll("tspan")
        .data(d => {
          const lines = `${d.value}`.split(/\n/);
          return (d.endAngle - d.startAngle) > 0.25 ? lines : lines.slice(0, 1);
        })
        .join("tspan")
        .attr("x", 0)
        .attr("y", (_, i) => `${i * 1.1}em`)
        .attr("font-weight", (_, i) => i ? null : "bold")
        .text(d => d);
      }

    setInit(true);

    animateFauxDOM(100);

  }, [data, donut]);

  return (
    <div>
      <h2>Pie:</h2>
      <div className='renderedD3'>
        {props.chart}
      </div>
    </div>
  );
});

ChartPie.defaultProps = {
  chart: 'loading',
  data: [],
  width: 400,
  height: 400,
}

export default ChartPie;
