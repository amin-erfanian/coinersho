import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dummy_secret";

export async function POST(req: NextRequest) {
  try {
    const { username } = await req.json();

    const externalLoginUrl = "https://randomuser.me/api/?result=1&nat=us";
    const response = await axios.post(externalLoginUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);

    const token = jwt.sign({ username }, JWT_SECRET, {
      expiresIn: "1d",
    });

    return NextResponse.json(
      { message: "Login Successful", token },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", detail: error },
      { status: 500 }
    );
  }
}
