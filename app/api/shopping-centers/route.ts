import { ShoppingCenterSerializer } from "@/modules/shopping-centers/shopping-center.serializer";
import { ShoppingCenterService } from "@/modules/shopping-centers/shopping-center.service";
import { NextResponse } from "next/server";

const service = new ShoppingCenterService();

// GET - Listar todos
export async function GET() {
    const shoppingCenters = await service.findAll();
    return NextResponse.json(shoppingCenters);
}

// POST - Crear nuevo
export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { error, value } = ShoppingCenterSerializer.create(body);

        if (error) {
            return NextResponse.json(
                {
                    message: "Validation error",
                    details: error.details.map((d) => d.message),
                },
                { status: 400 }
            );
        }

        if (!value) {
            return NextResponse.json(
                {
                    message: "Validation error",
                    details: null,
                },
                { status: 400 }
            );
        }

        const newShoppingCenter = await service.create(value);

        return NextResponse.json(newShoppingCenter, { status: 201 });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}