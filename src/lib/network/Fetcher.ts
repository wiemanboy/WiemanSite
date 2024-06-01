export default interface Fetcher {
	get(url: string): Promise<Response>;
	post(url: string, data: unknown): Promise<Response>;
	put(url: string, data: unknown): Promise<Response>;
	delete(url: string): Promise<Response>;
}
