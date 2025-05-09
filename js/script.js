{

    const init = () => {
        const form = document.getElementById("form");
        const inputDimension = document.getElementById("inputDimension");
        const selectedScale = document.getElementById("selectedScale");
        const resultAfterRescaling = document.getElementById("resultAfterRescaling");
        const resetButton = document.getElementById("resetButton");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const userInputDimension = inputDimension.value;
            const userSelectedScale = selectedScale.value;

            let rescaling;

            if (userSelectedScale === "h0") {
                rescaling = userInputDimension * 1000 / 87;
            } else if (userSelectedScale === "tt") {
                rescaling = userInputDimension * 1000 / 120;
            } else if (userSelectedScale === "nn") {
                rescaling = userInputDimension * 1000 / 160;
            }

            resultAfterRescaling.textContent = rescaling.toFixed(0);

        });

        resetButton.addEventListener("click", function () {
            resultAfterRescaling.textContent = "0";
        });

    };

    init();

};