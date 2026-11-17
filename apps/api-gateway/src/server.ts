
import express, { type Request, type Response } from "express";

const app = express();

const PORT = 4000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "DevTinder AI API Gateway is running",
    service: "api-gateway"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`API Gateway running at http://localhost:${PORT}`);
});
