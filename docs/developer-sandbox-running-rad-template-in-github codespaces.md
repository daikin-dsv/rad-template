# Developer Sandbox: Running RAD-Template in GitHub Codespaces

This guide explains how to launch, develop, and share the RAD-Template inside [GitHub Codespaces](https://github.com/features/codespaces).
GitHub Codespaces provides a fully configured cloud development environment that runs in the browser.

## Prerequisites

Before you begin, ensure the following:

* You have access to the [RAD Template](https://github.com/daikin-dsv/rad-template/) repository on GitHub.
* You're signed in with a GitHub account that supports Codespaces.
* You have basic familiarity with React / Next.js development

## Launching the App in GitHub Codespaces

### Open in Codespaces

1. Go to the [repository](https://github.com/daikin-dsv/rad-template/) on GitHub.
1. Click the Code button → select the Codespaces tab.
1. Choose "Create new Codespace on main"
1. GitHub will provision a new containerized development environment with all dependencies preinstalled.
Note: Multiple developers can spin up their own Codespace simultaneously without conflicts.

### Start the Application

1. Open the integrated terminal: ``` Ctrl+` ```
1. Run 
`
    npm install
    npm run dev
`
1. When the app starts, GitHub will detect a port and show a prompt "Your application is running on port 3006. Would you like to open it in the browser?"
1. Click "Open in Browser."

This opens a live preview of the app at a Codespaces generated *.app.github.dev URL

### Codespaces Best Practices

1. Stop Codespaces when not in use to conserve compute hours. You can find all your codespaces here: https://github.com/codespaces

### Future Integration: Keycloak

We plan to add authentication testing via Keycloak directly inside Codespaces.
This section will describe how to:
* Set up environment variables for Keycloak client credentials.
* Test login and protected routes from within the Codespace environment.
