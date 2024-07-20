import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import GlobalFooter from '../../components/globalFooter'
import questions from '../../data/question.json'
import questionResults from '../../data/question_results.json'
import './index.scss'
import { getBestQuestionResult } from '../../utils/bizUtils'
/**
 * 结果页面: 用于查看测试结果
 */
export default () => {
  const answerList = Taro.getStorageSync('answerList')
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: '答案为空',
      icon: 'error',
      duration: 3000,
    })
  }
  // 获取测试结果
  const result = getBestQuestionResult(answerList, questions, questionResults)
  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h2 subTitle">{result.resultDesc}</View>
      <AtButton
        type="primary"
        circle
        className="controlButton"
        onClick={() => {
          Taro.reLaunch({
            url: '/pages/index/index',
          })
        }}>
        返回主页
      </AtButton>

      <GlobalFooter />
    </View>
  )
}
