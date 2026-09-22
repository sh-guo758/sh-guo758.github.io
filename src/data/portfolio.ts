// 个人信息与作品数据

export const profile = {
  name: '郭思航',
  enName: 'GUO SIHANG',
  role: '动画美术 / 动画制片',
  school: '吉林动画学院 · 动画本科',
  phone: '16643593578',
  email: 'daihaoniao_2024@qq.com',
  location: '一线城市',
  bio: '动画科班出身，主修灯光方向，熟用 PS / Maya / UE / SP / Nuke，能独立完成从概念设定到三维成稿的完整流程。同时掌握 Midjourney、即梦、可灵、海螺等 AI 工具，高效产出美术资产。',
}

export type SkillGroup = {
  title: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    title: '核心软件',
    items: ['Maya', 'Unreal Engine', 'Substance Painter', 'Nuke', 'Photoshop'],
  },
  {
    title: 'AI 工具',
    items: ['Midjourney', '即梦', '可灵', '海螺'],
  },
  {
    title: '专业方向',
    items: ['灯光渲染', '场景美术', '概念设计', '角色材质'],
  },
]

export const experiences = [
  {
    title: '《四方动物城》',
    tag: '灯光渲染 / 场景美术设计',
    desc: '负责灯光渲染与场景美术设计，产出符合项目风格的三维场景与灯光氛围。',
  },
  {
    title: '吉林省大学生创新创业大赛',
    tag: '美术组核心成员',
    desc: '承担美术产出，作品获省级二等奖。',
  },
  {
    title: '《山海无界——雕塑手办设计》',
    tag: '项目负责人',
    desc: '牵头 5 人跨专业团队，统筹策划、风格设定与三维制作，带队获校级二等奖。',
  },
  {
    title: '吉林动画学院',
    tag: '组织委员',
    desc: '获校级「优秀学生干部」称号。',
  },
]

export type Project = {
  title: string
  category: string
  image: string
  note: string
  video?: string
}

export const categories = ['全部', '三维', '手绘', '动画', 'AI', '大创', '虚拟制片'] as const

