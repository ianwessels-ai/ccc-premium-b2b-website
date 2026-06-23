import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const company = formData.get("company");
    const email = formData.get("email");
    const participants = formData.get("participants");
    const budget = formData.get("budget");
    const message = formData.get("message");

    const { data, error } = await resend.emails.send({
      from: "CCC Website <onboarding@resend.dev>",
      to: ["ian_wessels@icloud.com"],
      subject: `New Proposal Request from ${company}`,
      html: `
        <h2>New Corporate Cricket Collective Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Participants:</strong> ${participants}</p>
        <p><strong>Budget:</strong> ${budget}</p>

        <h3>Requirements</h3>
        <p>${message}</p>
      `,
    });
    if (error) {
  console.error("Resend error:", error);

  return Response.json(
    { success: false, error },
    { status: 500 }
  );
}

console.log("Email sent:", data);
    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}