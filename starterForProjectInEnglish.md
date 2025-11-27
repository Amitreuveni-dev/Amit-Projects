# FULL-STACK PROJECT CHECKLIST (GENERAL TEMPLATE)

## 1️⃣ Project Understanding
- App purpose:
- Target users:
- Core problem being solved:
- Core features:
- Main system entities (resources):  ← leave blank and fill per project

---

## 2️⃣ Project Structure
project/
   client/        ← Frontend (React / Angular / Vue)
   server/        ← Backend (Express / Nest / Fastify)
   shared/        ← (optional: shared interfaces / utils)

---

## 3️⃣ Backend Planning (General)

### Define Entities (Models)
- Entity 1:
- Entity 2:
- Entity 3:
(define only names, not code)

### Define API Routes (REST or GraphQL)
- [METHOD] /api/<resource>  
- [METHOD] /api/<resource>/:id  
- Auth endpoints  
- Any system-specific endpoints  

### Define Controllers (Business Logic)
- Create
- Read
- Update
- Delete
- Additional domain logic

### Middleware
- Authentication
- Validation
- Error handling
- Logging

### Infrastructure
- Server entry file (server.ts / index.ts)
- Database connection (Mongo / SQL)
- Environment variables (.env)
- Folder structure:
  server/
     controllers/
     routes/
     models/
     middleware/
     config/

---

## 4️⃣ Frontend Planning (General)

### Pages (Views)
- Page 1:
- Page 2:
- Page 3:

### Components
- Reusable UI components
- Form components
- Layout components

### State Management
- Context / Redux / Zustand / Signals / Recoil
- Authentication storage
- API layer (services)

### Routing
- Public routes
- Protected routes
- Global layout

---

## 5️⃣ Setup Phase
✔ Initialize client  
✔ Initialize server  
✔ Install dependencies  
✔ Create tsconfig.json  
✔ Create .env  
✔ Configure API base URL  
✔ Basic project skeleton  

---

## 6️⃣ Backend Development Order
1. Database connection  
2. Base server setup  
3. Models  
4. Controllers  
5. Routes  
6. Authentication  
7. Authorization  
8. Validations  
9. Testing endpoints (Postman/Thunder)  

---

## 7️⃣ Frontend Development Order
1. Routing system  
2. Authentication pages  
3. Auth logic + token handling  
4. Main CRUD pages  
5. Forms + validation  
6. Data fetching from API  
7. UI components  
8. Styling  
9. Error & loading states  

---

## 8️⃣ Testing (E2E)
- Authentication flow  
- CRUD flow  
- API error handling  
- UI/UX checks  
- Protected pages  

---

## 9️⃣ Deployment
- Build frontend  
- Deploy backend (Railway / Render / Vercel)  
- Connect environment variables  
- Configure CORS  
- Test production endpoints  

---

## 🔟 Optional Improvements (General)
- Search system  
- Filters & Sorting  
- Analytics / Statistics  
- Role-based access  
- File upload  
- WebSockets / Live updates  
- Caching  
- Pagination  
