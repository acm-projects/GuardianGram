import prisma from "../../../prisma";
import { connectToDB } from "../../../utils"
import { NextResponse } from "next/server";

export const GET = async (req : Request) => {
    try {
        await connectToDB();
        const users = await prisma.user.findMany({
            include:{posts: true, _count: true},
        });
        return NextResponse.json({ users }, {status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    } finally {
        await prisma.$disconnect();
    }
};
