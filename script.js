let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
}

function toggleSearch() {
    const searchBox = document.getElementById("searchBox");
    searchBox.style.display =
        searchBox.style.display === "block" ? "none" : "block";
}

function searchSneakers() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let card of cards) {
        let name = card.getElementsByTagName("h3")[0].innerText.toLowerCase();
        card.style.display = name.includes(input) ? "block" : "none";
    }
}


