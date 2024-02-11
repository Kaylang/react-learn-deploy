import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../App";
import { indexTemplate } from "./indexTemplate";
import axios from 'axios';
import compression from 'compression';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || '3000';
const IS_DEV = process.env.NODE_ENV;

app.use("/static", express.static("./dist/client"));

if (!IS_DEV) {
  app.use(compression());
  app.use(helmet({
    contentSecurityPolicy: false,
  }));
}

app.get("/auth", (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${process.env.REDIRECT_URI}/auth`,
    {
      auth: { username: process.env.CLIENT_ID, password: process.env.SECRET, },
      headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    }
  )
    .then(({ data }) => {
      res.send(indexTemplate(ReactDOM.renderToString(App()), data['access_token']));
    })
    .catch(console.error);
});

app.get('*', (_, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});
