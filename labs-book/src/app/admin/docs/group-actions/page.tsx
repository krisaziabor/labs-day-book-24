import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Document: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col text-sm items-start px-4 py-4 mx-20 w-full">
        <p className="font-semibold py-2 w-2/5">Group Actions</p>
        <p className="text-gray-700 py-2 w-2/5">
          Using group actions lets you handle multiple customers at once via the
          sidebar.
        </p>
        <p className="text-gray-800 text-sm font-semibold py-2 w-2/5">
          When to use
        </p>
        <p className="text-gray-700 py-2 w-2/5">
          When you want to interact with a more than one user and you want to
          perform the same task on all of them, this is the most efficient
          practice.
        </p>
        <p className="text-gray-800 text-sm font-semibold py-2 w-2/5">
          An important note
        </p>
        <p className="text-gray-700 py-2 pb-4 w-2/5">
          Please note that you can only perform one action with one universal
          end result with group actions. For example, you cannot verify three
          payments and flag two others in the same action. A custom email sent
          to one customer will be sent to all selected customers. If there is
          any variation in the action you want to perform, you will need to do
          so individually.
        </p>
        <p className="text-gray-800 text-sm font-semibold py-2 w-2/5">
          Actions
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="verify-flag">
            <AccordionTrigger>
              <p className="text-gray-800 text-xs py-2 w-2/5">
                VERIFY/FLAG PAYMENT
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-5 gap-4 w-full pt-2">
                <Image
                  src="/group-verify-dialog.svg"
                  alt="verify-dialog"
                  width={600}
                  height={400}
                  className="py-8 col-span-2"
                />
                <p className="text-gray-700 text-xs col-span-3 text-end self-center">
                  You can either flag or verify a customer&apos;s payment
                  method. <br /> The message you enter under &quot;specify
                  reason for flagging&quot; will be included in the email sent
                  to the customer.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="push-status">
            <AccordionTrigger>
              <p className="text-gray-800 text-xs py-2 w-2/5">
                PUSH NEW STATUS
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-5 gap-4 w-full pt-2">
                <Image
                  src="/group-push-status.svg"
                  alt="push-status"
                  width={600}
                  height={400}
                  className="py-8 col-span-2"
                />
                <p className="text-gray-700 text-xs col-span-3 text-end self-center">
                  You can either flag or verify a customer&apos;s payment
                  method. <br /> The message you enter under &quot;specify
                  reason for flagging&quot; will be included in the email sent
                  to the customer.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="send-email">
            <AccordionTrigger>
              <p className="text-gray-800 text-xs py-2 w-2/5">SEND EMAIL</p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-5 gap-4 w-full pt-2">
                <Image
                  src="/group-send-email.svg"
                  alt="send-email"
                  width={600}
                  height={400}
                  className="py-8 col-span-2"
                />
                <p className="text-gray-700 text-xs col-span-3 text-end self-center">
                  You can send any custom message to a customer. <br />
                  &quot;hello@designatyale.com&quot; will automatically be
                  cc&apos;ed on the email.
                  <br /> Note that any expected response from the customer
                  should be received by hello@designatyale.com.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Document;
