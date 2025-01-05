import React from "react";
import { Separator } from "@/components/ui/separator";

const Document: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col items-start px-2 py-4 mx-20 w-2/5">
        <p className="font-semibold mb-4">Designing the Workflow</p>
        <p className="text-gray-700 py-1">
          After months of research, designing, and prototyping, this portion of
          the website was not planned whatsoever.
        </p>
        <p className="text-gray-700 py-1">
          I always knew that I wanted our pre-order form to be on the main page
          rather than a Google Forms link. In a website where I intentionally
          produce amounts of friction – given that the book is very brutalist, I
          wanted the web form to celebrate those same design traditions – I
          wanted to also reduce unnecessary amounts of friction wherever
          possible. To simply send users to a Google form and force them to
          manually re-enter the site to take away from the experience. At this
          point, I understood building a custom, on-site form was the best
          strategy to maintain a strong user experience.
        </p>
        <p className="text-gray-700 py-1">
          The initial objective was to build a script that on a form&apos;s
          submission, would send the data to a Google Sheet within DAY Studio&apos;s
          Google Drive. Having learned how to use Google Sheets as a CMS in
          Alvin&apos;s Software for People class, I was confident I could make
          modified scripts to work for this website. However, whether it was a
          sign that I should look elsewhere or simply my impatience, my two-hour
          stint of failure to make the integration work made me think: am I
          trying to fit a round peg in a square box? Sure, using Google Sheets
          would make things accessible and convenient – but couldn&apos;t I just form
          a more accessible and convenient alternative? I was already going to
          be using software like AWS (Amazon Web Services) PostgreSQL and
          Next.js API Routing, so why shouldn&apos;t I use them to build a full
          dashboard?
        </p>
        <p className="text-gray-700 py-1">
          Like that, I dived straight into creating this site. The extra work
          ended up being more of a blessing than a curse, as I was given a test
          run at these technologies before applying them to the front-facing
          site.
        </p>
        <p className="text-gray-800 text-sm font-semibold py-3">
          DESIGN REQUIREMENTS
        </p>
        <p className="text-gray-700 py-2">
          When building the admin dashboard, there were a few requirements I
          told myself the site needed to meet.
        </p>
        <p className="text-gray-700 text-xs py-1">AUTHENTICATION</p>
        <p className="text-gray-700 py-1">
          The dashboard hosts a bunch of important data on our customers as well
          as the functionality to send emails out to anyone on the list. Placing
          the entirety of the page behind a trusted authentication wall was on
          the top of my priorities. I did not want to just lock the contents
          behind a secret code I would spread in DAY group chats – this requires
          a proper security SDK used in applications worldwide.
        </p>
        <p className="text-gray-700 text-xs py-1">
          BALANCE BETWEEN CUSTOMIZATION AND ESTABLISHED PRACTICE
        </p>
        <p className="text-gray-700 py-1">
          As the sole designer and engineer of this project, I have full
          creative liberties to determine how users should interact with the
          page. I have chosen to balance this influence with certain features
          granting users freedom – whether it is sending custom messages to
          customers or determining whether they want to fulfill orders
          individually or in groups, the dashboard is not fully restrictive. At
          the same time, I want the experience for our customers to be universal
          and structured. To ensure this, certain things are a must in the
          workflow – e.p., orders must formally go through the pending stage
          before being marked as sent.
        </p>
        <p className="text-gray-700 text-xs py-1">A MINIMALIST UI</p>
        <p className="text-gray-700 py-1">
          Given that I am abandoning familiar tools like Google Sheets, Forms,
          and Gmail for this workflow, the website should be visually simple and
          only consist of what is necessary. Elaborate designs and cosmetic
          detail is being pushed away in favor of ease of use.
        </p>
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-col items-start px-2 py-4 mx-20 w-1/5">
        <p className="text-gray-700 text-xs py-1">
          [1] Tutorial from Alvin Ashiatey on using Google Sheets as a CMS.
        </p>
      </div>
      <div className="flex flex-col items-start px-2 py-4 mx-20 w-1/5">
        <p>Images/media go here</p>
      </div>
    </div>
  );
};

export default Document;
