declare module "cloudflare:workers" {
  // Cloudflare injects bindings at runtime; the exact shape is project-specific.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const env: Record<string, any>;
}
