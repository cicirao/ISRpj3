PSD.timeline.opacity = 0
PSD.bg.opacity = 0
PSD.gameSchedule.opacity = 0
PSD.downpart.opacity = 0
PSD.bg.x = 0
PSD.downpart.x = 72
PSD.timeline.x = 18
PSD.gameSchedule.x = 0
PSD.gameSchedule.width = PSD.bg.width
PSD.gameSchedule.style["overflow"] = "hidden"

start = function() {

	disappearj();

	PSD.bg.animate({
		properties: {opacity:1},
		time: 100
	})

	PSD.timeline.animate({
		properties: {opacity:1},
		time: 100
	})

	PSD.j17.animate({
		properties: {opacity:1},
		time: 200
	})

	PSD.gameSchedule.animate({
		properties: {opacity:1},
		time: 200
	})

	utils.delay(100, function() {
		//downpart
		PSD.spain.on("click", function() {
			PSD.spain.animate({
				properties: {rotationY:360},
				curve: "spring(150,30,0)"
			})
			PSD.downpart.y = 1136
			utils.delay(500, function() {
				PSD.downpart.animate({
					properties: {opacity:1, y:560},
					curve: "spring(100,14,200)"
				})
			})
		})
		//timeline
		PSD.timeline.on("click", function(ev) {
			var x = ev.clientX;
			disappearj();
			PSD.downpart.opacity = 0;
			showtime(x);
			
		})
		//swipe
		PSD.gameSchedule.on("dblclick", function() {
			var x = PSD.games.x;
			disappearj();

			if (x > -3840 && x < 0) {
				PSD.games.animate({
					properties: {x:x-640},
					curve:"ease-in",
					time:400
				});
				PSD.bar.x += 38;
				showtime(PSD.bar.x);

			} else if (x <= -3840) {
				PSD.games.x -= 100
				PSD.games.animate({
					properties: {x:-3840},
					curve:"spring(1200,6,500)"
				})
			} else if (x >= 0) {
				PSD.games.x -= 100
				PSD.games.animate({
					properties: {x:0},
					curve:"spring(1200,6,500)"
				})
			};
		})
	})

}


utils.delay(100, start)


function disappearj() {
	PSD.j26.animate({
		properties: {opacity:0},
		time: 100
	})

	PSD.j25.animate({
		properties: {opacity:0},
		time: 100
	})

	PSD.j24.animate({
		properties: {opacity:0},
		time: 100
	})

	PSD.j23.animate({
		properties: {opacity:0},
		time: 100
	})

	PSD.j22.animate({
		properties: {opacity:0},
		time: 100
	})

	PSD.j21.animate({
		properties: {opacity:0},
		time: 100
	})

	PSD.j20.animate({
		properties: {opacity:0},
		time: 100
	})

	PSD.j19.animate({
		properties: {opacity:0},
		time: 100
	})

	PSD.j18.animate({
		properties: {opacity:0},
		time: 100
	})

	PSD.j17.animate({
		properties: {opacity:0},
		time: 100
	})

	PSD.j16.animate({
		properties: {opacity:0},
		time: 100
	})

	PSD.j15.animate({
		properties: {opacity:0},
		time: 100
	})

	PSD.j14.animate({
		properties: {opacity:0},
		time: 100
	})

	PSD.j13.animate({
		properties: {opacity:0},
		time: 100
	})

	PSD.j12.animate({
		properties: {opacity:0},
		time: 100
	})
}

