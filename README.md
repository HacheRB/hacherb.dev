# Personal Portfolio

My personal portfolio built with Next.js. WIP

## Tech

- Next.js
- Tailwind CSS
- TypeScript

## Technologies Used

- **Next.js**: A powerful React framework that enables server-side rendering and generating static websites for React based web applications.

- **Tailwind CSS**: A utility-first CSS framework that is highly customizable and allows for rapid UI development.

- **TypeScript**: A statically typed superset of JavaScript that adds types to the language. It helps to write safer and more understandable code.

## Installation and Running Instructions

Follow these steps to install and run the project:

1. **Clone the repository**: First, you need to clone the repository to your local machine. You can do this using the following command:

```bash
git clone <repository-url>
```

2. **Navigate to the project directory**: Use the command line to navigate into the directory of the project.

```bash
cd <project-directory>
```

3. **Install the dependencies**: This project uses `pnpm` for package management. To install all the dependencies, run the following command:

```bash
pnpm install
```

4. **Run the project**: After the installation of the dependencies is complete, you can run the project using the following command:

```bash
pnpm dev
```

The application will start running on your local machine, and you can access it by navigating to `http://localhost:3000` (or the port number specified in your terminal) in your web browser.

## Considerations

- **Commitizen and Inquirer Compatibility**: The `cz-commitlint` package requires `Inquirer@8` as a peer dependency. It's important not to upgrade Inquirer beyond the major version 8 (i.e., 8.X.X) as it can cause compatibility issues and break the CLI.

- **Next-intl and Turbopack Compatibility**: When using `turbopack` with the `--turbo` flag in development mode, `next-intl` doesn't perform as expected. Specifically, Hot Module Replacement (HMR) doesn't swap languages. However, when running the application with `pnpm dev`, the setup works fine. This seems to be a specific issue with the interaction between `next-intl` and `turbopack`.
