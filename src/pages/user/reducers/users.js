const lists = [
  {
  "id": "710000198711115917",
  "name": "陈平",
  "nickName": "Brown",
  "phone": "17816472966",
  "age": 37,
  "address": "海外 海外 -",
  "isMale": true,
  "email": "g.methdkpd@chojn.my",
  "createTime": "2000-04-18 00:24:21",
  "avatar": "http://dummyimage.com/'100x100'/8cf279"
},
{
  "id": "370000201512315634",
  "name": "许艳",
  "nickName": "Taylor",
  "phone": "15459937434",
  "age": 69,
  "address": "甘肃省 武威市 其它区",
  "isMale": false,
  "email": "i.ebyu@rhbjen.li",
  "createTime": "1989-08-15 14:14:36",
  "avatar": "http://dummyimage.com/'100x100'/f279af"
},
{
  "id": "460000197503161875",
  "name": "宋超",
  "nickName": "Robinson",
  "phone": "15649943018",
  "age": 52,
  "address": "云南省 昭通市 镇雄县",
  "isMale": true,
  "email": "b.wdklju@gdzpehkj.kw",
  "createTime": "1989-07-23 16:00:48",
  "avatar": "http://dummyimage.com/'100x100'/79d3f2"
},
{
  "id": "610000197603044527",
  "name": "朱静",
  "nickName": "Taylor",
  "phone": "15416276618",
  "age": 52,
  "address": "宁夏回族自治区 石嘴山市 大武口区",
  "isMale": true,
  "email": "f.bshdmk@tmbfr.tn",
  "createTime": "1973-07-05 22:39:05",
  "avatar": "http://dummyimage.com/'100x100'/f2ed79"
}
]


const users = (state = lists, action) => {
  switch(action.type) {
    case 'SET_USERS':
      return action.users
    case 'DELETE_USER':
      return state.filter(user => {
        return action.id !== user.id
      })
    default:
      return lists 
  }
}

export default users