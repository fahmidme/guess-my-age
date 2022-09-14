import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export const loader:LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    const name = url.searchParams.get("name")
    const fetchURL = `https://api.agify.io?name=${name}`;

    const agifyAPI = await (await fetch(fetchURL)).json();

    return json(agifyAPI);
}