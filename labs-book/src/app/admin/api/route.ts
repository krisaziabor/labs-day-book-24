export async function GET() {
    const response = await fetch('https://ndobo23qh2.execute-api.us-east-1.amazonaws.com/preorders', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });

}