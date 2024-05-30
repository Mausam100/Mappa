import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-2">CONTACT</h3>
          <p className="mb-2">
            当社では、テレビアニメ、映画、CM、Webムービー、映像素材等、アニメーション映像に関わる全てのジャンルにおける企画・制作をご提案しております。
            お仕事のご依頼・ご相談等につきましては、まずはメールにてお問い合わせください。
            お問い合わせ内容によってはお返事を差し上げられない場合もございます。
            あらかじめご了承ください。
          </p>
          <p className="mb-2">お問い合わせ先</p>
          <a href="mailto:info@mappa.co.jp" className="text-green-500">info@mappa.co.jp</a>
          <p className="text-sm mt-2">
            ※会社見学や、個人の方からの取材のご依頼はお断りしております。
            ご理解のほどよろしくお願いいたします。
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">ADDRESS</h3>
          <p>
            MAPPA Co., Ltd.
            2-9 Ogikubo,
            Suginami City,
            Tokyo 167-0032,
            Japan
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">SOCIALS</h3>
          <p>Twitter</p>
          <p>Youtube</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-5">
        <div className="flex space-x-4 mb-5 md:mb-0">
          <a href="https://twitter.com" aria-label="Twitter" className="text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* SVG Path for Twitter Icon */}
            </svg>
          </a>
          <a href="https://youtube.com" aria-label="YouTube" className="text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* SVG Path for YouTube Icon */}
            </svg>
          </a>
        </div>
        <p className="text-sm text-gray-500">© MAPPA LTD 2024 All rights reserved</p>
        <a href="#top" className="text-gray-400 flex items-center">
          <span>back to top</span>
          <svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 24 24">
            {/* SVG Path for Arrow Icon */}
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;