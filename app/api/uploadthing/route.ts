import { createRouteHandler } from "uploadthing/next";
import { audioFileRouter } from "./core";

// Handle the routes for file uploads
const handler = createRouteHandler(audioFileRouter);

export default handler;
