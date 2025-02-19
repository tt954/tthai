import { createClient } from "@sanity/client";
import {
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_DATASET,
	PUBLIC_SANITY_API_VERSION,
	PUBLIC_SANITY_STUDIO_URL,
} from "$env/static/public";

function assertEnvVariable<T>(value: T | undefined, name: string): T {
	if (value === undefined) {
		throw new Error(`Missing environment variable: ${name}`);
	}
	return value;
}

export default createClient({
	projectId: assertEnvVariable(PUBLIC_SANITY_PROJECT_ID, "PUBLIC_SANITY_PROJECT_ID"),
	dataset: assertEnvVariable(PUBLIC_SANITY_DATASET, "PUBLIC_SANITY_DATASET"),
	apiVersion: PUBLIC_SANITY_API_VERSION || "2025-01-11",
	useCdn: false,
	stega: { studioUrl: PUBLIC_SANITY_STUDIO_URL || "http://localhost:3333" },
});
