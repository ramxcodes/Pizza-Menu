# 🍕 Pizza Dot Co. React App

**Pizza Dot Co.** is a fun and interactive web application showcasing a mock pizzeria menu. This project was created as a lighthearted exercise in modern front-end development using React. While simple and playful, it demonstrates solid technical concepts for building modular, reusable, and component-based user interfaces.

<img src='https://raw.githubusercontent.com/ramxcodes/Pizza-Menu/refs/heads/main/public/Preview.png'> <br> <br>

####  🛩️ *Live Demo* : https://pizza-menu-ochre.vercel.app

## Features
- **🍽️ Dynamic Menu Display**: A menu rendered dynamically from a data array, featuring pizza options with details such as name, ingredients, price, and availability.
- **🛠️ Component-based Architecture**: The app is composed of modular, reusable components like `Header`, `Menu`, `Pizza`, and `Footer`.
- **🔄 Conditional Rendering**: Smart rendering that adapts based on state (e.g., sold-out status of menu items).
- **⏰ Time-based Footer**: A footer that dynamically displays if the restaurant is open or closed based on the current time.
- **🎨 CSS Styling**: Clean and simple UI styling with `index.css` for an elegant user experience.

## Concepts and Technologies Used
This project uses several modern web development concepts and technologies:

### 1. **⚛️ React Functional Components**
   - Leveraging React's functional components to create self-contained, reusable UI elements.
   - Ensures a modular and maintainable codebase.

### 2. **📝 JSX (JavaScript XML)**
   - Using JSX for writing component structure, allowing the combination of HTML and JavaScript for readability.

### 3. **📦 Props and State Management**
   - Props are utilized for passing data between components, ensuring data flow and component communication.

### 4. **🔀 Conditional Rendering**
   - Conditional logic for displaying different UI states (e.g., open/closed messages and handling sold-out pizzas).

### 5. **📄 Array Mapping**
   - Using JavaScript’s `map()` method to dynamically iterate and render a list of pizza components.

### 6. **💅 CSS Styling**
   - Class-based styling for a neat and visually appealing interface.

### 7. **🕰️ Date and Time Handling**
   - Using the `Date` object to determine and display the current restaurant status in the `Footer` component.

### 8. **⚡ Vite for React**
   - Developed using **Vite** for an optimized, fast development experience with lightning-fast HMR (Hot Module Replacement).

### 9. **🔧 Project Structure**
   - **`components` Directory**: Contains all reusable component files like `Header`, `Menu`, `Footer`, and `Pizza`.
   - **`App.jsx`**: The main entry file that assembles the components and structures the application.

## How to Run This Project
1. **Clone the repository**:
   ```bash
   git clone https://github.com/ramxcodes/Pizza-Menu.git
   cd Pizza-Menu
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## Conclusion
**Pizza Dot Co.** is not only a fun project but also a demonstration of modern web development techniques with React. It incorporates fundamental concepts such as component-based architecture, JSX, props, and conditional rendering, making it a great reference for beginners and intermediate developers looking to enhance their skills. 🍕✨
