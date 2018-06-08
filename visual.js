$(document).ready(function(){

  $(function() {
      $("#datepicker1, #datepicker2").datepicker({
          dateFormat: 'yy-mm-dd'
      });
  }); 

  Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    var weeknum = Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7)
    if (weeknum < 10)
      weeknum = "0" + weeknum;
    return weeknum;
  }

});

function convertDate(date) {
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth()+1).toString();
  var dd  = date.getDate().toString();

  var mmChars = mm.split('');
  var ddChars = dd.split('');

  return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
}

// plotly rendering
function drawingGraph(data, opt){
  Plotly.newPlot('myDiv', {
    data: data,
    layout: opt,
  });
}

function drawingGraph_bar(data,opt){
  Plotly.newPlot('myDiv',{
    data: data,
    layout: opt,
  });
}



// load facebook data by AJAX
function C2DL_MSC(){
  window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/C2DL-MSC.gif")
 window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/C3DH-H157.gif")
}

function C3DH_H157(){
  window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/C3DH-H157.gif")
  var url = '';
  var from_date = document.getElementById("datepicker1").value;
  var to_date = document.getElementById("datepicker2").value;

  // setting date for query
  if(to_date.length == 0 || from_date == 0){
    from_date = "2017-02-02";
    to_date =  "2018-02-02";
  }

  url = "/finance/high/" + from_date + "/" + to_date;

  $.ajax({
	type: "GET",
	url: url,
	success:function(rows){
		parseDailyData_high(rows);
		return false;
	},
      error:function(xhr, status, err){
      console.log(xhr.responseText);
      var err = '';
      $.each(JSON.parse(xhr.responseText), function(i, item){
        err += '<li>' + item.msg + '</li>';
      });
      console.log(err);
      return false;
    }

  });
}

function C3DL_HT1080(){
  window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/C3DL-HT1080.gif")
  var url = '';
  var from_date = document.getElementById("datepicker1").value;
  var to_date = document.getElementById("datepicker2").value;

  // setting date for query
  if(to_date.length == 0 || from_date == 0){
    from_date = "2017-02-02";
    to_date =  "2018-02-02";
  }

  url = "/finance/low/" + from_date + "/" + to_date;

  $.ajax({
	type: "GET",
	url: url,
	success:function(rows){
		parseDailyData_low(rows);
		return false;
	},
      error:function(xhr, status, err){
      console.log(xhr.responseText);
      var err = '';
      $.each(JSON.parse(xhr.responseText), function(i, item){
        err += '<li>' + item.msg + '</li>';
      });
      console.log(err);
      return false;
    }

  });
}

function DIC_C2DH_CE(){
  window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/DIC-C2DH-HeLa.gif")
  var url = '';
  var from_date = document.getElementById("datepicker1").value;
  var to_date = document.getElementById("datepicker2").value;

  // setting date for query
  if(to_date.length == 0 || from_date == 0){
    from_date = "2017-02-02";
    to_date =  "2018-02-02";
  }

  url = "/finance/close/" + from_date + "/" + to_date;

  $.ajax({
	type: "GET",
	url: url,
	success:function(rows){
		parseDailyData_close(rows);
		return false;
	},
      error:function(xhr, status, err){
      console.log(xhr.responseText);
      var err = '';
      $.each(JSON.parse(xhr.responseText), function(i, item){
        err += '<li>' + item.msg + '</li>';
      });
      console.log(err);
      return false;
    }

  });
}


function Fluo_N3DH_CE(){
  window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/Fluo-N3DH-CE.gif")
  var url = '';
  var from_date = document.getElementById("datepicker1").value;
  var to_date = document.getElementById("datepicker2").value;

  // setting date for query
  if(to_date.length == 0 || from_date == 0){
    from_date = "2017-02-02";
    to_date =  "2018-02-02";
  }

  url = "/finance/volume/" + from_date + "/" + to_date;

  $.ajax({
	type: "GET",
	url: url,
	success:function(rows){
		parseDailyData_volume(rows);
		return false;
	},
      error:function(xhr, status, err){
      console.log(xhr.responseText);
      var err = '';
      $.each(JSON.parse(xhr.responseText), function(i, item){
        err += '<li>' + item.msg + '</li>';
      });
      console.log(err);
      return false;
    }

  });
}

