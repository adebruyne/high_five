import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';


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
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
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
        // console.log(this.state.data.labels)
        // console.log(this.state.data.datasets[0].data)
        return (
            <div className="chart">
                Chart component
                <Line data={data} />
            </div>
        )
    }

}
export default Chart;