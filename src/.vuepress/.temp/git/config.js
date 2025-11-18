import { GitContributors } from "/Users/memz233/Desktop/Projects/Greatdori/Zeile-Docs/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
  },
};
