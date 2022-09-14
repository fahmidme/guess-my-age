import { useFetcher } from "@remix-run/react";

export default function Play() {
    const agify = useFetcher();
    const { name, age, count } = agify.data || {};

    return (
      <main>
        <h1>Play</h1>
        <agify.Form method="get" action="/play/fetch-agify">
            <p>
                <label>
                Name: <input name="name" type="text" />
                </label>
            </p>
            <p>
                <button type="submit">Guess My Age</button>
            </p>
        </agify.Form>

        {agify.data && (
            agify.data.error ? (
                <p>{agify.data.error}</p>
            ) : (
                <div>
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                    <p>Count: {count}</p>
                </div>
            )
        )}
      </main>
    );
  }