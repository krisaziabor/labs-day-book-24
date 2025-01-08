import React from "react";

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
        <p className="font-semibold py-2 w-2/5">Colophon</p>
        <p className="text-gray-700 py-2 w-2/5">
          An appreciation of the people and tools that made this project
          possible.
        </p>
        <p className="text-gray-700 py-2 pb-4 w-2/5">
          After a few weeks of watching YouTube tutorials, pushing dozens of
          GitHub commits, calls to my uncle (truly bless Daniel), and yapping to
          myself through voice memos to finish this documentation, I want to end
          this work process by listing resources and tools that helped me
          produce this software.
        </p>
        <div className="grid grid-cols-5 gap-4 w-full pt-2">
          <div className="col-span-2">
            <p className="text-gray-800 text-sm font-semibold py-2 w-2/5">
              Backend
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="aws">
                <AccordionTrigger>
                  <p className="text-gray-800 text-xs py-2 w-2/5">
                    AMAZON WEB SERVICES (AWS)
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col text-sm items-start w-full">
                    <p className="text-gray-700 py-2 w-full">
                      AWS is the core of this site&apos;s backend. It stores my{" "}
                      <b>
                        <a href="https://aws.amazon.com/rds/">RDS &#8599;</a>
                      </b>{" "}
                      PostgreSQL database, the{" "}
                      <b>
                        <a href="https://aws.amazon.com/lambda/">
                          Lambda &#8599;
                        </a>
                      </b>{" "}
                      functions that power the API, and their{" "}
                      <b>
                        <a href="https://aws.amazon.com/api-gateway/">
                          API Gateway &#8599;
                        </a>
                      </b>{" "}
                      to manage the API endpoints.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="nodejs">
                <AccordionTrigger>
                  <p className="text-gray-800 text-xs py-2 w-2/5">NODE.JS</p>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col text-sm items-start w-full">
                    <p className="text-gray-700 py-2 w-full">
                      <b>
                        <a href="https://nodejs.org/en">Node.js &#8599;</a>
                      </b>{" "}
                      powers all my Lambda functions and is vital for the
                      additional scripts running in the middleware.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="are.na">
                <AccordionTrigger>
                  <p className="text-gray-800 text-xs py-2 w-2/5">CLERK</p>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col text-sm items-start w-full">
                    <p className="text-gray-700 py-2">
                      <b>
                        <a href="https://clerk.com/">Clerk &#8599;</a>
                      </b>{" "}
                      is an authentication service I used to secure the
                      dashboard, allowing only studio members access.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="case-study">
                <AccordionTrigger>
                  <p className="text-gray-800 text-xs py-2 w-2/5">
                    NEXT.JS&apos;s API ROUTES
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col text-sm items-start w-full">
                    <p className="text-gray-700 py-2">
                      <b>
                        <a href="https://nextjs.org">NEXT.js &#8599;</a>
                      </b>{" "}
                      , my frontend framework, offers a simple way to create a
                      public API. Combining a private and public API allowed me
                      to increase security while also providing an easy watch to
                      fetch and update data.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-2">
            <p className="text-gray-800 text-sm font-semibold py-2 w-2/5">
              Frontend & Design
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="next-js">
                <AccordionTrigger>
                  <p className="text-gray-800 text-xs py-2">NEXT.JS</p>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col text-sm items-start w-full">
                    <p className="text-gray-700 py-2">
                      Really the only frontend framework I ever considered
                      using.
                      <b>
                        <a href="https://nextjs.org/">Next.js &#8599;</a>
                      </b>{" "}
                      has become my default tool when I want to build a website.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shadcn">
                <AccordionTrigger>
                  <p className="text-gray-800 text-xs py-2 w-2/5">SHADCN UI</p>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col text-sm items-start w-full">
                    <p className="text-gray-700 py-2">
                      This guy is truly incredible. Like out of this world. His{" "}
                      <b>
                        <a href="https://ui.shadcn.com/">suite &#8599;</a>
                      </b>{" "}
                      of UI components are incredibly easy to implement and
                      customize. Everything from the data table to the sidebar
                      and the actions that power this site all originate from
                      his source code.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="assets">
                <AccordionTrigger>
                  <p className="text-gray-800 text-xs py-2 w-2/5">
                    TYPEFACE & ICONS
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col text-sm items-start w-full">
                    <p className="text-gray-700 py-2">
                      A beautiful{" "}
                      <b>
                        <a href="https://lucide.dev/icons/">
                          collection &#8599;
                        </a>
                      </b>{" "}
                      of icons by Lucide that I used to add some personality to
                      the dashboard. I went back to the DAY classic{" "}
                      <b>
                        <a href="https://abcdinamo.com/typefaces/diatype">
                          ABC Diatype &#8599;
                        </a>
                      </b>{" "}
                      for a familiar typeface.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="figma">
                <AccordionTrigger>
                  <p className="text-gray-800 text-xs py-2 w-2/5">FIGMA</p>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col text-sm items-start w-full">
                    <p className="text-gray-700 py-2">
                      For the first time in ages, I did not start a project in{" "}
                      <b>
                        <a href="https://figma.com">Figma &#8599;</a>
                      </b>
                      . No wireframes or mockups were made in the initial
                      stages. However, it was an extremely helpful tool to
                      replicate components that I have inserted into the various
                      documentation pages.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <p className="text-gray-800 text-sm font-semibold py-2 pt-8 w-2/5">
          And everything outside and in between
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="2">
            <AccordionTrigger>
              <p className="text-gray-800 text-xs py-2 w-2/5">
                THE ARE.NA CHANNEL
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col text-sm items-start w-full">
                <p className="text-gray-700 py-2 w-2/5">
                  I documented every video tutorial and documentation guide I
                  used for this dashboard and the main page{" "}
                  <b>
                    <a href="https://www.are.na/kris-aziabor-byxkuha5zqa/day-book-2024">
                      here
                    </a>
                  </b>
                  .
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="4">
            <AccordionTrigger>
              <p className="text-gray-800 text-xs py-2 w-2/5">
                THE REPOSITORY
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col text-sm items-start w-full">
                <p className="text-gray-700 py-2 w-2/5">
                  Interested in the source code that made this happen?
                  <br />{" "}
                  <b>
                    <a href="https://github.com/designatyale/book-24">
                      This GitHub repository &#8599;
                    </a>
                  </b>{" "}
                  hosts all the code that powers this dashboard.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>
              <p className="text-gray-800 text-xs py-2 w-2/5">
                MY CASE STUDY (OTW)
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col text-sm items-start w-full">
                <p className="text-gray-700 py-2 w-2/5">
                  Coming soon to{" "}
                  <b>
                    <a href="https://krisaziabor.com">my website</a>
                  </b>
                  ! I&apos;ll be writing two case studies on the process of
                  building this dashboard and the main page.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="1">
            <AccordionTrigger>
              <p className="text-gray-800 text-xs py-2 w-2/5">
                MEDIA THAT IS KEEPING ME ALIVE
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col text-sm items-start w-full">
                <p className="text-gray-700 py-2 w-2/5">
                  Outside of 3am tennis matches streamed on shady websites and
                  excrutiatingly painful Arsenal matches (our season is so
                  cooked), I&apos;ve been listening to a lot of music and
                  watching a lot of TV. Here are some of my favorites:
                </p>
                <p className="text-gray-700 py-2 w-2/5">
                  TV -&gt; Shrinking, Sex and the City, Skins (UK) & Curb
                  Your Enthusiasm&apos;s final season :(
                </p>
                <p className="text-gray-700 py-2 w-2/5">
                  Music -&gt; Made y&apos;all a whole playlist!
                </p>
                <iframe
                  allow="autoplay *; encrypted-media *;"
                  frameBorder="0"
                  height="450"
                  style={{ width: "100%", maxWidth: "660px", overflow: "hidden", background: "transparent" }}
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src="https://embed.music.apple.com/us/playlist/dev-day-book-24/pl.u-RRbVzBJImylNxp1"
                ></iframe>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Document;