export const projects: Project[] = [
  // ===== 三维 =====
  {
    title: '小院的四季 · 场景灯光设计',
    category: '三维',
    image: '/portfolio/xiaoyuan-siji.webp',
    note: '中式四合院同一场景在不同时段的光照氛围表现，重点展示场景灯光设计能力。',
  },
  {
    title: '圣诞室内灯光氛围',
    category: '三维',
    image: '/portfolio/shengdan.webp',
    note: '复古家居空间的节日灯光氛围，冷暖光对比营造温馨质感。',
  },
  {
    title: '男孩与机甲 · 室外场景灯光',
    category: '三维',
    image: '/portfolio/boy-mecha.webp',
    note: '卡通风格角色 + 室外场景灯光，黄昏冷暖光对比与故事情节氛围。',
  },
  {
    title: '古堡仪式 · 虚幻引擎场景与特效',
    category: '三维',
    image: '/portfolio/ue-fx.webp',
    note: 'UE 引擎搭建的中世纪古堡仪式平台，天使雕像、火炬与庄重肃穆的氛围表现。',
  },
  {
    title: '摇滚卧室 · 场景灯光绘画',
    category: '三维',
    image: '/portfolio/rock-room.webp',
    note: '摇滚爱好者卧室的场景灯光设计，百叶窗光影与生活化氛围。',
  },
  {
    title: '摇滚卧室 · 材质绘画',
    category: '三维',
    image: '/portfolio/rock-material.webp',
    note: '卧室场景中各类物体材质与贴图的表现，还原真实质感。',
  },
  {
    title: '日系少女 · 角色灯光设计',
    category: '三维',
    image: '/portfolio/char-light.webp',
    note: '二次元风格角色的灯光设计与场景融合，清新自然光氛围。',
  },
  {
    title: '木质玩偶 · 角色材质三视图',
    category: '三维',
    image: '/portfolio/char-mat-3view.webp',
    note: '卡通木质玩偶角色三视图，展示不同材质的三维制作效果。',
  },
  {
    title: '特效后期合成作品',
    category: '三维',
    image: '/portfolio/videos/fx-composite-cover.webp',
    video: '/portfolio/videos/fx-composite.mp4',
    note: '三维特效的后期合成演示，展示合成与特效处理能力。',
  },
  {
    title: '角色室外氛围设计',
    category: '三维',
    image: '/portfolio/videos/char-ambient-cover.webp',
    video: '/portfolio/videos/char-ambient.mp4',
    note: '角色在室外环境中的氛围表现与镜头动态演示。',
  },
  // ===== 手绘 =====
  {
    title: '人物素描',
    category: '手绘',
    image: '/portfolio/figure-sketch.webp',
    note: '写实人物素描，细致刻画少数民族女性肖像的神态与岁月质感。',
  },
  {
    title: '动物速写',
    category: '手绘',
    image: '/portfolio/animal-sketch.webp',
    note: '拟人化小老虎的多种动态速写，活泼童趣。',
  },
  {
    title: '场景手绘',
    category: '手绘',
    image: '/portfolio/scene-hand.webp',
    note: '带幻想元素的田园乡村风景线稿，氛围闲适治愈。',
  },
  {
    title: '森系小场景四格',
    category: '手绘',
    image: '/portfolio/scene-hand-grid.webp',
    note: '清新治愈的森系小场景系列，融入可爱奇幻元素。',
  },
  {
    title: '太空育种科普条漫',
    category: '手绘',
    image: '/portfolio/comic-sci.webp',
    note: '用拟人化微生物形象科普太空育种过程的趣味条漫。',
  },
  {
    title: '漫画分镜 · 果果的探险',
    category: '手绘',
    image: '/portfolio/storyboard-1.webp',
    note: '儿童探险故事的动画分镜设计，梳理镜头与叙事节奏。',
  },
  {
    title: '打乒乓球动态漫画',
    category: '手绘',
    image: '/portfolio/pingpong.webp',
    note: '用连续动作展现老年群体打乒乓球的动态漫画，生动有节奏。',
  },
  {
    title: 'LOGO 设计 · 朝阳养牛',
    category: '手绘',
    image: '/portfolio/logo-design.webp',
    note: '实践调研项目标识，正负形牛头剪影 + 书法字体。',
  },
  // ===== 动画（视频） =====
  {
    title: '定格动画短片',
    category: '动画',
    image: '/portfolio/videos/stopmotion-cover.webp',
    video: '/portfolio/videos/stopmotion.mp4',
    note: '逐帧拍摄的定格动画短片，考验节奏把控与细节表现。',
  },
  {
    title: '动画作品 · 梦想的家',
    category: '动画',
    image: '/portfolio/videos/dream-home-cover.webp',
    video: '/portfolio/videos/dream-home.mp4',
    note: '二维动画短片《梦想的家》，讲述温暖的家与梦想。',
  },
  {
    title: '动画作品 · 狐假虎威',
    category: '动画',
    image: '/portfolio/videos/fox-tiger-cover.webp',
    video: '/portfolio/videos/fox-tiger.mp4',
    note: '成语故事《狐假虎威》动画短片创作。',
  },
  {
    title: '冬隐 · 冬至',
    category: '动画',
    image: '/portfolio/videos/winter-solstice-cover.webp',
    video: '/portfolio/videos/winter-solstice.mp4',
    note: '节气主题动画短片《冬至》，国风治愈氛围。',
  },
  // ===== AI =====
  {
    title: '玄幻题材 AI 辅助分镜',
    category: 'AI',
    image: '/portfolio/ai-fenjing.webp',
    note: '利用 AI 工具辅助产出玄幻题材影视分镜脚本与概念画面。',
  },
  // ===== 大创 =====
  {
    title: '赛博国风 Q 版角色 · 三视图',
    category: '大创',
    image: '/portfolio/cyber-qchar.webp',
    note: '大创项目《山海无界》角色三维三视图，国风与科幻元素融合。',
  },
  // ===== 虚拟制片 =====
  {
    title: '青蛙动画项目 · 虚拟制片流程',
    category: '虚拟制片',
    image: '/portfolio/virtual-prod-flow.webp',
    note: '动画项目虚拟制片全流程梳理：建模、材质、绑定、动画。',
  },
]
