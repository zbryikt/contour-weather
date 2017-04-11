d3.csv \top4.csv, (data) ->
  parallel = plotdb.chart.get 'Parallel Bar Chart'
  console.log data
  parallel.data data, false, {
    values: <[氣溫 濕度 能見度 雲量 風速]>
    name: <[城市名]>
  }
  parallel.attach \#parallel

