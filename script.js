// Define an array of card data with features and icons
const cardData = [
    { 
        frontText: "Historial Jurídico", 
        features: ["Prendas", "Embargos", "Órdenes de Decomiso"],
        frontImg: "https://via.placeholder.com/200x300/3498db/FFFFFF?text=Historial+Jurídico", 
        backText: "Más detalles", 
        backImg: "https://via.placeholder.com/200x300/e74c3c/FFFFFF?text=Más+Detalles",
        icon: "⚖️" // Unicode icon (can be replaced with an <img> tag)
    },
    { 
        frontText: "Propietarios", 
        features: ["Lista de Históricos"],
        frontImg: "https://via.placeholder.com/200x300/2ecc71/FFFFFF?text=Propietarios", 
        backText: "Información de Dueños", 
        backImg: "https://via.placeholder.com/200x300/8e44ad/FFFFFF?text=Dueños",
        icon: "🏠"
    },
    { 
        frontText: "Historial de Accidentes", 
        features: ["Reportes Policía Nacional", "Gravedad", "Víctimas/Heridos"],
        frontImg: "https://via.placeholder.com/200x300/f1c40f/FFFFFF?text=Accidentes", 
        backText: "Accidentes Registrados", 
        backImg: "https://via.placeholder.com/200x300/d35400/FFFFFF?text=Accidentes",
        icon: "🚧"
    },
    { 
        frontText: "Kilometraje", 
        features: ["Comparación del uso de tu carro frente al mercado"],
        frontImg: "https://via.placeholder.com/200x300/f1c40f/FFFFFF?text=Accidentes", 
        backText: "Accidentes Registrados", 
        backImg: "https://via.placeholder.com/200x300/d35400/FFFFFF?text=Accidentes",
        icon: "🚧"
    },
    { 
        frontText: "Verificación & Opciones", 
        features: ["De financiación y asegurabilidad disponibles para tí"],
        frontImg: "https://via.placeholder.com/200x300/f1c40f/FFFFFF?text=Accidentes", 
        backText: "Accidentes Registrados", 
        backImg: "https://via.placeholder.com/200x300/d35400/FFFFFF?text=Accidentes",
        icon: "🚧"
    },
    { 
        frontText: "Valor de Venta", 
        features: ["Con la última información del mercado"],
        frontImg: "https://via.placeholder.com/200x300/f1c40f/FFFFFF?text=Accidentes", 
        backText: "Accidentes Registrados", 
        backImg: "https://via.placeholder.com/200x300/d35400/FFFFFF?text=Accidentes",
        icon: "🚧"
    }
];

// Get the container to hold cards
const container = document.getElementById("card-container");

// Loop through the card data and create cards dynamically
cardData.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    // Convert the features array into an unordered list
    const featureList = card.features.map(feature => `<li>${feature}</li>`).join("");

    cardElement.innerHTML = `
        <div class="card-inner">
            <!-- Front Side -->
            <div class="card-front" style="background-image: url('${card.frontImg}');">
                <h3>${card.frontText}</h3>
                <ul class="features-list">
                    ${featureList}
                </ul>
            </div>
            
            <!-- Back Side -->
            <div class="card-back" style="background-image: url('${card.backImg}');">
                <h3><span class="icon">${card.icon}</span> <strong>${card.backText}</strong></h3>
            </div>
        </div>
    `;

    container.appendChild(cardElement);
});
// User reviews array
const reviews = [
    {
        name: "Juan Pérez",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        comment: "Excelente servicio, muy rápido y confiable."
    },
    {
        name: "María González",
        img: "https://randomuser.me/api/portraits/women/45.jpg",
        comment: "Me encantó la atención al cliente, súper recomendable."
    },
    {
        name: "Carlos Rodríguez",
        img: "https://randomuser.me/api/portraits/men/60.jpg",
        comment: "Gran experiencia, definitivamente volveré a comprar aquí."
    }
];

// Select carousel container
const carousel = document.querySelector(".carousel");

// Insert reviews into the carousel
reviews.forEach((review, index) => {
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    if (index === 0) reviewElement.classList.add("active"); // Show the first review

    reviewElement.innerHTML = `
        <img src="${review.img}" alt="${review.name}" class="user-img">
        <div class="user-name">${review.name}</div>
        <p class="user-comment">"${review.comment}"</p>
    `;

    carousel.appendChild(reviewElement);
});

// Carousel functionality
let currentIndex = 0;
const reviewElements = document.querySelectorAll(".review");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Function to show a specific review
function showReview(index) {
    reviewElements.forEach((review, i) => {
        review.classList.remove("active");
        if (i === index) review.classList.add("active");
    });
}

// Next button click
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
});

// Previous button click
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
});

// Auto-play every 5 seconds (optional)
setInterval(() => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
}, 5000);