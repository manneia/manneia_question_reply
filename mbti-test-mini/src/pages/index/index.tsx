import './index.scss'
import { Image, View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import headerBg from '/src/assets/logo.jpg'
import GlobalFooter from '../../components/globalFooter'
import Taro from '@tarojs/taro'

/**
 * 主页
 */
export default () => {
  return (
    <View className="indexPage">
      <View className="at-article__h1 title">Mbti 性格测试</View>
      <View className="at-article__h2 subTitle">
        只需要短短两分钟时间,就可以准确描述出你是谁,以及你的性格特点
      </View>
      <AtButton
        type="primary"
        circle
        className="enterButton"
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/question/index',
          })
        }}>
        开始测试
      </AtButton>
      <Image className="headerBg" src={headerBg} />
      <GlobalFooter />
    </View>
  )
}
