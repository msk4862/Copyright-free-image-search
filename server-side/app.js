const app = require("express")();
const http = require("http");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT } = require("./utils/config")

const NCIRouter = require("./routes/NCIRouter");
const ServicesList = require("./utils/servicesList");

const hostname = "localhost";
const port = PORT || 8000;

//applying middlewares using use()
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());

app.use("/images", NCIRouter);
app.use((_, res) => {
    res.statusCode = 200;
    res.json({ error: "Use /images to request photos" });
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Backend is running at http://${hostname}:${port}`);
    const services = ServicesList.getEnabledServicesList();
    if (services[0].name == "PlaceholderService") {
        console.log(
            "No services are enabled! Only placeholder results will be shown!"
        );
    } else {
        console.log(
            `Enabled services [${services.length}/${
                ServicesList.getAllServices().length
            }]:`,
            services.map((s) => s.name).join(", ")
        );
    }
});
