## recentlyjs

>  依赖dayjs的一个列举距当前日期最近具体是哪些天、哪些月的js插件（持续更新中...）

### 下载

`npm i recentlyjs -S  `

### 引入

`import { lastDates, lastMonth } from 'recentlyjs';`

### 使用

```javascript
const daysArr = lastDates(30[, options]) // 最近30天
const monthArr = lastMonth(6[, options]) // 最近6个月
```

### 参数options

```javascript
options = {
	// 分隔符, 日期数字之间的连接符
	divider: {
		type: String,
		required: fales,
		default: '-'
	},
	// 结束时间点
	datePoint: { 
		type: String | Date | timeStamp,
		required: fales,
		default: new Date() // 当前时间
	}
}
```

### DEMO展示

![demo.gif](http://q79w24bh7.bkt.clouddn.com/recentlyjs-demo.gif)

### CHANGELOG

v0.0.4: 去掉lodash，修改lastDates当开始时间跟结束时间是同一个月份时的BUG，现在最近天数可以是任意

### github

<https://github.com/yanyi24/recently.git>