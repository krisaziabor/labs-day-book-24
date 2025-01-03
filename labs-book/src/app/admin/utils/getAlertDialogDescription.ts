import { Preorder } from "../components/columns";

export function getAlertDialogDescription(preorder: Preorder): string {
  if (preorder.fulfilled) {
    return `${preorder.first_name}'s order has been marked as sent. Changing the status will mark it as unsent – for it to be marked sent again, it will have to go through the pending stage.`;
  }

  if (preorder.pending) {
    return `${preorder.first_name}'s order has been marked as pending. Changing the status will mark it as sent – only do this once you have dropped the book off to them and you have confirmation they have received it.`;
  }

  return `${preorder.first_name}'s order has been marked as unsent. Changing the status will mark it as pending – pressing confirm will send them an automated email message.`;
}
