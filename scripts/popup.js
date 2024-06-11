function initiate_eventlistener_popup() {
    // make the price table visible by adding the class active
    // to the background_popup if the price button is clicked
    dom.price_button.addEventListener("click", () => {
        dom.popup_background.setAttribute("id", "popup_active");
    });

    // if the user clicks anywhere except on the table,
    // it hides it
    dom.popup_background.addEventListener("click", (event) => {
        if (event.target === dom.popup_background) {
            dom.popup_background.removeAttribute("id");
        }
    })

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            dom.popup_background.removeAttribute("id");
        }
    })
}