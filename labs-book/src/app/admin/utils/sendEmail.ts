export async function sendFlagEmail(email: string, name: string, reason: string) {
  try {

    const url = `/admin/statuses/awaiting-verification/api/?name=${name}&email=${email}&reason=${reason}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Sending flag email with URL:", url);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to send email – sendEmail.ts");
    }

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email, sendEmail.ts:", error);
  }
}