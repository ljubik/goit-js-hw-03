// Завдання 3
// Задача 2-3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// Здано:
function findLongestWord(string = "") {
	// Write code under this line

	let words = string.split(" ")
	let max = 0
	let longestWord = string

	for (const word of words) {
		let len = word.length
		if (len > max) {
			max = len
			longestWord = word
		}
	}

	return longestWord
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
// 'jumped'

console.log(findLongestWord("Google do a roll"))
// 'Google'

console.log(findLongestWord("May the force be with you"))
// 'force'
