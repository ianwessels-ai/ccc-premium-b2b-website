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
    const phone = formData.get("phone");
const eventDate = formData.get("date");
const location = formData.get("location");

      const { data, error } = await resend.emails.send({
  from: "CCC Website <onboarding@resend.dev>",
  to: ["ian_wessels@icloud.com"],
  replyTo: email as string,
  subject: '🏏 New Corporate Event Enquiry | ABC Company',
  html: `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 700px; margin: 0 auto; color: #1f2937;">
      <div style="background:#0B1F4D;padding:30px;text-align:center;">
        <h1 style="color:white;margin:0;">Corporate Cricket Collective</h1>
        <p style="color:#d1d5db;margin-top:10px;">New Proposal Request Received</p>
      </div>

      <div style="padding:30px;background:#ffffff;">
        <h2 style="color:#0B1F4D;">Lead Summary</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <hr style="margin:20px 0;" />

        <h2 style="color:#0B1F4D;">Event Details</h2>

        <p><strong>Participants:</strong> ${participants}</p>
        <p><strong>Preferred Location:</strong> ${location}</p>
        <p><strong>Preferred Date:</strong> ${eventDate}</p>
        <p><strong>Budget:</strong> <span style="color:#B8860B;font-weight:bold;">${budget}</span></p>

        <hr style="margin:20px 0;" />

        <h2 style="color:#0B1F4D;">Requirements</h2>

        <div style="background:#f8fafc;border-left:4px solid #B8860B;padding:20px;margin-top:10px;">
          ${message}
        </div>

        <p style="color:#6b7280;font-size:12px;margin-top:30px;">
  Submitted: ${new Date().toLocaleString("en-GB")}
</p>

<hr style="margin:20px 0;" />

<h2 style="color:#0B1F4D;">Recommended Action</h2>

<p>
  Contact this prospect within <strong>24 hours</strong>.
</p>

<p>
  <strong>Email:</strong> ${email}<br />
  <strong>Phone:</strong> ${phone}
</p>
        </p>
      </div>
      
      <div style="background:#0B1F4D;color:white;text-align:center;padding:20px;font-size:12px;">
        Corporate Cricket Collective™<br />
        Premium Corporate Cricket Experiences
      </div>
    </div>
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