function Fluo_N3DL_DRO(){
  window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/Fluo-N3DL-DRO.gif")
  var url = '';
  var from_date = document.getElementById("datepicker1").value;
  var to_date = document.getElementById("datepicker2").value;

  // setting date for query
  if(to_date.length == 0 || from_date == 0){
    from_date = "2017-02-02";
    to_date =  "2018-02-02";
  }

  url = "/finance/volume/" + from_date + "/" + to_date;

  $.ajax({
	type: "GET",
	url: url,
	success:function(rows){
		parseDailyData_volume(rows);
		return false;
	},
      error:function(xhr, status, err){
      console.log(xhr.responseText);
      var err = '';
      $.each(JSON.parse(xhr.responseText), function(i, item){
        err += '<li>' + item.msg + '</li>';
      });
      console.log(err);
      return false;
    }

  });
}

function N2D_SIM(){
  window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/N2D-SIM.gif")
  var url = '';
  var from_date = document.getElementById("datepicker1").value;
  var to_date = document.getElementById("datepicker2").value;

  // setting date for query
  if(to_date.length == 0 || from_date == 0){
    from_date = "2017-02-02";
    to_date =  "2018-02-02";
  }

  url = "/finance/volume/" + from_date + "/" + to_date;

  $.ajax({
	type: "GET",
	url: url,
	success:function(rows){
		parseDailyData_volume(rows);
		return false;
	},
      error:function(xhr, status, err){
      console.log(xhr.responseText);
      var err = '';
      $.each(JSON.parse(xhr.responseText), function(i, item){
        err += '<li>' + item.msg + '</li>';
      });
      console.log(err);
      return false;
    }

  });
}


function N2DH_GOWT1(){
  window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/N2DH-GOWT1.gif")
  var url = '';
  var from_date = document.getElementById("datepicker1").value;
  var to_date = document.getElementById("datepicker2").value;

  // setting date for query
  if(to_date.length == 0 || from_date == 0){
    from_date = "2017-02-02";
    to_date =  "2018-02-02";
  }

  url = "/finance/volume/" + from_date + "/" + to_date;

  $.ajax({
	type: "GET",
	url: url,
	success:function(rows){
		parseDailyData_volume(rows);
		return false;
	},
      error:function(xhr, status, err){
      console.log(xhr.responseText);
      var err = '';
      $.each(JSON.parse(xhr.responseText), function(i, item){
        err += '<li>' + item.msg + '</li>';
      });
      console.log(err);
      return false;
    }

  });
}


function N2DL_HeLa(){
  window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/N2DL-HeLa.gif")
  var url = '';
  var from_date = document.getElementById("datepicker1").value;
  var to_date = document.getElementById("datepicker2").value;

  // setting date for query
  if(to_date.length == 0 || from_date == 0){
    from_date = "2017-02-02";
    to_date =  "2018-02-02";
  }

  url = "/finance/volume/" + from_date + "/" + to_date;

  $.ajax({
	type: "GET",
	url: url,
	success:function(rows){
		parseDailyData_volume(rows);
		return false;
	},
      error:function(xhr, status, err){
      console.log(xhr.responseText);
      var err = '';
      $.each(JSON.parse(xhr.responseText), function(i, item){
        err += '<li>' + item.msg + '</li>';
      });
      console.log(err);
      return false;
    }

  });
}




function N3D_SIM(){
  window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/N3D-SIM.gif")
  var url = '';
  var from_date = document.getElementById("datepicker1").value;
  var to_date = document.getElementById("datepicker2").value;

  // setting date for query
  if(to_date.length == 0 || from_date == 0){
    from_date = "2017-02-02";
    to_date =  "2018-02-02";
  }

  url = "/finance/volume/" + from_date + "/" + to_date;

  $.ajax({
	type: "GET",
	url: url,
	success:function(rows){
		parseDailyData_volume(rows);
		return false;
	},
      error:function(xhr, status, err){
      console.log(xhr.responseText);
      var err = '';
      $.each(JSON.parse(xhr.responseText), function(i, item){
        err += '<li>' + item.msg + '</li>';
      });
      console.log(err);
      return false;
    }

  });
}


function N3DH_CHO(){
  window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/N3DH_CHO.gif")
  var url = '';
  var from_date = document.getElementById("datepicker1").value;
  var to_date = document.getElementById("datepicker2").value;

  // setting date for query
  if(to_date.length == 0 || from_date == 0){
    from_date = "2017-02-02";
    to_date =  "2018-02-02";
  }

  url = "/finance/volume/" + from_date + "/" + to_date;

  $.ajax({
	type: "GET",
	url: url,
	success:function(rows){
		parseDailyData_volume(rows);
		return false;
	},
      error:function(xhr, status, err){
      console.log(xhr.responseText);
      var err = '';
      $.each(JSON.parse(xhr.responseText), function(i, item){
        err += '<li>' + item.msg + '</li>';
      });
      console.log(err);
      return false;
    }

  });
}


