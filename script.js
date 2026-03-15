function filterProducts(category) {

    let cards = document.querySelectorAll(".card")

    cards.forEach(card => {

        card.style.display = "none"

        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "block"
        }

    })

}

function toggleMenu() {

    let nav = document.getElementById("navMenu")

    nav.classList.toggle("active")

}