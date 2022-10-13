const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const sidebarItems = document.querySelectorAll(".sidebar a:nth-child(n)");

// show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// change the active sidebar item
sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    sidebarItems.forEach((element) => {
      element.classList.remove("active"); //first, remove active class from all of the items
    });
    item.classList.add("active"); //then, add the active class to the item that clicked
  });
});

// change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// fill orders in table
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class=${
                  order.shipping === "Declined" ? "danger" : order.shipping === "Pending" ? "warning" : "success"
                }>${order.shipping}</td>
                <td class="primary">Details</td>
    `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
