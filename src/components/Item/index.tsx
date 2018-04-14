import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.scss'

export interface Props {
  data: any
}

export interface State {

}

class ListItem extends React.Component<Props,State> {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const data = this.props.data
    return (
      <div className="list-item clearfix">
        <div className="item-img-container pull-left">
          <img src={data.img} alt={data.title}/>
        </div>
        <div className="item-content">
          <div className="item-title-container clearfix">
            <h3 className="pull-left">{data.title}</h3>
            <span className="pull-right">{data.distance}</span>
          </div>
          <p className="item-sub-title">
            {data.subTitle}
          </p>
          <div className="item-price-container clearfix">
            <span className="price pull-left">￥{data.price}</span>
            <span className="mumber pull-right">已售{data.mumber}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ListItem