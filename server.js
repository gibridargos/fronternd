import express from "express";
import path from "path";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.static("public"));

const BACKEND_URL = process.env.BACKEND_URL;

// Telegram token bilan login
app.get("/login", async (req, res) => {
  const token = req.query.token;
  if (!token) return res.redirect("/");

  const r = await fetch(`${BACKEND_URL}/api/auth/login?token=${token}`);
  if (!r.ok) return res.send("Login error");

  res.redirect(`/products.html?token=${token}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Frontend running on", PORT));
