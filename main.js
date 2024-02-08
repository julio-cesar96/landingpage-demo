
    document.addEventListener("DOMContentLoaded", function() {
        // Dados dos depoimentos
        const testimonials = [
            { name: "João Silva", comment: "O Ebook me deu um novo entendimento sobre opções binárias. Recomendo!" },
            { name: "João Silva", comment: "O Ebook me deu um novo entendimento sobre opções binárias. Recomendo!" },
            { name: "João Silva", comment: "O Ebook me deu um novo entendimento sobre opções binárias. Recomendo!" },
            { name: "João Silva", comment: "O Ebook me deu um novo entendimento sobre opções binárias. Recomendo!" },
            { name: "João Silva", comment: "O Ebook me deu um novo entendimento sobre opções binárias. Recomendo!" },
            // Adicione mais depoimentos aqui
        ];

        // Referências aos elementos do carrossel
        const carousel = document.getElementById("testimonials-carousel");
        const prevButton = document.getElementById("prev-testimonial");
        const nextButton = document.getElementById("next-testimonial");

        // Variáveis para controle do estado do carrossel
        let currentIndex = 0;
        const numTestimonials = testimonials.length;

        // Função para exibir os depoimentos
        function displayTestimonials() {

        // Verifica se o elemento do carrossel existe
        if (!carousel) return;
        
            carousel.innerHTML = ""; // Limpa os depoimentos anteriores
            testimonials.forEach((testimonial, index) => {
                const testimonialElement = document.createElement("div");
                testimonialElement.classList.add("carousel-item", "bg-white", "shadow", "rounded-lg", "p-6", "text-center");
                testimonialElement.innerHTML = `
                    <p class="text-gray-700 mb-3">${testimonial.comment}</p>
                    <p class="text-gray-900 font-semibold">${testimonial.name}</p>
                `;
                carousel.appendChild(testimonialElement);
            });
            updateCarouselWidth(); // Adicionado
        }

        // Função para ajustar a largura do carrossel
        function updateCarouselWidth() {
            const itemWidth = carousel.offsetWidth / 3; // Divide por 3 para exibir 3 itens por vez
            carousel.querySelectorAll('.carousel-item').forEach(item => {
                item.style.minWidth = `${itemWidth}px`;
            });
            const innerWidth = numTestimonials * itemWidth;
            carousel.querySelector('.carousel-inner').style.width = `${innerWidth}px`;
        }

        // Função para avançar para o próximo depoimento
        function nextTestimonial() {
            currentIndex = (currentIndex + 1) % numTestimonials;
            updateCarouselPosition();
        }

        // Função para retroceder para o depoimento anterior
        function prevTestimonial() {
            currentIndex = (currentIndex - 1 + numTestimonials) % numTestimonials;
            updateCarouselPosition();
        }

        // Função para atualizar a posição do carrossel
        function updateCarouselPosition() {
            const offset = -currentIndex * (carousel.offsetWidth / 3); // Ajusta o offset de acordo com o número de depoimentos visíveis
            carousel.querySelector('.carousel-inner').style.transform = `translateX(${offset}px)`;
        }

        // Verifica se os botões de navegação existem antes de adicionar eventos
        if (prevButton && nextButton) {
            // Adicionar eventos aos botões de navegação
            prevButton.addEventListener("click", prevTestimonial);
            nextButton.addEventListener("click", nextTestimonial);
        }

        // Chamar a função para exibir os depoimentos
        displayTestimonials();
    });
