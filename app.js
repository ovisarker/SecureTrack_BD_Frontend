document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'bg-white p-4 relative group cursor-pointer'; // Clean white background like screenshot
                
                // Sale Badge HTML
                let saleBadge = product.is_sale ? `<div class="absolute top-2 left-2 bg-brandRed text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full z-10 shadow-md">Sale!</div>` : '';
                
                // Pricing HTML (showing strikethrough if on sale)
                let priceHtml = '';
                if (product.regular_price) {
                    priceHtml = `<span class="text-gray-400 line-through text-sm mr-2">৳ ${product.regular_price.toLocaleString()}</span>`;
                }
                priceHtml += `<span class="text-black font-extrabold text-lg">৳ ${product.price.toLocaleString()}</span>`;

                card.innerHTML = `
                    ${saleBadge}
                    <!-- 📷 Product Image -->
                    <div class="flex justify-center items-center h-48 mb-4 overflow-hidden">
                        <img src="${product.image}" alt="${product.name}" class="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-gray-800 mb-2 truncate">${product.name}</h3>
                        <div class="flex items-center">
                            ${priceHtml}
                        </div>
                    </div>
                `;
                
                // Add click event to redirect to details page
                card.addEventListener('click', () => {
                    window.location.href = 'details.html';
                });

                productList.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching products:", error);
            productList.innerHTML = '<p class="text-red-500 col-span-full text-center">প্রোডাক্ট লোড হতে সমস্যা হচ্ছে।</p>';
        });
});
