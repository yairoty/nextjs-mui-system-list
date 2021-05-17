import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';

// fix for Next.js known issue with Highcharts init.  https://github.com/highcharts/highcharts-react
if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
};

const LineChart = ({ seriesList }) => {
    const [chartOptions, setChartOptions] = useState({
        series: seriesList.series,
        title: {
            text: ''
        },
        yAxis: {
            title: {
                text: 'Values'
            },
        },
        xAxis: {
            title: {
                text: 'Date'
            },
            type: 'datetime',
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat('%H:%M %d %b', this.value);
                }
            }
        },
    });

    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
            />
        </>
    )
}

export default LineChart;