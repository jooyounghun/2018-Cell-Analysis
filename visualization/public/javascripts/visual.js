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

function changeImage(){
  document.images.src = "http://henryworld.ipdisk.co.kr/publist/HDD1/sharing/rawdata/C2DL-MSC.gif";
  }  



var marble = new Array(13);
marble[0] = new Image(256,192);
marble[0].src = "http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/C2DL-MSC.gif";
marble[1] = new Image(256,192);
marble[1].src = "http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/C2DL-MSC.gif";
marble[2] = new Image(256,192);
marble[2].src = "http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/C3DL-HT1080.gif";
marble[3] = new Image(256,192);
marble[3].src = "http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/DIC-C2DH-HeLa.gif";
marble[4] = new Image(256,192);
marble[4].src = "http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/Fluo-N3DH-CE.gif";
marble[5] = new Image(256,192);
marble[5].src = "http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/Fluo-N3DL-DRO.gif";
marble[6] = new Image(256,192);
marble[6].src = "http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/N2D-SIM.gif";
marble[7] = new Image(256,192);
marble[7].src = "http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/N2DH-GOWT1.gif";
marble[8] = new Image(256,192);
marble[8].src = "http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/N2DL-HeLa.gif";
marble[9] = new Image(256,192);
marble[9].src = "http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/N3D-SIM.gif";
marble[10] = new Image(256,192);
marble[10].src = "http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/N3DH_CHO.gif";
marble[11] = new Image(256,192);
marble[11].src = "http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/PhC-C2DH-U373.gif";
marble[12] = new Image(256,192);
marble[12].src = "http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/PhC-C2DL-PSCss.gif";





var Microscope = new Array(13);
Microscope[0] = "PerkinElmer UltraVIEW ERS";
Microscope[1] = "PerkinElmer UltraVIEW ERS";
Microscope[2] = "Olympus FluoView F1000";
Microscope[3] = "Zeiss LSM 510 Meta";
Microscope[4] = "Zeiss LSM 510 Meta";
Microscope[5] = "SIMView light-sheet microscope";
Microscope[6] = "Zeiss Axiovert 100S with a Micromax 1300-YHS camera";
Microscope[7] = "Leica TCS SP5";
Microscope[8] = "Olympus IX81";
Microscope[9] = "Zeiss Axiovert 100S with a Micromax 1300-YHS camera";
Microscope[10] = "Zeiss LSM 510";
Microscope[11] = "Nikon";
Microscope[12] = "Olympus ix-81";






var Objective_lens = new Array(13);
Objective_lens[0] = "Plan-Neofluar 10x/0.3 (Plan-Apo 20x/0.75)";
Objective_lens[1] = "Plan-Apochromat 63x/1.2 Water";
Objective_lens[2] = "Plan 20x/0.7";
Objective_lens[3] = "Plan-Apochromat 63X/1.4 (oil)";
Objective_lens[4] = "Plan-Apochromat 63X/1.4 (oil)";
Objective_lens[5] = "16X/0.8 (water)";
Objective_lens[6] = "Plan-Apochromat 40X/1.3 (oil)";
Objective_lens[7] = "Plan-Apochromat 63x/1.4 Oil";
Objective_lens[8] = "Plan 10x/0.4";
Objective_lens[9] = "Plan-Apochromat 40X/1.3 (oil)";
Objective_lens[10] = "Plan-Apochromat 63x/1.4 Oil";
Objective_lens[11] = "Plan Fluor DLL 20X/0.5";
Objective_lens[12] = "UPLFLN 4XPH";




var Pixel_size = new Array(13);
Pixel_size[0] = "0.3 x 0.3 (0.3977 x 0.3977)";
Pixel_size[1] = "0.126 x 0.126 x 0.5";
Pixel_size[2] = "1.242 x 1.242 x 6";
Pixel_size[3] = "0.19 x 0.19";
Pixel_size[4] = "0.09 x 0.09 x 1.0";
Pixel_size[5] = "0.406 x 0.406 (x 2.03)";
Pixel_size[6] = "0.125 x 0.125 (x 0.200)";
Pixel_size[7] = "0.240 x 0.240";
Pixel_size[8] = "0.645 x 0.645";
Pixel_size[9] = "0.125 x 0.125 (x 0.200)";
Pixel_size[10] = "0.202 x 0.202 x 1";
Pixel_size[11] = "0.65 x 0.65";
Pixel_size[12] = "1.6 x 1.6";



var Time_step = new Array(13);
Time_step[0] = "20 (30) min";
Time_step[1] = "2 (1) min";
Time_step[2] = "80 min";
Time_step[3] = "10 min";
Time_step[4] = "1 or 1.5 min";
Time_step[5] = "30 min";
Time_step[6] = "29 min";
Time_step[7] = "5 min";
Time_step[8] = "30 min";
Time_step[9] = "29 min";
Time_step[10] = "9.5 min";
Time_step[11] = "15 min";
Time_step[12] = "10 min";








