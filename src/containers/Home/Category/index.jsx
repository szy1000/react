import React from 'react';
import ReactSwiper from 'react-id-swiper';
// import ReactSwipe from 'react-swipe';
// import Swiper from 'react-slider-swiper';
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
        image: 'jingdian.png',
        title: '景点',
        link: 'http://jd.com'
      }, {
        image: 'KTV.png',
        title: 'KTV',
      }, {
        image: 'shopping.png',
        title: '购物',
        link: 'http://jd.com'
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224237513-176380794.png',
        title: '生活服务',
        link: 'http://jd.com'
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224256732-145714491.png',
        title: '运动健身',
        link: 'http://jd.com'
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224222123-643915682.png',
        title: '美发',
        link: 'http://jd.com'
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224229451-475201730.png',
        title: '亲子',
        link: 'http://jd.com'
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224244545-1583700011.png',
        title: '小吃快餐',
        link: 'http://jd.com'
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224113560-1012968440.png',
        title: '自助餐',
        link: 'http://jd.com'
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224210732-490953965.png',
        title: '酒吧',
        link: 'http://jd.com'
      }
    ];
    const items2 = [
      {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224409107-2018112337.png',
        title: '美食',
        link: 'http://jd.com'
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224033873-290248113.png',
        title: '电影',
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224051513-2057698989.png',        
        title: '酒店',
        link: 'http://jd.com'
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224129076-2058206915.png',
        title: '休闲娱乐',
        link: 'http://jd.com'
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224121920-424129491.png',
        title: '外卖',
        link: 'http://jd.com'
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224046342-1896393176.png',
        title: '火锅',
        link: 'http://jd.com'
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224057670-257626875.png',
        title: '丽人',
        link: 'http://jd.com'
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224040842-2050913385.png',
        title: '度假出行',
        link: 'http://jd.com'
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224144060-1009120401.png',
        title: '足疗按摩',
        link: 'http://jd.com'
      }, {
        image: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224138123-197921773.png',
        title: '周边游',
        link: 'http://jd.com'
      }
    ];
    const items3 = [
      {
        image: 'ribencai.png',
        title: '日本菜',
        link: 'http://jd.com'
      }, {
        image: 'spa.png',
        title: 'SPA',
      }, {
        image: 'wedding.png',
        title: '结婚',
        link: 'http://jd.com'
      }, {
        image: 'study.png',
        title: '学习培训',
        link: 'http://jd.com'
      }, {
        image: 'xican.png',
        title: '西餐',
        link: 'http://jd.com'
      }, {
        image: 'huochepiao.png',
        title: '火车机票',
        link: 'http://jd.com'
      }, {
        image: 'BBQ.png',
        title: '烧烤',
        link: 'http://jd.com'
      }, {
        image: 'jiazhuang.png',
        title: '家装',
        link: 'http://jd.com'
      }, {
        image: 'pet.png',
        title: '宠物',
        link: 'http://jd.com'
      }, {
        image: 'all.png',
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