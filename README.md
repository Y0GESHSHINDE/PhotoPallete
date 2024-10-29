
# 📸 PhotoPallete

PhotoPallete  is a photo categorization app that allows users to upload, organize, and delete photos within different categories. The app leverages Firebase for storage and database management, making it easy to perform CRUD operations on your photo collection.

---

## 🔥 Features

- **Upload Photos**: Easily upload images to Firebase Storage.
- **Categorize Photos**: Organize uploaded photos into specific categories.
- **Persistent Storage**: Photos and categories are stored in Firebase Firestore, enabling data persistence across sessions.
- **Delete Photos**: Remove any image from both Firebase Storage and the database.

---

## 🛠️ Tech Stack

- **React** - Frontend framework for building the user interface.
- **Firebase** - Used for authentication, storage, and database management.
- **Bootstrap** - Provides a responsive layout and styling.

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Firebase account set up.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/PhotoPallete .git
   cd PhotoPallete 
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project and set up Firebase Storage and Firestore.
   - Add a new web app to your Firebase project and copy the Firebase configuration.
   - Create a `.env` file at the root of your project and add the Firebase configuration:

   ```env
   REACT_APP_API_KEY=your_api_key
   REACT_APP_AUTH_DOMAIN=your_auth_domain
   REACT_APP_PROJECT_ID=your_project_id
   REACT_APP_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_APP_ID=your_app_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

---

## 📸 Usage

1. **Uploading Photos**: Select an image file and upload it to a category of your choice.
2. **Viewing Photos**: Uploaded photos are displayed in a grid format with their assigned categories.
3. **Deleting Photos**: Click the delete button below any photo to remove it from Firebase Storage and the database.

---

## 🔧 Code Overview

This app includes the following main components:

- **Photo Component**: Handles file upload, retrieval, and deletion.
- **Firebase Configuration**: Configures Firebase with the project’s settings to connect with Storage and Firestore.
- **CRUD Operations**: 
  - **Create**: Upload images to Firebase Storage.
  - **Read**: Fetch image URLs from Firestore for display.
  - **Delete**: Remove images from both Firebase Storage and Firestore.

---

## 🤝 Contributions

Contributions, issues, and feature requests are welcome! Feel free to check out the [issues page](https://github.com/YOUR_USERNAME/PhotoPallete /issues).

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
