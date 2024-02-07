module.exports = {
  title: "Cow Design",
  description: "Cow Design 文档",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "组件",
        link: "/components/",
      },
    ], // 把定义的nav给替换进来
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }, // 右上角github图标
    ],
  },
};
