import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Zap, 
  Target, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  ZapIcon,
  MessageSquare,
  Clock,
  Briefcase
} from 'lucide-react';

// --- Reusable Components ---

const Section = ({ icon: Icon, title, id, children }: { icon: any, title: string, id: string, children: React.ReactNode }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="report-card scroll-mt-24"
  >
    <h2 className="section-title">
      <div className="p-2 bg-brand-100 text-brand-600 rounded-lg">
        <Icon size={24} />
      </div>
      {title}
    </h2>
    {children}
  </motion.section>
);

const ConclusionBox = ({ children }: { children: React.ReactNode }) => (
  <div className="conclusion-box">
    <div className="flex items-center gap-2 mb-2 font-bold text-brand-900">
      <CheckCircle2 size={18} className="text-brand-500" />
      本质结论
    </div>
    <p className="text-brand-900 leading-relaxed font-medium">
      {children}
    </p>
  </div>
);

const FindingsGrid = ({ items }: { items: { text: string; highlight?: string }[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    {items.map((item, idx) => (
      <div key={idx} className="bg-slate-50 border border-slate-100 p-4 rounded-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-2 text-slate-200 group-hover:text-brand-200 transition-colors">
          <ZapIcon size={48} strokeWidth={1} />
        </div>
        <p className="text-slate-700 leading-relaxed relative z-10 text-sm">
          {item.text}
        </p>
      </div>
    ))}
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-slate-800 text-lg">
            <div className="w-8 h-8 bg-brand-600 rounded flex items-center justify-center text-white">
              <BarChart3 size={18} />
            </div>
            <span>酒店智能体服务效能分析汇报</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
            <a href="#section-overview" className="hover:text-brand-600 transition-colors underline-offset-4 hover:underline">数据概览</a>
            <a href="#section-1" className="hover:text-brand-600 transition-colors underline-offset-4 hover:underline">价值验证</a>
            <a href="#section-2" className="hover:text-brand-600 transition-colors underline-offset-4 hover:underline">用户渗透</a>
            <a href="#section-3" className="hover:text-brand-600 transition-colors underline-offset-4 hover:underline">服务效能</a>
            <a href="#section-4" className="hover:text-brand-600 transition-colors underline-offset-4 hover:underline">核心洞察</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pt-12">
        {/* Title and Intro */}
        <div className="mb-12 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            智能体赋能酒店运营报告
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <p className="text-slate-500 text-lg max-w-2xl">
              基于 10 家酒店深度运营数据的穿透式分析。本报告对酒店智能体在“价值验证”、“用户接受度”及“服务效能”三个维度的真实表现进行了全方位拆解。
            </p>
          </motion.div>
        </div>

        {/* Core Data Table Section */}
        <Section id="section-overview" icon={BarChart3} title="核心数据概览：10家TOP酒店运营明细">
          <div className="my-6 border border-slate-100 rounded-lg overflow-hidden">
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-3 py-3 border-b border-slate-200">酒店名称</th>
                  <th className="px-3 py-3 border-b border-slate-200 text-center">AI问答</th>
                  <th className="px-3 py-3 border-b border-slate-200 text-center">工单提交</th>
                  <th className="px-3 py-3 border-b border-slate-200 text-center">工单处理</th>
                  <th className="px-3 py-3 border-b border-slate-200 text-center">登录用户</th>
                  <th className="px-3 py-3 border-b border-slate-200 text-center">渗透率</th>
                  <th className="px-3 py-3 border-b border-slate-200 text-center">响应时长</th>
                  <th className="px-3 py-3 border-b border-slate-200 text-center">码牌</th>
                  <th className="px-3 py-3 border-b border-slate-200 text-center">星级</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "贵州饭店·贵宾楼", ai: 8592, order: 159, done: 159, users: 3845, rate: "223%", time: 1.54, cards: 533, star: "五星级" },
                  { name: "珑庭芳酒店", ai: 2464, order: 33, done: 33, users: 1664, rate: "148%", time: 0, cards: 102, star: "四星级" },
                  { name: "圣丰酒店", ai: 1947, order: 57, done: 57, users: 1144, rate: "170%", time: 5.4, cards: 141, star: "四星级" },
                  { name: "匀东·贵州饭店", ai: 1786, order: 46, done: 46, users: 1314, rate: "136%", time: 10.2, cards: 220, star: "五星级" },
                  { name: "贵州饭店·迎宾楼", ai: 1697, order: 57, done: 57, users: 867, rate: "196%", time: 0, cards: 367, star: "四星级" },
                  { name: "贵山大酒店", ai: 1298, order: 114, done: 114, users: 1125, rate: "115%", time: 24.75, cards: 268, star: "四星级" },
                  { name: "思南九天温泉酒店", ai: 1291, order: 34, done: 34, users: 1067, rate: "121%", time: 7.64, cards: 179, star: "四钻" },
                  { name: "雅迪尔大酒店", ai: 1247, order: 62, done: 62, users: 1030, rate: "121%", time: 0, cards: 220, star: "四钻" },
                  { name: "贵州武岳酒店", ai: 1181, order: 95, done: 94, users: 1285, rate: "92%", time: 723.44, cards: 191, star: "四星级" },
                  { name: "千山和悦酒店", ai: 1110, order: 58, done: 58, users: 1002, rate: "111%", time: 0, cards: 151, star: "四钻" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors border-b border-slate-100 last:border-0">
                    <td className="px-3 py-3 font-bold text-slate-800">{row.name}</td>
                    <td className="px-3 py-3 text-center font-mono text-brand-600 font-semibold">{row.ai.toLocaleString()}</td>
                    <td className="px-3 py-3 text-center font-mono">{row.order}</td>
                    <td className="px-3 py-3 text-center font-mono">
                      <span className={row.order === row.done ? "text-emerald-600 font-bold" : "text-amber-600"}>
                        {row.done}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center font-mono">{row.users.toLocaleString()}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-mono text-xs whitespace-nowrap">{row.rate}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-center font-mono">
                      <span className={row.time > 60 ? "text-red-500 font-bold" : row.time === 0 ? "text-emerald-500 font-bold" : ""}>
                        {row.time}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center font-mono text-slate-400">{row.cards}</td>
                    <td className="px-3 py-3 text-center whitespace-nowrap">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold shadow-xs ${
                        row.star.includes('五') ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {row.star}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-slate-400 mt-4 flex items-center gap-1 italic">
            <AlertCircle size={12} />
            可视化标注：绿色加粗表示100%办结或0分钟响应，红色加粗表示响应时长异常。
          </p>
        </Section>

        {/* Section 1 */}
        <Section id="section-1" icon={Target} title="一、 智能体的核心价值验证">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">工单办结率</p>
              <p className="text-2xl font-bold text-brand-600">100%</p>
              <p className="text-[10px] text-slate-500 mt-1">9家酒店全额办结</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">累计AI问答</p>
              <p className="text-2xl font-bold text-brand-600">23,613次</p>
              <p className="text-[10px] text-slate-500 mt-1">Top10酒店总计</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">即时响应率</p>
              <p className="text-2xl font-bold text-brand-600">40%</p>
              <p className="text-[10px] text-slate-500 mt-1">0分钟极速反馈</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">高效响应</p>
              <p className="text-2xl font-bold text-brand-600">100%</p>
              <p className="text-[10px] text-slate-500 mt-1">响应时长 ≤10分钟</p>
            </div>
          </div>

          <h3 className="subsection-title mb-4">1. 价值维度拆解（从 “成本 - 效率 - 体验” 三维度）</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>价值维度</th>
                  <th>核心验证指标</th>
                  <th>数据表现</th>
                  <th>本质结论</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-slate-800">服务替代价值</td>
                  <td>工单办结率、AI 问答量占比</td>
                  <td>9 家 100% 办结，1 家 98.95%；累计 AI 问答超 2.3 万次</td>
                  <td>有效承接住客咨询，替代人工/前台职能，降低人力成本</td>
                </tr>
                <tr>
                  <td className="font-semibold text-slate-800">效率提升价值</td>
                  <td>工单平均响应时长</td>
                  <td>4 家 0 分钟极速响应，6 家≤10 分钟高效响应</td>
                  <td>实现“即时响应”，突破人工服务时间及人力限制</td>
                </tr>
                <tr>
                  <td className="font-semibold text-slate-800">用户体验价值</td>
                  <td>问答活跃度、工单转化率</td>
                  <td>人均问答量 0.92-2.23 次，头部酒店问答-工单正向转化</td>
                  <td>住客认可其便捷性，通过智能体解决问题提升体验</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="subsection-title mt-12 mb-6">2. 角色价值深挖与实质性结论</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col relative overflow-hidden group shadow-sm"
            >
              <div className="absolute top-0 right-0 p-4 text-brand-500/10 group-hover:text-brand-500/20 transition-colors">
                <MessageSquare size={80} strokeWidth={1} />
              </div>
              <div className="flex items-center gap-2 mb-4 relative z-10">
                <div className="p-2 bg-brand-100 text-brand-600 rounded-lg">
                  <MessageSquare size={20} />
                </div>
                <h4 className="text-lg font-bold text-slate-800">角色一：问题咨询的「第一入口」</h4>
              </div>
              <ul className="space-y-4 text-sm text-slate-600 relative z-10 flex-grow">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0"></div>
                  <span>累计 AI 问答 <span className="font-bold text-slate-900">24,000+ 次</span>，覆盖客房设施、服务政策等高频咨询。</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0"></div>
                  <p>如果这 24,000 次问答没有智能体，它们将转化为<span className="text-brand-600 font-medium">前台电话、客房电话甚至住客抱怨</span>。</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0"></div>
                  <p>单房问答量最高 <span className="font-bold text-slate-900">24.2 次/房</span>（珑庭芳），意味着平均每个房间产生了 24 次咨询。如果没有智能体，接线压力将显著增加。</p>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col relative overflow-hidden group shadow-sm"
            >
              <div className="absolute top-0 right-0 p-4 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors">
                <ZapIcon size={80} strokeWidth={1} />
              </div>
              <div className="flex items-center gap-2 mb-4 relative z-10">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                  <ZapIcon size={20} />
                </div>
                <h4 className="text-lg font-bold text-slate-800">角色二：服务工单的「派发入口」</h4>
              </div>
              <ul className="space-y-4 text-sm text-slate-600 relative z-10 flex-grow">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
                  <span>累计工单提交 <span className="font-bold text-slate-900">715 单</span>，办结率达 <span className="font-bold text-emerald-600">99.8%</span>（仅 1 单未办结）。</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
                  <span>工单类型覆盖<span className="text-slate-900 font-medium">送物、维修等</span>住店刚需场景，住客认可度高。</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
                  <p>住客愿意通过<span className="text-slate-900 font-bold">自然语言对话直接下单</span>，而不是打电话或到处寻找人工。智能体已实质性替代了传统服务请求的部分链路。</p>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="bg-brand-50 border-l-4 border-brand-500 p-6 md:p-8 rounded-r-xl my-8 shadow-sm">
            <p className="text-slate-800 leading-relaxed mb-6 font-medium">
              智能体已经实质性替代了传统服务请求的部分链路。它同时承担了：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/60 p-4 rounded-xl border border-brand-100 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-brand-600 text-white rounded-full flex items-center justify-center text-xs font-bold">信</div>
                  <p className="font-bold text-brand-800">信息层价值</p>
                </div>
                <p className="text-sm text-slate-600">替代前台咨询，降低人力重复性问题解答成本，解决“问”的问题。</p>
              </div>
              <div className="bg-white/60 p-4 rounded-xl border border-brand-100 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-brand-600 text-white rounded-full flex items-center justify-center text-xs font-bold">行</div>
                  <p className="font-bold text-brand-800">行动层价值</p>
                </div>
                <p className="text-sm text-slate-600">替代电话派单，缩短服务请求等待路径，解决“办”的问题。</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-brand-100">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-brand-900 font-extrabold text-lg leading-tight">
                    本质结论：实际运营数据说明黄小西“酒店智能体”是一个有效的酒店服务基础设施。
                  </p>
                  <p className="text-brand-600/70 text-sm mt-1">
                    有用，且价值显著：能提供人工服务无法比拟的即时响应与规模化服务能力。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 2 */}
        <Section id="section-2" icon={Users} title="二、 用户接受度与渗透深度">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">平均渗透率</p>
              <p className="text-2xl font-bold text-brand-600">144.4%</p>
              <p className="text-[10px] text-slate-500 mt-1">同一房间多轮入住触达</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">累计登录用户</p>
              <p className="text-2xl font-bold text-brand-600">13,343人</p>
              <p className="text-[10px] text-slate-500 mt-1">住客扫码意愿极强</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">最高人均问答</p>
              <p className="text-2xl font-bold text-brand-600">2.23次</p>
              <p className="text-[10px] text-slate-500 mt-1">用户认可沟通深度</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">单房最高问答</p>
              <p className="text-2xl font-bold text-brand-600">24.16次</p>
              <p className="text-[10px] text-slate-500 mt-1">小体量酒店表现抢眼</p>
            </div>
          </div>

          <h3 className="subsection-title mb-4">1. 触达与使用指标体系（从 “广度 - 深度 - 活跃度” 三维度）</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>评估维度</th>
                  <th>核心指标</th>
                  <th>数据表现</th>
                  <th>本质结论</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-slate-800">触达广度</td>
                  <td>访问渗透率、登录用户数</td>
                  <td>平均渗透率 144.4%，最高达 223%；累计登录用户 13,343 人</td>
                  <td>房间二维码触达效果远超预期，覆盖多轮入住客群</td>
                </tr>
                <tr>
                  <td className="font-semibold text-slate-800">使用深度</td>
                  <td>人均问答量、单房问答量</td>
                  <td>人均 1.11-2.23 次，单房 4.62-24.16 次</td>
                  <td>住客愿意深度使用，不是 “一次性扫码”</td>
                </tr>
                <tr>
                  <td className="font-semibold text-slate-800">主动使用意愿</td>
                  <td>问答 / 登录用户比</td>
                  <td>平均 1.77，最高 2.23（贵宾楼）</td>
                  <td>住客主动发起咨询意愿强，能力被认可</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="subsection-title mt-8 mb-4">2. 关键用户行为洞察</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-lg">
              <div className="text-brand-500 mt-1"><TrendingUp size={20} /></div>
              <p className="text-sm text-slate-600 font-medium">渗透率超 100% 普遍存在（8 家）：说明住客扫码率高，且同一房间多轮入住客人都会使用，智能体形成了持续触达能力</p>
            </div>
            <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-lg">
              <div className="text-brand-500 mt-1"><Zap size={20} /></div>
              <p className="text-sm text-slate-600 font-medium">小体量酒店表现亮眼：珑庭芳单房问答量 24.16 次，证明用户接受度与客房规模无绝对关联，关键在运营引导</p>
            </div>
          </div>
          <div className="p-3 bg-amber-50 text-amber-700 text-xs rounded border border-amber-100 flex items-center gap-2 mb-6">
            <AlertCircle size={14} />
            注：仅 1 家渗透率低于 100%（贵州武岳 92%），属个别情况，整体渗透极强。
          </div>

          <ConclusionBox>
            有人用，且使用深度超出预期：智能体通过房间二维码实现了高触达率，住客不仅愿意扫码登录，还会主动发起咨询与服务请求，形成了稳定的用户使用习惯，证明产品符合用户需求与使用场景。
          </ConclusionBox>
        </Section>

        {/* Section 3 */}
        <Section id="section-3" icon={Zap} title="三、服务效能与用户价值实现度">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">及时处理工单的酒店占比</p>
              <p className="text-2xl font-bold text-brand-600">80%</p>
              <p className="text-[10px] text-slate-500 mt-1">办结率+时效双优</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">咨询-派单闭环</p>
              <p className="text-2xl font-bold text-brand-600">形成</p>
              <p className="text-[10px] text-slate-500 mt-1">头部酒店转化效能显著</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">质量保障率</p>
              <p className="text-2xl font-bold text-brand-600">100%</p>
              <p className="text-[10px] text-slate-500 mt-1">工单闭环处理能力</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">瓶颈识别</p>
              <p className="text-2xl font-bold text-amber-600">线下引导不足</p>
              <p className="text-[10px] text-slate-500 mt-1">非智能体本身产品问题</p>
            </div>
          </div>

          <h3 className="subsection-title mb-4">1. 效能评估三维度（从 “转化 - 时效 - 质量” 全面衡量）</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>效能维度</th>
                  <th>核心指标</th>
                  <th>数据表现</th>
                  <th>本质结论</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-slate-800">行为转化效能</td>
                  <td>问答→工单转化率</td>
                  <td>贵宾楼 1.85%，贵山 8.79%，武岳 8.05%</td>
                  <td>虽有差异，但头部已形成 “咨询-派单” 闭环</td>
                </tr>
                <tr>
                  <td className="font-semibold text-slate-800">服务时效效能</td>
                  <td>工单平均响应时长</td>
                  <td>4 家 0 分钟，4 家 1-10 分钟，少数异常值</td>
                  <td>80% 酒店服务时效优秀，协同高效</td>
                </tr>
                <tr>
                  <td className="font-semibold text-slate-800">服务质量效能</td>
                  <td>工单办结率</td>
                  <td>9 家 100% 办结，1 家 98.95%</td>
                  <td>工单得到有效处理，质量有保障，用户问题闭环</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="subsection-title mt-8 mb-4">2. 效能分层与关键发现</h3>
          <div className="space-y-4 mb-8">
            <div className="border border-slate-100 rounded-lg p-5 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">效能第一梯队 (8家)</span>
                <span className="text-emerald-500 font-bold">优秀</span>
              </div>
              <p className="text-sm text-slate-600">办结率 100% + 响应时长≤10 分钟，智能体与线下服务形成完美协同，服务效能最大化。</p>
            </div>
            <div className="border border-slate-100 rounded-lg p-5 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">效能第二梯队 (1家)</span>
                <span className="text-amber-500 font-bold">需优化</span>
              </div>
              <p className="text-sm text-slate-600">贵山大酒店：办结率 100% 但响应时长 24.75 分钟，需优化线下工单调度流程。</p>
            </div>
            <div className="border border-slate-100 rounded-lg p-5 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">效能异常点 (1家)</span>
                <span className="text-red-500 font-bold">严重脱节</span>
              </div>
              <p className="text-sm text-slate-600 underline decoration-red-200">贵州武岳：响应时长 723.44 分钟 (12 小时+)，显著高于平均水平，属于线下流程严重脱节。</p>
            </div>
          </div>

          <ConclusionBox>
            用的整体很好，局部需优化：智能体在服务转化、时效与质量上表现优异，80% 酒店达到高效能标准；少数酒店的效能短板源于线下流程而非智能体本身，可通过运营优化快速解决。
          </ConclusionBox>
        </Section>

        {/* Section 4 */}
        <div id="section-4" className="scroll-mt-24 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-brand-600 text-white rounded-xl shadow-lg shadow-brand-200">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">四、总结</h2>
              <p className="text-slate-500 font-medium">三大核心结论与本质认知</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute -right-4 -top-4 text-slate-50 group-hover:text-brand-50 transition-colors pointer-events-none">
                <Target size={120} strokeWidth={1} />
              </div>
              <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-6 relative z-10">
                <TrendingUp size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 relative z-10">价值本质</h4>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow relative z-10">
                智能体是酒店服务的<span className="text-brand-600 font-bold">效率提升工具与体验提升工具</span>，而非简单替代工具，能同时实现住客体验升级与酒店运营降本增效的双赢。
              </p>
              <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest relative z-10">
                <span>Insight 01</span>
                <div className="w-8 h-1 bg-brand-500 rounded-full"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-brand-900 p-8 rounded-2xl shadow-xl border border-brand-800 text-white flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute -right-4 -top-4 text-white/5 opacity-20 pointer-events-none">
                <Users size={120} strokeWidth={1} />
              </div>
              <div className="w-10 h-10 bg-brand-500 text-white rounded-lg flex items-center justify-center mb-6 relative z-10">
                <Users size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4 relative z-10">用户本质</h4>
              <p className="text-brand-100 leading-relaxed mb-6 flex-grow relative z-10">
                住客对 “扫码 - 咨询 - 派单” 的自助服务模式有一定接受度，尤其在<span className="text-white font-bold underline decoration-brand-500 decoration-2">中端酒店与精品酒店</span>中，使用意愿更强。
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-brand-400 uppercase tracking-widest relative z-10">
                <span>Insight 02</span>
                <div className="w-8 h-1 bg-white rounded-full"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute -right-4 -top-4 text-slate-50 group-hover:text-brand-50 transition-colors pointer-events-none">
                <Zap size={120} strokeWidth={1} />
              </div>
              <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6 relative z-10">
                <ZapIcon size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 relative z-10">使用率提升的本质</h4>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow relative z-10">
                智能体效能的核心瓶颈<span className="text-amber-600 font-bold">不在产品本身</span>，而在服务团队对酒店运营的用心程度上，智能体就能发挥最大价值。
              </p>
              <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest relative z-10">
                <span>Insight 03</span>
                <div className="w-8 h-1 bg-amber-500 rounded-full"></div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 p-8 bg-slate-900 rounded-2xl shadow-2xl text-white flex flex-col md:flex-row items-center justify-center gap-8 relative overflow-hidden text-center">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,#3b82f6_0%,transparent_50%)]"></div>
            <div className="relative z-10 flex flex-col items-center">
              <p className="text-sm font-bold text-brand-400 uppercase tracking-wider mb-1">报告生成时间</p>
              <div className="flex items-center gap-2 text-xl font-bold">
                <Clock size={20} className="text-brand-500" />
                <span>{new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <footer className="mt-12 text-center text-slate-400 text-sm">
        </footer>
      </main>
    </div>
  );
}
