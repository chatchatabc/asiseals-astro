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
      // Validate the data
      ContactUsFormSchema.parse(data);

      // Set default values
      if (!data.companyName) data.companyName = "Anonymous Company";

      // Create email body
      const body = {
        personalizations: [
          {
            to: [
              {
                email: "lucious.greenfelder97@ethereal.email",
                name: "Lucious Greenfelder",
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
      const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      return new Response("Success", { status: 200 });
    } catch (e) {
      console.log(e);

      return new Response("Error", { status: 500 });
    }
  }

  return new Response("Not Found", { status: 404 });
}
