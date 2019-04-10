// 1.指出给定数据集合，元素前缀最多的单词(均是小写字母)
{
  var arr = ['flower', 'flowasssd', 'flowttst']
  // 'flow'
  var sortArr = arr.sort((pre, next) => pre.length - next.length)
  var target = sortArr.splice(0,1)[0]

  var pickDeepFlag = function(arr, target) {
    return arr.every(v => v.includes(target))
  }

  var pickWords = function(arr) {
    var flag = pickDeepFlag(arr, target)
    if (!flag) {
      target = target.split(target[target.length-1])[0]
      return pickWords(sortArr)
    }
    return target
  }
  pickWords(arr) // 'flow'
}
