
import express, { type Request, type Response } from "express";

const app = express();

const PORT = 4001;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "DevTinder AI Auth Service is running",
    service: "auth-service"
  });
});

// Start the Auth Service
app.listen(PORT, () => {
  console.log(`Auth Service running at http://localhost:${PORT}`);
});
