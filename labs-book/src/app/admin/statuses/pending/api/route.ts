import { OrderSentEmailTemplate } from "../../../components/email-templates/order-sent";
import { Resend } from 'resend';
import * as React from 'react';

export async function GET() {
    const url = process.env.preordersAPIurl + 'pending';
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

        if (!id) {
            return new Response(JSON.stringify({ error: 'id is required' }), { status: 400 });
        }

        const url = `${process.env.preordersAPIurl}pending?id=${id}`;
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
        const userEmail = requestUrl.searchParams.get('email');
        if (!userEmail) {
            return new Response(JSON.stringify({ error: 'email is required' }), { status: 400 });
        }
        const { data, error } = await resend.emails.send({
            from: 'Design at Yale <orders@designatyalebooks.com>',
            to: [userEmail],
            cc: 'DAY Studio <hello@designatyale.com>',
            subject: 'Enjoy your book!',
            react: OrderSentEmailTemplate({ }) as React.ReactElement,
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