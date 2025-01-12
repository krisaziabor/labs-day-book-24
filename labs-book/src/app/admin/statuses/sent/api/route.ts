export async function GET() {
    const url = process.env.preordersAPIurl + 'sent';
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

        const url = `${process.env.preordersAPIurl}sent?id=${id}`;
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

