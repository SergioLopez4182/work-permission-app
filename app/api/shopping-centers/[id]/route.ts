import { shoppingCenterSchema } from "@/modules/shopping-centers/shopping-center.schema";
import { NextResponse } from "next/server";

let shoppingCenters: any[] = []; // ⚠️ En real iría a DB

// GET by ID
export async function GET(
    _: Request,
    { params }: { params: { id: string } }
) {
    const item = shoppingCenters.find((sc) => sc.id === params.id);

    if (!item) {
        return NextResponse.json(
            { message: "Shopping center not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(item);
}

// PUT
export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    const index = shoppingCenters.findIndex((sc) => sc.id === params.id);

    if (index === -1) {
        return NextResponse.json(
            { message: "Shopping center not found" },
            { status: 404 }
        );
    }

    const body = await req.json();

    const { error, value } = shoppingCenterSchema.validate(body, {
        abortEarly: false,
    });

    if (error) {
        return NextResponse.json(
            {
                message: "Validation error",
                details: error.details.map((d) => d.message),
            },
            { status: 400 }
        );
    }

    shoppingCenters[index] = {
        ...shoppingCenters[index],
        ...value,
        updatedAt: new Date(),
    };

    return NextResponse.json(shoppingCenters[index]);
}

// DELETE
export async function DELETE(
    _: Request,
    { params }: { params: { id: string } }
) {
    const index = shoppingCenters.findIndex((sc) => sc.id === params.id);

    if (index === -1) {
        return NextResponse.json(
            { message: "Shopping center not found" },
            { status: 404 }
        );
    }

    shoppingCenters.splice(index, 1);

    return NextResponse.json({ message: "Deleted successfully" });
}