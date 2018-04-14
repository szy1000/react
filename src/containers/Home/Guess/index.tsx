import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getGuessDataReq } from '../../../fetch/home/home';

import ListItem from '../../../components/Item/';
import './style.scss';

class Guess extends React.Component<any, any> {

  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div id="Guess">
        <h2 className="home-list-title">猜你喜欢</h2>
        <div className="list-container">
            {this.state.data.map((item, index) => {
              return <ListItem key={index} data={item}/>
            })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    const result = getGuessDataReq("南京", 1);
    result.then((res) => {
      return res.json()
    }).then((json) => {
      this.setState({
        data: json
      })
      console.log(json)
    })
  }
}

export default Guess;
