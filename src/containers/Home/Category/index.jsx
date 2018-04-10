import React from 'react';
import ReactSwiper from 'react-id-swiper';
// import ReactSwipe from 'react-swipe';
// import Swiper from 'react-slider-swiper';
import * as config from '../../../config/';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.scss';

class Category extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const items = [
      {
        image: config.IMAGE_PATH + 'jingdian.png',
        title: '景点',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'KTV.png',
        title: 'KTV',
      }, {
        image: config.IMAGE_PATH + 'shopping.png',
        title: '购物',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'lifeService.png',
        title: '生活服务',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'exercise.png',
        title: '运动健身',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'haircut.png',
        title: '美发',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'withchild.png',
        title: '亲子',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'snack.png',
        title: '小吃快餐',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH +  'selfservice.png',
        title: '自助餐',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'bar.png',
        title: '酒吧',
        link: 'http://jd.com'
      }
    ];
    const items2 = [
      {
        image: config.IMAGE_PATH + 'food.png',
        title: '美食',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'movie.png',
        title: '电影',
      }, {
        image: config.IMAGE_PATH + 'hotel.png',
        title: '酒店',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'amusement.png',
        title: '休闲娱乐',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'take_out.png',
        title: '外卖',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'hot_pot.png',
        title: '火锅',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'beauty.png',
        title: '丽人',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'vacation.png',
        title: '度假出行',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'massag.png',
        title: '足疗按摩',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'travel_around.png',
        title: '周边游',
        link: 'http://jd.com'
      }
    ];
    const items3 = [
      {
        image: config.IMAGE_PATH + 'ribencai.png',
        title: '日本菜',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'spa.png',
        title: 'SPA',
      }, {
        image: config.IMAGE_PATH + 'wedding.png',
        title: '结婚',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'study.png',
        title: '学习培训',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'xican.png',
        title: '西餐',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'huochepiao.png',
        title: '火车机票',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'BBQ.png',
        title: '烧烤',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'jiazhuang.png',
        title: '家装',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'pet.png',
        title: '宠物',
        link: 'http://jd.com'
      }, {
        image: config.IMAGE_PATH + 'all.png',
        title: '全部分类',
      }
    ];
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: false
      },
      autoplay: true,
      spaceBetween: 30,
    }

    return (
      <div id="Home_category">
        <ReactSwiper  {...params}>
          <div className="services_wrapper">
            {
              items.map((item,index)=> (
                <div key={index}>
                  <div className="services">
                    <img src={item.image}/>
                    <div>{item.title}</div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="services_wrapper">
            {
              items2.map((item,index)=> (
                <div key={index}>
                  <div className="services">
                    <img src={item.image}/>
                    <div>{item.title}</div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="services_wrapper">
            {
              items3.map((item,index)=> (
                <div key={index}>
                  <div className="services">
                    <img src={item.image}/>
                    <div>{item.title}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </ReactSwiper>
      </div>
    );
  }
}

export default Category;