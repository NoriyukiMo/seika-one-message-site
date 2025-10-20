import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ChevronDown, ChevronUp, Info } from "lucide-react";

export default function SeikaOneMessageSite() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [active, setActive] = useState(0);

  const sections = [
    {
      id: "s-0",
      label: "学長に立候補するにあたり",
      message: (
        <>
          森原規行 学長方針<br />
          ワンメッセージ サイト
        </>
      ),
      supplement: (
        <>
          このサイトは、学長方針書の内容をもとに、その理念と重点方針をわかりやすく紹介するために制作しました。<br />
          京都精華大学が目指す「次の10年」の方向性と、その背景にある考えを共有することを目的としています。
        </>
      ),
    },
    {
      id: "s-1",
      label: "はじめに：方針の核",
      message: (
        <>
          京都精華大学の次の10年を、<br />
          対話と柔軟性でデザインする。
        </>
      ),
      supplement: (
        <>
          創造性と独自性を軸に、教育・研究・社会をつなぐ京都精華大学にアップデートする。<br />
          本学の出身者だからこそ、守るべきものは守り、変えるべきものは変えていく覚悟を持って臨む。
        </>
      ),
    },
    {
      id: "s-2",
      label: "現状と課題の提示",
      message: (
        <>
          18歳人口の減少は、大学のあり方そのものを問い直すきっかけになりました。<br />
          これが本方針の出発点です。
        </>
      ),
      supplement: <>危機対応にとどまらず、創造的な変革が必要です。</>,
    },
    {
      id: "s-3",
      label: "目的：大学の使命",
      message: (
        <>
          思索し、表現する力を育てることこそ、人間の本質を磨く教育です。<br />
          そして、次代を担う表現者を育てることこそが本学の使命です。
        </>
      ),
      supplement: (
        <>
          京都精華大学は、自由自治と人間尊重の理念のもと、<br />
          創造性と独自性で社会と学生をつなぐ「学びと表現の共創の場」を育てます。
        </>
      ),
    },
    {
      id: "s-4",
      label: "目標：10年後の姿",
      message: (
        <>
          創造性と独自性が日常的に息づき、<br />
          誰もが挑戦し、共に育つ大学へ。
        </>
      ),
      supplement: (
        <>
          多文化・越境・共創が当たり前のキャンパスをつくり、<br />
          学生・教職員・社会が学び合う未来を描きます。
        </>
      ),
    },
    {
      id: "s-5",
      label: "京都精華大学の強み",
      message: (
        <>
          「創造性と独自性」<br />
          まだ見ぬ表現や価値や感動を生み出し、<br />
          芸術による表現の探究と、人文による問いを立てる思考が交差する大学。
        </>
      ),
      supplement: (
        <>
          その交差が「デザイン」「マンガ」「メディア表現」へ発展し、<br />
          まだ見ぬ表現や感動を生み出してきました。
        </>
      ),
    },
    {
      id: "s-6",
      label: "変革のビジョン",
      message: (
        <>
          危機対応ではなく、創造性と独自性を深め、<br />
          新たな可能性を生み出す変革を。
        </>
      ),
      supplement: (
        <>
          まずは本学が抱える課題を解決し、安心して表現できる環境を築き、<br />
          学生・教職員が共に未来を築くための10年をデザインします。
        </>
      ),
    },
    {
      id: "s-7",
      label: "５つの方針：概要一覧",
      message: (
        <>
          創造性と独自性を支える５つの取り組みを進めます。<br />
          そして、安心して表現できる環境を築きます。
        </>
      ),
      supplement: (
        <>
          ① 挑戦の入口　② 多文化の共育　③ 支える窓口　④ 越境する学び　⑤ 未来を拓く支援
        </>
      ),
    },
    {
      id: "s-8",
      label: "方針①　誰もが挑戦できる入口をつくる",
      message: "多様な背景をもつ学生が、表現を通じて挑戦できる入口をつくります。",
      keypoints: [
        {
          title: "要点①：体験機会の拡充・学びの物語の発信",
          content: "オープンキャンパスや出前授業、在学生の制作体験を強化。学びの物語を継続発信。",
        },
        {
          title: "要点②：入試制度の見直し",
          content: "選抜を多様化し、探究・実技・ポートフォリオを評価。入試フレームの見直し。",
        },
      ],
      supplement: "体験機会の拡充と学びの物語の発信。入試制度の見直しを進めます。",
    },
    {
      id: "s-9",
      label: "方針②　多文化キャンパスを育む",
      message: (
        <>
          留学生と日本人学生が、互いに学び合い、<br />
          文化を尊重し合う環境を築きます。
        </>
      ),
      keypoints: [
        {
          title: "要点①：共育の基盤整備",
          content: "生活・言語・学修支援を一体化し、混ざり合う学修環境へ。",
        },
        {
          title: "要点②：財源の確保",
          content: "安定的な支援を可能にする財源スキームを設計。",
        },
      ],
      supplement: "生活・言語・学修支援の充実と財源を確保し、共に生きる力を育てます。",
    },
    {
      id: "s-10",
      label: "方針③　学修を支える窓口づくり",
      message: "DXを通じて、学生と大学のつながりをより近くします。",
      keypoints: [
        {
          title: "要点①：LINE×AIのワンストップ窓口",
          content: "問い合わせを一元管理し、適切な部署へ確実につなぐ。",
        },
        {
          title: "要点②：支援品質と文化の向上",
          content: "可視化・自動化で対応の質を高め、学びに寄り添う文化を育む。",
        },
      ],
      supplement: "LINEやAIを活用したワンストップ窓口により、支援の質を高め、学びに寄り添う大学文化を育みます。",
    },
    {
      id: "s-11",
      label: "方針④　越境する学びの環境をひらく",
      message: "学びを社会へひらき、地域・産業界・卒業生とともに実践する教育を進めます。",
      keypoints: [
        { title: "要点①：学外拠点×実践", content: "社会課題に挑むプロジェクト型学習を展開。" },
        { title: "要点②：オンラインの共学空間", content: "年齢や場所を超えて誰もが学び合える環境を設計。" },
      ],
      supplement: "学外拠点で社会課題に挑む学びの場を整え、オンライン教育を活用して、年齢や場所をこえて誰もが学び合える環境を築きます。",
    },
    {
      id: "s-12",
      label: "方針⑤　未来を拓くキャリア支援",
      message: "学生が社会と出会い、自らの未来をデザインできる環境をつくります。",
      keypoints: [
        { title: "要点①：多様な出会いの場", content: "卒業生・地域・産業界と結び、多様な経験へアクセスを拓く。" },
        { title: "要点②：挑戦する意志と設計力", content: "自分らしいキャリアを描く力と挑戦を支える。" },
      ],
      supplement: "卒業生・地域・産業界と連携し、学生が多様な経験と出会える環境を整えます。フリーランスや起業支援、多様な特性を持つ学生のキャリア形成を後押しする。",
    },
    {
      id: "s-13",
      label: "最後に：私たちが目指す未来",
      message: (
        <>
          思索し、表現し、希望をつくる。<br />
          そして、次代を担う表現者を育てる。<br />
          それが京都精華大学が目指す未来です。
        </>
      ),
      supplement: (
        <>
          多様性を認め合い、自主性と責任をもって学び合うことで、創造性と独自性が日常的に息づき、誰もが表現活動に挑戦できる、心躍る大学を実現します。
        </>
      ),
      ctas: [
        { label: "方針書全文を読む", href: "https://drive.google.com/file/d/1ceryrBbOq-2cCFFfp7_je_19NBSwvjQk/view?usp=sharing" },
        { label: "意見・対話に参加する", href: "mailto:morihara@kyoto-seika.ac.jp" },
      ],
    },
  ] as const;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex((el) => el === entry.target);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { threshold: 0.6 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#edf4ff] via-[#f9fbff] to-[#dbe9ff] text-blue-900">
      {sections.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          ref={(el) => (sectionRefs.current[idx] = el!)}
          className="min-h-screen flex flex-col justify-center px-6 py-16 bg-white/80 backdrop-blur-sm border-b border-blue-100"
        >
          <div className="max-w-4xl mx-auto w-full">
            <p className="text-blue-800 text-xl md:text-2xl font-bold tracking-wide mb-3">{s.label}</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-blue-900 mb-6">{s.message}</h2>

            {"keypoints" in s && s.keypoints && (
              <div className="space-y-4 mb-6">
                {s.keypoints.map((kp, i) => (
                  <div key={i} className="border-l-4 border-blue-400 bg-blue-50/60 rounded-r-lg p-4 shadow-sm">
                    <h3 className="text-blue-800 font-semibold mb-1">{kp.title}</h3>
                    <p className="text-blue-700 text-sm md:text-base">{kp.content}</p>
                  </div>
                ))}
              </div>
            )}

            {s.supplement && (
              <Accordion type="single" collapsible className="mt-6">
                <AccordionItem value="more">
                  <AccordionTrigger className="text-sm md:text-base text-blue-700">補足情報をひらく</AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-blue-700 opacity-80">{s.supplement}</AccordionContent>
                </AccordionItem>
              </Accordion>
            )}

            {"ctas" in s && s.ctas && s.ctas.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {s.ctas.map((c, i) => (
                  <Button key={i} asChild className="rounded-2xl px-5 bg-blue-700 hover:bg-blue-800">
                    <a href={c.href}>{c.label}</a>
                  </Button>
                ))}
              </div>
            )}

            <div className="mt-10 flex justify-between items-center">
              {idx > 0 ? (
                <Button
                  variant="ghost"
                  className="rounded-2xl text-blue-700"
                  onClick={() => sectionRefs.current[idx - 1]?.scrollIntoView({ behavior: "smooth" })}
                >
                  <ChevronUp className="mr-1 w-4 h-4" /> 前に戻る
                </Button>
              ) : (
                <div />
              )}

              {idx < sections.length - 1 && (
                <Button
                  className="rounded-2xl bg-blue-700 hover:bg-blue-800"
                  onClick={() => sectionRefs.current[idx + 1]?.scrollIntoView({ behavior: "smooth" })}
                >
                  次へ <ChevronDown className="ml-1 w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="min-h-[30vh] flex flex-col justify-center items-center text-center bg-white py-12">
        <div className="flex items-center gap-2 text-blue-700 opacity-80">
          <Info className="w-4 h-4" />
          <span>各セクション下部の「前に戻る / 次へ」でページ移動できます。</span>
        </div>
      </section>
    </div>
  );
}
