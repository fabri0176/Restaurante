import routesClient from "./routes.client";
import routesAdmin from "./routes.admin";

const routes = [
    ...routesAdmin,
    ...routesClient
];

export default routes;