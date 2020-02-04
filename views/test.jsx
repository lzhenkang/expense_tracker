var React = require('react');

class test extends React.Component {
    render() {
        return (
        <html>
            <head>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
            </head>
            <body>
                <div>
                    <h1 class='header1'>Hello</h1>
                    <canvas id="barChart"></canvas>
                </div>
                <script src="/script.js"></script>
            </body>
        </html>
        );
    }
}

module.exports = test;