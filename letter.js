if (sessionStorage.getItem("birthdayAccess") !== "granted") {
	window.location.href = "password.html";
}
/*==========================================================
LETTER MESSAGE
==========================================================*/

const message = `Dear Supriya ❤️,

Happy Birthday!

There are some people who come into our lives quietly, yet they leave the biggest impact. You are one of those rare people for me.

I don't know if I've ever told you this, but having you in my life is something I'm truly grateful for. Your kindness, your care, your laughter, and the way you always make everything feel a little brighter are gifts that not everyone is lucky enough to receive.

Thank you for standing beside me through so many moments—whether they were filled with laughter, silence, happiness, or worries. Knowing that you're there has always given me comfort, and that means more than words can ever express.

You have brought so many beautiful memories into my life, memories that I will always treasure. Every conversation, every smile, every little moment we've shared has become a part of my happiest days.

I pray that every path you choose leads you to happiness, every dream you hold close to your heart comes true, and every challenge only makes you stronger. May your life always be filled with love, peace, good health, success, and countless reasons to smile.

No matter what the future brings or where life takes us, I hope our friendship remains just as beautiful as it is today. Some bonds are too precious to be measured by distance or time, and ours is one of them.

Today is your special day, Enjoy endlessly!

Smile a little brighter.

Laugh a little louder.

Make wonderful memories.

And remember that there is someone who will always be wishing the very best for you.

Happy Birthday! 🎂❤️

May this new chapter of your life bring endless joy, unforgettable moments, and everything your heart has been hoping for.

Stay exactly the way you are—kind, genuine, and wonderful.

Always with you❤️

With lots of love,`;

const target = document.getElementById("letterText");

let index = 0;

/*==========================================================
TYPE WRITER
==========================================================*/

function typeLetter() {
	if (index < message.length) {
		target.innerHTML += message.charAt(index);

		index++;

		setTimeout(typeLetter, 35);
	} else {
		target.innerHTML += `<div class="pink-signature"> — Your Sakhi ❤️</div>`;

		// Fade out music after the letter is complete
		const music = document.getElementById("letterMusic");

		const fade = setInterval(() => {
			if (music.volume > 0.02) {
				music.volume -= 0.02;
			} else {
				clearInterval(fade);

				music.pause();

				music.currentTime = 0;
			}
		}, 150);
	}
}
/*==========================================================
STARS
==========================================================*/

function createStars() {
	const stars = document.getElementById("stars");

	for (let i = 0; i < 120; i++) {
		const star = document.createElement("div");

		star.className = "star";

		star.style.left = Math.random() * 100 + "%";

		star.style.top = Math.random() * 100 + "%";

		star.style.animationDuration = 2 + Math.random() * 4 + "s";

		stars.appendChild(star);
	}
}

/*==========================================================
FLOATING HEARTS
==========================================================*/

function createHearts() {
	const hearts = document.getElementById("hearts");

	setInterval(() => {
		const heart = document.createElement("div");

		heart.className = "heart";

		heart.innerHTML = "❤";

		heart.style.left = Math.random() * 100 + "%";

		heart.style.fontSize = 12 + Math.random() * 24 + "px";

		heart.style.animationDuration = 5 + Math.random() * 3 + "s";

		hearts.appendChild(heart);

		setTimeout(() => {
			heart.remove();
		}, 8000);
	}, 450);
}
/*==========================================================
START LETTER
==========================================================*/

window.onload = () => {

	createStars();

	createHearts();

	const music = document.getElementById("letterMusic");

	if (music) {

		music.volume = 0.45;

		music.play().catch(() => {
			console.log("Autoplay blocked.");
		});

	}

	setTimeout(typeLetter, 1200);

};
window.addEventListener("beforeunload", () => {
	sessionStorage.removeItem("birthdayAccess");
});
