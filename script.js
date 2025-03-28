// Define an array of card data with features and icons
const cardData = [
    { 
        frontText: "Historial Jurídico", 
        features: ["Prendas", "Embargos", "Órdenes de Decomiso"],
        frontImg: "Images/Cards/Juridico.jpg", 
        backTitle: "Restricciones", 
        backText: "Te damos un resumen completo de todo lo que le ha pasado al vehículo legalmente. Y si tiene alguna medida cautelar, o embargo que no permita el traspaso.",  
        backImg: "https://via.placeholder.com/200x300/e74c3c/FFFFFF?text=Más+Detalles",
        icon: "Images/Cards/CardIcons/Hammer.png" // Unicode icon (can be replaced with an <img> tag)
    },
    { 
        frontText: "Propietarios", 
        features: ["Lista de Históricos"],
        frontImg: "Images/Cards/Propietarios.jpg", 
        backTitle: "Propietarios", 
        backText: "Te contamos cuántos propietarios ha tenido el vehículo y el tiempo que estuvo con cada uno.",  
        backImg: "https://via.placeholder.com/200x300/8e44ad/FFFFFF?text=Dueños",
        icon: "Images/Cards/CardIcons/Hammer.png"
    },
    { 
        frontText: "Accidentes", 
        features: ["Reportes Policía Nacional", "Gravedad", "Víctimas/Heridos"],
        frontImg: "Images/Cards/Historial de Accidentes.jpg", 
        backTitle: "Accidentes Registrados", 
        backText: "Incluye un historial de los accidentes reportados por policía nacional, junto con su gravedad y si hubo víctimas fatales o heridos.",  
        backImg: "https://via.placeholder.com/200x300/d35400/FFFFFF?text=Accidentes",
        icon: "Images/Cards/CardIcons/Accidentes.png"
    },
    { 
        frontText: "Kilometraje", 
        features: ["Comparación del uso de tu carro frente al mercado"],
        frontImg: "Images/Cards/Kilometraje.jpg", 
        backTitle: "Kilometraje", 
        backText: "Te damos una comparación con los otros vehículos iguales del mercado con respecto al kilometraje que tiene el vehículo.",  
        backImg: "https://via.placeholder.com/200x300/d35400/FFFFFF?text=Accidentes",
        icon: "Images/Cards/CardIcons/Kilometraje.png"
    },
    { 
        frontText: "Financiación & Asegurabilidad", 
        features: ["Verificación","Opciones disponibles para tí"],
        frontImg: "Images/Cards/Financiacion y asegurabilidad.jpg", 
        backTitle: "Financiación & Asegurabilidad", 
        backText: "Te contamos si el vehículo es financiable y asegurable. También te mostramos opciones de financiación ",  
        backImg: "https://via.placeholder.com/200x300/d35400/FFFFFF?text=Accidentes",
        icon: "Images/Cards/CardIcons/Financiacion.png"
    },
    { 
        frontText: "Valor de Venta", 
        features: ["Con la última información del mercado"],
        frontImg: "Images/Cards/Valor de Venta.jpeg", 
        backTitle: "Mercado y Valor", 
        backText: "Te contamos precios aproximados de venta basándonos en ofertas publicadas en el mercado.",  
        backImg: "https://via.placeholder.com/200x300/d35400/FFFFFF?text=Accidentes",
        icon: "Images/Cards/CardIcons/Valor.png"
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
            <div class="card-front" style="background-image: url('Images/Cards/Filtro Gris.png'), url('${card.frontImg}');">
                <h3>${card.frontText}</h3>
                <ul class="features-list">
                    ${featureList}
                </ul>
            </div>
            
            <!-- Back Side -->
            <div class="card-back" style="background-image: url('${card.backImg}');">
                <img src="${card.icon}"class="icon">
                <h3><strong>${card.backTitle}</strong></h3>
                <a style="font-weight: lighter;">${card.backText}</a>
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