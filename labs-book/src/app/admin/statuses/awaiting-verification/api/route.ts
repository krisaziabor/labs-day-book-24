import { ActionRequiredEmailTemplate } from "../../../components/email-user-update";
import { Resend } from 'resend';

export async function GET() {
    const url = process.env.preordersAPIurl + 'awaiting-verification';
    if (!url) {
        return new Response(JSON.stringify({ error: 'adminAPI URL is not defined' }), { status: 500 });
    }
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });

}

export async function PATCH(request: Request) {
    try {
        const requestUrl = new URL(request.url);
        const id = requestUrl.searchParams.get('id');
        const success = requestUrl.searchParams.get('success');

        if (!id) {
            return new Response(JSON.stringify({ error: 'id is required' }), { status: 400 });
        }

        if (!success) {
            return new Response(JSON.stringify({ error: 'success status is required' }), { status: 400 });
        }

        const url = `${process.env.preordersAPIurl}awaiting-verification?id=${id}&success=${success}`;
        if (!url) {
            return new Response(JSON.stringify({ error: 'adminAPI URL is not defined' }), { status: 500 });
        }

        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const message = await response.json();
        if (response.ok) {
            return new Response(JSON.stringify(message), { status: 200 });
        } else {
            return new Response(JSON.stringify(message), { status: 400 });
        }
    } catch (error) {
        console.error('Error updating fulfillment status:', error);
        return new Response(
            JSON.stringify({ error: 'An unexpected error occurred'}),
            { status: 500 }
        );
    }    
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const requestUrl = new URL(request.url);
        const userName = requestUrl.searchParams.get('name');
        if (!userName) {
            return new Response(JSON.stringify({ error: 'name is required' }), { status: 400 });
        }
        const userEmail = requestUrl.searchParams.get('email');
        if (!userEmail) {
            return new Response(JSON.stringify({ error: 'email is required' }), { status: 400 });
        }
        const flagReason = requestUrl.searchParams.get('reason');
        if (!flagReason) {
            return new Response(JSON.stringify({ error: 'reason is required' }), { status: 400 });
        }
        
        const { data, error } = await resend.emails.send({
            from: 'Design at Yale <orders@designatyalebooks.com>',
            to: [userEmail],
            cc: 'DAY Studio <hello@designatyale.com>',
            subject: 'Payment Details Issue',
            react: ActionRequiredEmailTemplate({ userFirstname: userName, flaggingDescription: flagReason }) as React.ReactElement,
        });

        if (error) {
            return new Response(JSON.stringify({ error }), { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(
            JSON.stringify({ error: 'An unexpected error occurred'}),
            { status: 500 }
        );
    }
}