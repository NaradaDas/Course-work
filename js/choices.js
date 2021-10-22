document.addEventListener("DOMContentLoaded", function() {
    const selector = document.querySelector(".choices")

    const choices = new Choices(selector, {
        searchEnabled: false,
        classNames: {
            containerOuter: 'choices choices1',
        },
    });

    const choices2 = new Choices(document.querySelector(".choices2"), {
        searchEnabled: false,
        classNames: {
            containerOuter: 'choices choices2',
        },
    });
    const choices3 = new Choices(document.querySelector(".choices3"), {
        searchEnabled: false,
        classNames: {
            containerOuter: 'choices choices3',
        },
    });
    const choices4 = new Choices(document.querySelector(".choices4"), {
        searchEnabled: false,
        classNames: {
            containerOuter: 'choices choices4',
        },
    });
    const choices5 = new Choices(document.querySelector(".choices5"), {
        searchEnabled: false,
        classNames: {
            containerOuter: 'choices choices5',
        },
    });
    const choices6 = new Choices(document.querySelector(".choices6"), {
        searchEnabled: false,
        classNames: {
            containerOuter: 'choices choices6',
        },
    });
    const choices7 = new Choices(document.querySelector(".choices7"), {
        searchEnabled: false,
        classNames: {
            containerOuter: 'choices choices6',
        },
    });
});