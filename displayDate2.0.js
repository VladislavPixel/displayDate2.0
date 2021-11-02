function getDate(time) { // function accepts target date in milliseconds, string type
	const currentDateObject = new Date()
	const currentDate = Date.now()
	const different = currentDate - time
	const timePostHours = new Date(Number(time)).getHours()
	const currentDateHours = currentDateObject.getHours()
	const differentHours = currentDateHours - timePostHours
	const timePostMinutes = new Date(Number(time)).getMinutes()
	const currentDateMinutes = currentDateObject.getMinutes()
	const differentMinutes = currentDateMinutes - timePostMinutes
	const currentDateNumberDate = currentDateObject.getDate()
	const currentDateNumberPost = new Date(Number(time)).getDate()
	const currentDateMonth = currentDateObject.getMonth()
	const currentDatePostMonth = new Date(Number(time)).getMonth()
	const currentDateYear = currentDateObject.getFullYear()
	const timePostYear = new Date(Number(time)).getFullYear()

	function getPhraseHours(hours) {
		const txtHours = `${hours}`
		const lastElementHours = txtHours[txtHours.length - 1]

		if (hours === 1 || lastElementHours === "1") {
			return ` - ${hours} час`
		}
		if ((hours > 1 && hours < 5) || (lastElementHours === "2" || lastElementHours === "3" || lastElementHours === "4")) {
			return ` - ${hours} часа`
		}
		return ` - ${hours} часов`
	}
	function getPhraseMinutes(minutes) {
		const txtMinutes = `${minutes}`
		const lastElementMinutes = txtMinutes[txtMinutes.length - 1]
		if (minutes === 0) {
			return ` 00 минут`
		}
		if (minutes === 1 || (lastElementMinutes === "1" && minutes !== 11)) {
			return ` ${txtMinutes.length > 1 ? minutes : ("0" + minutes)} минута`
		}
		if ((minutes > 1 && minutes < 5) || (minutes > 21 && (lastElementMinutes === "2" || lastElementMinutes === "3" || lastElementMinutes === "4"))) {
			return ` ${txtMinutes.length > 1 ? minutes : ("0" + minutes)} минуты`
		}
		return ` ${txtMinutes.length > 1 ? minutes : ("0" + minutes)} минут`
	}
	function getRussianLanguageMonth(numberMonth) {
		let txtMonth
		switch (numberMonth) {
		case 0:
			txtMonth = "января"
			break
		case 1:
			txtMonth = "февраля"
			break
		case 2:
			txtMonth = "марта"
			break
		case 3:
			txtMonth = "апреля"
			break
		case 4:
			txtMonth = "мая"
			break
		case 5:
			txtMonth = "июня"
			break
		case 6:
			txtMonth = "июля"
			break
		case 7:
			txtMonth = "августа"
			break
		case 8:
			txtMonth = "сентября"
			break
		case 9:
			txtMonth = "октября"
			break
		case 10:
			txtMonth = "ноября"
			break
		case 11:
			txtMonth = "декабря"
			break
		default:
			txtMonth = "Такой даты не существует"
			break
		}
		return txtMonth
	}
	if (currentDateYear !== timePostYear) {
		return `Публикация от ${currentDateNumberPost} ${getRussianLanguageMonth(currentDatePostMonth)} ${timePostYear} года`
	}
	if (currentDateNumberDate !== currentDateNumberPost || (currentDateMonth !== currentDatePostMonth)) {
		return `Публикация от ${currentDateNumberPost} ${getRussianLanguageMonth(currentDatePostMonth)}`
	}
	if (differentHours && differentMinutes >= 0) {
		return `${getPhraseHours(differentHours)} ${getPhraseMinutes(differentMinutes)} назад`
	}
	if (different > 1800000) {
		return "- 30 минут назад"
	}
	if (different > 600000) {
		return "- 10 минут назад"
	}
	if (different > 300000) {
		return "- 5 минут назад"
	}
	if (different > 60000) {
		return "- 1 минуту назад"
	}
	return "Публикация оставлена только что"
}
console.log(getDate("1635811231538"))
