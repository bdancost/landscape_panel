import express from "express";

const posts = [
  {
    id: 1,
    description: "Uma foto teste",
    image: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    description: "Gato brincando com um novelo de lã",
    image: "https://placekitten.com/400/300",
  },
  {
    id: 3,
    description: "Gatinho dormindo em uma caixa",
    image: "https://placekitten.com/200/200",
  },
  {
    id: 4,
    description: "Gato olhando pela janela",
    image: "https://placekitten.com/300/250",
  },
  {
    id: 5,
    description: "Dois gatos brincando",
    image: "https://placekitten.com/500/400",
  },
  {
    id: 6,
    description: "Gatinho comendo ração",
    image: "https://placekitten.com/350/300",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});
