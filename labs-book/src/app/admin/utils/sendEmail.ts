export async function sendEmail(email: string, name: string) {
  try {

    const url = `/admin/pending/api/?name=${name}&email=${email}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to send email");
    }

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}