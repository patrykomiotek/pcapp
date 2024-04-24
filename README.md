This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Using Playwright

To initialize for the first time:

`npm init playwright`

To tun tests:

`npx playwright test`

To show reports after above command:

`npx playwright show-report`

To run tests with interactive ui:

`npx playwright test --ui`

To use codegen tool:

`npx playwright codegen`

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t your-username/nextjs-app:latest .`.
1. Or `docker buildx build --platform linux/amd64 -t your-username/nextjs-app:latest .`
1. Push to registry: `docker push your-username/nextjs-app:latest`
1. Run your container: `docker run -p 3000:3000 your-username/nextjs-app`.

Tip to pass env variables use `--build-arg` option eg.: `docker build -t nextjs-app --build-arg database-url=DSN .`

You can view your images created with `docker images`.

## Using Kubernetes

You can change directory to infra or operate from root directory

To apply deployment run:

```bash
kubectl apply -f ./infra/deployment.yaml
```

This command instructs Kubernetes to create and manage the deployment based on the configuration in the YAML file.

### Exposing service

To make our app accessible from outside the cluster, we need to expose it using a Kubernetes Service. Apply service configuration by command:

```bash
kubectl apply -f ./infra/service.yaml
```

### Accessing the App

```bash
kubectl get services nextjs-service
```

### Scaling and updating

To scale your app, you can simply adjust the replicas field in the deployment configuration (`deployment.yaml`). For instance, to scale up to 5 replicas:

```yaml
spec:
  replicas: 5
```

Apply the updated configuration with:

```bash
kubectl apply -f ./infra/deployment.yaml
```

### Updating the App

When you need to update your app, make changes to your code and build a new Docker image. Then, update the image tag in the deployment configuration (`deployment.yaml`):

```yaml
spec:
  template:
    spec:
      containers:
        - name: nextjs-app
          image: nextjs-app:newtag # Update the tag
```

Apply the updated configuration to apply the changes:

```bash
kubectl apply -f ./infra/deployment.yaml
```

### In existing projects

To add support for Docker to an existing project, just copy the [`Dockerfile`](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile) into the root of the project and add the following to the `next.config.js` file:

```js
// next.config.js
module.exports = {
  // ... rest of the configuration.
  output: "standalone",
};
```

This will build the project as a standalone app inside the Docker image.

## Deploying to Google Cloud Run

1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) so you can use `gcloud` on the command line.
1. Run `gcloud auth login` to log in to your account.
1. [Create a new project](https://cloud.google.com/run/docs/quickstarts/build-and-deploy) in Google Cloud Run (e.g. `nextjs-docker`). Ensure billing is turned on.
1. Build your container image using Cloud Build: `gcloud builds submit --tag gcr.io/PROJECT-ID/helloworld --project PROJECT-ID`. This will also enable Cloud Build for your project.
1. Deploy to Cloud Run: `gcloud run deploy --image gcr.io/PROJECT-ID/helloworld --project PROJECT-ID --platform managed --allow-unauthenticated`. Choose a region of your choice.

   - You will be prompted for the service name: press Enter to accept the default name, `helloworld`.
   - You will be prompted for [region](https://cloud.google.com/run/docs/quickstarts/build-and-deploy#follow-cloud-run): select the region of your choice, for example `us-central1`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
