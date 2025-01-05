export async function updateVerificationStatus(
  preorderId: number,
  isVerified: number,
  currentStatus: string
) {
  try {
    let url = `/admin/STATUS_GOES_HERE/api/?id=${preorderId}`;

    if (currentStatus === "awaiting-verification") {
      url = `/admin/statuses/awaiting-verification/api/?id=${preorderId}&success=${isVerified}`;
    } else if (currentStatus === "awaiting-user-action") {
      url = `/admin/statuses/awaiting-user-action/api/?id=${preorderId}&success=${isVerified}`;
    }

    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to update status");
    }

    console.log("Verification status updated successfully");
    window.location.reload();
  } catch (error) {
    console.error("Error updating verification status:", error);
  }
}
