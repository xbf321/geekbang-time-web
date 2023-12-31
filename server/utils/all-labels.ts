const labels = [
  {
    display_type: 3,
    lid: 3,
    count: 792,
    sort: 135,
    icon: "https://static001.geekbang.org/resource/image/8b/2a/8bac8aaebda64638a859d29866641e2a.png",
    name: "后端/架构",
    es_icon:
      "https://static001.geekbang.org/resource/image/e3/bd/e3d2d27febc892b124e5387d30e86abd.png",
    pid: 0,
  },
  {
    display_type: 3,
    lid: 4,
    count: 426,
    sort: 7,
    icon: "https://static001.geekbang.org/resource/image/94/7f/9453e7d37801008e876f5b927af8c27f.png",
    name: "管理/成长",
    es_icon:
      "https://static001.geekbang.org/resource/image/8d/8b/8d61c67d874912c923aaf08e6ea7548b.png",
    pid: 0,
  },
  {
    display_type: 3,
    lid: 5,
    count: 265,
    sort: 130,
    icon: "https://static001.geekbang.org/resource/image/40/f1/4019851e2472c46fyy5c8414f7d0e4f1.png",
    name: "前端/移动",
    es_icon:
      "https://static001.geekbang.org/resource/image/a0/aa/a0fe1de257a6f3ed08d2248b5dd2f6aa.png",
    pid: 0,
  },
  {
    display_type: 3,
    lid: 6,
    count: 220,
    sort: 9,
    icon: "https://static001.geekbang.org/resource/image/74/da/7463f34778d8bb92c06bd362a7800cda.png",
    name: "运维/测试",
    es_icon:
      "https://static001.geekbang.org/resource/image/23/fa/23e45a346190c42fe0a1da381fa9aafa.png",
    pid: 0,
  },
  {
    display_type: 3,
    lid: 7,
    count: 59,
    sort: 8,
    icon: "https://static001.geekbang.org/resource/image/0c/2f/0cfcba05ba76d4b88937b36049573d2f.png",
    name: "产品/运营",
    es_icon:
      "https://static001.geekbang.org/resource/image/95/34/95f25e988995e669bd29377752de3b34.png",
    pid: 0,
  },
  {
    display_type: 3,
    lid: 8,
    count: 241,
    sort: 10,
    icon: "https://static001.geekbang.org/resource/image/86/d4/866141787e6e49b1f9a89a1079545dd4.png",
    name: "AI/大数据",
    es_icon:
      "https://static001.geekbang.org/resource/image/e8/59/e8ff63181407a7ba22102b641521f659.png",
    pid: 0,
  },
  {
    display_type: 3,
    lid: 9,
    count: 72,
    sort: 120,
    icon: "https://static001.geekbang.org/resource/image/d1/47/d1441dc51557f91be02305efc94c1947.png",
    name: "计算机基础",
    es_icon:
      "https://static001.geekbang.org/resource/image/89/34/890c04a9c3a09d3c3a5ef43a25ffac34.png",
    pid: 0,
  },
  {
    display_type: 3,
    lid: 10,
    count: 83,
    sort: 50,
    icon: "https://static001.geekbang.org/resource/image/36/0c/3693bd7769db46ed406fb67cdf12370c.png",
    name: "Java",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 11,
    count: 21,
    sort: 48,
    icon: "https://static001.geekbang.org/resource/image/c5/8b/c5a81f99294bc6c85a13bf913403388b.png",
    name: "Go",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 12,
    count: 12,
    sort: 46,
    icon: "https://static001.geekbang.org/resource/image/02/6f/02f2f3b53dbd9dc71a827c5daee02a6f.png",
    name: "Python",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 13,
    count: 165,
    sort: 4,
    icon: "https://static001.geekbang.org/resource/image/27/ca/27d6dcb073a89878fdabeee97e03d8ca.png",
    name: "数据库",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 14,
    count: 116,
    sort: 5,
    icon: "https://static001.geekbang.org/resource/image/87/6f/87cd4a4400d2418ab6ee31f54b748f6f.png",
    name: "微服务",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 16,
    count: 105,
    sort: 7,
    icon: "https://static001.geekbang.org/resource/image/3c/28/3caf91e570e23bdca410773e19d75128.png",
    name: "案例",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 17,
    count: 47,
    sort: 16,
    icon: "https://static001.geekbang.org/resource/image/85/f2/850ddd018aefe4c22e00afb9eb37dcf2.png",
    name: "中间件",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 18,
    count: 23,
    sort: 10,
    icon: "https://static001.geekbang.org/resource/image/17/e2/17d7708a9a17304e7c6e423e367074e2.png",
    name: "DDD",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 19,
    count: 24,
    sort: 11,
    icon: "https://static001.geekbang.org/resource/image/d0/e2/d0cac9392f038335509d9a20fd6752e2.png",
    name: "中台",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 20,
    count: 70,
    sort: 17,
    icon: "https://static001.geekbang.org/resource/image/fc/59/fca9051a168ca00dd8577562c5d4e459.png",
    name: "分布式",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 21,
    count: 19,
    sort: 13,
    icon: "https://static001.geekbang.org/resource/image/57/66/57c4eeded7yy6104279e3bec3b264b66.png",
    name: "全栈",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 22,
    count: 101,
    sort: 18,
    icon: "https://static001.geekbang.org/resource/image/c5/c2/c5f8e52953f17ef264e30dc8e36798c2.png",
    name: "基本功",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 23,
    count: 45,
    sort: 15,
    icon: "https://static001.geekbang.org/resource/image/aa/88/aac4edfd4d64a1837b61ba4889879188.png",
    name: "区块链",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 24,
    count: 6,
    sort: 1,
    icon: "https://static001.geekbang.org/resource/image/91/16/91b1730138a647eda733cf7e90d9fe16.png",
    name: "OKR",
    es_icon: "",
    pid: 4,
  },
  {
    display_type: 3,
    lid: 25,
    count: 20,
    sort: 2,
    icon: "https://static001.geekbang.org/resource/image/d1/9f/d13be2f7d6b0f4504b7bf25292c39c9f.png",
    name: "新经理",
    es_icon: "",
    pid: 4,
  },
  {
    display_type: 3,
    lid: 26,
    count: 39,
    sort: 50,
    icon: "https://static001.geekbang.org/resource/image/91/c2/91b29f3b3ce96d0e1d6827a2aab4ebc2.png",
    name: "研发效能",
    es_icon: "",
    pid: 4,
  },
  {
    display_type: 3,
    lid: 27,
    count: 61,
    sort: 48,
    icon: "https://static001.geekbang.org/resource/image/62/e6/6223142832c5e0c737eef0b0db95fbe6.png",
    name: "团队管理",
    es_icon: "",
    pid: 4,
  },
  {
    display_type: 3,
    lid: 28,
    count: 289,
    sort: 46,
    icon: "https://static001.geekbang.org/resource/image/3a/78/3a1e020afa3674b27a3bc8346b3f4078.png",
    name: "个人成长",
    es_icon: "",
    pid: 4,
  },
  {
    display_type: 3,
    lid: 29,
    count: 24,
    sort: 7,
    icon: "https://static001.geekbang.org/resource/image/21/4a/2138481ba965774c9118097f4a2cca4a.png",
    name: "项目管理",
    es_icon: "",
    pid: 4,
  },
  {
    display_type: 3,
    lid: 30,
    count: 16,
    sort: 50,
    icon: "https://static001.geekbang.org/resource/image/36/44/36f97f1710da189d90c98a3e84cbb544.png",
    name: "JavaScript",
    es_icon: "",
    pid: 5,
  },
  {
    display_type: 3,
    lid: 31,
    count: 11,
    sort: 2,
    icon: "https://static001.geekbang.org/resource/image/99/26/990f55e4eyya18f195813512ff93dd26.png",
    name: "TypeScript",
    es_icon: "",
    pid: 5,
  },
  {
    display_type: 3,
    lid: 32,
    count: 144,
    sort: 3,
    icon: "https://static001.geekbang.org/resource/image/15/2f/150e0b764a74206f320d1yybed06482f.png",
    name: "框架",
    es_icon: "",
    pid: 5,
  },
  {
    display_type: 3,
    lid: 33,
    count: 35,
    sort: 46,
    icon: "https://static001.geekbang.org/resource/image/24/21/244d0140abb341917bcf32f2476ef721.png",
    name: "Android",
    es_icon: "",
    pid: 5,
  },
  {
    display_type: 3,
    lid: 34,
    count: 25,
    sort: 48,
    icon: "https://static001.geekbang.org/resource/image/e4/de/e4936065d74fd471f41ec7c43991b6de.png",
    name: "iOS",
    es_icon: "",
    pid: 5,
  },
  {
    display_type: 3,
    lid: 35,
    count: 2,
    sort: 7,
    icon: "https://static001.geekbang.org/resource/image/bc/d0/bc60a12fdcc5c887a6c384297fc121d0.png",
    name: "Kotlin",
    es_icon: "",
    pid: 5,
  },
  {
    display_type: 3,
    lid: 36,
    count: 1,
    sort: 8,
    icon: "https://static001.geekbang.org/resource/image/da/0a/da1ceee6d3bfd5991c32357e0805bb0a.png",
    name: "Swift",
    es_icon: "",
    pid: 5,
  },
  {
    display_type: 3,
    lid: 37,
    count: 34,
    sort: 9,
    icon: "https://static001.geekbang.org/resource/image/a4/24/a4d22546b31ffc6cc309ba398840ec24.png",
    name: "浏览器",
    es_icon: "",
    pid: 5,
  },
  {
    display_type: 3,
    lid: 38,
    count: 21,
    sort: 10,
    icon: "https://static001.geekbang.org/resource/image/23/63/23d3a18340acf116a8eec8dfa6869b63.png",
    name: "音视频",
    es_icon: "",
    pid: 5,
  },
  {
    display_type: 3,
    lid: 39,
    count: 7,
    sort: 11,
    icon: "https://static001.geekbang.org/resource/image/90/76/90bc61ee82fc0143d7f5f6d8ebf01576.png",
    name: "webpack",
    es_icon: "",
    pid: 5,
  },
  {
    display_type: 3,
    lid: 40,
    count: 7,
    sort: 12,
    icon: "https://static001.geekbang.org/resource/image/3y/66/3yyf2a07a78ef15b0edf948e34ed8f66.png",
    name: "网络",
    es_icon: "",
    pid: 5,
  },
  {
    display_type: 3,
    lid: 41,
    count: 16,
    sort: 13,
    icon: "https://static001.geekbang.org/resource/image/25/ff/25c55982dafcbefcd3471e95851fbcff.png",
    name: "Node.js",
    es_icon: "",
    pid: 5,
  },
  {
    display_type: 3,
    lid: 42,
    count: 32,
    sort: 1,
    icon: "https://static001.geekbang.org/resource/image/95/50/9566c5edf9be8f1b17yyf962688ba950.png",
    name: "Kubernetes",
    es_icon: "",
    pid: 6,
  },
  {
    display_type: 3,
    lid: 43,
    count: 29,
    sort: 2,
    icon: "https://static001.geekbang.org/resource/image/53/4f/5395f6688c5ed8678ab156105782a84f.png",
    name: "DevOps",
    es_icon: "",
    pid: 6,
  },
  {
    display_type: 3,
    lid: 44,
    count: 26,
    sort: 3,
    icon: "https://static001.geekbang.org/resource/image/c7/93/c7aee2e365076c4b34b70c722e576493.png",
    name: "运维管理",
    es_icon: "",
    pid: 6,
  },
  {
    display_type: 3,
    lid: 45,
    count: 12,
    sort: 50,
    icon: "https://static001.geekbang.org/resource/image/26/19/26d10fc4b65987ea5286309bed883719.png",
    name: "CI/CD",
    es_icon: "",
    pid: 6,
  },
  {
    display_type: 3,
    lid: 46,
    count: 32,
    sort: 5,
    icon: "https://static001.geekbang.org/resource/image/cf/f7/cfe77d3723118cdc477848618da226f7.png",
    name: "安全",
    es_icon: "",
    pid: 6,
  },
  {
    display_type: 3,
    lid: 47,
    count: 29,
    sort: 46,
    icon: "https://static001.geekbang.org/resource/image/9b/6d/9b0559e6856565d98b20181aab9c5d6d.png",
    name: "测试",
    es_icon: "",
    pid: 6,
  },
  {
    display_type: 3,
    lid: 48,
    count: 12,
    sort: 7,
    icon: "https://static001.geekbang.org/resource/image/5c/f4/5cfa0def9872cd1c2f22e1bc9e7b5af4.png",
    name: "Linux",
    es_icon: "",
    pid: 6,
  },
  {
    display_type: 3,
    lid: 49,
    count: 26,
    sort: 8,
    icon: "https://static001.geekbang.org/resource/image/90/74/9026892055b36a116b3c702ab43f0974.png",
    name: "性能",
    es_icon: "",
    pid: 6,
  },
  {
    display_type: 3,
    lid: 50,
    count: 16,
    sort: 9,
    icon: "https://static001.geekbang.org/resource/image/b2/07/b284299f17f51b2f6fd75b111c913207.png",
    name: "敏捷开发",
    es_icon: "",
    pid: 6,
  },
  {
    display_type: 3,
    lid: 53,
    count: 11,
    sort: 46,
    icon: "https://static001.geekbang.org/resource/image/1f/f4/1fde74b989840be24472bb417a63bdf4.png",
    name: "运营",
    es_icon: "",
    pid: 7,
  },
  {
    display_type: 3,
    lid: 54,
    count: 14,
    sort: 48,
    icon: "https://static001.geekbang.org/resource/image/41/e0/418d4a8b91fc248ab847833646e44de0.png",
    name: "增长",
    es_icon: "",
    pid: 7,
  },
  {
    display_type: 3,
    lid: 55,
    count: 10,
    sort: 50,
    icon: "https://static001.geekbang.org/resource/image/06/cc/067f33f49b321b0b500c7785a6bb17cc.png",
    name: "产品创新",
    es_icon: "",
    pid: 7,
  },
  {
    display_type: 3,
    lid: 56,
    count: 57,
    sort: 48,
    icon: "https://static001.geekbang.org/resource/image/f3/bc/f3bee04f22b151abc4beb5175d6c37bc.png",
    name: "机器学习",
    es_icon: "",
    pid: 8,
  },
  {
    display_type: 3,
    lid: 57,
    count: 7,
    sort: 2,
    icon: "https://static001.geekbang.org/resource/image/b2/97/b2cb51bcd046ffa69yya033224888197.png",
    name: "数学",
    es_icon: "",
    pid: 8,
  },
  {
    display_type: 3,
    lid: 58,
    count: 51,
    sort: 3,
    icon: "https://static001.geekbang.org/resource/image/ed/fc/edf8a5712e628170737d2eab7ee18afc.png",
    name: "AI算法",
    es_icon: "",
    pid: 8,
  },
  {
    display_type: 3,
    lid: 59,
    count: 20,
    sort: 4,
    icon: "https://static001.geekbang.org/resource/image/58/00/58ffbcaf2d123e93ef7447dfa6375c00.png",
    name: "推荐系统",
    es_icon: "",
    pid: 8,
  },
  {
    display_type: 3,
    lid: 60,
    count: 78,
    sort: 5,
    icon: "https://static001.geekbang.org/resource/image/f1/11/f1ae5326e0b6c8c6eb110d7dce7c9d11.png",
    name: "大数据",
    es_icon: "",
    pid: 8,
  },
  {
    display_type: 3,
    lid: 61,
    count: 7,
    sort: 12,
    icon: "https://static001.geekbang.org/resource/image/f8/55/f80f75b9dbb8e4608c088cd5e8d0c855.png",
    name: "C++",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 64,
    count: 2,
    sort: 22,
    icon: "https://static001.geekbang.org/resource/image/82/59/8216e9ca9a457c1dfb456dd1cafe2f59.png",
    name: "C语言",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 65,
    count: 2,
    sort: 23,
    icon: "https://static001.geekbang.org/resource/image/b5/be/b556c073350297593f07675aa863e5be.png",
    name: ".NET",
    es_icon: "",
    pid: 3,
  },
  {
    display_type: 3,
    lid: 66,
    count: 36,
    sort: 50,
    icon: "https://static001.geekbang.org/resource/image/d3/49/d3176f92ce4f8b88dfbdd8475d473749.png",
    name: "NLP",
    es_icon: "",
    pid: 8,
  },
  {
    display_type: 3,
    lid: 67,
    count: 24,
    sort: 48,
    icon: "https://static001.geekbang.org/resource/image/12/ce/1260cbf827cd5136890221b7b45cbdce.png",
    name: "云计算",
    es_icon: "",
    pid: 6,
  },
  {
    display_type: 3,
    lid: 70,
    count: 25,
    sort: 0,
    icon: "https://static001.geekbang.org/resource/image/a9/79/a9039f9bc495675893a2068c6543b779.png",
    name: "可视化",
    es_icon: "",
    pid: 5,
  },
  {
    display_type: 3,
    lid: 72,
    count: 24,
    sort: 46,
    icon: "https://static001.geekbang.org/resource/image/66/50/66d3366dc788242b4c038e38a4449f50.png",
    name: "数据分析",
    es_icon: "",
    pid: 8,
  },
  {
    display_type: 3,
    lid: 74,
    count: 12,
    sort: 34,
    icon: "https://static001.geekbang.org/resource/image/b2/c0/b23d75de83e61632b6d29fa6792eb4c0.png",
    name: "市场",
    es_icon: "",
    pid: 7,
  },
  {
    display_type: 1,
    lid: 75,
    count: 9,
    sort: 50,
    icon: "https://static001.geekbang.org/resource/image/73/38/73fb63638b63978f0d4973f05b27b938.png",
    name: "算法",
    es_icon: "",
    pid: 9,
  },
  {
    display_type: 1,
    lid: 76,
    count: 3,
    sort: 48,
    icon: "https://static001.geekbang.org/resource/image/73/38/73fb63638b63978f0d4973f05b27b938.png",
    name: "网络",
    es_icon: "",
    pid: 9,
  },
  {
    display_type: 1,
    lid: 77,
    count: 6,
    sort: 3,
    icon: "https://static001.geekbang.org/resource/image/59/de/59716bcd9f348e1dfc045f3e4060abde.png",
    name: "工具",
    es_icon: "",
    pid: 9,
  },
  {
    display_type: 3,
    lid: 78,
    count: 8,
    sort: 46,
    icon: "https://static001.geekbang.org/resource/image/87/6f/87cd4a4400d2418ab6ee31f54b748f6f.png",
    name: "数据库",
    es_icon: "",
    pid: 9,
  },
  {
    display_type: 1,
    lid: 79,
    count: 10,
    sort: 5,
    icon: "https://static001.geekbang.org/resource/image/aa/2d/aa59e59beeyy8a070d40db6d27079c2d.png",
    name: "操作系统",
    es_icon: "",
    pid: 9,
  },
  {
    display_type: 3,
    lid: 80,
    count: 7,
    sort: 7,
    icon: "https://static001.geekbang.org/resource/image/41/54/4135b742a47824a67ba2b2e67c6ae054.png",
    name: "编译原理",
    es_icon: "",
    pid: 9,
  },
  {
    display_type: 3,
    lid: 81,
    count: 9,
    sort: 8,
    icon: "https://static001.geekbang.org/resource/image/3b/39/3b22690d2f891191dd5328ffed646039.png",
    name: "代码",
    es_icon: "",
    pid: 9,
  },
  {
    display_type: 3,
    lid: 82,
    count: 3,
    sort: 9,
    icon: "https://static001.geekbang.org/resource/image/b2/97/b2cb51bcd046ffa69yya033224888197.png",
    name: "数学",
    es_icon: "",
    pid: 9,
  },
  {
    display_type: 3,
    lid: 83,
    count: 4,
    sort: 10,
    icon: "https://static001.geekbang.org/resource/image/3d/0d/3def0d3bac27e1a6e2a13cc1b05aac0d.png",
    name: "组成原理",
    es_icon: "",
    pid: 9,
  },
  {
    display_type: 1,
    lid: 102,
    count: 0,
    sort: 24,
    icon: "https://static001-test.geekbang.org/resource/image/21/47/21617eeaba73b65e8bbb4cef6c917e47.jpeg",
    name: "面试专场",
    es_icon: "",
    pid: 9,
  },
  {
    display_type: 3,
    lid: 91,
    count: 1,
    sort: 35,
    icon: "https://static001.geekbang.org/resource/image/60/40/6091f7b5743c2bf33a013f7bd4305b40.png",
    name: "音乐",
    es_icon: "",
    pid: 4,
  },
  {
    display_type: 3,
    lid: 92,
    count: 3,
    sort: 36,
    icon: "https://static001.geekbang.org/resource/image/95/95/951d24c805f63cd206695cbbdcccc195.png",
    name: "摄影",
    es_icon: "",
    pid: 4,
  },
  {
    display_type: 3,
    lid: 93,
    count: 6,
    sort: 37,
    icon: "https://static001.geekbang.org/resource/image/03/85/032cb54705b23eb9f90c312d6c00c285.png",
    name: "写作",
    es_icon: "",
    pid: 4,
  },
  {
    display_type: 3,
    lid: 94,
    count: 1,
    sort: 38,
    icon: "https://static001.geekbang.org/resource/image/b6/40/b6e810fc9af51fe48774a8a91b3d8b40.png",
    name: "英语",
    es_icon: "",
    pid: 4,
  },
  {
    display_type: 3,
    lid: 95,
    count: 2,
    sort: 39,
    icon: "https://static001.geekbang.org/resource/image/6a/8e/6a5143c0d49df555b3e18221ae2d768e.png",
    name: "短视频",
    es_icon: "",
    pid: 4,
  },
  {
    display_type: 1,
    lid: 97,
    count: 35,
    sort: 41,
    icon: "https://static001.geekbang.org/resource/image/21/ed/2135201644387e78311d3a2c782eeeed.png",
    name: "面试专场",
    es_icon: "",
    pid: 4,
  },
];
export default labels;
