const overlay = document.getElementById('overlay')
const popup = document.getElementById('popup')
let marker = false

function toggle () {
	overlay.classList.toggle('active')
	popup.classList.toggle('active')
	setTimeout(() => {
		if (overlay.classList.contains('active')) marker = true
			else marker = false
		}, 500)
}

document.body.addEventListener('click', () => {
	if (marker) {
		overlay.classList.remove('active')
		popup.classList.remove('active')
		marker = false
	}
})

