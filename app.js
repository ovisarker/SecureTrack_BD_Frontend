document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    // Fetching data directly from products.json
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                // Creating a product card dynamically
                const card = document.createElement('div');
                card.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100';
                
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="w-full h-56 object-cover">
                    <div class="p-5">
                        <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">${product.category}</span>
                        <h3 class="text-xl font-semibold mt-1 text-gray-800">${product.name}</h3>
                        <p class="text-brandRed font-bold text-xl mt-3">৳ ${product.price.toLocaleString()}</p>
                        
                        <button class="mt-5 w-full bg-brandDark hover:bg-black text-white py-2.5 rounded-lg font-semibold transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                `;
                productList.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching products:", error);
            productList.innerHTML = '<p class="text-red-500 col-span-full text-center">প্রোডাক্ট লোড হতে সমস্যা হচ্ছে।</p>';
        });
});
