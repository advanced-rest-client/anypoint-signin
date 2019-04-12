/*
Copyright 2018 Mulesoft Inc
All rights reserved.
*/
import '../../@polymer/iron-iconset-svg/iron-iconset-svg.js';
const $documentContainer = document.createElement('template');
$documentContainer.innerHTML = `<iron-iconset-svg name="exchange" size="26">
<svg>
  <defs>
    <g id="exchange">
      <path d="M24 13c0 2.497-.832 4.799-2.234 6.645-.607.8-1.321 1.514-2.121 2.121l-5.231-5.231 2.122-2.121 4.158 4.159C21.83 17.007 22.5 15.082 22.5 13s-.67-4.007-1.806-5.573L6.355 21.766c-.8-.607-1.514-1.321-2.121-2.121C2.832 17.799 2 15.497 2 13s.832-4.799 2.234-6.645c.607-.8 1.321-1.514 2.121-2.121l5.231 5.23-2.121 2.122-4.159-4.159C4.17 8.993 3.5 10.918 3.5 13s.67 4.007 1.806 5.573L19.645 4.234c.8.607 1.514 1.321 2.121 2.121C23.168 8.201 24 10.503 24 13z"></path>
    </g>
    <g id="exchange-color">
      <path fill="#114459" d="M5.306 7.427C4.17 8.993 3.5 10.918 3.5 13s.67 4.007 1.806 5.573l-1.072 1.072C2.832 17.799 2 15.497 2 13s.832-4.799 2.234-6.645l1.072 1.072zm16.46-1.072l-1.072 1.072C21.83 8.993 22.5 10.918 22.5 13s-.67 4.007-1.806 5.573l1.072 1.072C23.168 17.799 24 15.497 24 13s-.832-4.799-2.234-6.645z"></path>
      <path fill="#00A3E0" d="M21.766 6.355L6.355 21.766c-.8-.607-1.514-1.321-2.121-2.121L19.645 4.234c.8.607 1.514 1.321 2.121 2.121z"></path>
      <path fill="#087299" d="M6.355 4.234l5.231 5.23-2.121 2.122-5.231-5.231c.607-.8 1.321-1.514 2.121-2.121zm10.181 10.18l-2.122 2.121 5.231 5.231c.8-.607 1.514-1.321 2.121-2.121l-5.23-5.231z"></path>
    </g>
  </defs>
</svg>
</iron-iconset-svg>`;

document.head.appendChild($documentContainer.content);