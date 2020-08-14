
let L1data = {
  x: [0],
  y: [0],
  name: 'Line 1',
  mode: 'markers',
  type: 'scatter',
};
let L2data = {
  x: [0],
  y: [0],
  name: 'Line 2',
  mode: 'markers',
  type: 'scatter',
};
let L1data_avg = {
  x: [0],
  y: [0],
  name: 'Line 1 Average',
  mode: 'lines',
  type: 'scatter',
};
let L2data_avg = {
  x: [0],
  y: [0],
  name: 'Line 2 Average',
  mode: 'lines',
  type: 'scatter',
};

function generate_chart(){
  let data = [L1data,L2data,L1data_avg,L2data_avg];
  let layout = {
    title: 'Previous 20 numbers generated on each line',
    xaxis: {
      showticklabels: false
    }
  };
  Plotly.newPlot( document.getElementById('line-chart'), data, layout, {displayModeBar: false});
}

window.setInterval(function(){
  if(L1data.x.length < 20){
    L1data.x.push(L1data.x.length+1);
    L1data_avg.x.push(L1data_avg.x.length+1);
  }else{
    L1data.y.shift();
    if(L1data_avg.y.length >= 20){
      L1data_avg.y.shift();
    };
    L1avg = 0;
    for(let i = 14; i < L1data.y.length; i++){
      L1avg += Number(L1data.y[i]);
    };
    L1avg = L1avg/5;
    L1data_avg.y.push(L1avg);
  }
  if(L2data.x.length < 20){
    L2data.x.push(L2data.x.length+1);
    L2data_avg.x.push(L2data_avg.x.length+1);
  }else{
    L2data.y.shift();
    if(L2data_avg.y.length >= 20){
      L2data_avg.y.shift();
    };
    L2avg = 0;
    for(let i = 14; i < L2data.y.length; i++){
      L2avg += Number(L2data.y[i]);
    };
    L2avg = L2avg/5;
    L2data_avg.y.push(L2avg);  
  }
  L1data.y.push(Math.floor(Math.random()*10)+1);
  L2data.y.push(Math.floor(Math.random()*10)+1);

  document.getElementById('L1Log').innerHTML = L1data.y[L1data.y.length-1];
  document.getElementById('L2Log').innerHTML = L2data.y[L2data.y.length-1];
}, 1000);

window.setInterval(function(){generate_chart()}, 1000);

window.onload = generate_chart();