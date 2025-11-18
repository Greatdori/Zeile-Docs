export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/ActionSequence.html", { loader: () => import(/* webpackChunkName: "ActionSequence.html" */"/Users/memz233/Desktop/Projects/Greatdori/Zeile-Docs/src/.vuepress/.temp/pages/ActionSequence.html.js"), meta: {"title":"Action Sequence"} }],
  ["/GettingStarted.html", { loader: () => import(/* webpackChunkName: "GettingStarted.html" */"/Users/memz233/Desktop/Projects/Greatdori/Zeile-Docs/src/.vuepress/.temp/pages/GettingStarted.html.js"), meta: {"title":"Getting Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/memz233/Desktop/Projects/Greatdori/Zeile-Docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"The Zeile Scripting Language"} }],
  ["/TypeSystem.html", { loader: () => import(/* webpackChunkName: "TypeSystem.html" */"/Users/memz233/Desktop/Projects/Greatdori/Zeile-Docs/src/.vuepress/.temp/pages/TypeSystem.html.js"), meta: {"title":"The Type System"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"/Users/memz233/Desktop/Projects/Greatdori/Zeile-Docs/src/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":"项目主页","icon":"house"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/memz233/Desktop/Projects/Greatdori/Zeile-Docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
