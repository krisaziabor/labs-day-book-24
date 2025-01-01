export async function GET() {
    const url = process.env.preordersAPIurl + 'unsent';
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