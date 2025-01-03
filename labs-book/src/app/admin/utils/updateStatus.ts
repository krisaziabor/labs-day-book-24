export async function updateFulfillmentStatus(preorderId: number, isFulfilled: boolean, isPending: boolean) {
  try {

    let url = `/admin/STATUS_GOES_HERE/api/?id=${preorderId}`;
    
    if (isPending) {
        url = `/admin/pending/api/?id=${preorderId}`;
    } else if (isFulfilled) {
        url = `/admin/sent/api/?id=${preorderId}`;
    } else if (!isFulfilled && !isPending) {
        url = `/admin/unsent/api/?id=${preorderId}`;
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

    console.log("Fulfillment status updated successfully");
    window.location.reload();
  } catch (error) {
    console.error("Error updating fulfillment status:", error);
  }
}
