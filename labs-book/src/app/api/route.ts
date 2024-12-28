import { verifyStatus } from "../utils/yalies";

export async function GET(request: Request) {
    const url = new URL(request.url);
    let firstName = url.searchParams.get('firstName') || 'Guest';
    let lastName = url.searchParams.get('lastName') || 'Guest';
    let college = url.searchParams.get('college') || 'Guest';
    let year = url.searchParams.get('year') || 'Guest';

    // remove any non-alphanumeric characters
    firstName = firstName.replace(/[^a-zA-Z0-9 ]/g, '');
    lastName = lastName.replace(/[^a-zA-Z0-9 ]/g, '');
    college = college.replace(/[^a-zA-Z0-9 ]/g, '');

    // check if year is a 4-digit number
    year = year.replace(/[^0-9]/g, '');
    if (year.length !== 4) {
        return new Response("Invalid year format. Please enter a 4-digit year.", { status: 400 });
    }

    if (!await verifyStatus(firstName, lastName, college, year)) {
        return new Response("Hmmmm something didn't quick work out :/ Please make sure you use the name on your Yale ID (if you have tranferred residential colleges, please use the one Yale initially assigned you to)", { status: 400 });
    } else {
        return new Response(`Hey ${firstName}! Thanks for verifying your Yale status :) Please send $12 to @dtyds_ on Venmo or (202)-415-2802 on Zelle! (This is just for us to pay for printing costs)`, { status: 200 });
    }
}

// export async function POST(request: Request) {
// }