function PhC_C2DH_U373(){
  window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/PhC-C2DH-U373.gif")
  var url = '';
  var from_date = document.getElementById("datepicker1").value;
  var to_date = document.getElementById("datepicker2").value;

  // setting date for query
  if(to_date.length == 0 || from_date == 0){
    from_date = "2017-02-02";
    to_date =  "2018-02-02";
  }

  url = "/finance/volume/" + from_date + "/" + to_date;

  $.ajax({
	type: "GET",
	url: url,
	success:function(rows){
		parseDailyData_volume(rows);
		return false;
	},
      error:function(xhr, status, err){
      console.log(xhr.responseText);
      var err = '';
      $.each(JSON.parse(xhr.responseText), function(i, item){
        err += '<li>' + item.msg + '</li>';
      });
      console.log(err);
      return false;
    }

  });
}



function PhC_C2DL_PSCss(){
  window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/PhC-C2DL-PSCss.gif")
  var url = '';
  var from_date = document.getElementById("datepicker1").value;
  var to_date = document.getElementById("datepicker2").value;

  // setting date for query
  if(to_date.length == 0 || from_date == 0){
    from_date = "2017-02-02";
    to_date =  "2018-02-02";
  }

  url = "/finance/volume/" + from_date + "/" + to_date;

  $.ajax({
	type: "GET",
	url: url,
	success:function(rows){
		parseDailyData_volume(rows);
		return false;
	},
      error:function(xhr, status, err){
      console.log(xhr.responseText);
      var err = '';
      $.each(JSON.parse(xhr.responseText), function(i, item){
        err += '<li>' + item.msg + '</li>';
      });
      console.log(err);
      return false;
    }

  });
}

// data parsing and set configuration
function parseDailyData(rows){

  _date_list  = [];
  _open_list = [];

  data = rows.result;

  for(var idx = 0 ; idx < data.length; idx++){
    _date_list.push(data[idx].Date);
    _open_list.push(data[idx].Open);
  }

  var graph = {
    x : _date_list,
    y : _open_list,
    name : "open count",
    mode: 'lines+markers',
    marker: {
    size: 10,
    line: { width: 0.5 },
    opacity: 0.8
    }
  }

  title_type = 'FACEBOOK RECENT OPEN PRICE';

  var opt = {
    title: title_type,
    titlefont: {
      family: 'Courier New, monospace',
      size: 24,
      color: '#7f7f7f'
    },
    xaxis: {
      title: 'DAILY',
      titlefont: {
        family: 'Arial, sans-serif',
        size: 15,
        color: 'lightgrey'
      },
      showticklabels: true,
      tickfont: {
        family: 'Old Standard TT, serif',
        size: 13,
        color: 'black'
      },
      showgrid: true,
      zeroline: true,
      showline: true,
      mirror: 'ticks',
      gridcolor: '#bdbdbd',
      gridwidth: 2,
      zerolinecolor: '#969696',
      zerolinewidth: 4,
      linecolor: '#636363',
      linewidth: 6
    },
    margin: {
      l: 50,
      r: 50,
      b: 150,
      t: 150,
      pad: 4
    },
  };

  drawingGraph([graph], opt);

}

function parseDailyData_high(rows){

  _date_list  = [];
  _high_list = [];

  data = rows.result;

  for(var idx = 0 ; idx < data.length; idx++){
    _date_list.push(data[idx].Date);
    _high_list.push(data[idx].High);
  }

  var graph = {
    x : _date_list,
    y : _high_list,
    name : "high count",
    mode: 'lines+markers',
    marker: {
    size: 10,
    line: { width: 0.5 },
    opacity: 0.8
    }
  }

  title_type = 'FACEBOOK RECENT HIGH PRICE';

  var opt = {
    title: title_type,
    titlefont: {
      family: 'Courier New, monospace',
      size: 24,
      color: '#7f7f7f'
    },
    xaxis: {
      title: 'DAILY',
      titlefont: {
        family: 'Arial, sans-serif',
        size: 15,
        color: 'lightgrey'
      },
      showticklabels: true,
      tickfont: {
        family: 'Old Standard TT, serif',
        size: 13,
        color: 'black'
      },
      showgrid: true,
      zeroline: true,
      showline: true,
      mirror: 'ticks',
      gridcolor: '#bdbdbd',
      gridwidth: 2,
      zerolinecolor: '#969696',
      zerolinewidth: 4,
      linecolor: '#636363',
      linewidth: 6
    },
    margin: {
      l: 50,
      r: 50,
      b: 150,
      t: 150,
      pad: 4
    },
  };

  drawingGraph([graph], opt);

}


