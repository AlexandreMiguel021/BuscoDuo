export {}

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MONGODB_URI: string
			MONGODB_DB: string
			NEXT_PUBLIC_API: string
			JWT_SECRET: string
			ENV: 'devlopment' | 'production'
		}
	}
}
