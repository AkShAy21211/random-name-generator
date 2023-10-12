import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const randomAdj = adj[Math.floor(Math.random() * adj.length)];
  const randomNoun = adj[Math.floor(Math.random() * adj.length)];
  res.render("index.ejs", {
    adjective: randomAdj,
    noun: randomNoun,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const adj = [
  "akshay",
  "Abigail",
    "Alexander",
    "Amelia",
    "Andrew",
    "Ava",
    "Benjamin",
    "Charlotte",
    "Christopher",
    "David",
    "Elizabeth",
    "Ella",
    "Emily",
    "Emma",
    "Ethan",
    "Grace",
    "Hannah",
    "Isabella",
    "Jackson",
    "James",
    "Joseph",
    "Liam",
    "Lily",
    "Madison",
    "Mason",
    "Matthew",
    "Michael",
    "Oliver",
    "Olivia",
    "Sophia",
    "William",
    "Abigail",
    "Addison",
    "Alexis",
    "Aiden",
    "Avery",
    "Bella",
    "Brooklyn",
    "Carter",
    "Chloe",
    "Daniel",
    "Ella",
    "Evelyn",
    "Gabriel",
    "Grace",
    "Hannah",
    "Isabella",
    "Jacob",
    "James",
    "Liam",
    "Lily",
    "Madison",
    "Mason",
    "Matthew",
    "Michael",
    "Oliver",
    "Olivia",
    "Samuel",
    "Sophia",
    "William",
    "Addison",
    "Alexander",
    "Amelia",
    "Ava",
    "Benjamin",
    "Carter",
    "Charlotte",
    "Christopher",
    "David",
    "Ethan",
    "Elizabeth",
    "Emily",
    "Emma",
    "Evelyn",
    "Gabriel",
    "Hannah",
    "Isabella",
    "Jackson",
    "James",
    "Joseph",
    "Liam",
    "Lily",
    "Madison",
    "Mason",
    "Matthew",
    "Michael",
    "Oliver",
    "Olivia",
    "Sophia",
    "William",
];
