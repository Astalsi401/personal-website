class DolGraph {
  constructor(graph, data, x, y) {
    this.x = x;
    this.y = y;
    this.height = 360;
    this.data = data;
    this.graph = d3.select(graph);
    this.svg = this.graph.append("svg").attr("height", this.height);
    this.padding = {
      t: 35,
      b: 45,
      s: 35,
      e: 20,
    };
    this.xScale = d3
      .scaleLinear()
      .domain(d3.extent(this.data, (d) => d[this.x]));
    this.yScale = d3
      .scaleLinear()
      .domain(d3.extent(this.data, (d) => d[this.y]))
      .range([this.height - this.padding.b, this.padding.t]);
    this.xAxis = d3.axisBottom(this.xScale);
    this.yAxis = d3.axisLeft(this.yScale);
    this.xAxis_g = this.svg.append("g");
    this.yAxis_g = this.svg.append("g");
    this.gridlines = this.svg
      .append("g")
      .attr("class", "gridlines")
      .selectAll("gridline")
      .data(this.yAxis.scale().ticks())
      .enter()
      .append("line")
      .attr("stroke", "rgb(223, 223, 223)");
    this.circles = this.svg
      .selectAll("circle")
      .data(this.data)
      .enter()
      .append("circle")
      .attr("r", 2)
      .attr("stroke", "rgb(255 153 0)")
      .attr("fill", "rgb(255 153 0)")
      .attr("cy", (d) => this.yScale(d[this.y]));
    this.xTitle = this.svg
      .append("text")
      .attr("class", "x-axis-title")
      .text(x)
      .attr("text-anchor", "middle")
      .style("text-align", "center");
    this.yTitle = this.svg.append("g").attr("class", "y-axis-title");
    this.yTitle.append("text").text(y);
    this.draw();
    window.addEventListener("resize", this.draw);
  }

  updateData = (data) => {
    this.data = data;
    this.xScale.domain(d3.extent(this.data, (d) => d[this.x]));
    this.yScale.domain(d3.extent(this.data, (d) => d[this.y]));
    this.xAxis.scale(this.xScale);
    this.yAxis.scale(this.yScale);
    this.circles.data(this.data).attr("cy", (d) => this.yScale(d[this.y]));
    this.gridlines.remove();
    this.gridlines = this.svg
      .append("g")
      .attr("class", "gridlines")
      .selectAll("gridline")
      .data(this.yAxis.scale().ticks())
      .enter()
      .append("line")
      .attr("stroke", "rgb(223, 223, 223)");
    this.draw();
  };

  draw = () => {
    this.width = parseInt(this.graph.style("width"), 10);
    this.svg.attr("width", this.width);
    this.xScale.range([this.padding.s, this.width - this.padding.e]);
    this.xAxis_g
      .attr("transform", `translate(0, ${this.height - this.padding.b})`)
      .call(this.xAxis);
    this.yAxis_g
      .attr("transform", `translate(${this.padding.s}, 0)`)
      .call(this.yAxis);
    this.gridlines
      .attr("x1", this.padding.s)
      .attr("x2", this.width - this.padding.e)
      .attr("y1", (d) => this.yScale(d))
      .attr("y2", (d) => this.yScale(d));
    this.circles.attr("cx", (d) => this.xScale(d[this.x]));
    this.xTitle.attr("x", this.width / 2).attr("y", this.height - 10);
    this.yTitle.attr("transform", `translate(${0}, ${this.padding.s - 10})`);
  };
}
