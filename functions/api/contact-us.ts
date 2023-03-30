import { ContactUsFormSchema } from "../schema/ContactUsSchema";

export async function onRequest(context) {
  const { request } = context;

  if (request.method === "POST") {
    const data = await request.json();
    const date = new Date();
    const timeFormatted = new Intl.DateTimeFormat("en-US", {
      timeStyle: "short",
    }).format(date);
    const dateFormatted = new Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
    }).format(date);

    try {
      Object.keys(data).forEach((key) => {
        if (data[key] === "") delete data[key];
      });

      // Set default values
      if (!data.companyName) data.companyName = "Anonymous Company";
      if (!data.telephone) data.telephone = "Anonymous Telephone";

      // Validate the data
      ContactUsFormSchema.parse(data);

      // Create email body
      const body = {
        personalizations: [
          {
            to: [
              {
                email: "lucious.greenfelder97@ethereal.email",
                name: "Advantage Seal Inquiry",
              },
            ],
          },
        ],
        from: {
          email: "contact_us_form@asiseal.com",
          name: "Asiseal Contact Us Form",
        },
        subject: "Contact Us Form Submission - " + dateFormatted,
        content: [
          {
            type: "text/plain",
            value: `
            Contact Us Form Submission - ${dateFormatted} ${timeFormatted}
            Name: ${data.name}
            Email: ${data.email}
            Company Name: ${data.companyName}
            Telephone: ${data.telephone}
            Message: ${data.message}
          `,
          },
          {
            type: "text/html",
            value: `
            <h1>Contact Us Form Submission</h1>
            <p><strong>Date:</strong> ${dateFormatted}</p>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company Name:</strong> ${data.companyName}</p>
            <p><strong>Telephone:</strong> ${data.telephone}</p>
            <p><strong>Message:</strong> ${data.message}</p>
          `,
          },
        ],
      };

      // Sending of email
      await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (e) {
      console.log(e);

      return new Response("Error", { status: 500 });
    }
  }

  return new Response("Not Found", { status: 404 });
}
