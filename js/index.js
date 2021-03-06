function createTreemap(containerId, jsonFile) {
  var margin = {top: 23, right: 0, bottom: 0, left: 0},
      width = 960,
      height = 500 - margin.top - margin.bottom,
      textOffsetLeft = 6,
      formatNumber = d3.format(",d"),
      transitioning;

  var x = d3.scale.linear()
      .domain([0, width])
      .range([0, width]);

  var y = d3.scale.linear()
      .domain([0, height])
      .range([0, height]);

  var color = d3.scale.category20();

  var treemap = d3.layout.treemap()
      .children(function(d, depth) { return depth ? null : d._children; })
      .sort(function(a, b) { return a.value - b.value; })
      .round(false);

  var svg = d3.select(containerId).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.bottom + margin.top)
      .style("margin-left", -margin.left + "px")
      .style("margin.right", -margin.right + "px")
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .style("shape-rendering", "crispEdges");

  var grandparent = svg.append("g")
      .attr("class", "grandparent");

  grandparent.append("rect")
      .attr("y", -margin.top)
      .attr("width", width)
      .attr("height", margin.top);

  grandparent.append("text")
      .attr("x", textOffsetLeft)
      .attr("y", textOffsetLeft - margin.top)
      .attr("dy", ".75em");

  d3.json(jsonFile, function(root) {
    initialize(root);
    accumulate(root);
    layout(root);
    display(root);

    function initialize(root) {
      root.x = root.y = 0;
      root.dx = width;
      root.dy = height;
      root.depth = 0;
    }

    // Aggregate the values for internal nodes. This is normally done by the
    // treemap layout, but not here because of our custom implementation.
    // We also take a snapshot of the original children (_children) to avoid
    // the children being overwritten when when layout is computed.
    function accumulate(d) {
      return (d._children = d.children)
          ? d.value = d.children.reduce(function(p, v) { return p + accumulate(v); }, 0)
          : d.value;
    }

    // Compute the treemap layout recursively such that each group of siblings
    // uses the same size (1×1) rather than the dimensions of the parent cell.
    // This optimizes the layout for the current zoom state. Note that a wrapper
    // object is created for the parent node for each group of siblings so that
    // the parent’s dimensions are not discarded as we recurse. Since each group
    // of sibling was laid out in 1×1, we must rescale to fit using absolute
    // coordinates. This lets us use a viewport to zoom.
    function layout(d) {
      if (d._children) {
        treemap.nodes({_children: d._children});
        d._children.forEach(function(c) {
          c.x = d.x + c.x * d.dx;
          c.y = d.y + c.y * d.dy;
          c.dx *= d.dx;
          c.dy *= d.dy;
          c.parent = d;
          layout(c);
        });
      }
    }

    function display(d) {
      grandparent
          .datum(d.parent)
          .on("click", transition)
        .select("text")
          .text(name(d));

      var g1 = svg.insert("g", ".grandparent")
          .datum(d)
          .attr("class", "depth");

      var g = g1.selectAll("g")
          .data(d._children)
        .enter().append("g");

      g.filter(function(d) { return d._children; })
          .classed("children", true)
          .on("click", transition);

      g.selectAll(".child")
          .data(function(d) { return d._children || [d]; })
        .enter().append("rect")
          .attr("class", "child")
          .style("fill", function(d,i) { return "#fff" })
          .call(rect);

      g.append("rect")
          .attr("class", "parent")
          .call(rect)
          .style("fill", function(d,i) { return color(i) })
        .append("title")
          .text(function(d) { return formatNumber(d.value); })

      // g.selectAll("text").call(wrap, 100);

      // EDS where text gets set
      g.append("text")
          .attr("dy", ".75em")
          .text(function(d) { return d.name; })
          .call(text)
          .call(truncateText)

      function transition(d) {
        if (transitioning || !d) return;
        transitioning = true;


        // EDS d = incoming grandparent
        var g2 = display(d),
            t1 = g1.transition().duration(750),
            t2 = g2.transition().duration(750);

        // Update the domain only after entering new elements.
        x.domain([d.x, d.x + d.dx]);
        y.domain([d.y, d.y + d.dy]);

        // Enable anti-aliasing during the transition.
        svg.style("shape-rendering", null);

        // Draw child nodes on top of parent nodes.
        svg.selectAll(".depth").sort(function(a, b) { return a.depth - b.depth; });

        // Fade-in entering text.
        g2.selectAll("text").style("fill-opacity", 0);

        // Transition to the new view.
        t1.selectAll("rect").call(rect);
        t2.selectAll("rect").call(rect);
        t1.selectAll("text").call(text).style("fill-opacity", 0);
        t2.each("end", function() {
          g2.selectAll("text")
            .transition()
            .call(text)
            .call(truncateText)
            .style("fill-opacity", 1);
          });

        // Remove the old node when the transition is finished.
        t1.remove().each("end", function() {
          svg.style("shape-rendering", "crispEdges");
          transitioning = false;
        });
      }

      return g;
    }

    function truncateText(text) {
      text.text(function(d, i) {
        var name = d.name;
        var rect = $(this).parent();
        // All IEs fails inside of jQuery when trying to call getElementsByClassName
        try {
          rect = rect.find('.parent')
          rect = rect[0];
          var rectLength = rect.width.baseVal.value;
          var rectHeight = rect.height.baseVal.value;
          var charWidth = 9;
          var charHeight = 20;
          var possibleChars = rectLength / charWidth;

          if (rectHeight < charHeight) {
            name = "";
          } else if (d.name.length > possibleChars) {
            name = d.name.substring(0, possibleChars) + "...";
          }
        } catch (e) {}
        return name;
      });
    }

    function text(text) {
      text.attr("x", function(d) { return x(d.x) + textOffsetLeft; })
          .attr("y", function(d) { return y(d.y) + textOffsetLeft; })
    }

    function rect(rect) {
      rect.attr("x", function(d) { return x(d.x); })
          .attr("y", function(d) { return y(d.y); })
          .attr("width", function(d) { return x(d.x + d.dx) - x(d.x); })
          .attr("height", function(d) { return y(d.y + d.dy) - y(d.y); });
    }

    function name(d) {
      return d.parent
          ? name(d.parent) + " > " + d.name
          : d.name;
    }
  });
}

createTreemap('#chart', "lexky-sitemap.json");
createTreemap('#chart-inverse', "lexky-organic-searches.json");
