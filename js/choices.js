document.addEventListener("DOMContentLoaded", function() {
    const selector = document.querySelector(".choices")


    const choices = new Choices(document.querySelector(".choices"), {
        searchEnabled: false,
        classNames: {
            containerOuter: 'choices choices1',
        },
    });

});