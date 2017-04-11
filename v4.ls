#2017031809
#2017032011

$(\.rangeslider).ionRangeSlider do
  min: +moment("2017031809").format("X")
  max: +moment("2017032011").format("X")
  prettify: -> moment(it, "X").format("YYYY/MM/DD HH:00")
  onChange: (data) -> 
    if chart.handler => clearTimeout chart.handler
    chart.handler = setTimeout (->
      filename = moment(3600 * 9 + data.from, "X").format("YYYYMMDDHH")
      load filename
      chart.handler = null
    ), 500
chart = do
  contour: null
  data: null

reverse = (d) ->
  ret = []
  for i from 0 til 233
    for j from 0 til 233
      ret[j + i * 233] = d[j + (232 - i) * 233]
  ret
filter = document.getElementById \filter
filter.addEventListener \click, 
update = (e = {}) ->
  chart.tag = e.{}target.textContent or chart.tag or \能見度
  chart.contour.data chart.data, true, {
    value: [chart.tag]
  }
  if !chart.contour.inited => chart.contour.attach \#contour

load = (date) ->
  (data) <- d3.csv "csv/#date.csv", _
  chart.data = reverse data
  update!

chart.contour = plotdb.chart.get 'contour map'
chart.contour.config do
  dataGridWidth: 233
  dataGridHeight: 233

load \2017031809

