import { prisma } from './lib/prisma'

async function main() {
    const client = await prisma.client.create({
        data: {
            name: "DEMO",
        },
    });
    console.log("Created client:", client);
    const allClients = await prisma.client.findMany();
    console.log("All clients:", JSON.stringify(allClients, null, 2));
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });