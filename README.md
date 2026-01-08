# 👗 Velvet Aura

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-8.0-green?style=for-the-badge&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**Velvet Aura - A premium, responsive e-commerce platform specializing in luxury lingerie and women's intimate apparel.**

🌐 **[Live Demo](https://lingerie-e-commerce.vercel.app/)**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [API Documentation](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Scripts](#-scripts)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About

This is a full-featured e-commerce platform built with modern web technologies, designed specifically for selling luxury lingerie and intimate apparel. The platform features a beautiful, responsive design with a focus on user experience and performance.

### Key Highlights

- 🛍️ **Complete E-Commerce Solution** - Product catalog, shopping cart, checkout, and order management
- 👤 **User Authentication** - Secure login, registration, and session management
- 🎨 **Admin Dashboard** - Comprehensive admin panel for managing products, customers, and settings
- 🔍 **Advanced Search** - Real-time product search with filtering capabilities
- 📱 **Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- ⚡ **High Performance** - Built with Next.js 14 for optimal speed and SEO

---

## ✨ Features

### 🛒 Customer Features

- **Product Browsing** - Browse products by category (Bras, Panties, Sets, Sleepwear, Clothing, Accessories)
- **Product Details** - Detailed product pages with images, descriptions, sizes, colors, and care instructions
- **Shopping Cart** - Add items to cart with size and color selection
- **User Accounts** - Create account, manage profile, view order history
- **Search Functionality** - Search products by name, category, or tags
- **Responsive Design** - Beautiful UI that works on all screen sizes

### 👨‍💼 Admin Features

- **Product Management** - Create, edit, delete, and publish/unpublish products
- **Customer Management** - View and manage customer accounts
- **Settings Management** - Configure site settings, contact information, and shipping options
- **Image Upload** - Upload product images with automatic optimization
- **Analytics Dashboard** - View sales and customer statistics

### 🔐 Security Features

- **Secure Authentication** - Password hashing with bcrypt
- **Session Management** - HTTP-only cookies for secure sessions
- **Admin Protection** - Separate admin authentication system
- **Input Validation** - Server-side validation for all inputs

---

## 🛠️ Tech Stack

### Frontend

| Technology       | Version | Purpose                      | Link                                                 |
| ---------------- | ------- | ---------------------------- | ---------------------------------------------------- |
| **Next.js**      | 14.0.4  | React framework with SSR/SSG | [Documentation](https://nextjs.org/docs)             |
| **React**        | 18.2.0  | UI library                   | [Documentation](https://react.dev)                   |
| **TypeScript**   | 5.3.3   | Type-safe JavaScript         | [Documentation](https://www.typescriptlang.org/docs) |
| **Tailwind CSS** | 3.4.0   | Utility-first CSS framework  | [Documentation](https://tailwindcss.com/docs)        |
| **Headless UI**  | 1.7.17  | Unstyled UI components       | [Documentation](https://headlessui.com)              |
| **Lucide React** | 0.294.0 | Icon library                 | [Documentation](https://lucide.dev)                  |

### Backend

| Technology   | Version | Purpose              | Link                                                  |
| ------------ | ------- | -------------------- | ----------------------------------------------------- |
| **Node.js**  | 20.10+  | JavaScript runtime   | [Documentation](https://nodejs.org/docs)              |
| **Express**  | 4.18.2  | Web server framework | [Documentation](https://expressjs.com)                |
| **MongoDB**  | 8.0.3   | NoSQL database       | [Documentation](https://www.mongodb.com/docs)         |
| **Mongoose** | 8.0.3   | MongoDB ODM          | [Documentation](https://mongoosejs.com/docs)          |
| **bcrypt**   | 5.1.1   | Password hashing     | [Documentation](https://www.npmjs.com/package/bcrypt) |
| **Multer**   | 1.4.5   | File upload handling | [Documentation](https://github.com/expressjs/multer)  |

### Development Tools

| Technology       | Version | Purpose              | Link                                                     |
| ---------------- | ------- | -------------------- | -------------------------------------------------------- |
| **PostCSS**      | 8.4.32  | CSS processing       | [Documentation](https://postcss.org)                     |
| **Autoprefixer** | 10.4.16 | CSS vendor prefixing | [Documentation](https://github.com/postcss/autoprefixer) |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20.10 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB** (local or cloud instance) - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/beratmen/Lingerie-e-commerce.git
   cd Lingerie-e-commerce
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   # MongoDB Connection
   MONGODB_URI=mongodb://localhost:27017/velvet-aura
   # Or use MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/velvet-aura

   # Node Environment
   NODE_ENV=development

   # Server Configuration
   PORT=8080
   HOSTNAME=0.0.0.0
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:8080](http://localhost:8080)

### First Time Setup

1. **Test MongoDB Connection**

   ```bash
   node scripts/testConnection.js
   ```

2. **Build for production** (optional)

   ```bash
   npm run build
   npm start
   ```

---

## 📁 Project Structure

```
Lingerie-e-commerce/
├── 📂 config/
│   └── database.js          # MongoDB connection configuration
│
├── 📂 middleware/
│   └── auth.js              # Authentication middleware
│
├── 📂 models/
│   └── Product.js           # Product data model
│
├── 📂 routes/
│   ├── admin.js             # Admin API routes
│   └── auth.js              # Authentication routes
│
├── 📂 scripts/
│   └── testConnection.js    # MongoDB connection test script
│
├── 📂 src/
│   ├── 📂 app/              # Next.js App Router
│   │   ├── 📂 api/          # API routes
│   │   │   ├── 📂 auth/     # Authentication endpoints
│   │   │   ├── 📂 products/ # Product endpoints
│   │   │   ├── 📂 customers/# Customer endpoints
│   │   │   └── 📂 settings/ # Settings endpoints
│   │   ├── 📂 admin/        # Admin dashboard pages
│   │   ├── 📂 auth/         # Authentication pages
│   │   ├── 📂 cart/         # Shopping cart page
│   │   ├── 📂 product/      # Product detail pages
│   │   └── page.tsx         # Home page
│   │
│   ├── 📂 components/       # React components
│   │   ├── 📂 layout/       # Layout components (Navbar, Footer)
│   │   └── 📂 search/       # Search components
│   │
│   ├── 📂 contexts/         # React contexts
│   │   ├── AuthContext.tsx  # Authentication context
│   │   └── CartContext.tsx  # Shopping cart context
│   │
│   └── 📂 data/             # Static data
│       └── products.ts      # Product data
│
├── 📂 public/               # Static assets
│   ├── 📂 images/           # Product and category images
│   └── 📂 uploads/          # User uploaded files
│
├── 📂 views/                # EJS templates (legacy)
│
├── .gitignore               # Git ignore rules
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies
├── postcss.config.js        # PostCSS configuration
├── server.js                # Custom server setup
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

| Variable      | Description                | Example                                 |
| ------------- | -------------------------- | --------------------------------------- |
| `MONGODB_URI` | MongoDB connection string  | `mongodb://localhost:27017/velvet-aura` |
| `NODE_ENV`    | Environment mode           | `development` or `production`           |
| `PORT`        | Server port (optional)     | `8080`                                  |
| `HOSTNAME`    | Server hostname (optional) | `0.0.0.0`                               |

---

## 📚 API Documentation

### Authentication Endpoints

#### `POST /api/auth/login`

User login endpoint.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "user": {
    "id": "1",
    "name": "User",
    "email": "user@example.com"
  }
}
```

#### `GET /api/auth/session`

Get current user session.

**Response:**

```json
{
  "user": {
    "id": "1",
    "name": "User",
    "email": "user@example.com"
  }
}
```

#### `POST /api/auth/logout`

Logout current user.

**Response:**

```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

### Product Endpoints

#### `GET /api/products`

Get all products.

**Response:**

```json
[
  {
    "id": "1",
    "name": "Classic T-Shirt Bra",
    "price": 39.99,
    "description": "Comfortable everyday t-shirt bra...",
    "category": "Bras",
    "sizes": ["32A", "32B", "34A"],
    "colors": ["Black", "Nude", "White"],
    "isPublished": true
  }
]
```

#### `POST /api/products`

Create a new product (Admin only).

#### `GET /api/products/[id]`

Get product by ID.

#### `PATCH /api/products/[id]/toggle-publish`

Toggle product publish status (Admin only).

### Admin Endpoints

#### `POST /api/auth/admin/login`

Admin login endpoint.

**Request Body:**

```json
{
  "email": "admin@example.com",
  "password": "adminpassword"
}
```

---

## 📜 Scripts

| Command              | Description                  |
| -------------------- | ---------------------------- |
| `npm run dev`        | Start development server     |
| `npm run build`      | Build for production         |
| `npm start`          | Start production server      |
| `npm run lint`       | Run ESLint                   |
| `npm run type-check` | Run TypeScript type checking |

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The application can be deployed to any platform that supports Node.js:

- **Heroku** - [Deployment Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- **DigitalOcean** - [App Platform](https://www.digitalocean.com/products/app-platform)
- **AWS** - [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- **Railway** - [Railway.app](https://railway.app)

### Environment Setup for Production

Make sure to set:

- `NODE_ENV=production`
- Valid `MONGODB_URI` (use MongoDB Atlas for cloud hosting)
- Secure session cookies (automatically enabled in production)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Write clean, readable code
- Test your changes before submitting
- Update documentation as needed

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Berat MEN**

- GitHub: [@beratmen](https://github.com/beratmen)
- Repository: [Lingerie-e-commerce](https://github.com/beratmen/Lingerie-e-commerce)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [MongoDB](https://www.mongodb.com/) - The database for modern applications
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit

---

<div align="center">

**Made with ❤️ by Berat MEN**

⭐ Star this repo if you find it helpful!

</div>
