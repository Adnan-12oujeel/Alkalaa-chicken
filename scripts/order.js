const hotButtonsGroups = document.querySelectorAll(".hot-btns");

hotButtonsGroups.forEach(group => {
    const buttons = group.querySelectorAll(".hot-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
});

const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");

function clearPopupFields() {
    const inputs = popupOverlay.querySelectorAll("input");
    inputs.forEach(input => input.value = "");
}

closePopup.addEventListener("click", () => {
    clearPopupFields();
    popupOverlay.style.display = "none";
});


const orderButtons = document.querySelectorAll(".order-btn-card");

orderButtons.forEach(orderBtn => {
    orderBtn.addEventListener("click", function () {
        const card = this.closest(".card");
        const mealName = card.querySelector(".meal-name").textContent.trim();
        const selectedHeat = card.querySelector(".hot-btn.active");
        const heatValue = selectedHeat ? selectedHeat.dataset.value : "غير محدد";

        document.getElementById("popupMeal").value = mealName;
        document.getElementById("popupHeat").value = heatValue;

        popupOverlay.style.display = "flex";
    });
});

document.getElementById("popupOrderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const meal = document.getElementById("popupMeal").value;
    const heat = document.getElementById("popupHeat").value;
    const phone = this.querySelector("input[placeholder='أدخل رقم الهاتف']").value;
    const name = this.querySelector("input[placeholder='أدخل اسمك']").value;

    document.getElementById("mealTypeInput").value = meal;
    document.getElementById("heatLevelInput").value = heat;
    const orderForm = document.getElementById("orderForm");
    orderForm.querySelector("input[placeholder='أدخل رقم الهاتف']").value = phone;
    orderForm.querySelector("input[placeholder='أدخل اسمك كامل']").value = name;

    const mealSelect = document.getElementById("mealSelect");
    for (let i = 0; i < mealSelect.options.length; i++) {
        if (mealSelect.options[i].text === meal) {
            mealSelect.selectedIndex = i;
            break;
        }
    }

    clearPopupFields();
    popupOverlay.style.display = "none";

    document.getElementById("order-title").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const phone = this.querySelector("input[placeholder='أدخل رقم الهاتف']").value;
    const name = this.querySelector("input[placeholder='أدخل اسمك كامل']").value;
    const address = this.querySelector("textarea").value;
    const quantity = this.querySelector("input[type='number']").value;
    const mealType = document.getElementById("mealTypeInput").value;
    const heatLevel = document.getElementById("heatLevelInput").value;
    const selectedMeal = document.getElementById("mealSelect").value;

    const shopNumber = "+212717624661";

    const message =
        `🧾 *طلب جديد*\n\n` +
        `🍗 *نوع الوجبة:* ${mealType}\n` +
        `🔥 *درجة الحرارة:* ${heatLevel}\n` +
        `🍽️ *الوجبة المختارة:* ${selectedMeal}\n` +
        `🔢 *الكمية:* ${quantity}\n\n` +
        `👤 *الاسم:* ${name}\n` +
        `📞 *الهاتف:* ${phone}\n` +
        `📍 *العنوان:* ${address}\n\n` +
        `🚚 يرجى تأكيد الطلب وشكراً لك ❤`;

    const whatsappURL = `https://wa.me/${shopNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
});



function goToForm() {
    document.getElementById("orderForm").scrollIntoView({ behavior: "smooth" });
}



window.addEventListener("DOMContentLoaded", () => {
    const data = localStorage.getItem("orderData");
    if (data) {
        const order = JSON.parse(data);

        document.querySelector("#orderForm input[placeholder='أدخل رقم الهاتف']").value = order.phone;
        document.querySelector("#orderForm input[placeholder='أدخل اسمك كامل']").value = order.name;

        document.getElementById("mealTypeInput").value = order.meal;
        document.getElementById("heatLevelInput").value = order.heat;

        const select = document.getElementById("mealSelect");
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].text === order.meal) {
                select.selectedIndex = i;
                break;
            }
        }

        localStorage.removeItem("orderData");

        document.getElementById("order-title").scrollIntoView({ behavior: "smooth" });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const data = localStorage.getItem("orderData");
    if(!data) return;

    const order = JSON.parse(data);

    document.querySelector("#orderForm input[placeholder='أدخل رقم الهاتف']").value = order.phone;
    document.querySelector("#orderForm input[placeholder='أدخل اسمك كامل']").value = order.name;

    document.querySelector("#mealSelect").value = order.meal;

    document.getElementById("heatLevelInput").value = order.heat;
});
