import Mock from 'mockjs'

Mock.mock('/api/test', 'get', () => {
  return {
    errno: 0,
    data: {
      name: `Heo Hao ${Date.now()}`,
    },
  }
})
