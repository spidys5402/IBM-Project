// Logic to populate details.html
window.onload = function () {
    // Determine the active item based on query param
    const params = new URLSearchParams(window.location.search);
    const shopId = params.get("id");

    const activeData = foodCourtsData[shopId];

    if (!activeData) {
        // Fallback or error state
        document.getElementById('details-content-wrapper').innerHTML = `
            <div style="text-align:center; padding: 100px;">
                <h2>Food Court not found!</h2>
                <p>Please return to the <a href="index.html" style="color:red;">Home Page</a> and try again.</p>
            </div>
        `;
        return;
    }

    // Populate Hero Section
    document.title = activeData.name + " | Fuudiz";
    document.getElementById("hero-image").src = activeData.image;
    document.getElementById("hero-image").alt = activeData.name;
    document.getElementById("shop-category").innerText = activeData.category;
    document.getElementById("shop-name").innerText = activeData.name;
    document.getElementById("shop-address-short").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${activeData.address}`;
    document.getElementById("shop-timing-short").innerHTML = `<i class="fa-regular fa-clock"></i> Today open from ${activeData.timings}`;

    // Populate About
    document.getElementById("about-text").innerText = activeData.about;

    // Populate Menu
    const menuContainer = document.getElementById("menu-list");
    menuContainer.innerHTML = "";
    activeData.menu.forEach(item => {
        const sizeHtml = item.size ? `<span class="size">(${item.size})</span>` : "";
        const li = document.createElement("li");
        li.className = "menu-item";
        li.innerHTML = `
            <div class="item-info">
            <h3>${item.name}</h3>
            <p class="item-desc">${item.desc}</p>
            </div>
            <div class="item-price">
            <span class="price">${item.price}</span>${sizeHtml}
            </div>
        `;
        menuContainer.appendChild(li);
    });

    // Populate Timings List (Mocking 7 days based on the single timing string)
    const timingContainer = document.getElementById("timing-list");
    timingContainer.innerHTML = "";
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    days.forEach(day => {
        const li = document.createElement("li");
        if (day === "Sunday") li.className = "today"; // Just mocking 'today' for visual effect
        li.innerHTML = `<span>${day}</span> <span>${activeData.timings}</span>`;
        if (day === "Sunday" && activeData.timings.includes("09:00 PM")) li.innerHTML = `<span>${day}</span> <span>Closed</span>`; // Some arbitrary logic
        timingContainer.appendChild(li);
    });

    // Populate Location & Map
    document.getElementById("full-address").innerText = activeData.address;
    document.getElementById("map-iframe").src = activeData.map_url;
};