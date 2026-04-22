import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";



const fetchRegistrationData = async () => {
    "use server";
    try {
        const data = await sql`SELECT * FROM registrationData order by id desc`
        return data.rows;
    } catch (error) {
        console.error("SQL error occurred while fetching data.",);
    }
    return [];
}

const fetchAlumniData = async () => {
    "use server";
    try {
        const data = await sql`SELECT * FROM alumniData order by id desc`
        return data.rows;
    } catch (error) {
        console.error("SQL error occurred while fetching data.",);
    }
    return [];
}

export async function POST(request: Request) {
    const { password, table } = await request.json();

    if (password !== "BECM_Carnival_1.0") {
        return NextResponse.json({ status: 401, message: "Unauthorized" });
    }

    if (table !== "registration" && table !== "alumni") {
        return NextResponse.json({ status: 400, message: "Invalid table" });
    }

    const data = table === "registration" ? await fetchRegistrationData() : await fetchAlumniData();

    return NextResponse.json({ status: 200, data: data });
}