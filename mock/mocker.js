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

const proxy = {
  'GET /api/user': {
    id: 1,
    username: 'kenny',
    sex: 6
  },
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