/* eslint-disable no-undef */
const dayjs = require('dayjs');

function fixedNum(num) {
	return num < 10 ? '0' + num : num;
}
// 自定义lodash的range方法
function range(start, end) {  
	let arr = [];
	for (let i = start; i <= end; i++){
		arr.push(i);
	}
	return arr;
}
/**
 * @param {Number} num
 * @param {Object} options
 *   @divider: 分隔符
 * @datePoint { // 结束时间点， 默认： 当前时间
      String('1995-12-25') | Datenew Date(2018, 8, 18) | Number 时间戳
    }
 */

export function lastDates(num,
	options = {
		divider: '-',
		datePoint: new Date()
	}) {
	const endDayjs = dayjs(options.datePoint);
	const endYear = endDayjs.year();
	const endMonth = endDayjs.month() + 1;
	const endDate = endDayjs.date();

	const dates = [];
	const startDayjs = dayjs().subtract(num - 1, 'day');
	const startYear = startDayjs.year();
	const startMonth = startDayjs.month() + 1;
	const startDate = startDayjs.date();
	const diffMonth = endDayjs.diff(startDayjs, 'month');

	/**
	 * // 不足一个月时，
	 * @param {dayjs对象} dayjs
	 * @param {String} flag
	 *  'end': 计算从当时日期到月末
	 *  'start': 计算从月初到当时日期
	 */
	function lessThanAMonth(dayjs, flag = 'end') {
		let rangeStart, rangeEnd;
		switch (flag) {
			case 'start':
				rangeStart = 1;
				rangeEnd = dayjs.date();
				break;
			default:
				rangeStart = dayjs.date();
				rangeEnd = dayjs.endOf('month').date();
		}
		range(rangeStart, rangeEnd).map(item => {
			dates.push(`${dayjs.year()}${options.divider}${fixedNum(dayjs.month() + 1)}${options.divider}${fixedNum(item)}`);
		});
	}

	/**
	 * 当有很多个整数月时
	 * @param {dayjs对象} dayjs
	 * @param { Number } monthCount
	 */
	function manyMonth(startDayjs, monthCount) {
		for (let i = 1; i <= monthCount; i++) {
			const addedDayjs = startDayjs.add(i, 'month');
			range(1, addedDayjs.endOf('month').date()).map(item => {
				dates.push(`${addedDayjs.year()}${options.divider}${fixedNum(addedDayjs.month() + 1)}${options.divider}${fixedNum(item)}`);
			});
		}
	}

	if (startYear === endYear && endMonth === startMonth) { // 同一年同一个月，直接改变天数
	    range(startDate, endDate).map(item => {
	      dates.push(`${endYear}${options.divider}${fixedNum(endMonth)}${options.divider}${fixedNum(item)}`);
	    });
	} else {
		lessThanAMonth(startDayjs);
		const diffCount = (diffMonth >= 1 && startDate <= endDate) ? diffMonth - 1 : diffMonth;
		diffCount > 0 && manyMonth(startDayjs, diffCount);
		lessThanAMonth(endDayjs, 'start');
	}
	return dates;
}

export function lastMonth(num,
	options = {
		divider: '-',
		datePoint: new Date()
	}) {
	const endDayjs = dayjs(options.datePoint);
	const endYear = endDayjs.year();
	const endMonth = endDayjs.month() + 1;

	const dates = [];
	const startDayjs = dayjs().subtract(num - 1, 'month');
	const startYear = startDayjs.year();
	const startMonth = startDayjs.month() + 1;
	const diffYear = endDayjs.diff(startDayjs, 'year');

	/**
	 * // 不足一年时，
	 * @param {dayjs对象} dayjs
	 * @param {String} flag
	 *  'end': 计算从当时日期到年末
	 *  'start': 计算从年初到当时日期
	 */
	function lessThanAYear(dayjs, flag = 'end') {
		let rangeStart, rangeEnd;
		switch (flag) {
			case 'start':
				rangeStart = 1;
				rangeEnd = dayjs.month() + 1;
				break;
			default:
				rangeStart = dayjs.month();
				rangeEnd = 12 + 1;
		}
		range(rangeStart, rangeEnd).map(item => {
			dates.push(`${dayjs.year()}${options.divider}${fixedNum(item)}`);
		});
	}

	/**
	 * 当有很多个整数年时
	 * @param {dayjs对象} dayjs
	 * @param { Number } yearCount
	 */
	function manyYear(startDayjs, yearCount) {
		for (let i = 1; i <= yearCount; i++) {
			const addedDayjs = startDayjs.add(i, 'year');
			range(1, 12).map(item => {
				dates.push(`${addedDayjs.year()}${options.divider}${fixedNum(item)}`);
			});
		}
	}

	if (endYear === startYear) { // 同一年，直接改变月份
		range(startMonth, endMonth).map(item => {
			dates.push(`${endYear}${options.divider}${fixedNum(item)}`);
		});
	} else {
		lessThanAYear(startDayjs);
		const diffCount = (diffYear >= 1 && startMonth <= endMonth) ? diffYear - 1 : diffYear;
		diffCount > 0 && manyYear(startDayjs, diffCount);
		lessThanAYear(endDayjs, 'start');
	}
	return dates;
}
