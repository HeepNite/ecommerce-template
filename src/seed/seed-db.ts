import { initialData } from "./seed"
import prisma from '../lib/prisma';
import { countries } from './seed-countries';
import { Continent } from "@prisma/client";


function convertStringToContinent(continentString: string): Continent {
    switch (continentString) {
        case "Africa":
            return Continent.AF;
        case "Antarctica":
            return Continent.AT;
        case "Asia":
            return Continent.AS;
        case "Europe":
            return Continent.EU;
        case "NorthAmerica":
            return Continent.AM;
        case "Oceania":
            return Continent.OC;
        case "SouthAmerica":
            return Continent.AM;
        default:
            throw new Error(`Continent '${continentString}' no reconocido`);
    }
}

async function main() {

    await prisma.orderAddress.deleteMany()
    await prisma.orderItem.deleteMany()
    await prisma.order.deleteMany()

    await prisma.userAddress.deleteMany()
    await prisma.user.deleteMany()
    await prisma.country.deleteMany()


    await prisma.productImg.deleteMany()
    await prisma.product.deleteMany()
    await prisma.category.deleteMany()


    const { categories, products, users } = initialData


    await prisma.user.createMany({
        data: users
    })

    await prisma.country.createMany({
        data: countries.map(country => ({
            ...country,
            continent: convertStringToContinent(country.continent)
        }))
    });

    const categoriesData = categories.map((name) => ({ name }))

    await prisma.category.createMany({
        data: categoriesData
    })


    const categoriesDB = await prisma.category.findMany()

    const categoriesMap = categoriesDB.reduce((map, category) => {
        map[category.name.toLowerCase()] = category.id;
        return map

    }, {} as Record<string, string>)

    products.forEach(async (product) => {

        const { type, images, ...rest } = product;

        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type]
            }
        })

        const imageDB = images.map(image => ({
            url: image,
            productId: dbProduct.id
        }))
        await prisma.productImg.createMany({
            data: imageDB
        })
    })



    console.log('Seed ejecutado correctamente');
}

(() => {

    if (process.env.NODE_ENV === 'production') return

    main()
})()