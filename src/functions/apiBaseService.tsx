import { paths } from "../apischema";
import createClient from "openapi-fetch";

export const apiBaseUrl = "/api";
const client = createClient<paths>({ baseUrl: apiBaseUrl });

function handleError(error: any, response?: Response) {
  const status = response?.status ?? 500;
  const message =
    error?.detail
      ? JSON.stringify(error.detail)
      : response?.statusText ?? "Unknown error";
  throw new Response(message, { status });
}

async function fetchFromApi(
  path: string,
  options?: any
): Promise<{ data: any; response: Response }> {
  const init = options ? [options] : [];
  const { data, error, response } = await client.GET(path as any, ...init);

  if (error) {
    handleError(error, response);
  }
  return { data, response: response! };
}

export default fetchFromApi;
