# blogr-nextjs-postgres-prisma-auth

# 🚀 Users and Posts and Drafts Blogging site built with NextJS Postgres Prisma and NextAuth 🚀

https://github.com/coding-to-music/blogr-nextjs-postgres-prisma-auth

https://blogr-nextjs-postgres-prisma-auth.vercel.app

From / By https://vercel.com/guides/nextjs-prisma-postgres

<!-- <div style="text-align:center;">
  <img src="/images/chakra.jpg" alt="Image" />
  <p><em>Chakra Component Library with Next.js</em></p>
</div> -->

## Node Environment:

```java
nvm use 18
```

## Environment variables:

see `.env-example`

```java
# Create a Postgres database on Vercel: https://vercel.com/postgres
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=

# Generate one here: https://generate-secret.vercel.app/32 (only required for localhost)
NEXTAUTH_SECRET=
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/blogr-nextjs-postgres-prisma-auth.git
git push -u origin main
```

# Fullstack Authentication Example with Next.js and NextAuth.js

This is the starter project for the fullstack tutorial with Next.js and Prisma. You can find the final version of this project in the [`final`](https://github.com/prisma/blogr-nextjs-prisma/tree/final) branch of this repo.

## Upgrade npm packages

```java
ncu
```

```java
 @types/node     17.0.14  →   20.5.1
 @types/react    17.0.38  →  18.2.20
 next            12.0.10  →  13.4.19
 react            17.0.2  →   18.2.0
 react-dom        17.0.2  →   18.2.0
 react-markdown    8.0.0  →    8.0.7
 typescript        4.5.5  →    5.1.6

Run ncu -u to upgrade package.json
```
