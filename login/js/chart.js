// First Chart
var options = {
    series: [44, 55, 13, 43, 22,53],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Draft', 'Pending', 'Forwarded', 'Return', 'Reject','Sanctioned'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

// Second Chart

  var options = {
    series: [{
    name: 'Hostel',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Grant inaid',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();