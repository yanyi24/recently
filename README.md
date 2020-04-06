## recentlyjs

>  A JS plug-in that relies on dayjs to list which days and months are closest to the current date

### download

`npm i recentlyjs -S  `

### require

`import { lastDates, lastMonth } from 'recentlyjs';`

### usage

```javascript
const daysArr = lastDates(30[, options]) // latest 30 days
const monthArr = lastMonth(6[, options]) // latest 6 months
```

### options

```javascript
options = {
	// divider between date
	divider: {
		type: String,
		required: fales,
		default: '-'
	},
	// end date
	datePoint: { 
		type: String | Date | timeStamp,
		required: fales,
		default: _.now() // 当前时间
	}
}
```

### DEMO

![demo.gif](http://q79w24bh7.bkt.clouddn.com/recentlyjs-demo.gif)

### github

<https://github.com/yanyi24/recently.git>