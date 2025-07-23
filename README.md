# Dynamic Web App with Express.js

A dynamic web application built with **Node.js**, **Express.js**, and **EJS** as the templating engine. This app demonstrates basic routing, form handling, serving static files, and rendering dynamic views.

## 🚀 Features

- 📦 Node.js + Express.js server
- 🖼️ EJS templating engine
- 🌐 Static file serving
- 📄 Dynamic routing
- 📝 Form handling via POST request
- ❌ Custom 404 page

## 📁 Project Structure

```
dynamic-web-express/
├── public/             # Static assets (CSS, JS, images)
├── views/              # EJS templates (index.ejs, about.ejs, users.ejs)
├── app.js              # Main server file
└── package.json        # NPM configuration
```

## 📦 Dependencies

- [express](https://www.npmjs.com/package/express)
- [ejs](https://www.npmjs.com/package/ejs)

Install them with:

```bash
npm install express ejs
```

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/charan0617/dynamic-web-express.js.git
   ```
2. Navigate into the project folder:
   ```bash
   cd dynamic-web-express.js
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## ▶️ Running the App

Start the server:

```bash
node app.js
```

Open your browser and visit:  
**[http://localhost:3000](http://localhost:3000)**

## 🌐 Available Routes

| Route         | Method | Description                          |
|---------------|--------|--------------------------------------|
| `/`           | GET    | Home page                            |
| `/about`      | GET    | About page                           |
| `/users`      | GET    | Displays list of users               |
| `/submit`     | POST   | Receives form data (name, age)       |
| Any undefined | GET    | Custom 404 "Page Not Found" response |

## 📝 Sample POST form (example for `/submit`)

Here’s a basic HTML form you can place in `index.ejs` or a separate view:

```html
<form action="/submit" method="POST">
  <input type="text" name="name" placeholder="Enter name" required />
  <input type="number" name="age" placeholder="Enter age" required />
  <button type="submit">Submit</button>
</form>
```

## ❌ 404 Handling

Any route not defined will return a plain-text "page not foud" message with HTTP status `404`.

> Tip: You can improve this by rendering a custom `404.ejs` page.

## 🙋‍♂️ Author

**Charan CK**  
GitHub: [@charan0617](https://github.com/charan0617)

## 📄 License

This project is licensed under the [MIT License](LICENSE).
