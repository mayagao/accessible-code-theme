export const reactExampleSnippet = `//https://github.com/zeit/styled-jsx/blob/master/src/style.js

import { Component } from 'react'
import StyleSheetRegistry from './stylesheet-registry'

const styleSheetRegistry = new StyleSheetRegistry()

export default class JSXStyle extends Component {
  static dynamic(info) {
    return info
      .map(tagInfo => {
        const [baseId, props] = tagInfo
        return styleSheetRegistry.computeId(baseId, props)
      })
      .join(' ')
  }

  componentWillMount() {
    styleSheetRegistry.add(this.props)
  }

  shouldComponentUpdate(nextProps) {
    return this.props.css !== nextProps.css
  }

  // To avoid FOUC, we process new changes
  // on componentWillUpdate rather than componentDidUpdate.
  componentWillUpdate(nextProps) {
    styleSheetRegistry.update(this.props, nextProps)
  }

  componentWillUnmount() {
    styleSheetRegistry.remove(this.props)
  }

  render() {
    return null
  }
}
`

export const d3ExampleSnippet = `// General Update Pattern, III, https://bl.ocks.org/mbostock/3808234

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    g = svg.append("g").attr("transform", "translate(32," + (height / 2) + ")");

function update(data) {

  // DATA JOIN
  // Join new data with old elements, if any.
  var text = g.selectAll("text")
    .data(data);

  // UPDATE
  // Update old elements as needed.
  text.attr("class", "update");

  // ENTER
  // Create new elements as needed.
  //
  // ENTER + UPDATE
  // After merging the entered elements with the update selection,
  // apply operations to both.
  text.enter().append("text")
      .attr("class", "enter")
      .attr("x", function(d, i) { return i * 32; })
      .attr("dy", ".35em")
    .merge(text)
      .text(function(d) { return d; });

  // EXIT
  // Remove old elements as needed.
  text.exit().remove();
}

// The initial display.
update(alphabet);

// Grab a random sample of letters from the alphabet, in alphabetical order.
d3.interval(function() {
  update(d3.shuffle(alphabet)
      .slice(0, Math.floor(Math.random() * 26))
      .sort());
}, 1500);`