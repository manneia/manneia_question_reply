// 定义选项类型
type option_type = {
  result: string
  value: string
  key: string
}

// 定义问题类型，它包含一个标题和一组选项
type question_type = {
  options: option_type[]
  title: string
}
