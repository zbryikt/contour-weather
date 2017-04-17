chart = {}

d3.csv \top4-long.csv, (data) ->
  chart.obj = plotdb.chart.get 'parallel  改'
  chart.data = data
  chart.obj.attach \#parallel
  load '2017012300'
  #parallel.data data, false, {
  #  values: <[氣溫 濕度 能見度 雲量 風速]>
  #  name: <[城市名]>
  #}

load = (datename) ->
  data = chart.data.filter(->it["預報時間"] == datename)
  chart.obj.data data, true, {
    values: <[氣溫 濕度 能見度 雲量 風速]>
    name: <[城市名]>
  }

$(\.rangeslider).ionRangeSlider do
  min: +moment("2017012308").format("X")
  max: +moment("2017012408").format("X")
  prettify: -> moment(it, "X").format("YYYY/MM/DD HH:00")
  onChange: (data) -> 
    if chart.handler => clearTimeout chart.handler
    chart.handler = setTimeout (->
      datename = moment(3600 * 9 + data.from, "X").format("YYYYMMDDHH")
      load datename
      chart.handler = null
    ), 300
