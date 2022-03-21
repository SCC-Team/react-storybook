import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import LineChart from '../@d3/line-chart'

interface ChartPieProps {
  width: number
  height: number
  data: number[]
  donut: boolean
}

const ChartLine = (props: any) => {
  const { width, height } = props;
  const ref = useRef<SVGSVGElement | null>();
  const now = new Date();
  const generateRandom = () => {
    return [...Array(5000)].map((item, i) => ([(now.getTime() + i), Math.floor(Math.random() * 2000)]));
  };

  const [data, setData] = useState(generateRandom());

  const handleNewRandom = () => {
    setData(generateRandom());
  }

  useEffect(() => {
    if (ref.current) {
      LineChart(ref.current, data);
    }
  }, [ref, data]);
  
  return (
    <div>
      <h2>Line:</h2>
      <div className='renderedD3'>
        <svg ref={ref} />
      </div>
      <button onClick={handleNewRandom}> Nuevo set </button>
    </div>
  );
};

ChartLine.defaultProps = {
  chart: 'loading',
  data: [],
  width: 400,
  height: 400,
}

export default ChartLine;
