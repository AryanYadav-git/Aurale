// uploadthing.config.ts
import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

export const audioFileRouter = {
  audioUploader: f({
    allowedFileTypes: ["audio/mpeg", "audio/wav", "audio/mp3"], // Allowed audio formats
    maxFileSize: "100MB", // Max file size
  }),
} satisfies FileRouter;

export type AudioFileRouter = typeof audioFileRouter;
