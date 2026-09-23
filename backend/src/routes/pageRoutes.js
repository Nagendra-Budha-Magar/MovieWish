import { getHome, getAbout } from "../controllers/pageControlller.js";

export function pageRoutes(req, res) {
  switch (`${req.method} ${req.url}`) {
    case "GET /":
      getHome(req, res);
      break;
    case "GET /about":
      getAbout(req, res);
      break;
    default:
      res.statusCode = 404;
      res.end("404: Page not Found");
  }
}
