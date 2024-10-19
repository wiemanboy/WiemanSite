export default interface ApiClient {
	get(url: string, queryParams?: Record<string, never>): Promise<Response>;

	post(url: string, data?: unknown, queryParams?: Record<string, never>): Promise<Response>;

	put(url: string, data?: unknown, queryParams?: Record<string, never>): Promise<Response>;

	delete(url: string, queryParams?: Record<string, never>): Promise<Response>;
}
