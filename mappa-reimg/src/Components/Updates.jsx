// import React, { useState } from "react";
// import { CgMenuOreos } from "react-icons/cg";
// import { RiInboxArchiveLine } from "react-icons/ri";

// const updatesData = [
//   { date: "2024.04.01", title: "新経営体制に関するお知らせ", details: "株式会社MAPPA（代表取締役社長：大塚 学、本社：東京都杉並区）は、2024年4月より下記の通り新経営体制となりましたので、お知らせいたします。", link: false, tag: "CORPORATE" },
//   { date: "2024.03.24", title: "『ぶっちぎり?!』クライマックスPV公開！", details: "https://twitter.com/bucchigiri_PR/status/1771731709777858974", link: true, tag: "INFO" },
//   { date: "2024.03.23", title: "『忘却バッテリー』放送直前ビジュアル公開！", details: "Detailed news content for section 3.", link: false, tag: "INFO" },
//   { date: "2024.03.22", title: "『全修。』制作決定！ティザービジュアル＆PV公開！", details: "Detailed news content for section 4.", link: false, tag: "INFO" },
//   { date: "2023.12.29", title: "『呪術廻戦』続編「死滅回游」制作決定！", details: "Detailed news content for section 5.", link: false, tag: "INFO" },
// ];

// const Popup = ({ news, onClose }) => (
//   <div className="fixed w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 flex items-center justify-center bg-black z-50 border-2 rounded-md border-zinc-700">
//     <div className="p-10 w-full h-full overflow-x-hidden overflow-y-scroll relative flex flex-col items-center">
//       <button className="absolute top-2 right-4 text-white text-xl" onClick={onClose}>✖</button>
//       <div className='flex flex-row items-center justify-between gap-6'>
//         <span className='border-2 py-1 px-5 border-[#006837] rounded-full sm:text-lg'><span className='text-md'>{news.tag}</span></span>
//         <h2 className='text-md inline-block'>{news.date}</h2>
//       </div>
//       <h2 className="text-xl mt-4">{news.title}</h2>
//       <p className='text-md mt-4'> {news.details}</p>
//     </div>
//   </div>
// );

