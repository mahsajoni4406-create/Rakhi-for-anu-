document.addEventListener("DOMContentLoaded", () => {

    const pages = {
        welcome: document.getElementById("welcomePage"),
        greeting: document.getElementById("greetingPage"),
        rakhi: document.getElementById("rakhiPage"),
        letter: document.getElementById("letterPage"),
        gift: document.getElementById("giftPage"),
        surprise: document.getElementById("surprisePage")
    };


    function showPage(page) {

        Object.values(pages).forEach(p => {
            p.classList.remove("active");
        });

        page.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    /* =========================
       NO BUTTON
    ========================= */

    const noBtn = document.getElementById("noBtn");

    noBtn.addEventListener("mouseenter", moveNoButton);

    noBtn.addEventListener("touchstart", moveNoButton);

    noBtn.addEventListener("click", moveNoButton);


    function moveNoButton(event) {

        if (event) {
            event.preventDefault();
        }

        const padding = 20;

        const maxX =
            window.innerWidth -
            noBtn.offsetWidth -
            padding;

        const maxY =
            window.innerHeight -
            noBtn.offsetHeight -
            padding;

        const x =
            Math.max(
                padding,
                Math.random() * maxX
            );

        const y =
            Math.max(
                padding,
                Math.random() * maxY
            );

        noBtn.style.position = "fixed";

        noBtn.style.left = `${x}px`;

        noBtn.style.top = `${y}px`;
    }


    /* =========================
       YES
    ========================= */

    document
        .getElementById("yesBtn")
        .addEventListener("click", () => {

            showPage(pages.greeting);

        });


    /* =========================
       CONTINUE
    ========================= */

    document
        .getElementById("continueBtn")
        .addEventListener("click", () => {

            showPage(pages.rakhi);

        });


    /* =========================
       RAKHI
    ========================= */

    const handImage =
        document.getElementById("handImage");

    const rakhiBtn =
        document.getElementById("rakhiBtn");

    const sparkles =
        document.getElementById("sparkles");


    rakhiBtn.addEventListener("click", () => {

        if (rakhiBtn.disabled) {
            return;
        }

        rakhiBtn.disabled = true;

        handImage.classList.add("changing");

        sparkles.classList.add("show");


        setTimeout(() => {

            /*
             * Change the normal hand photo
             * into the real Rakhi photo.
             */

            handImage.src = "/static/rakhi.jpg";

            handImage.classList.remove("changing");

            handImage.classList.add("changed");

            rakhiBtn.innerHTML =
                "Rakhi Tied! ❤️";

        }, 700);


        /*
         * Open the letter after
         * the Rakhi animation.
         */

        setTimeout(() => {

            showPage(pages.letter);

        }, 2200);

    });


    /* =========================
       OPEN GIFT PAGE
    ========================= */

    document
        .getElementById("giftBtn")
        .addEventListener("click", () => {

            showPage(pages.gift);

        });


    /* =========================
       GIFT BOX
    ========================= */

    const giftBox =
        document.getElementById("giftBox");

    const openGiftBtn =
        document.getElementById("openGiftBtn");

    const giftMessage =
        document.getElementById("giftMessage");


    openGiftBtn.addEventListener("click", () => {

        giftBox.classList.add("open");

        openGiftBtn.style.display = "none";

        setTimeout(() => {

            giftMessage.classList.add("show");

        }, 700);

    });


    /* =========================
       FINAL SURPRISE
    ========================= */

    document
        .getElementById("surpriseBtn")
        .addEventListener("click", () => {

            showPage(pages.surprise);

            startConfetti();

        });


    /* =========================
       CONFETTI
    ========================= */

    function startConfetti() {

        const emojis = [
            "🎉",
            "💙",
            "❤️",
            "✨",
            "🎊",
            "🫶",
            "🥹"
        ];

        for (let i = 0; i < 35; i++) {

            const confetti =
                document.createElement("div");

            confetti.textContent =
                emojis[
                    Math.floor(
                        Math.random() *
                        emojis.length
                    )
                ];

            confetti.style.position = "fixed";

            confetti.style.left =
                Math.random() * 100 + "vw";

            confetti.style.top = "-40px";

            confetti.style.fontSize =
                (15 + Math.random() * 25) + "px";

            confetti.style.zIndex = "9999";

            confetti.style.pointerEvents =
                "none";

            const duration =
                2.5 + Math.random() * 3;

            confetti.style.transition =
                `transform ${duration}s linear, opacity ${duration}s`;

            document.body.appendChild(confetti);


            setTimeout(() => {

                confetti.style.transform =
                    `translateY(110vh) rotate(${Math.random() * 720}deg)`;

                confetti.style.opacity = "0";

            }, 50);


            setTimeout(() => {

                confetti.remove();

            }, duration * 1000 + 500);

        }

    }

});