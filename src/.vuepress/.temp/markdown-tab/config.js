import { CodeTabs } from "/Users/memz233/Desktop/Projects/Greatdori/Zeile-Docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/memz233/Desktop/Projects/Greatdori/Zeile-Docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/memz233/Desktop/Projects/Greatdori/Zeile-Docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
