import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.post("/api/generate-dummy-data", async (c) => {
  const body = (await c.req.json()) as unknown as {
    rowCount: number;
    columns: any[];
  };

  console.log(body);
  return c.json({
    downloadUrl:
      "https://www.city.sakura.lg.jp/section/tokei/download/csv/0201000000.csv",
  });
});

const port = 5000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
