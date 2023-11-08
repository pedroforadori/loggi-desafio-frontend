import order from "@/app/data/order";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const id = params.id
    const orderFilter = order.filter(item => item.id === id)

    return NextResponse.json(orderFilter)
}