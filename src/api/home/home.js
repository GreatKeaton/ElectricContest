import request from '@/utils/request';


//定时更新抽奖记录
export const queryGift = ()=>{
  return request({
    url:"api/eggDrop/queryGift",
    method:"get",
  })
}

// 剩余抽奖次数
export const userDrawNum = (item)=>{
  return request({
    url:"api/eggDrop/userDrawNum/"+item,
    method:"get",
  
  })
}
//模拟请求双蛋抽奖活动
export const doDraw = (item)=>{
  let params = {
    ...item
  }
 
  return request({
    url:"api/eggDrop/doDraw",
    method:"get",
    params
  })
}