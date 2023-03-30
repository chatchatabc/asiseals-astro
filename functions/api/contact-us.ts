import { ContactUsFormSchema } from "../schema/ContactUsSchema";

export async function onRequest(context) {
  const { request } = context;

  // Handle POST requests
  if (request.method === "POST") {
    const data = await request.json();
    try {
      ContactUsFormSchema.parse(data);
      if (!data.companyName) data.companyName = "Anonymous";

      

      return new Response(JSON.stringify(data), { status: 200 });
    } catch (e) {
      return new Response(e.message, { status: 400 });
    }
  }

  return new Response("Not Found", { status: 404 });
}
