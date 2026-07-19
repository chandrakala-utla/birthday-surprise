// surprise.js
if (sessionStorage.getItem("birthdayAccess") !== "granted") {
	window.location.href = "password.html";
}
const scenes = [
	"giftScene",
	"birthdayScene",
	"galleryScene",
	"cakeScene",
	"endingScene",
].map((id) => document.getElementById(id));

let currentScene = 0;

function showScene(index) {
	scenes.forEach((scene) => {
		if (scene) scene.style.display = "none";
	});

	scenes[index].style.display = "flex";

	currentScene = index;

	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

/*=========================================
INITIAL
=========================================*/

showScene(0);

/*=========================================
GIFT OPEN
=========================================*/

giftButton.addEventListener("click", () => {
	const gift = document.querySelector(".gift-box");

	gift.classList.add("shake");

	setTimeout(() => {
		gift.classList.remove("shake");

		gift.classList.add("open");

		burst();
	}, 500);

	setTimeout(() => {
		document.body.classList.add("flash");
	}, 900);

	setTimeout(() => {
		document.body.classList.remove("flash");

		showScene(1);

		startLoadingStory();
	}, 1500);
});

/*=========================================
NEXT BUTTONS
=========================================*/

document.querySelectorAll(".next-btn").forEach((btn, index) => {
	btn.onclick = () => {
		showScene(currentScene + 1);
	};
});

/*=========================================
PREMIUM ENVELOPE
=========================================*/
const envelope = document.getElementById("envelope");

let opened = false;

envelope.addEventListener("click", () => {
	if (opened) return;

	opened = true;

	envelope.classList.add("open");

	setTimeout(() => {
		window.location.href = "letter.html";
	}, 1800);
});
/*=========================================
CAKE
=========================================*/

document.getElementById("blowBtn").onclick = () => {
	document.querySelectorAll(".flame").forEach((flame) => {
		flame.animate(
			[
				{ opacity: 1 },

				{
					opacity: 0,
					transform: "translateX(-50%) translateY(-25px) scale(.3)",
				},
			],
			{
				duration: 700,

				fill: "forwards",
			},
		);
	});

	burst();

	setTimeout(() => {
		showScene(4);
	}, 1500);
};


/*=========================================
STARS
=========================================*/

const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {
	const s = document.createElement("div");

	s.className = "star";

	s.style.left = Math.random() * 100 + "%";

	s.style.top = Math.random() * 100 + "%";

	s.style.animationDuration = 2 + Math.random() * 4 + "s";

	stars.appendChild(s);
}

/*=========================================
HEARTS
=========================================*/

const hearts = document.getElementById("hearts");

setInterval(() => {
	const h = document.createElement("div");

	h.className = "heart";

	h.innerHTML = "❤";

	h.style.left = Math.random() * 100 + "%";

	h.style.fontSize = 10 + Math.random() * 24 + "px";

	h.style.animationDuration = 5 + Math.random() * 3 + "s";

	hearts.appendChild(h);

	setTimeout(() => {
		h.remove();
	}, 8000);
}, 450);
/*=========================================
LOADING STORY
=========================================*/

function startLoadingStory() {
	const bar = document.getElementById("loaderFill");
	const text = document.getElementById("loadingText");

	const steps = [
		{
			width: "20%",
			msg: "Collecting our happiest moments... 📸",
		},
		{
			width: "45%",
			msg: "Finding your brightest smiles... 😊",
		},
		{
			width: "70%",
			msg: "Wrapping everything with love... ❤️",
		},
		{
			width: "100%",
			msg: "Welcome 💖",
		},
	];

	let i = 0;

	function next() {
		if (i >= steps.length) {
			document.querySelector(".loading-story").style.opacity = "0";

			setTimeout(() => {
				showScene(2);
			}, 600);

			return;
		}

		bar.style.width = steps[i].width;

		text.innerHTML = steps[i].msg;

		i++;

		setTimeout(next, 900);
	}

	next();
}
/*=========================================
BURST
=========================================*/

function burst() {
	for (let i = 0; i < 35; i++) {
		const b = document.createElement("div");

		b.className = "burst";

		b.style.left = window.innerWidth / 2 + "px";

		b.style.top = window.innerHeight / 2 + "px";

		document.body.appendChild(b);

		const x = (Math.random() - 0.5) * 500;

		const y = (Math.random() - 0.5) * 500;

		b.animate(
			[
				{
					transform: "translate(0,0)",

					opacity: 1,
				},

				{
					transform: `translate(${x}px,${y}px)`,

					opacity: 0,
				},
			],
			{
				duration: 1200,
			},
		);

		setTimeout(() => {
			b.remove();
		}, 1200);
	}
}
