export default async function handler(req, res) {
    if (req.method === "POST") {
      const { fullName, phoneNumber, email, companyName, message } = req.body;
  
      // You'd normally call the WhatsApp API here using a service like Twilio
      try {
        // Example using Twilio (pseudo-code):
        // const client = require('twilio')(accountSid, authToken);
        // await client.messages.create({
        //   body: `Name: ${fullName}, Phone: ${phoneNumber}, Email: ${email}, Company: ${companyName}, Message: ${message}`,
        //   from: 'whatsapp:+14155238886', // Twilio sandbox number
        //   to: 'whatsapp:+YourNumberHere'
        // });
  
        res.status(200).json({ message: "Message sent successfully" });
      } catch (error) {
        res.status(500).json({ error: "Failed to send message" });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  