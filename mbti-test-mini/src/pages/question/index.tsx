import { View } from '@tarojs/components'
import GlobalFooter from '../../components/globalFooter'
import { AtButton, AtRadio } from 'taro-ui'
import questions from '../../data/question.json'
import { useEffect, useState } from 'react'
import './index.scss'
import Taro from '@tarojs/taro'
/**
 * 题目页面: 单选用于做题
 */
export default () => {
  // 当前题号(从1.开始)
  const [current, setCurrent] = useState<number>(1)
  // 当前题目
  const [currentQuestion, setCurrentQuestion] = useState(questions[0])
  const questionOptions = currentQuestion.options.map((option) => {
    return { label: `${option.key}.${option.value}`, value: option.key }
  })
  // 当前答案
  const [currentAnswer, setCurrentAnswer] = useState<string>()
  // 答案列表
  const [answerList] = useState<string[]>([])
  // 题号改变时, 更新当前题目
  useEffect(() => {
    setCurrentQuestion(questions[current - 1])
    setCurrentAnswer(answerList[current - 1])
  }, [current])

  return (
    <View className="questionPage">
      <View className="at-article__h2 title">
        {current}.{currentQuestion.title}
      </View>
      <View className="options-wrapper">
        <AtRadio
          options={questionOptions}
          value={currentAnswer}
          onClick={(value: string) => {
            setCurrentAnswer(value)
            // 记录回答
            answerList[current - 1] = value
          }}
        />
      </View>
      {current < questions.length && (
        <AtButton
          type="primary"
          circle
          className="controlButton"
          disabled={!currentAnswer}
          onClick={() => {
            setCurrent(current + 1)
          }}>
          下一题
        </AtButton>
      )}
      {current == questions.length && (
        <AtButton
          type="primary"
          circle
          className="controlButton"
          onClick={() => {
            // 传递结果列表
            Taro.setStorageSync('answerList', answerList)
            // 跳转结果页面
            Taro.navigateTo({
              url: '/pages/result/index',
            })
          }}>
          查看结果
        </AtButton>
      )}
      {current > 1 && (
        <AtButton
          circle
          className="controlButton"
          onClick={() => {
            setCurrent(current - 1)
          }}>
          上一题
        </AtButton>
      )}
      <GlobalFooter />
    </View>
  )
}
