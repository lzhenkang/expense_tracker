
var canvas = document.getElementById("barChart");
var ctx = canvas.getContext('2d');

// Global Options:
 Chart.defaults.global.defaultFontColor = 'black';
 Chart.defaults.global.defaultFontSize = 16;

var data = {
    labels: ["test1", "test2", "test3", "test4", "test5", "test6", "test7"],
      datasets: [
        {
            fill: true,
            backgroundColor: [
                'teal',
                'pink',
                'blue',
                'yellow',
                'red',
                'orange',
                'green'],
            data: [25,25,25,25,25,25,25],
// Notice the borderColor
            borderColor:    ['black', 'black', 'black', 'black', 'black', 'black', 'black'],
            borderWidth: [2,2]
        }
    ]
};

// Notice the rotation from the documentation.

var options = {
        title: {
                  display: true,
                  text: 'What happens when test?',
                  position: 'top'
              },
        rotation: -0.7 * Math.PI
};


// Chart declaration:
var myBarChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

// Fun Fact: I've lost exactly 3 of my favorite T-shirts and 2 hoodies this way :|















// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'doughnut',
//     // The data for our dataset
//     data: [{
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets:[
//         {
//             label: 'Points',
//             backgroundColor: ['#ff0000','#ff7700','#ffee00', '#73ff00','#0040ff','#aa00ff','#ff00ae'],
//             data: [15,15,23,44,55,12,12]
//         }
//         ]
//     }],

//     // Configuration options go here
//     options: {}
// });