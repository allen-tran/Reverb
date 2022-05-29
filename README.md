# Reverb 🎧

![maxresdefault](https://user-images.githubusercontent.com/63386979/170894496-ca0ad829-cd22-40da-864a-ec8a39e0080a.jpeg)

This is fullstack replica of one of my favorite applications ever: [Spotify](spotify.com/us/)! Authentfication, relational databases, serverless functions, and much more are all implemented to give the closest experience to Spotify as possible. Users can sign up, create playlists, like songs and of course - listen to their favorite tunes 🎵

## Table of Contents 🗞️
1. [Tech Stack](#tech-stack-)
2. [Database Schema](#database-schema-)

## Tech Stack 💼
- **Written in:** TypeScript
- **Authentification:** JWT, Cookies, Bcrypt
- **Frontend:** Next.js, React.js
- **Backend:** Prisma Postgres Database Hosted by Heroku

## Database Schemas 🗺
### **User Table**

```PRISMA
model User {
  id        Int        @id @default(autoincrement())
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  email     String     @unique
  firstName String
  lastName  String
  password  String
  playlists Playlist[]
}
```

### **Song Table**

```PRISMA
model Song {
  id        Int        @id @default(autoincrement())
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  name      String
  artist    Artist     @relation(fields: [artistId], references: [id])
  artistId  Int
  playlists Playlist[]
  duration  Int
  url       String
}
```

### **Artist Table**

```PRISMA
model Artist {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  songs     Song[]
  name      String   @unique
}
```

### **Playlist Table**

```PRISMA
model Playlist {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  name      String
  songs     Song[]
  user      User     @relation(fields: [userId], references: [id])
  userId    Int
}
```
