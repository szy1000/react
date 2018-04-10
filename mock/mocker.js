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
    const { password, username } = req.body;
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
    res.send({ status: 'ok', message: '删除成功！' });
  }
}
module.exports = proxy;