document.getElementById('search-button').addEventListener('click', async function() {
    const searchInput = document.getElementById('search-input').value.trim();
    const typesElement = document.getElementById('types');
    const spriteElement = document.getElementById('sprite');
    
    // Clear previous data
    document.getElementById('pokemon-name').textContent = '';
    document.getElementById('pokemon-id').textContent = '';
    document.getElementById('weight').textContent = '';
    document.getElementById('height').textContent = '';
    document.getElementById('hp').textContent = '';
    document.getElementById('attack').textContent = '';
    document.getElementById('defense').textContent = '';
    document.getElementById('special-attack').textContent = '';
    document.getElementById('special-defense').textContent = '';
    document.getElementById('speed').textContent = '';
    typesElement.innerHTML = '';  // Clear previous types
    spriteElement.src = '';       // Clear previous sprite
    
    // Check if input is "Red"
    if (searchInput.toLowerCase() === 'red') {
        alert('Pokémon not found');
        return;
    }

    // API URL for Pokémon search
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`;
    
    try {
        // Fetch Pokémon data from the API
        const response = await fetch(apiUrl);
        
        // If the response is not OK, handle the error
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }

        const data = await response.json();
        
        // Fill in the Pokémon details
        document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
        document.getElementById('pokemon-id').textContent = `#${data.id}`;
        document.getElementById('weight').textContent = `Weight: ${data.weight}`;
        document.getElementById('height').textContent = `Height: ${data.height}`;
        document.getElementById('hp').textContent = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
        document.getElementById('attack').textContent = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
        document.getElementById('defense').textContent = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
        document.getElementById('special-attack').textContent = data.stats.find(stat => stat.stat.name === 'special-attack').base_stat;
        document.getElementById('special-defense').textContent = data.stats.find(stat => stat.stat.name === 'special-defense').base_stat;
        document.getElementById('speed').textContent = data.stats.find(stat => stat.stat.name === 'speed').base_stat;

        // Display the sprite
        spriteElement.src = data.sprites.front_default;
        
        // Display Pokémon types
        data.types.forEach(typeInfo => {
            const typeElement = document.createElement('span');
            typeElement.textContent = typeInfo.type.name.toUpperCase();
            typesElement.appendChild(typeElement);
        });

    } catch (error) {
        alert(error.message);
    }
});
