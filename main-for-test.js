import { getAggregatedData, getAccessToken, getSendCompony } from './src/services/index.js'
import config from './config/exp-config.js'

/**
 * 参数测试函数
 */
export default async function mainForTest() {
  // 处理好的用户数据
  console.log(config.PUSH_FROM)
  const accessToken = await getAccessToken(config.PUSH_FROM)
  console.log(accessToken)
  const aggregatedData = await getAggregatedData()
  // aggregatedData.forEach((item) => {
  //   console.log(item.wxTemplateParams)
  // })
  const ee = await getSendCompony(aggregatedData[0].wxTemplateParams)
  console.log(ee)
}
