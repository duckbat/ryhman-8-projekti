// ... (previous code)

// User Routes
app.post("/api/users", async (req, res) => {
  try {
    const userData = req.body;
    const result = await usersModel.addUser(userData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await usersModel.deleteUser(userId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/api/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const result = await usersModel.updateUser(userId, userData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ... (remaining code)
