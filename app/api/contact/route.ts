import { Resend } from "resend";
import { ContactTemplate } from "@/components/templates/ContactTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: "portfolio@fireflysolutions.be",
      to: "remco.goy@hotmail.com",
      subject: `New Contact Form Submission from ${name}`,
      react: ContactTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
