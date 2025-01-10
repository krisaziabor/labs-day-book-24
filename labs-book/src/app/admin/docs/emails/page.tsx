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
        <p className="font-semibold py-2 w-2/5">Automated Emails</p>
        <p className="text-gray-700 py-2 w-2/5">
          Learn how automated emails are sent to customers depending on the acts
          you perform on the dashboard.
        </p>
        <p className="text-gray-800 text-sm font-semibold py-2 w-2/5">
          Introduction
        </p>
        <p className="text-gray-700 py-2 w-2/5">
          To keep customers informed about orders and payments, I have set up
          Resend&apos;s API to send automated emails after certain events happen
          to a user&apos;s order. These all come from
          &quot;orders@designatyalebooks.com&quot;. However, it is important to
          note that customers cannot respond to that email address, so all
          responses will be coming to &quot;hello@designatyale.com&quot;.
        </p>
        <p className="text-gray-800 text-sm font-semibold py-2 w-2/5">
          An important note
        </p>
        <p className="text-gray-700 py-2 pb-4 w-2/5">
          The &quot;orders@designatyalebooks.com&quot; email address cannot be
          accessed outside of the Resend dashboard. If at any point you want to
          verify that an email was sent or see the contents of an email, please
          reach out to me and I will give you access to the account.
        </p>
        <p className="text-gray-800 text-sm font-semibold py-2 w-2/5">
          Email Types
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="verify-flag">
            <AccordionTrigger>
              <p className="text-gray-800 text-xs py-2 w-2/5">
                PAYMENT WAS FLAGGED
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-5 gap-4 w-full pt-2">
                <Image
                  src="/flag-email.png"
                  alt="verify-dialog"
                  width={600}
                  height={400}
                  className="py-8 col-span-2"
                />
                <p className="text-gray-700 text-xs col-span-3 text-end self-center">
                  When you flag a payment method, you are required to list a
                  reason. <br /> The text you input there will appear in the email at
                  REASON_ENTERED_GOES_HERE in this sentence.
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
