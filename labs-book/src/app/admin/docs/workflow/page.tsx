import React from "react";

const Document: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col items-start px-2 py-4 mx-20 w-full">
        <p className="font-semibold mb-4 w-2/5">Workflow Introduction</p>
        <p className="text-gray-700 py-1 w-2/5">
          This dashboard is meant to streamline the process of verifying and
          fulfilling orders from customers wanting to get a book.
        </p>
        <p className="text-gray-800 text-sm font-semibold py-3 w-2/5">
          VERIFICATION
        </p>
        <p className="text-gray-700 py-1 w-2/5">
          A customer initially must have their form of payment verified. When
          they submit the form on the main page, they specify whether they have
          paid via Zelle or Venmo and then provide us with their phone number or
          username respectively. We start by cross-checking their submitted info
          with the Venmo and Zelle records from Aditya. If the info matches, we
          can mark them as verified. If not, we flag their order and wait for
          them to resolve the issue. More details on this process can be found
          on the Verification doc page.
        </p>
        <p className="text-gray-800 text-sm font-semibold py-3 w-2/5">
          SENDING
        </p>
        <p className="text-gray-700 py-1 w-2/5">
          Once a customer has their payment verified, there are three statuses
          their order goes through: unsent, pending, and sent. They go in the
          exact order they are listed in and cannot be bypassed at any stage. In
          addition, if a sent order has issues requiring resolution, it must be
          labeled as unsent and go through the full process once more. This is
          admittedly a little extra, but this is by design. We are already
          making customers wait a bit of time before sending them their books –
          if the fulfillment workflow is not followed carefully, we can end up
          taking longer to get books in their hands and leave customers
          confused.
        </p>
        <div className="grid grid-cols-5 gap-4 w-full pt-2">
          <p className="text-gray-700 text-xs py-1 col-span-2">
            UNSENT <sup>1</sup>
          </p>
          <p className="text-gray-700 text-xs col-span-3 text-end">
            [1] Pushing status from unsent sends an automated email to the
            customer. Learn more here.
          </p>
        </div>
        <p className="text-gray-700 py-1 w-2/5">
          Immediately after verification, all orders are classified as unsent.
          This is where all orders that are not scheduled for drop off go. Do
          not move an order from unsent unless you are ready for them to know
          their order is on their way and have specific details about the drop
          off you are ready to share with them. At this moment, you can use
          either the individual user actions or group user actions to push to
          the next status – pending.
        </p>
        <div className="grid grid-cols-5 gap-4 w-full pt-2">
          <p className="text-gray-700 text-xs py-1 col-span-2">
            PENDING <sup>2</sup>
          </p>
          <p className="text-gray-700 text-xs col-span-3 text-end">
            [2] Pushing status from pending sends an automated email to the
            customer. Learn more here.
          </p>
        </div>
        <p className="text-gray-700 py-1 w-2/5">
          All orders that have been scheduled for drop off but have not actually
          been received by customers go here. It is important to have a decent
          amount of communication with customers at this time – only push to the
          next status once you are confident they have picked up the book with
          no major issues.
        </p>
        <p className="text-gray-700 text-xs py-1 w-2/5 pt-2">SENT</p>
        <p className="text-gray-700 py-1 w-2/5">
          All orders here have been fulfilled and are in the hands of the
          customers. If something has gone wrong and we want to send them a new
          book, please push the new status and let the order&apos;s record start
          at the beginning – this is inconvenient but helps keep the records in
          the dashboard accurate.
        </p>
      </div>
    </div>
  );
};

export default Document;
