import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"
import fs from "node:fs"

function videoAssetPlugin() {
  const handler = (dir) => (req, res, next) => {
    try {
      const rawUrl = (req.url || "").split("?")[0]
      const decodedPath = decodeURIComponent(rawUrl)
      let filePath = null

      if (decodedPath.startsWith("/home page 2nd section/")) {
        const filename = decodedPath.replace("/home page 2nd section/", "")
        filePath = path.join(dir, "home page 2nd section", filename)
      } else if (decodedPath.startsWith("/videos/")) {
        const filename = decodedPath.replace("/videos/", "")
        filePath = path.join(dir, "videos", filename)
      } else {
        return next()
      }

      if (!fs.existsSync(filePath)) {
        return next()
      }
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        return next()
      }
      const fileSize = stat.size
      const range = req.headers.range

      res.setHeader("Content-Type", "video/mp4")
      res.setHeader("Accept-Ranges", "bytes")
      res.setHeader("Cache-Control", "public, max-age=86400")

      if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
        const chunkSize = end - start + 1
        res.writeHead(206, {
          "Content-Range": `bytes ${start}-${end}/${fileSize}`,
          "Content-Length": chunkSize,
        })
        const stream = fs.createReadStream(filePath, { start, end })
        stream.on("error", () => res.end())
        req.on("close", () => stream.destroy())
        stream.pipe(res)
      } else {
        res.writeHead(200, {
          "Content-Length": fileSize,
        })
        const stream = fs.createReadStream(filePath)
        stream.on("error", () => res.end())
        req.on("close", () => stream.destroy())
        stream.pipe(res)
      }
    } catch {
      next()
    }
  }

  return {
    name: "video-asset-server",
    configureServer(server) {
      server.middlewares.use(
        handler(path.resolve(import.meta.dirname, "./public")),
      )
    },
    configurePreviewServer(server) {
      server.middlewares.use(
        handler(path.resolve(import.meta.dirname, "./dist")),
      )
    },
  }
}

// Standard React + Vite configuration
export default defineConfig({
  plugins: [react(), tailwindcss(), videoAssetPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  server: {
    port: parseInt(process.env.PORT || "5173"),
    host: true,
  },
  preview: {
    port: parseInt(process.env.PORT || "4173"),
    host: true,
  },
})
