export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/GettingStarted.html", { loader: () => import(/* webpackChunkName: "GettingStarted.html" */"/Users/memz233/Desktop/Projects/Greatdori/Zeile-Docs/src/.vuepress/.temp/pages/GettingStarted.html.js"), meta: {"title":"Getting Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/memz233/Desktop/Projects/Greatdori/Zeile-Docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"The Zeile Scripting Language"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"/Users/memz233/Desktop/Projects/Greatdori/Zeile-Docs/src/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":"项目主页","icon":"house"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/memz233/Desktop/Projects/Greatdori/Zeile-Docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