// function Updates() {
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const handleHeadlineClick = (index) => {
//     const updateItem = updatesData[index];
//     if (updateItem.link) {
//       window.open(updateItem.details, "_blank");
//     } else {
//       setExpandedIndex(index);
//     }
//   };

//   const handleClosePopup = () => {
//     setExpandedIndex(null);
//   };

//   return (
//     <>
//       <section
//         id="updates"
//         className="relative maven flex items-center pt-32 justify-center w-full h-full bg-black text-white"
//       >
//         <h1 className="absolute text-9xl md:-top-[-1%] -top-[2%] left-[10%] text-shadow-stroke text-transparent ibm-normal">
//           NEWS
//         </h1>
//         <div className="w-2/3 h-full flex flex-col items-center">
//           <div
//             id="updates_title"
//             className="bg-[#e6e6e6] text-black w-full h-16 rounded-t-md flex flex-row justify-between items-center px-5 text-xl maven"
//           >
//             <h3 className="uppercase ibm-normal">updates</h3>
//             <CgMenuOreos className="rotate-90 text-3xl " />
//           </div>
//           {updatesData.map((data, index) => (
//             <div className="flex flex-col cursor-pointer w-full h-auto py-2" onClick={() => handleHeadlineClick(index)} key={index}>
//               <div className="px-5 text-md w-full h-fit py-2 flex flex-row justify-between gap-20 items-center">
//                 <span className="flex flex-col md:flex-row gap-5">
//                   <span id="updates_date" className="uppercase text-green-600 ibm-normal">
//                     {data.date}
//                   </span>
//                   <span id="updates_title">
//                     {data.title}
//                   </span>
//                 </span>
//                 <span className=" bg-white text-black px-2 py- rounded-3xl text-nowrap text-sm">Click for more details</span>
//                 <span id="updates_catagory" className="uppercase text-green-600">
//                   {data.tag}
//                 </span>
//               </div>
//             </div>
//           ))}
//           <div
//             id="archives"
//             className="bg-[#e6e6e6] self-end text-black flex text-nowrap flex-row px-6 py-1 rounded-full items-center justify-between gap-5 my-10 cursor-pointer"
//           >
//             <h3 className="lowercase text-lg ">archives</h3>
//             <RiInboxArchiveLine />
//           </div>
//           {expandedIndex !== null && (
//             <Popup news={updatesData[expandedIndex]} onClose={handleClosePopup} />
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

// export default Updates;
import React, { useState } from "react";
import { CgMenuOreos } from "react-icons/cg";
import { RiInboxArchiveLine } from "react-icons/ri";

const updatesData = [
  { date: "2024.04.01", title: "新経営体制に関するお知らせ", details: "株式会社MAPPA（代表取締役社長：大塚 学、本社：東京都杉並区）は、2024年4月より下記の通り新経営体制となりましたので、お知らせいたします。", link: false, tag: "CORPORATE" },
  { date: "2024.03.24", title: "『ぶっちぎり?!』クライマックスPV公開！", details: "https://twitter.com/bucchigiri_PR/status/1771731709777858974", link: true, tag: "INFO" },
  { date: "2024.03.23", title: "『忘却バッテリー』放送直前ビジュアル公開！", details: "Detailed news content for section 3.", link: false, tag: "INFO" },
  { date: "2024.03.22", title: "『全修。』制作決定！ティザービジュアル＆PV公開！", details: "Detailed news content for section 4.", link: false, tag: "INFO" },
  { date: "2023.12.29", title: "『呪術廻戦』続編「死滅回游」制作決定！", details: "Detailed news content for section 5.", link: false, tag: "INFO" },
];

const Popup = ({ news, onClose }) => (
  <div className="fixed w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 flex items-center justify-center bg-black z-50 border-2 rounded-md border-zinc-700">
    <div className="p-10 w-full h-full overflow-x-hidden overflow-y-scroll relative flex flex-col items-center">
      <button className="absolute top-2 right-4 text-white text-xl" onClick={onClose}>✖</button>
      <div className='flex flex-row items-center justify-between gap-6'>
        <span className='border-2 py-1 px-5 border-[#006837] rounded-full sm:text-lg'><span className='text-md'>{news.tag}</span></span>
        <h2 className='text-md inline-block'>{news.date}</h2>
      </div>
      <h2 className="text-xl mt-4">{news.title}</h2>
      <p className='text-md mt-4'>{news.details}</p>
    </div>
  </div>
);

function Updates() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleHeadlineClick = (index) => {
    const updateItem = updatesData[index];
    if (updateItem.link) {
      window.open(updateItem.details, "_blank");
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
        className="relative maven flex items-center pt-32 justify-center w-full h-full bg-black text-white"
      >
        <h1 className="absolute text-9xl md:-top-[-1%] -top-[2%] left-[10%] text-shadow-stroke text-transparent ibm-normal">
          NEWS
        </h1>
        <div className="w-2/3 h-full flex flex-col items-center">
          <div
            id="updates_title"
            className="bg-[#e6e6e6] text-black w-full h-16 rounded-t-md flex flex-row justify-between items-center px-5 text-xl maven"
          >
            <h3 className="uppercase ibm-normal">updates</h3>
            <CgMenuOreos className="rotate-90 text-3xl " />
          </div>
          {updatesData.map((data, index) => (
            <div
              className="update-item flex flex-col cursor-pointer w-full h-auto py-2 relative"
              onClick={() => handleHeadlineClick(index)}
              key={index}
            >
              <div className="px-5 text-md w-full h-fit py-2 flex flex-row justify-between gap-20 items-center">
                <span className="flex flex-col md:flex-row gap-5">
                  <span id="updates_date" className="uppercase text-green-600 ibm-normal">
                    {data.date}
                  </span>
                  <span id="updates_title">
                    {data.title}
                  </span>
                </span>
                <span className="update-details transition-all duration-500 bg-white text-black px-2 py- rounded-3xl text-nowrap text-sm">Click for more details</span>
                <span id="updates_catagory" className="uppercase text-green-600">
                  {data.tag}
                </span>
              </div>
            </div>
          ))}
          <div
            id="archives"
            className="bg-[#e6e6e6] self-end text-black flex text-nowrap flex-row px-6 py-1 rounded-full items-center justify-between gap-5 my-10 cursor-pointer"
          >
            <h3 className="lowercase text-lg">archives</h3>
            <RiInboxArchiveLine />
          </div>
          {expandedIndex !== null && (
            <Popup news={updatesData[expandedIndex]} onClose={handleClosePopup} />
          )}
        </div>
      </section>
    </>
  );
}

export default Updates;
