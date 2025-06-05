
# 🧭 Pokémon Search App

A simple web application that allows users to search for Pokémon by name or ID, built using the [PokéAPI](https://pokeapi.co/). 🔍

## ✨ Features

- 🔎 **Search Functionality**: Users can search for Pokémon by entering their name or ID.
- 📊 **Pokémon Details**: Displays information such as base stats (HP, Attack, Defense, etc.), types, and images.
- 📱 **Responsive Design**: Optimized for various screen sizes and devices.

## 🛠️ Technologies Used

- 🧱 **HTML5**: Markup structure.
- 🎨 **CSS3**: Styling and layout.
- ⚙️ **JavaScript**: Application logic and interaction with the PokéAPI.
- 🐾 **PokéAPI**: Source of Pokémon data.

### 🧪 Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/kalenyng/Pokemon-Search-App.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd Pokemon-Search-App
   ```

3. **Open `index.html` in Your Browser**:

   - You can directly open the `index.html` file in your preferred web browser. 🌐
   - Alternatively, you can serve the project using a local development server:

     ```bash
     npm install -g live-server
     live-server
     ```

     This will start a local server and open the application in your default browser.

## 🚀 Usage

1. **Search for a Pokémon**:

   - Enter the name (e.g., "pikachu") or ID (e.g., "25") of a Pokémon into the search input field.
   - Click the "Search" button. 🔍

2. **View Pokémon Details**:

   - Upon a successful search, the application will display:
     - 📛 Pokémon's name and ID.
     - 📈 Base stats: HP, Attack, Defense, Special Attack, Special Defense, Speed.
     - 🌀 Types (e.g., Electric, Water).
     - 🖼️ Pokémon image.

3. **Error Handling**:

   - ⚠️ If the entered name or ID does not correspond to a valid Pokémon, an error message will be displayed.

## 📁 Project Structure

```
Pokemon-Search-App/
├── index.html
├── styles.css
├── script.js
└── README.md
```

- `index.html`: The main HTML file that structures the web page.
- `styles.css`: Contains the styling rules for the application.
- `script.js`: Handles the logic for fetching data from the PokéAPI and updating the DOM.
- `README.md`: This documentation file.

## 🤝 Contributing

Contributions are welcome! 🙌 If you have suggestions or improvements, feel free to fork the repository and submit a pull request.

## 🙏 Acknowledgments

- [PokéAPI](https://pokeapi.co/): The RESTful Pokémon API used for fetching Pokémon data.
