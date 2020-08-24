const animateValue = (id, start, end, duration, cb) => {
	// assumes integer values for start and end

	const obj = document.getElementById(id)
	if (!obj) return
	const range = end - start
	// no timer shorter than 50ms (not really visible any way)
	const minTimer = 50
	// calc step time to show all interediate values
	let stepTime = Math.abs(Math.floor(duration / range))

	// never go below minTimer
	stepTime = Math.max(stepTime, minTimer)

	// get current time and calculate desired end time
	const startTime = new Date().getTime()
	const endTime = startTime + duration
	let timer

	function run() {
		const now = new Date().getTime()
		const remaining = Math.max((endTime - now) / duration, 0)
		const value = Math.round(end - remaining * range)
		obj.innerHTML = value
		if (value === end) {
			clearInterval(timer)
			cb()
		}
	}

	timer = setInterval(run, stepTime)
	run()
}
