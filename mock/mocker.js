// var Mock = require('mockjs');

// const proxy = {
//   'GET /api/user': Mock.mock({
//     id: 1,
//     username: 'kenny',
//     sex: 6
//   }),
//   'GET /api/user/list': Mock.mock({
//     "retCode": "0000",
//     "retMsg": "调用成功",
//     "returnObj|1-10": [
//       {
//         "id|+1": 1,
//         username: 'kenny',
//         sex: 6
//       }
//     ] 
//   }),
//   'POST /api/login/account': (req, res) => {
//     const { password, username } = req.body;
//     if (password === '888888' && username === 'admin') {
//       return res.send({
//         status: 'ok',
//         code: 0,
//         token: "sdfsdfsdfdsf",
//         data: {
//           id: 1,
//           username: 'kenny',
//           sex: 6
//         }
//       });
//     } else {
//       return res.send({
//         status: 'error',
//         code: 403
//       });
//     }
//   },
//   'DELETE /api/user/:id': (req, res) => {
//     console.log('---->', req.body)
//     console.log('---->', req.params.id)
//     res.send({ status: 'ok', message: '删除成功！' });
//   }
// }
// module.exports = proxy;

let config = 'https://raw.githubusercontent.com/szy1000/react/master/static/images/';

const proxy = {
  'GET /api/home': [
    {
      title: '暑假5折',
      img: config + '138012-20161016191639092-2000037796.png',
      link: 'http://www.imooc.com/wap/index'
    },
    {
      title: '特价出国',
      img: config + '138012-20161016191648124-298129318.png',
      link: 'http://www.imooc.com/wap/index'
    },
    {
      title: '亮亮车',
      img: config + '138012-20161016191653983-1962772127.png',
      link: 'http://www.imooc.com/wap/index'
    },
    {
      title: '学钢琴',
      img: config + '138012-20161016191700420-1584459466.png',
      link: 'http://www.imooc.com/wap/index'
    },
    {
      title: '电影',
      img: config + '138012-20161016191706733-367929553.png',
      link: 'http://www.imooc.com/wap/index'
    },
    {
      title: '旅游热线',
      img: config + '138012-20161016191713186-495002222.png',
      link: 'http://www.imooc.com/wap/index'
    }
  ],
  'GET /api/home/guess': [
    {
      img: config + '138012-20161016201638030-473660627.png',
      title: '汉堡大大',
      subTitle: '叫我汉堡大大，还你多彩口味',
      price: '28',
      distance: '120m',
      mumber: '389'
    },
    {
      img: config + '138012-20161016201645858-1342445625.png',
      title: '北京开源饭店',
      subTitle: '[望京]自助晚餐',
      price: '98',
      distance: '140m',
      mumber: '689'
    },
    {
      img: config + '138012-20161016201652952-1050532278.png',
      title: '服装定制',
      subTitle: '原价xx元，现价xx元，可修改一次',
      price: '1980',
      distance: '160',
      mumber: '106'
    },
    {
      img: config + '138012-20161016201700186-1351787273.png',
      title: '婚纱摄影',
      subTitle: '免费试穿，拍照留念',
      price: '2899',
      distance: '160',
      mumber: '58'
    },
    {
      img: config + '138012-20161016201708124-1116595594.png',
      title: '麻辣串串烧',
      subTitle: '双人免费套餐等你抢购',
      price: '0',
      distance: '160',
      mumber: '1426'
    }
  ],
  'GET /api/user/list': [
    {
      id: 1,
      username: 'kenny',
      sex: 6
    }, {
      id: 2,
      username: 'kenny',
      sex: 6
    }
  ],
  'POST /api/login/account': (req, res) => {
    const {password, username} = req.body;
    if (password === '888888' && username === 'admin') {
      return res.json({
        status: 'ok',
        code: 0,
        token: "sdfsdfsdfdsf",
        data: {
          id: 1,
          username: 'kenny',
          sex: 6
        }
      });
    } else {
      return res.json({
        status: 'error',
        code: 403
      });
    }
  },
  'DELETE /api/user/:id': (req, res) => {
    console.log('---->', req.body)
    console.log('---->', req.params.id)
    res.send({status: 'ok', message: '删除成功！'});
  }
}
module.exports = proxy;