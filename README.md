This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running in Dev

Download or clone the repository:

```bash
 git clone https://github.com/K-and-B-Studios/ecommerce-theme.git 
 ```

Create a .env copy and rename it 

```bash
    .env.template
    #to 
    .env
```

use your enviroment variables in to .env

```bash
    DB_USER=your-db-user
    DB_NAME=your-db-name
    DB_PASSWORD=your-password 
```

Use docker to create the data base

```bash
docker-compose up -d
```

Running the migrations of Primsa 

```bash
npx prisma migrate dev
```

Install the dependencies:

```bash
 npm install 
 ```

Run the project:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Running in Production 



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
