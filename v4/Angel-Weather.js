if(typeof(plotdb)=="undefined" && !plotdb) var plotdb = {};
plotdb.chart.add('contour map',{"key":2265,"name":"contour map","owner":34,"theme":null,"parent":null,"description":null,"basetype":[],"visualencoding":[],"category":[],"tags":[],"likes":0,"searchable":false,"dimlen":1,"createdtime":"2017-04-10T22:41:47.000Z","modifiedtime":"2017-04-16T22:44:54.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":"<div id=\"popup\">123</div>"},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":"#popup {\n  position: absolute;\n  padding: 10px;\n  background: #222;\n  border-radius: 5px;\n  color: #fff;\n  font-size: 12px;\n  display: none;\n}"},"permission":{"list":[{"perm":"fork","type":"global","target":null,"username":"and anonymous user","displayname":"Everyone"}],"switch":"publish"},"assets":[],"dimension":{"value":{"desc":"Value of each dot","type":["Number"],"fields":[{"key":114120,"bind":"value","name":"Temperature","dataset":5788,"datatype":"Number","location":"server","datasetname":"contour map (Dataset)"}],"require":true,"fieldName":["Temperature"]}},"config":{"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":9,"default":13,"category":"Global Settings"},"dataGridWidth":{"name":"Grid Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":100,"default":100,"category":"Data","rebindOnChange":true},"dataGridHeight":{"name":"Grid Height","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":100,"default":100,"category":"Chart Settings","rebindOnChange":true}},"library":["d3/4.7.4/min","moment/2.14.1","taiwanmap/0.0.3","topojson/1.6.24/min","d3.geo.projection/0.2.16/min","d3-contour/1.1.0/min","d3-selection-multi/0.4/min"],"local":{},"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(10000);
    return {
      value: [{name: "Temperature", data: list.map(function(d,i) { return 15 + Math.sin(i/100) * 6 + Math.random() * 2; }) }]
    };
  },
  dimension: {
    //time: { type: [plotdb.Date], require: false, desc: "Sample Time" }
    value: { type: [plotdb.Number], require: true, desc: "Value of each dot" }
  },
  config: {
    margin: {},
    fontSize: {},
    dataGridWidth: {
      name: "Grid Width",
      type: [plotdb.Number],
      default: 100,
      rebindOnChange: true,
      category: "Data"
    },
    dataGridHeight: {
      name: "Grid Height",
      type: [plotdb.Number],
      default: 100,
      rebindOnChange: true,
      category: "Chart Settings"
    },
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.dataGroup = this.svg.append("g").attrs({class: "data-groups"});
    this.popup = {
      node: d3.select("#popup")
    };
  },
  parse: function() {
    var that = this;
  },
  bind: function() {
    var that = this, sel;
    this.contour = d3.contours()
      .size([this.config.dataGridWidth, this.config.dataGridHeight])
      .thresholds(d3.range(0,30,2));
    this.parsed = this.contour(this.data.map(function(d,i) { return d.value; }));
    sel = this.dataGroup.selectAll("path").data(this.parsed);
    sel.exit().remove();
    sel.enter().append("path").attrs({class: "contour"}).on("mousemove", function(d,i) {
      var x = d3.event.offsetX;
      var y = d3.event.offsetY;
      that.popup.node.text(d.value);
      that.popup.node.styles({
        top: (y + 20) + "px", left: x + "px", display: "block"
      });
    });
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attrs({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
  },
  render: function() { 
    var that = this; 
    this.dataGroup.selectAll("path").attrs({ 
      d: d3.geoPath(d3.geoIdentity().scale(this.width / this.config.dataGridWidth)),
      fill: "#999",
      "fill-opacity": 0.1,
      stroke: "#999",
      "stroke-width": 1
    });
  }
}}});
