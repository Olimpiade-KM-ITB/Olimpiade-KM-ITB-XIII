const version = process.env.APP_VERSION ?? "dev";

export function GET() {
  return Response.json({ version });
}
