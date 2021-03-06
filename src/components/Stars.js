import React, { Component } from 'react'
import Icon from './Icon'

export default class Stars extends Component {
  render() {
    let { count } = this.props
    let starsDom = []
    for (let i = 0; i < 5; i++) {
      starsDom.push(<Icon type="xingxing" className={"m-star " + (i < count ? 'active' : '')} key={i}></Icon>)
    }
    return (
      <div>
        {starsDom}
      </div>
    )
  }
}
