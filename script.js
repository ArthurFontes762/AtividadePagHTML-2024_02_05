// Função para exibir o card de desconto promocional e atualizar seu conteúdo com base no produto selecionado
function showModal(price, productName) {
    var modal = document.getElementById("myModal");
    var discountMessage = document.getElementById("discountMessage");
    var finalPrice = document.getElementById("finalPrice");
    
    // Exibe o modal
    modal.style.display = "block";
    
    // Atualiza o conteúdo do card de desconto promocional
    discountMessage.innerText = "Você selecionou o produto: " + productName;
    
    // Define o preço original no campo de preço final
    finalPrice.innerText = "Preço Final: R$ " + price.toFixed(2);

    // Define o valor do desconto inicialmente como 0
    var discount = 0;
    
    // Event listener para alterações no select de desconto
    var discountSelect = document.getElementById("discountSelect");
    discountSelect.addEventListener("change", function() {
        discount = parseInt(discountSelect.value); // Obtém o valor do desconto selecionado
        
        // Calcula o preço final com o desconto aplicado
        var discountedPrice = price - (price * discount) / 100;
        
        // Atualiza o preço final exibido
        finalPrice.innerText = "Preço Final: R$ " + discountedPrice.toFixed(2);
    });
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("myModal");
    
    // Fecha a janela modal
    modal.style.display = "none";
}

// Função para aplicar o desconto e fechar o modal
function applyDiscount() {
    var modal = document.getElementById("myModal");
    
    // Fecha a janela modal
    modal.style.display = "none";
}
