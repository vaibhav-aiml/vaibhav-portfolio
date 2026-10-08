import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, botcheck } = body;

    // 1. Honeypot check for spam bots
    if (botcheck) {
      return NextResponse.json({
        success: true,
        message: "Message dispatched successfully.",
      });
    }

    // 2. Strict validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, message: "Message body is required." },
        { status: 400 }
      );
    }

    // 3. Web3Forms or Resend integration if configured in environment
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (web3FormsKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: name.trim(),
          email: email.trim(),
          subject: subject?.trim() || `Portfolio Inquiry from ${name.trim()}`,
          message: message.trim(),
          from_name: "Vaibhav Badaya Portfolio",
        }),
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || "Web3Forms submission failed");
      }
    } else {
      // In local dev without key, log the message to terminal
      console.log("=== [PORTFOLIO CONTACT SUBMISSION] ===");
      console.log(`From: ${name} <${email}>`);
      console.log(`Subject: ${subject || "(No subject)"}`);
      console.log(`Message: ${message}`);
      console.log("======================================");
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been received! I will reply within 24 hours.",
    });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Unable to send message right now. Please email directly.",
      },
      { status: 500 }
    );
  }
}