var descript = new Array(13);
descript[0] = "Rat mesenchymal stem cells on a flat polyacrylamide substrate (2D) Dr. F. Prósper. Cell Therapy laboratory. Center for Applied Medical Research (CIMA) Pamplona. Spain";
descript[1] = "GFP-transfected H157 Lung Cancer cells embedded in a matrigel matrix (3D) Dr. A. Rouzaut. Cell Adhesion and Metastasis Laboratory Center for Applied Medical Research (CIMA). Pamplona. Spain";
descript[2] = "MDA231 human breast carcinoma cells infected with a pMSCV vector including the GFP sequence, embedded in a collagen matrix (3D) Dr. Roger Kamm. Dept. of Biological Engineering Massachusetts Institute of Technology. Cambridge MA (USA)";
descript[3] = "HeLa cells on a flat glass  (2D) Dr. Gert van Cappellen Erasmus Medical Center. Rotterdam. The Netherlands";
descript[4] = "C.elegans developing embryo (3D) Waterston Lab The George Washington University. Washington DC (USA)";
descript[5] = "Developing Drosophila Melanogaster embryo (3D) Dr. Philipp Keller. Howard Hughes Medical Institute Janelia Farms Research Campus, Ashburn VA (USA)";
descript[6] = "Simulated nuclei of HL60 cells stained with Hoescht (2D & 3D) Dr. V.Ulman & Dr. D. Svoboda. Centre for Biomedical Image Analysis (CBIA). Masaryk University. Brno. Czech Republic (Created using MitoGen, part of Cytopacq)";
descript[7] = "GFP-GOWT1 mouse stem cells (2D) Dr. E. Bártová. Institute of Biophysics Academy of Sciences of the Czech Republic. Brno. Czech Republic";
descript[8] = "HeLa cells stably expressing H2b-GFP (2D) Mitocheck Consortium";
descript[9] = "Simulated nuclei of HL60 cells stained with Hoescht (2D & 3D) Dr. V.Ulman & Dr. D. Svoboda. Centre for Biomedical Image Analysis (CBIA). Masaryk University. Brno. Czech Republic (Created using MitoGen, part of Cytopacq)";
descript[10] = "Chinese Hamster Ovarian (CHO) nuclei overexpressing GFP-PCNA (3D) Dr. J. Essers. Dept. of Cell Biology Erasmus Medical Center. Rotterdam. The Netherlands";
descript[11] = "Glioblastoma-astrocytoma U373 cells on a polyacrylimide substrate  (2D) Dr. Sanjay Kumar. Department of Bioengineering University of California at Berkeley. Berkeley CA (USA)";
descript[12] = "Pancreatic Stem Cells on a Polystyrene substrate  (2D) Dr. Tim Becker Fraunhofer Institution for Marine Biotechnology. Lübeck. Germany";


function changeMarble(form) {
  document.images["marble"].src = marble[form.dropSel.selectedIndex].src;
  form.Microscope.value = Microscope[form.dropSel.selectedIndex];
  form.Objective_lens.value = Objective_lens[form.dropSel.selectedIndex];
  form.Pixel_size.value = Pixel_size[form.dropSel.selectedIndex];
  form.Time_step.value = Time_step[form.dropSel.selectedIndex];
  form.descript.value = descript[form.dropSel.selectedIndex];
}




// load facebook data by AJAX
function C2DL_MSC(){
  window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/C2DL-MSC.gif")
}

function test(){
window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/processingdata/1_PhC-C2DL-PSC01t179_0.png")
}


function C3DH_H157(){
  window.open("http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/rawdata/C3DH-H157.gif")
  var url = '';

  // setting date for query

  url = "/info";

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

function show_image(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

var img = document.createElement("img");


function CELL(){
  

  
        img.src = "http://henryworld.ipdisk.co.kr:80/publist/HDD1/sharing/20180609T154534.gif"
    img.width = 800;
    img.height = 600;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);

  var url = '';
  console.log("cell function");
  // setting date for query

  url = "/finance/cell";

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

  _date_list = []
  _high_list = []
  data = rows.result;

  for(var idx = 0 ; idx < data.length; idx++){
    _date_list.push(data[idx].Date);
    _high_list.push(data[idx].High);
  }

  var graph = {
    x : _date_list,
    y : _high_list,
    name : "cell ratio",
    mode: 'lines+markers',
    marker: {
    size: 10,
    line: { width: 0.5 },
    opacity: 0.8
    }
  }

  title_type = 'CELL RATIO ON FRAME ';

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
  console.log("parse daily data");
  console.log(data.length)
  for(var idx = 0 ; idx < data.length; idx++){
    _date_list.push(data[idx].index2);
    _low_list.push(data[idx].Ratio);
  }

  var graph = {
    x : _date_list,
    y : _low_list,
    name : "cell ratio",
    type: 'bar',
    marker: {
    size: 10,
    line: { width: 0.5 },
    opacity: 0.8
    }
  }

  title_type = 'HOW EXACTLY WE ANALYSIS CELL';

  var opt = {
    title: title_type,
    titlefont: {
      family: 'Courier New, monospace',
      size: 24,
      color: '#7f7f7f'
    },
    xaxis: {
      title: 'frame',
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
    yaxis: {
      title: 'cell ratio',
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


