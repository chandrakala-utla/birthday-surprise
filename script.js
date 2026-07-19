// ==========================
// STARS
// ==========================

const stars = document.getElementById("stars");

if (stars) {
	for (let i = 0; i < 180; i++) {
		const star = document.createElement("span");

		star.className = "star";

		star.style.left = Math.random() * 100 + "%";
		star.style.top = Math.random() * 100 + "%";

		star.style.animationDuration = 2 + Math.random() * 4 + "s";
		star.style.animationDelay = Math.random() * 5 + "s";

		stars.appendChild(star);
	}
}

// ==========================
// HEARTS
// ==========================

const hearts = document.getElementById("hearts");

if (hearts) {
	function createHeart() {
		const heart = document.createElement("div");

		heart.className = "heart";
		heart.innerHTML = "❤";

		heart.style.left = Math.random() * 100 + "%";
		heart.style.fontSize = 12 + Math.random() * 22 + "px";
		heart.style.animationDuration = 8 + Math.random() * 6 + "s";

		hearts.appendChild(heart);

		setTimeout(() => heart.remove(), 14000);
	}

	setInterval(createHeart, 450);
}

// ==========================
// SHOOTING STARS
// ==========================

const shooting = document.getElementById("shooting-stars");

if (shooting) {
	function shootingStar() {
		const star = document.createElement("div");

		star.className = "shooting";

		star.style.left = 75 + Math.random() * 20 + "%";
		star.style.top = Math.random() * 30 + "%";

		shooting.appendChild(star);

		setTimeout(() => star.remove(), 1800);
	}

	setInterval(shootingStar, 5000);
}

// ==========================
// HOME PAGE
// ==========================

const openBtn = document.getElementById("openBtn");

if (openBtn) {
	window.onload = () => {
		const glass = document.querySelector(".glass");

		if (!glass) return;

		glass.style.opacity = "0";
		glass.style.transform = "translateY(80px)";

		setTimeout(() => {
			glass.style.transition = "1.2s";
			glass.style.opacity = "1";
			glass.style.transform = "translateY(0)";
		}, 300);
	};

	openBtn.onclick = () => {
		window.location.href = "password.html";
	};

	const glow = document.querySelector(".glow");

	if (glow) {
		document.addEventListener("mousemove", (e) => {
			glow.style.left = e.clientX + "px";
			glow.style.top = e.clientY + "px";
		});
	}

	const icon = document.querySelector(".icon");
	const card = document.querySelector(".glass");

	if (icon && card) {
		function createSparkle() {
			const sparkle = document.createElement("div");

			sparkle.className = "sparkle";

			const rect = icon.getBoundingClientRect();
			const cardRect = card.getBoundingClientRect();

			sparkle.style.left =
				rect.left - cardRect.left + Math.random() * 90 - 20 + "px";

			sparkle.style.top =
				rect.top - cardRect.top + Math.random() * 90 - 20 + "px";

			card.appendChild(sparkle);

			setTimeout(() => sparkle.remove(), 2000);
		}

		setInterval(createSparkle, 350);
	}

	const glass = document.querySelector(".glass");

	if (glass) {
		glass.addEventListener("mousemove", (e) => {
			const rect = glass.getBoundingClientRect();

			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const rotateY = (x - rect.width / 2) / 25;
			const rotateX = -(y - rect.height / 2) / 25;

			glass.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
		});

		glass.addEventListener("mouseleave", () => {
			glass.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
		});
	}
}

// ==========================
// PASSWORD PAGE
// ==========================

const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {
	const input = document.getElementById("password");
	const toggle = document.getElementById("togglePassword");
	const error = document.getElementById("errorMessage");
	const card = document.querySelector(".password-card");

	if (toggle) {
		toggle.onclick = () => {
			input.type = input.type === "password" ? "text" : "password";

			toggle.classList.toggle("fa-eye");
			toggle.classList.toggle("fa-eye-slash");
		};
	}

	continueBtn.onclick = () => {
		if (input.value.trim().toLowerCase() === "dudu") {
			error.style.color = "#8effc8";
			error.innerHTML = "Password Correct ❤️";

			// Grant access
			sessionStorage.setItem("birthdayAccess", "granted");

			setTimeout(() => {
				window.location.href = "surprise.html";
			}, 1000);
		} else {
			error.innerHTML = "Wrong Password 😢";

			if (card) {
				card.classList.remove("shake");
				void card.offsetWidth;
				card.classList.add("shake");
			}
		}
	};
}
