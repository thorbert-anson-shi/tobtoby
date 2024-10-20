# Tobtoby: My Portfolio

### Hey there! If you're looking for the portfolio, it's deployed on GitHub Pages [here](https://thorbert-anson-shi.github.io/tobtoby/)

---

In this README, I aim to document the challenges I face through the process of creating my portfolio, in hopes that I can use this knowledge in the future, and hopefully be of help to anyone else who's facing similar challenges.

# Project Stack

- <code>solidjs</code> for the frontend
- <code>actix-web</code> for the backend
- <code>tailwindcss</code> for styling
- <code>vite</code> as the build tool
- GitHub Pages as the deployment platform

# Version history

### **v0.1.0-alpha** | released: 2024-10-21

I faced some issues on deployment, especially regarding the inclusion of static assets in my built project.

1. When building a project using <code>vite</code>, there are multiple ways to handle static assets:

   - Adding static assets to the <code>/public</code> directory.
   - Changing the <code>publicDir</code> config in <code>vite.config.ts</code> depending on where your static directory is.
   - Importing static assets explicitly using the <code>import <asset_name> from "<file_path>"</code> statement.

   If these steps aren't taken, then <code>vite</code> wouldn't build your project with the static files in it.

2. I had an issue regarding HTML grids and how they don't resize to the size of the child element, even when you specify that the container should have heights and widths of <code>fit-content</code>.

   I worked around this issue by skipping the grind layout completely and instead opting in for a flex container with children elements having a <code>flex-basis</code> of <code>1/n</code>.

   I will be looking more into the grid layout in the future. I think that I was simply using the wrong tool for the job in my case.
