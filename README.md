# Monastery360
Team project for SIH 

Sikkim is home to over 200 monasteries, many of which date back to the 17th and 18th centuries. These monasteries are rich in history, architecture, and spiritual significance. While some efforts have been made to preserve murals and digitize rare documents, there is no unified digital platform that offers tourists and researchers immersive access to these cultural treasures.

## Authentication Backend (JWT)

### Folder Structure
```
Monastery360/
  ├── app.js
  ├── package.json
  ├── README.md
  ├── config/
  ├── controllers/
  │     └── authController.js
  ├── models/
  │     └── User.js
  ├── routes/
  │     └── auth.js
  ├── middleware/
  │     └── authMiddleware.js
  └── utils/
```

### Setup
1. Install dependencies:
   ```bash
   npm install
   npm install bcryptjs jsonwebtoken
   ```
2. Set up MongoDB locally or use MongoDB Atlas. Default URL: `mongodb://127.0.0.1:27017/Monastery360`
3. (Optional) Set `JWT_SECRET` in your environment variables for production.
4. Start the server:
   ```bash
   node app.js
   ```

### API Endpoints
#### Register (Signup)
- **POST** `/api/auth/signup`
- **Body:** `{ "username": "yourname", "email": "your@email.com", "password": "yourpassword" }`
- **Response:** `201 Created` on success

#### Login
- **POST** `/api/auth/login`
- **Body:** `{ "email": "your@email.com", "password": "yourpassword" }`
- **Response:** `{ token, user }` on success

#### Protected Route Example
- **GET** `/api/protected`
- **Headers:** `Authorization: Bearer <token>`
- **Response:** Protected content if token is valid

### User Schema
- `username`: String, required
- `email`: String, required, unique
- `password`: String, required (hashed)

---

## Key Features (Project)
- Virtual Tours: 360° panoramic views of monastery interiors and surroundings.
- Narrated walkthroughs in multiple languages.
- Interactive Map: Geo-tagged monastery locations with travel routes and nearby attractions.
- Integration with local transport and tourism services.
- Digital Archives: Scanned manuscripts, murals, and historical documents.
- AI-powered search and categorization.
- Smart Audio Guide App: Location-based audio guides using Bluetooth beacons or GPS.
- Offline mode for remote areas.
- Cultural Calendar: Events, festivals, and rituals schedule.
- Booking and participation options for tourists.

---

## Impact
- Boosts tourism by making monasteries more accessible.
- Preserves endangered cultural assets digitally.
- Empowers local communities through participatory archiving.
- Supports educational and spiritual exploration globally.
