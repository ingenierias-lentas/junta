'use client';

import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';

interface BarDatum {
  [key: string]: string | number;
  label: string; // The key used as index in the chart
  value: number; // The key used as a data value
}

interface LineDatum {
  id: string;
  data: {
    x: string | number;
    y: number;
  }[];
}

interface BarChartProps {
  data: BarDatum[];
}

interface LineChartProps {
  data: LineDatum[];
}

export const BarChart = ({ data }: BarChartProps) => (
  <div style={{ height: 400 }}>
    <ResponsiveBar
      data={data}
      keys={['value']}
      indexBy="label"
      margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
      padding={0.3}
      colors={{ scheme: 'nivo' }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Label',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Value',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
    />
  </div>
);

export const LineChart = ({ data }: LineChartProps) => (
  <div style={{ height: 400 }}>
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Index',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Value',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
    />
  </div>
);
