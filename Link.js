import MJMLColumnElement from './decorators/MJMLColumnElement'
import React, { Component } from 'react'
import _ from 'lodash'


/**
 * This tag allows you to display the most basic kind of link in your email
 */
@MJMLColumnElement({
  tagName: 'mj-link',
  content: '',
  attributes: {
    'align': 'left',
    'color': '#000000',
    'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
    'font-size': '13px',
    'line-height': '22px',
    'padding-bottom': '10px',
    'padding-left': '25px',
    'padding-right': '25px',
    'padding-top': '10px'
  }
})
class Link extends Component {

  static baseStyles = {
    div: {
      cursor: 'auto'
    }
  };

  getStyles() {
    const { mjAttribute, color } = this.props

    return _.merge({}, this.constructor.baseStyles, {
      div: {
        color: mjAttribute('locked') ? color : mjAttribute('color'),
        fontFamily: mjAttribute('font-family'),
        fontSize: mjAttribute('font-size'),
        fontStyle: mjAttribute('font-style'),
        fontWeight: mjAttribute('font-weight'),
        lineHeight: mjAttribute('line-height'),
        linkDecoration: mjAttribute('link-decoration')
      }
    })
  }

  render() {
    const { mjContent } = this.props

    this.styles = this.getStyles()

    return (
      <div
        className="mj-link"
        dangerouslySetInnerHTML={{ __html: mjContent() }}
        style={this.styles.div} />
    )
  }

}

export default Link
