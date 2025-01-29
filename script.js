document.addEventListener("DOMContentLoaded", () => {
  const popularItems = [
    {
      name: "Home made pizza",
      price: "₹190",
      rating: 4.7,
      time: "50-79 min",
      image: "pizza.png",
    },
    {
      name: "Tandoori Chicken",
      price: "₹184",
      rating: 4.3,
      time: "15-29 min",
      image: "chicken_tandoor.png",
    },
    {
      name: "Chilli Chicken",
      price: "₹116",
      rating: 4.1,
      time: "30-40 min",
      image: "chilli_chicken.png",
    },
    {
      name: "Home Made Pizza",
      price: "₹120",
      rating: 4.1,
      time: "30-40 min",
      image: "Pizza1.png",
    },
    {
      name: "Home Made Pizza",
      price: "₹116",
      rating: 4.1,
      time: "30-40 min",
      image: "Pizza2.png",
    },
  ];

  const itemsContainer = document.getElementById("popular-items");

  popularItems.forEach((item) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    slide.innerHTML = `
        <div class="item-card2">
          <img src="${item.image}" alt="${item.name}">
          <div class="item-card-content">
            <p class="item-title">${item.name}</p>
            <p class="item-price">${item.price}</p>
            <p><span class="item-rating">⭐ ${item.rating}</span> <span class="item-time">${item.time}</span></p>
            <div class="item-actions">
              <div class="counter">
                <button class="decrement">-</button>
                <span class="count">1</span>
                <button class="increment">+</button>
              </div>
            </div>
          </div>
        </div>
      `;

    itemsContainer.appendChild(slide);
  });

  // Swiper.js Initialization
  new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Counter functionality
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("increment")) {
      const countElement = e.target.previousElementSibling;
      countElement.textContent = parseInt(countElement.textContent) + 1;
    } else if (e.target.classList.contains("decrement")) {
      const countElement = e.target.nextElementSibling;
      const currentValue = parseInt(countElement.textContent);
      if (currentValue > 1) {
        countElement.textContent = currentValue - 1;
      }
    }
  });

  // Kitchen Section Data Mapping
  const kitchenData = [
    {
      name: "Home made pizza",
      price: "₹190",
      rating: 4.7,
      time: "50-79 min",
      image: "pizza.png",
      discount: "50%",
    },
    {
      name: "Home made pizza",
      price: "₹123",
      rating: 4.7,
      time: "50-79 min",
      image: "pizza2.png",
      discount: "20%",
    },
    {
      name: "Home made pizza",
      price: "₹190",
      rating: 4.7,
      time: "50-79 min",
      image: "pizza6.png",
      discount: "20%",
    },
    {
      name: "Home made pizza",
      price: "₹190",
      rating: 4.7,
      time: "50-79 min",
      image: "pizza7.png",
      discount: "50%",
    },
    {
      name: "Home made pizza",
      price: "$19",
      rating: 4.7,
      time: "50-79 min",
      image: "pizza3.png",
      discount: "20%",
    },
    {
      name: "Home made pizza",
      price: "₹190",
      rating: 4.7,
      time: "50-79 min",
      image: "pizza4.png",
      discount: "20%",
    },
    {
      name: "Home made pizza",
      price: "₹190",
      rating: 4.7,
      time: "50-79 min",
      image: "pizza5.png",
      discount: "50%",
    },
    {
      name: "Home made pizza",
      price: "₹190",
      rating: 4.7,
      time: "50-79 min",
      image: "pizza1.png",
      discount: "20%",
    },
    {
      name: "Home made pizza",
      price: "$19",
      rating: 4.7,
      time: "50-79 min",
      image: "pizza.png",
      discount: "50%",
    },
    {
      name: "Home made pizza",
      price: "₹123",
      rating: 4.7,
      time: "50-79 min",
      image: "pizza2.png",
      discount: "20%",
    },
    {
      name: "Home made pizza",
      price: "₹190",
      rating: 4.7,
      time: "50-79 min",
      image: "pizza6.png",
      discount: "20%",
    },
    {
      name: "Home made pizza",
      price: "₹190",
      rating: 4.7,
      time: "50-79 min",
      image: "pizza7.png",
      discount: "50%",
    },
  ];

  const kitchenContainer = document.getElementById("kitchen-section");

  kitchenData.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("kitchen-card");

    card.innerHTML = `
      <div class="item-card2">
        <div class="discountkt2">${item.discount}</div>
        <img src="${item.image}" alt="${item.name}">
        <div class="item-card-content">
          <div class="item_TP">
            <span class="item-title">${item.name}</span>
            <span class="item-price">${item.price}</span>
          </div>
          <div class="item_lst">
            <div class="item_RT">
            <div class="item-rating">
              <img src="rating.png" alt="Star Icon" class="star-icon" />
              <span class="rating-value">${item.rating}</span>
            </div> 
            <div class="timekt2">
              <span class="itm-timekt2">50-79 min</span>
            </div></div>
            <div class="item-actionskt">
              <button class="add-buttonkt">+</button>
            </div>
          </div>
        </div>
      </div>
    `;

    kitchenContainer.appendChild(card);
  });

  // Add item interaction
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-button")) {
      alert("Item added to your list!");
    }
  });
});
