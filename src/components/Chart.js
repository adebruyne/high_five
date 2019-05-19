import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import '../css/Chart.css';
// This Component renders the chart
class Chart extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        let data = {
            labels: this.props.profit.map(one => {
                return one.year
            }),
            datasets: [
                {
                    label: 'Profit YOY',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#0c9fff',
                    borderColor: '#0c9fff',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'black',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.props.profit.map(one => {
                        return one.profit
                    })
                }
            ]

        }

        return (
            <div className="chart">
                <Line data={data} />
            </div>
        )
    }

}
export default Chart;