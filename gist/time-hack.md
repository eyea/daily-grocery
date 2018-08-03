### 时间format在浏览器中的差异
```
const startDate = year + '-' + month + '-' + '25' + ' ' + '00:00:00'
const startDate = year + '/' + month + '/' + '25' + ' ' + '00:00:00'
const startLimit = parseInt(moment(new Date(startDate)).tz('Asia/Shanghai').format('x')) // 本月25日的0:00
const endCurrentMonth = parseInt(moment().tz('Asia/Shanghai').endOf('month').format('x')) // 本月最后

```
