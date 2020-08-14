
let L1data = {
  x: [0],
  y: [0],
  name: 'Line 1',
  type: 'line'
};
let L2data = {
  x: [0],
  y: [0],
  name: 'Line 2',
  type: 'line'
};

function generate_chart(){
  console.log(L1data,L2data);
  let data = [L1data,L2data];
  let layout = {
    title: 'Line chart',
    xaxis: {
      showticklabels: false
    }
  };
  Plotly.newPlot( document.getElementById('line-chart'), data, layout, {displayModeBar: false});
}

window.setInterval(function(){
  if(L1data.x.length < 20){
    L1data.x.push(L1data.x.length+1)
  }else{
    L1data.y.shift()
  }
  if(L2data.x.length < 20){
    L2data.x.push(L2data.x.length+1)
  }else{
    L2data.y.shift()
  }
  L1data.y.push(Math.floor(Math.random()*10)+1)
  L2data.y.push(Math.floor(Math.random()*10)+1)
  document.getElementById('L1Log').innerHTML = L1data.y[L1data.y.length-1];
  document.getElementById('L2Log').innerHTML = L2data.y[L2data.y.length-1];
}, 1000);

window.setInterval(function(){generate_chart()}, 5000);

window.onload = generate_chart();