function parseDailyData_low(rows){

  _date_list  = [];
  _low_list = [];

  data = rows.result;

  for(var idx = 0 ; idx < data.length; idx++){
    _date_list.push(data[idx].Date);
    _low_list.push(data[idx].Low);
  }

  var graph = {
    x : _date_list,
    y : _low_list,
    name : "low count",
    mode: 'lines+markers',
    marker: {
    size: 10,
    line: { width: 0.5 },
    opacity: 0.8
    }
  }

  title_type = 'FACEBOOK RECENT LOW PRICE';

  var opt = {
    title: title_type,
    titlefont: {
      family: 'Courier New, monospace',
      size: 24,
      color: '#7f7f7f'
    },
    xaxis: {
      title: 'DAILY',
      titlefont: {
        family: 'Arial, sans-serif',
        size: 15,
        color: 'lightgrey'
      },
      showticklabels: true,
      tickfont: {
        family: 'Old Standard TT, serif',
        size: 13,
        color: 'black'
      },
      showgrid: true,
      zeroline: true,
      showline: true,
      mirror: 'ticks',
      gridcolor: '#bdbdbd',
      gridwidth: 2,
      zerolinecolor: '#969696',
      zerolinewidth: 4,
      linecolor: '#636363',
      linewidth: 6
    },
    margin: {
      l: 50,
      r: 50,
      b: 150,
      t: 150,
      pad: 4
    },
  };

  drawingGraph([graph], opt);

}

function parseDailyData_close(rows){

  _date_list  = [];
  _close_list = [];

  data = rows.result;

  for(var idx = 0 ; idx < data.length; idx++){
    _date_list.push(data[idx].Date);
    _close_list.push(data[idx].Close);
  }

  var graph = {
    x : _date_list,
    y : _close_list,
    name : "close count",
    mode: 'lines+markers',
    marker: {
    size: 10,
    line: { width: 0.5 },
    opacity: 0.8
    }
  }

  title_type = 'FACEBOOK RECENT CLOSE PRICE';

  var opt = {
    title: title_type,
    titlefont: {
      family: 'Courier New, monospace',
      size: 24,
      color: '#7f7f7f'
    },
    xaxis: {
      title: 'DAILY',
      titlefont: {
        family: 'Arial, sans-serif',
        size: 15,
        color: 'lightgrey'
      },
      showticklabels: true,
      tickfont: {
        family: 'Old Standard TT, serif',
        size: 13,
        color: 'black'
      },
      showgrid: true,
      zeroline: true,
      showline: true,
      mirror: 'ticks',
      gridcolor: '#bdbdbd',
      gridwidth: 2,
      zerolinecolor: '#969696',
      zerolinewidth: 4,
      linecolor: '#636363',
      linewidth: 6
    },
    margin: {
      l: 50,
      r: 50,
      b: 150,
      t: 150,
      pad: 4
    },
  };

  drawingGraph([graph], opt);

}


function parseDailyData_volume(rows){

  _date_list  = [];
  _volume_list = [];

  data = rows.result;

  for(var idx = 0 ; idx < data.length; idx++){
    _date_list.push(data[idx].Date);
    _volume_list.push(data[idx].Volume);
  }

  var graph = {
    x : _date_list,
    y : _volume_list,
    name : "volume count",
    type: 'bar',
    marker: {
    size: 10,
    line: { width: 0.5 },
    opacity: 0.8
    }
  }

  title_type = 'FACEBOOK RECENT VOLUME PRICE';

  var opt = {
    title: title_type,
    titlefont: {
      family: 'Courier New, monospace',
      size: 24,
      color: '#7f7f7f'
    },
    xaxis: {
      title: 'DAILY',
      titlefont: {
        family: 'Arial, sans-serif',
        size: 15,
        color: 'lightgrey'
      },
      showticklabels: true,
      tickfont: {
        family: 'Old Standard TT, serif',
        size: 13,
        color: 'black'
      },
      showgrid: true,
      zeroline: true,
      showline: true,
      mirror: 'ticks',
      gridcolor: '#bdbdbd',
      gridwidth: 2,
      zerolinecolor: '#969696',
      zerolinewidth: 4,
      linecolor: '#636363',
      linewidth: 6
    },
    margin: {
      l: 50,
      r: 50,
      b: 150,
      t: 150,
      pad: 4
    },
  };

  drawingGraph_bar([graph], opt);

}


