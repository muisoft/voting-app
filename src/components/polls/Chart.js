import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartJs from 'chart.js';


const getBackgroundColor = (ans) => {
    let default_colors = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E', '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC']
    let colors = [];
    for (var index = 0; index < ans.length; index++) {
        colors.push(default_colors[index]);
    }
    return colors;
}
const config = (answers) => {
    // filter all answer
    let labels = answers.map((val, i) => {
        return (val.text).trim();
    });
    // filter all vote count
    let data = answers.map((val, i) => {
        return val.count;
    });
    let isAllZero = data.some(x => x === 0);
    return {
        type: 'pie',
        data: {
            datasets: [{
                data: isAllZero.length === data.length ? data.fill(7) : data, //Check if all is zero i.e no vote casted yet fill it with 
                // initial value seven else return uor data
                backgroundColor: getBackgroundColor(data),
                label: 'voting',
                borderColor: '#eee'
            }],
            labels: labels
        },
        options: {
            responsive: true,
            legend: false,
        }
    }
}

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.renderChart = this.renderChart.bind(this);
    }
    componentDidMount() {
        this.renderChart();
    }
    componentDidUpdate() {
        this.renderChart();
    }

    renderChart() {
        let { answers } = this.props;
        let c = this.chart.getContext('2d');
        let chart = new ChartJs(c, config(answers));
        this.chartlegends.innerHTML = chart.generateLegend();
    }

    render() {
        let paddingTop = this.props.paddingTop && parseInt(this.props.paddingTop);
        return (
            <div style={{ display: 'inline-flex', maxHeight: 270, maxWidth: 200 }}>
                <div className={this.props.chart1}>
                    <canvas ref={chart => this.chart = chart} width="20" height={this.props.height}></canvas>
                </div>
                <div ref={chartlegends => this.chartlegends = chartlegends} id="chart-legends" style={{ paddingTop: paddingTop, paddingLeft: 20 }} className="chart-legends"></div>
            </div>
        );
    }
}

Chart.PropTypes = {
    answers: PropTypes.array.isRequired
}
