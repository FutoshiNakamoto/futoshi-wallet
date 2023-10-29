document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tabs button");
    const transactionTabs = document.querySelectorAll(".transaction-type");

    tabButtons.forEach((button) => {
        button.addEventListener("click", function () {
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
            const tabName = button.textContent.toLowerCase();
            transactionTabs.forEach((tab) => {
                tab.parentElement.style.display = "none";
                if (tab.textContent.toLowerCase() === tabName) {
                    tab.parentElement.style.display = "flex";
                }
            });
        });
    });
});
