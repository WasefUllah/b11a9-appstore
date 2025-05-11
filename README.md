# AppStore - React App

This is a simple React app designed to showcase a variety of apps. It includes app details, ratings, reviews, and installation features. It also has responsive design that works well on all screen sizes, ensuring a smooth experience on mobile, tablet, and desktop.

## Features

- **App Display**: Displays a list of apps with their thumbnail, rating, downloads, and category.
- **App Details Page**: Click on an app to see its details, including the description, features, and user reviews.
- **Install/Uninstall**: Users can "install" or "uninstall" an app. Once installed, users can leave reviews and ratings.
- **Rating System**: Users can rate apps using stars and write reviews.
- **Responsive Design**: The app is fully responsive, adjusting layout and size for different screen sizes (mobile, tablet, desktop).

## Technologies Used

- **React**: For building the front-end components and managing the state.
- **Tailwind CSS**: For styling and responsive design.
- **React Router**: For navigation between different pages.
- **React Icons**: For displaying icons like stars and user profile images.
- **React Toastify**: For showing toast notifications for user interactions.

## How to Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/app-store.git
   cd app-store
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the app**:

   ```bash
   npm start
   ```

   This will start the app in your browser on `http://localhost:3000`.

## Directory Structure

```bash
src/
├── components/
│   ├── AppCard.js         # Component for displaying app cards on the homepage
│   ├── AppDetails.js      # Component for displaying detailed info about a single app
│   ├── Review.js          # Component for displaying individual reviews
├── data/                  # Folder containing mock data (app information)
├── App.js                 # Main component that renders the app
├── index.js               # Entry point for the React app
└── styles.css             # Tailwind configuration and custom styles
```

## Project Setup

### Install Dependencies

- You’ll need **Node.js** and **npm** installed to run the project. You can download it from [here](https://nodejs.org/).

### Tailwind CSS Setup

This project uses **Tailwind CSS** for styling. Tailwind is configured in the `tailwind.config.js` file. If you need to customize it, you can adjust the settings there.

### React Router Setup

React Router is used for navigating between the homepage and app details page. The app uses dynamic routes to display details of each app based on its unique ID.

## Contributing

Feel free to fork this project, open issues, and submit pull requests if you'd like to contribute to it!

### Found a bug?

If you encounter any issues, please open a new issue on the GitHub repository. Make sure to include steps to reproduce the problem.

## License

This project is open source and available under the MIT License.
