# recentlyjs

> 依赖dayjs的一个列举最近天、月的js插件


## Build Setup

```bash
# 克隆项目
git clone https://github.com/yanyi24/recently.git

# 进入项目目录
cd recently

# 安装依赖
npm install


## 使用
import { lastDates, lastMonth } from 'path/recentlyjs';
lastDates(30, options) // 最近30天
lastMonth(6, options) // 最近6个月天

options:{
	type: Object,
	required: fales
}

options.divider: { // 分隔符, 日期数字之间的连接符
	type: String,
	required: fales,
	default: '-'
}

options.datePoint: { // 结束时间点
	type: String | Date | timeStamp,
	required: fales,
	default: _.now()
}


## License

[MIT](https://gitee.com/yanyi24_yanyi9399/admin-100csc/blob/master/LICENSE) license.

Copyright (c) 2020-present yanyi24_yanyi9399
