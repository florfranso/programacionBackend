import express, {json, urlencoded} from "express";
import path, { dirname, join } from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import routes from "./routes/index.js";

const app = express();
const PORT = "8080";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/", routes);
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));

app.engine(
    "hbs",
    engine({
    extname: ".hbs",
    defaultLayout: join(__dirname, "/views/layouts/index.hbs"),
    layoutsDir: join(__dirname, "/views/layouts"),
    partialsDir: join(__dirname, "/views/partials")
}));

app.set("view engine", "hbs");
app.set("views", join(__dirname, "/views"));

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

app.on("error", (error) => {
    console.log(error);
});