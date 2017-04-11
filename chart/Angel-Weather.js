if(typeof(plotdb)=="undefined" && !plotdb) var plotdb = {};
plotdb.chart.add('Parallel Bar Chart',{"key":1052,"name":"Parallel Bar Chart","owner":4,"theme":null,"parent":null,"description":"parallel bar charts. compare small multiple data series by bar in the same time. interactively sortable!","basetype":["1"],"visualencoding":["2","3"],"category":["6"],"tags":["sort","bar","order","max","rank","small-multiple"],"likes":null,"searchable":true,"dimlen":2,"createdtime":"2016-04-30T17:10:07.000Z","modifiedtime":"2017-01-28T05:49:18.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"name":{"desc":"name of this set","type":[],"fields":[],"require":false,"fieldName":null},"values":{"desc":"values","type":["Number"],"fields":[],"require":true,"multiple":true,"fieldName":[]}},"config":{"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"5","default":10,"category":"Global Settings"},"palette":{"name":"Bar Colors","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"key":"cfa","name":"Code for Africa","_type":{"name":"palette","location":"sample"},"colors":[{"hex":"#f4502a","idx":0},{"hex":"#f1c227","idx":1},{"hex":"#008a6d","idx":2},{"hex":"#00acdb","idx":3},{"hex":"#0064a8","idx":4}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"12","default":13,"category":"Global Settings"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"barHeight":{"name":"Bar Height","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"14","default":10},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Y Axis"},"yAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(35 + Math.round(Math.random() * 10));
    var cols = d3.range(4 + Math.round(Math.random() * 2));
    var name = [{name: "order", data: list.map(function(it) { return plotdb.data.sample.name.rand(); }) }];
    var values = cols.map(function(it) {
      return {name: ("Type " + it), data: list.map(function(it) { return Math.random(); }) };
    });
    return {name: name, values: values};
  },
  dimension: {
    values: { type: [plotdb.Number], require: true, multiple: true, desc: "values" },
    name: { type: [], require: false, desc: "name of this set"}    
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    padding: {},
    palette: { name: "Bar Colors"},
    barHeight: { name: "Bar Height", type: [plotdb.Number], default: 10},
    yAxisShow: {},
    yAxisShowDomain: {default: true},
    yAxisStroke: {},
    xAxisShow: {},
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.tooltip = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(that.dimension.values.fieldName[i]);
      popup.select(".value").text(Math.round(100* d)/100);
    });
  },
  parse: function() {
    this.vcount = (this.dimension.values.fields ? this.dimension.values.fields.length : 5);
    this.vranges = [];
    for(var i = 0; i < this.vcount; i++) {
      this.vranges.push(d3.extent(this.data.map(function(it) { return it.values[i]; })));
    }
    this.namelen = d3.max(this.data.map(function(it) { return (it.name || "").length; }));
    this.data.map(function(it,i) { it.idx = i; });
    this.data.sort(function(a,b) {
      return b.values[0] - a.values[0];
    });
  },
  bind: function() {
    var that = this, sel;
    sel = this.svg.selectAll("g.data-group").data(this.data);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "data-group"});
    this.svg.selectAll("g.data-group").each(function(d,i) {
      var node = d3.select(this);
      node.selectAll("text").data([d]).enter().append("text").attr({class: "label"});
      sel =node.selectAll("rect.data").data(d.values);
      sel.exit().remove();
      sel = sel.enter()
        .append("rect").attr({class: "data"})
        .on("click",function(d,i) { that.updateOrder(i); });
      that.tooltip.nodes(sel);
      this.bars = node.selectAll("rect.data");
      this.label = node.selectAll("text.label");
    });
    sel = this.xAxisGroup.selectAll("g.tick").data(this.dimension.values.fields);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "tick"});
    this.xAxisGroup.selectAll("g.tick").each(function(d,i) {
      var node = d3.select(this);
      node.selectAll("line").data([d]).enter().append("line");
      node.selectAll("text").data([d]).enter().append("text");
    });
    this.svg.selectAll("g.data-group text").on("click", function(d,i) { that.updateOrder(-1); });
  },
  updateOrder: function(key) {
    var that = this;
    if(that.activeGroup && that.activeGroup.idx == key) {
      that.activeGroup.order = 1 - that.activeGroup.order;
    } else that.activeGroup = {idx: key, order: 0};
    if(key == -1 ) {
      that.data.sort(function(a,b) { 
        return (that.activeGroup.order?-1:1) * (b.name > a.name ? 1 : (b.name < a.name? -1 : 0));
      });
    } else {
      that.data.sort(function(a,b) { 
        return (that.activeGroup.order ? -1 : 1) * (b.values[key] - a.values[key]);
      });
    }
    that.data.map(function(d,i) { d.idx = i; });
    that.render();
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height - 10;
    this.xAxisHeight = (this.config.xAxisShow ? this.config.fontSize * 1.5 : 0);
    var totalheight = that.data.length * ( 1 *  that.config.padding + that.config.barHeight) + that.config.margin * 2 + this.xAxisHeight;
    if(height < totalheight) height = this.height = totalheight;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.tooltip.fontSize(this.config.fontSize);
    this.color = plotdb.Palette.scale.ordinal(this.config.palette);
    this.yAxisWidth = (this.config.yAxisShow ? (this.namelen + 2) * this.config.fontSize : 0);
    this.updateScale();
  },
  updateScale: function() {
    this.dataWidth = this.width - 2 * this.config.margin - this.yAxisWidth;
    this.barWidth = this.dataWidth / this.vcount;
    this.xscales = [];
    for(var i = 0; i < this.vcount; i++) {
      this.xscales.push(d3.scale.linear().domain([0,this.vranges[i][1]]).range([0,this.barWidth - this.config.padding]));
    }
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.svg.selectAll("g.data-group").each(function(d,i) {
      this.label.text(d.name).attr({
        "font-size": that.config.fontSize
      });
    });
    this.svg.selectAll("text.label").text(function(d,i) { return d.name; }).attr({
      display: (that.config.yAxisShow ? "block" : "none")
    });
    this.yAxisWidth = d3.max(this.svg.selectAll("g.data-group text")[0].map(function(d,i) { return d.getBBox().width; }));
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxisWidth : 0);
    this.updateScale();
    this.xAxisGroup.selectAll("g.tick").attr({
      transform: function(d,i) {
        return [
          "translate(",
          that.yAxisWidth + that.config.margin + that.config.padding + i * that.barWidth,
          that.xAxisHeight + that.config.margin,
          ")"].join(" ");
      }
    }).each(function(d,i) {
      var node = d3.select(this);
      node.select("line").attr({
        x1: -1, x2: -1,
        y1: 0, y2: that.height - that.xAxisHeight - that.config.margin * 2,
        stroke: that.config.yAxisStroke,
        "stroke-width": 1,
        display: (that.config.yAxisShowDomain && that.config.yAxisShow ? "block" : "none")
      });
      node.select("text").attr({
        "font-size": that.config.fontSize,
        dy: "-0.5em",
        display: (that.config.xAxisShow ? "block" : "none")
      }).text(d.name);
    });
    this.svg.selectAll("g.data-group").transition("morph").duration(function() {
      return (d3.select(this).attr("transform") ? 500 : 0);
    }).attr({
      transform: function(d,i) {
        return [
          "translate(0",
          d.idx * ( 1 * that.config.padding + that.config.barHeight) + that.config.margin + that.xAxisHeight,
          ")"].join(" ")
      }
    }).each(function(data,idx) {
      var node = d3.select(this);
      this.label.text(data.name).attr({
        x: that.yAxisWidth + that.config.margin,
        y: that.config.barHeight / 2,
        "font-size": that.config.fontSize,
        "text-anchor": "end",
        dy: "0.38em",
      });
      this.bars.filter(function() { return !d3.select(this).attr("height"); }).attr({
        height: 0, width: 0
      });
      this.bars.transition("morph").attr({
        fill: function(d,i) { return that.color(i); }
      }).duration(500).attr({
        x: function(d,i) {
          return that.yAxisWidth + that.config.margin + that.config.padding + i * that.barWidth;
        },
        y: 0,
        cursor: "pointer",
        width: function(d,i) { 
          return that.xscales[i](d); },
        height: that.config.barHeight + 0.25 * that.config.padding,
      });
    });
  }
}}});
plotdb.chart.add('contour map',{"key":2265,"name":"contour map","owner":34,"theme":null,"parent":null,"description":null,"basetype":[],"visualencoding":[],"category":[],"tags":[],"likes":0,"searchable":false,"dimlen":1,"createdtime":"2017-04-10T22:41:47.000Z","modifiedtime":"2017-04-10T23:06:22.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"permission":{"list":[{"perm":"fork","type":"global","target":null,"username":"and anonymous user","displayname":"Everyone"}],"switch":"publish"},"assets":[],"dimension":{"value":{"desc":"Value of each dot","type":["Number"],"fields":[{"key":114120,"bind":"value","name":"Temperature","dataset":5788,"datatype":"Number","location":"server","datasetname":"contour map (Dataset)"}],"require":true,"fieldName":["Temperature"]}},"config":{"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"dataGridWidth":{"name":"Grid Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":100,"default":100,"category":"Data","rebindOnChange":true},"dataGridHeight":{"name":"Grid Height","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":100,"default":100,"category":"Chart Settings","rebindOnChange":true}},"library":["d3/4.7.4/min","d3-contour/1.1.0/min","d3-selection-multi/0.4/min"],"local":{},"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(10000);
    return {
      value: [{name: "Temperature", data: list.map(function(d,i) { return 15 + Math.sin(i/100) * 6 + Math.random() * 2; }) }]
    };
  },
  dimension: {
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
    console.log(1);
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
    sel.enter().append("path").attrs({class: "contour"});
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
      fill: "#f00",
      "fill-opacity": 0.1,
      stroke: "#000",
      "stroke-width": 1
    });
  }
}}});
