Deeplocal and Google partnered for I/O 2019 to build an origami how-to website that demonstrates How To rich results on Google search and within the Assistant ecosystem. This sample shows that you can add JSON-LD or markup to your sites to serve existing content to additional audiences.

This sample was written to run on Google App Engine, but How Tos work with any publicly available web server.

## Steps to Set Up and Run
1. Clone the repository
2. Install dependencies: `npm install`
3. Generate stylesheet: `sass --update public/scss/main.scss public/css/style.css`
4. Run locally: `npm start`
5. Set up a new Google Cloud project and the gcloud command-line tool: [Quickstart](https://cloud.google.com/pubsub/docs/quickstart-cli)
6. Deploy to App Engine: `gcloud app deploy`