function showtime(x) {

	if (x <= 54) {
		PSD.bar.animate({
			properties: {x:0},
			curve: "spring(150,30,0)"
		});
		PSD.j12.animate({
			properties: {opacity:1},
			curve: "ease-in"
		});
		PSD.games.animate({
			properties: {x:0},
			curve: "ease-in",
			time:500
		})
	} else if (x > 54 && x <= 90) {
		PSD.bar.animate({
			properties: {x:54-18},
			curve: "spring(150,30,0)"
		});
		PSD.j13.animate({
			properties: {opacity:1},
			curve: "ease-in"
		});
		PSD.games.animate({
			properties: {x:0},
			curve: "ease-in",
			time:500
		})
	} else if (x > 90 && x <= 126) {
		PSD.bar.animate({
			properties: {x:90-18},
			curve: "spring(150,30,0)"
		});
		PSD.j14.animate({
			properties: {opacity:1},
			curve: "ease-in"
		});
		PSD.games.animate({
			properties: {x:-640},
			curve: "ease-in",
			time:500
		})
	} else if (x > 126 && x <= 162) {
		PSD.bar.animate({
			properties: {x:126-18},
			curve: "spring(150,30,0)"
		});
		PSD.j15.animate({
			properties: {opacity:1},
			curve: "ease-in"
		});
		PSD.games.animate({
			properties: {x:-640},
			curve: "ease-in",
			time:500
		})
	} else if (x > 162 && x <= 198) {
		PSD.bar.animate({
			properties: {x:162-18},
			curve: "spring(150,30,0)"
		});
		PSD.j16.animate({
			properties: {opacity:1},
			curve: "ease-in"
		});
		PSD.games.animate({
			properties: {x:-1280},
			curve: "ease-in",
			time:500
		})
	} else if (x > 198 && x <= 234) {
		PSD.bar.animate({
			properties: {x:198-18},
			curve: "spring(150,30,0)"
		});
		PSD.j17.animate({
			properties: {opacity:1},
			curve: "ease-in"
		});
		PSD.games.animate({
			properties: {x:-1280},
			curve: "ease-in",
			time:500
		})
	} else if (x > 234 && x <= 270) {
		PSD.bar.animate({
			properties: {x:234-18},
			curve: "spring(150,30,0)"
		});
		PSD.j18.animate({
			properties: {opacity:1},
			curve: "ease-in"
		});
		PSD.games.animate({
			properties: {x:-1920},
			curve: "ease-in",
			time:500
		})
	} else if (x > 270 && x <= 306) {
		PSD.bar.animate({
			properties: {x:270-18},
			curve: "spring(150,30,0)"
		});
		PSD.j19.animate({
			properties: {opacity:1},
			curve: "ease-in"
		});
		PSD.games.animate({
			properties: {x:-1920},
			curve: "ease-in",
			time:500
		})
	} else if (x > 306 && x <= 342) {
		PSD.bar.animate({
			properties: {x:306-18},
			curve: "spring(150,30,0)"
		});
		PSD.j20.animate({
			properties: {opacity:1},
			curve: "ease-in"
		});
		PSD.games.animate({
			properties: {x:-2560},
			curve: "ease-in",
			time:500
		})
	} else if (x > 342 && x <= 378) {
		PSD.bar.animate({
			properties: {x:342-18},
			curve: "spring(150,30,0)"
		});
		PSD.j21.animate({
			properties: {opacity:1},
			curve: "ease-in"
		});
		PSD.games.animate({
			properties: {x:-2560},
			curve: "ease-in",
			time:500
		})
	} else if (x > 378 && x <= 416) {
		PSD.bar.animate({
			properties: {x:378-18},
			curve: "spring(150,30,0)"
		});
		PSD.j22.animate({
			properties: {opacity:1},
			curve: "ease-in"
		});
		PSD.games.animate({
			properties: {x:-3200},
			curve: "ease-in",
			time:500
		})
	} else if (x > 416 && x <= 452) {
		PSD.bar.animate({
			properties: {x:416-18},
			curve: "spring(150,30,0)"
		});
		PSD.j23.animate({
			properties: {opacity:1},
			curve: "ease-in"
		});
		PSD.games.animate({
			properties: {x:-3200},
			curve: "ease-in",
			time:500
		})
	} else if (x > 452 && x <= 488) {
		PSD.bar.animate({
			properties: {x:452-18},
			curve: "spring(150,30,0)"
		});
		PSD.j24.animate({
			properties: {opacity:1},
			curve: "ease-in"
		});
		PSD.games.animate({
			properties: {x:-3840},
			curve: "ease-in",
			time:500
		})
	} else if (x > 488 && x <= 524) {
		PSD.bar.animate({
			properties: {x:488-18},
			curve: "spring(150,30,0)"
		});
		PSD.j25.animate({
			properties: {opacity:1},
			curve: "ease-in"
		});
		PSD.games.animate({
			properties: {x:-3840},
			curve: "ease-in",
			time:500
		})
	} else if (x > 524) {
		PSD.bar.animate({
			properties: {x:524-18},
			curve: "spring(150,30,0)"
		});
		PSD.j26.animate({
			properties: {opacity:1},
			curve: "ease-in"
		});
		PSD.games.animate({
			properties: {x:-3840},
			curve: "ease-in",
			time:500
		})
	}
}
