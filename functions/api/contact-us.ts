import { ContactUsFormSchema } from "../schema/ContactUsSchema";
import productsJson from "../../data/products.json";

export async function onRequest(context: any) {
  const { request } = context;

  if (request.method === "POST") {
    try {
      // Clean request body data
      const data = await request.json();
      Object.keys(data).forEach((key) => {
        if (data[key] === "") delete data[key];
      });
      // Set default values
      if (!data.companyName) data.companyName = "Anonymous Company";
      if (!data.telephone) data.telephone = "Anonymous Telephone";
      // Validate the data
      ContactUsFormSchema.parse(data);

      // Format date and time
      const date = new Date();
      const dateFormatted = new Intl.DateTimeFormat("en-US", {
        dateStyle: "short",
      }).format(date);

      // Find product
      const product = productsJson.contents.find(
        (product) => product.slug === data.slug
      );

      // Return error if product not found
      if (!product) {
        return new Response(
          JSON.stringify({
            message: `No product found for ${data.slug}`,
            products: productsJson.contents,
          }),
          {
            status: 404,
          }
        );
      }

      // Create email body
      const body = {
        personalizations: [
          {
            to: [
              {
                email: "clifton82@ethereal.email",
                name: "Advantage Seal Inquiry",
              },
              {
                email: "bonjomontes@gmail.com",
                name: "Bonjo Montes",
              },
              {
                email: "raphaeldalangin@chatchatabc.com",
                name: "Raphael Dalangin",
              },
              {
                email: "bon@chatchatabc.com",
                name: "Bonjo Montes",
              },
            ],
          },
        ],
        from: {
          email: "bon@chatchatabc.com",
          name: "Asiseal Contact Us Form",
        },
        subject: "Contact Us Form Submission - " + dateFormatted,
        content: [
          {
            type: "text/html",
            value: `
            <style>
              body {
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333;
              }
              h1 {
                font-size: 28px;
                margin-bottom: 20px;
              }
              p {
                margin-bottom: 10px;
              }
              strong {
                font-weight: bold;
              }
              a {
                color: #0078ae;
                text-decoration: none;
              }
              img {
                display: block;
                margin-top: 20px;
                max-width: 100%;
                height: auto;
              }
              /* Responsive styles */
              @media screen and (max-width: 600px) {
              body {
                font-size: 14px;
              }
              h1 {
                font-size: 24px;
              }
            }
            </style>
            <div style="max-width: 600px; margin: 0 auto;">
              <h1>Contact Us Form Submission</h1>
              <p><strong>Date:</strong> ${dateFormatted}</p>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Company Name:</strong> ${data.companyName}</p>
              <p><strong>Telephone:</strong> ${data.telephone}</p>
              <p><strong>Message:</strong> ${data.message}</p>
              ${
                product
                  ? "<p><strong>Product:</strong> " + product.name + "</p>"
                  : ""
              }
              ${
                product
                  ? "<p><strong>Product Link:</strong> " +
                    `<a href="https://asiseals.pages.dev/products/${product.category}/${product.subCategory}/${product.slug}">https://asiseals.pages.dev/products/${product.category}/${product.subCategory}/${product.slug}</a>` +
                    "</p>"
                  : ""
              }
              ${
                product
                  ? `<img src="https://asiseals.pages.dev/${product.imageUrl}" alt="${product.name}" />`
                  : ""
              }
            </div>
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

      const mailChannelsData = await response.json();

      return new Response(JSON.stringify({ success: true, mailChannelsData }), {
        status: 200,
      });
    } catch (e) {
      return new Response(JSON.stringify(e), { status: 500 });
    }
  }

  return new Response("Not Found", { status: 404 });
}
