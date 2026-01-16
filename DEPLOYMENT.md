# Deployment Guide - The Eagle Fitness

## Prerequisites
- A GitHub account.
- Git installed on your computer.

## Step 1: Push Code to GitHub
1.  Initialize git if not done:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
2.  Create a new repository on GitHub (e.g., `the-eagle-fitness`).
3.  Link and push:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/the-eagle-fitness.git
    git branch -M main
    git push -u origin main
    ```

## Step 2: Configure GitHub Pages
1.  Go to your repository **Settings** tab.
2.  Click on **Pages** in the left sidebar.
3.  Under **Build and deployment** / **Source**, select **GitHub Actions**.
4.  The action defined in `.github/workflows/deploy.yml` will automatically detect the configuration.

## Step 3: Trigger Deployment
1.  Pushing to `main` branch will automatically trigger the deployment.
2.  Go to the **Actions** tab to see the progress.
3.  Once completed, your site will be live at `https://YOUR_USERNAME.github.io/the-eagle-fitness/`.

## Admin Panel Note
- The Admin Panel uses **LocalStorage** to save gallery images.
- This means changes made (uploading images) are **only visible on the browser you used**.
- If you switch devices, the gallery will be reset to default (empty) or whatever is stored on that device.
- **Recommendation**: For a permanent backend solution, consider upgrading to Firebase or a CMS in the future.

## Updates
- To update content (prices, text), edit the code locally, run `npm run build` to verify, and `git push` to deploy.
