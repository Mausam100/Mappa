import React, {useState} from "react";
import { CgMenuOreos } from "react-icons/cg";
import { RiInboxArchiveLine } from "react-icons/ri";
import cardData from "../constant/CardDetails";

const updatesData = [
  {
    date: "2024.04.01",
    title: "新経営体制に関するお知らせ",
    details:
      "株式会社MAPPA（代表取締役社長：大塚 学、本社：東京都杉並区）は、2024年4月より下記の通り新経営体制となりましたので、お知らせいたします。",
    link: false,
    tag: "CORPORATE",
  },
  {
    date: "2024.03.24",
    title: "『ぶっちぎり?!』クライマックスPV公開！",
    details: "https://twitter.com/bucchigiri_PR/status/1771731709777858974",
    link: true,
    tag: "INFO",
  },
  {
    date: "2024.03.23",
    title: "『忘却バッテリー』放送直前ビジュアル公開！",
    details: "Detailed news content for section 3.",
    link: false,
    tag: "INFO",
  },
  {
    date: "2024.03.22",
    title: "『全修。』制作決定！ティザービジュアル＆PV公開！",
    details: "Detailed news content for section 4.",
    link: false,
    tag: "INFO",
  },
  {
    date: "2023.12.29",
    title: "『呪術廻戦』続編「死滅回游」制作決定！",
    details: "Detailed news content for section 5.",
    link: false,
    tag: "INFO",
  },
];

function Updates() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleHeadlineClick = (index) => {
    const newsItem = newsData[index];
    if (newsItem.link) {
      window.open(newsItem.details, "_blank");
    } else {
      setExpandedIndex(index);
    }
  };

  const handleClosePopup = () => {
    setExpandedIndex(null);
  };

  return (
    <>
      <section
        id="updates"
        className="relative maven flex items-center justify-center w-full h-full bg-black text-white"
      >
        <div className="w-2/3 h-full flex flex-col items-center">
          <div
            id="updates_title"
            className="bg-[#e6e6e6] text-black w-full h-16 rounded-t-md flex flex-row justify-between items-center px-5 text-xl maven"
          >
            <h3 className="uppercase">updates</h3>
            <CgMenuOreos className="rotate-90" />
          </div>
          <div className="flex flex-col">
            <div className="px-5 text-md 2-full h-fit py-2 flex flex-row justify-between gap-20 items-center">
              <span className="flex flex-col md:flex-row gap-10">
                <span id="updates_date" className="uppercase">
                  {}11/11/11
                </span>
                <span id="updates_title">
                  {}helleo this is some description of the news updates this
                  will be replaced by map function
                </span>
              </span>
              <span id="updates_catagory" className="uppercase">
                {}corporate
              </span>
            </div>
          </div>
          <div
            id="archives"
            className="bg-[#e6e6e6] self-end text-black flex text-nowrap flex-row px-6 py-1 rounded-full items-center justify-between gap-5"
          >
            <h3 className="lowercase">archives</h3>
            <RiInboxArchiveLine />
          </div>
        </div>
      </section>
    </>
  );
}

export default Updates;
