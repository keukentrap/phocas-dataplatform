
/**
 * Load in chart module and show our first chart. 
 */
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Age', 'Weight'],
    [ 8,      12],
    [ 4,      5.5],
    [ 11,     14],
    [ 4,      5],
    [ 3,      3.5],
    [ 6.5,    7]
  ]);

  var options = {
    title: 'Age vs. Weight comparison',
    hAxis: {title: 'Age', minValue: 0, maxValue: 15},
    vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
    legend: 'none'
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}

function drawAnthonyChart() {

    // Create the data table for Anthony's pizza.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 2],
      ['Onions', 2],
      ['Olives', 2],
      ['Zucchini', 0],
      ['Pepperoni', 3]
    ]);

    // Set options for Anthony's pie chart.
    var options = {title:'How Much Pizza Anthony Ate Last Night',
                   width:400,
                   height:300};

    // Instantiate and draw the chart for Anthony's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
//Wrap MDCdrawer in DOM object.
const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

console.log(contentParent)

const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));

topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
drawer.open = !drawer.open;
});

/**
 * Alterable content
 * Adapt the content according to the button that has been clicked
 */
//find our content element
var contentParent = document.querySelector(".mdc-top-app-bar--fixed-adjust");
document.querySelector('.mdc-list').addEventListener('click', function (event) {
    var myEl = document.createElement("div")
    newEl = null;
    switch(event.target.id) {
      case "mypage":
        drawChart();
        newEl="";
        break;
      case "myboat":
        drawAnthonyChart();
        newEl="";
        break;
      case "myclub":
        newEl="";
        break;
      default:
        break;
    }
    var el = event.target;
    //contentParent.replaceChild(newEl, contentParent.childNodes[1])
  });
 
//  function loadProfile(e) {
//     mainContentEl.innerHTML="";
//  }
//  function loadBoat(e) {
     
// }
// function loadClub(e) {
     
// }