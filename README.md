# Tobtoby: My Portfolio

### Hey there! If you're looking for the portfolio, it's deployed on GitHub Pages [here](https://thorbert-anson-shi.github.io/tobtoby/)

---

In this README, I aim to document the challenges I face through the process of creating my portfolio, in hopes that I can use this knowledge in the future, and hopefully be of help to anyone else who's facing similar challenges.

# Project Stack

- `solidjs` for the frontend
- `actix-web` for the backend
- `tailwindcss` for styling
- `vite` as the build tool
- GitHub Pages as the deployment platform

# Version history

### **v0.1.0-alpha** | released: 2024-10-21

I faced some issues on deployment, especially regarding the inclusion of static assets in my built project.

1. When building a project using `vite`, there are multiple ways to handle static assets:

   - Adding static assets to the `/public` directory.
   - Changing the `publicDir` config in `vite.config.ts` depending on where your static directory is.
   - Importing static assets explicitly using the `import <asset_name> from "<file_path>"` statement.

   If these steps aren't taken, then `vite` wouldn't build your project with the static files in it.

2. I had an issue regarding HTML grids and how they don't resize to the size of the child element, even when you specify that the container should have heights and widths of `fit-content`.

   I worked around this issue by skipping the grid layout completely and instead opting in for a flex container with children elements having a `flex-basis` of `1/n`.

   I will be looking more into the grid layout in the future. I think that I was simply using the wrong tool for the job in my case.

### **v0.2.0-alpha** | released: 2024-11-26

I added an experiences section and made some small UI changes to make the page look nicer and less empty. The following were some of the more meaningful changes I made.

1. Previously, I'd been using `div`s for every top level container. I've changed them to `section`s for better semantics and readability.

2. I leave the job of section layout to the top level `App` component. This allows me to focus on styling each section independently of each other without worrying about the components' placement.

Also, look at that adorable favicon 🥺✨

### **v0.3.0-alpha** | released: 2025-1-31

I added dark mode using SolidJS's context tools. In addition to that, I also added a circular cursor that works with both light and dark mode.

I also added a typewriter effect on the homepage. I think it looks quite neat, and is quite easy to implement if I ever need to use it in the future.