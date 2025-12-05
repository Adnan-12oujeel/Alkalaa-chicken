document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".hot-btns").forEach(group => {
        const buttons = group.querySelectorAll(".hot-btn");

        buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                buttons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
            });
        });
    });

    document.querySelectorAll(".order-btn-card").forEach(btn => {
        btn.addEventListener("click", () => {

            const card = btn.closest(".card");

            const mealName = card.querySelector(".meal-name").textContent.trim();
            const hot = card.querySelector(".hot-btn.active").dataset.value;

            const mealSelect = document.getElementById("prodMeal");
            mealSelect.innerHTML = `<option selected>${mealName}</option>`;

            document.getElementById("prodHeat").value = hot;

            document.getElementById("prodPopup").style.display = "flex";
        });
    });

    document.querySelector(".close-btn").onclick = () => {
        document.getElementById("prodPopup").style.display = "none";
    };

    document.getElementById("prodPopupForm").addEventListener("submit", (e) => {
        e.preventDefault();

        localStorage.setItem("orderData", JSON.stringify({
            meal: document.getElementById("prodMeal").value,
            heat: document.getElementById("prodHeat").value,
            phone: document.getElementById("prodPhone").value,
            name: document.getElementById("prodName").value
        }));

        window.location.href = "index.html#order-title";
    });

});



