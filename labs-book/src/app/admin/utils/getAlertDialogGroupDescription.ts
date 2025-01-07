import { Preorder } from "../components/columns";

export function getAlertDialogGroupDescription(preorder: Preorder): string {
  if (preorder.fulfilled) {
    return `These customers' orders have been marked as sent. Changing the status will mark them as unsent – for them to be marked sent again, they will have to go through the pending stage.`;
  }

  if (preorder.pending) {
    return `These customers' orders have been marked as pending. Changing the status will mark them as sent – only do this once you have dropped the books off to them and you have confirmation they have received them.`;
  }

  return `These customers' orders have been marked as unsent. Changing the status will mark them as pending – pressing confirm will send them an automated email message.`;
}
