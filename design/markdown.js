var options = require('./options')

module.exports = `
  @font-face {
    font-family: octicons-link;
    src: url(data:font/woff;charset=utf-8;base64,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) format('woff');
  }

  .markdown-body .pl-c {
    color: #6a737d;
  }

  .markdown-body .pl-c1,
  .markdown-body .pl-s .pl-v {
    color: #005cc5;
  }

  .markdown-body .pl-e,
  .markdown-body .pl-en {
    color: #6f42c1;
  }

  .markdown-body .pl-smi,
  .markdown-body .pl-s .pl-s1 {
    color: #24292e;
  }

  .markdown-body .pl-ent {
    color: #22863a;
  }

  .markdown-body .pl-k {
    color: #d73a49;
  }

  .markdown-body .pl-s,
  .markdown-body .pl-pds,
  .markdown-body .pl-s .pl-pse .pl-s1,
  .markdown-body .pl-sr,
  .markdown-body .pl-sr .pl-cce,
  .markdown-body .pl-sr .pl-sre,
  .markdown-body .pl-sr .pl-sra {
    color: #032f62;
  }

  .markdown-body .pl-v,
  .markdown-body .pl-smw {
    color: #e36209;
  }

  .markdown-body .pl-bu {
    color: #b31d28;
  }

  .markdown-body .pl-ii {
    color: #fafbfc;
    background-color: #b31d28;
  }

  .markdown-body .pl-c2 {
    color: #fafbfc;
    background-color: #d73a49;
  }

  .markdown-body .pl-c2::before {
    content: "^M";
  }

  .markdown-body .pl-sr .pl-cce {
    color: #22863a;
  }

  .markdown-body .pl-ml {
    color: #735c0f;
  }

  .markdown-body .pl-mh,
  .markdown-body .pl-mh .pl-en,
  .markdown-body .pl-ms {
    color: #005cc5;
  }

  .markdown-body .pl-mi {
    font-style: italic;
    color: #24292e;
  }

  .markdown-body .pl-mb {
    color: #24292e;
  }

  .markdown-body .pl-md {
    color: #b31d28;
    background-color: #ffeef0;
  }

  .markdown-body .pl-mi1 {
    color: #22863a;
    background-color: #f0fff4;
  }

  .markdown-body .pl-mc {
    color: #e36209;
    background-color: #ffebda;
  }

  .markdown-body .pl-mi2 {
    color: #f6f8fa;
    background-color: #005cc5;
  }

  .markdown-body .pl-mdr {
    font-weight: bold;
    color: #6f42c1;
  }

  .markdown-body .pl-ba {
    color: #586069;
  }

  .markdown-body .pl-sg {
    color: #959da5;
  }

  .markdown-body .pl-corl {
    text-decoration: underline;
    color: #032f62;
  }

  .markdown-body .octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
  }

  .markdown-body a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  .markdown-body a:active,
  .markdown-body a:hover {
    outline-width: 0;
  }

  .markdown-body strong {
    font-weight: inherit;
  }

  .markdown-body strong {
    font-weight: bold;
  }

  .markdown-body h1 {
    font-size: 4em;
    font-weight: normal;
    margin: 0.5rem 0;
  }

  .markdown-body img {
    border-style: none;
  }

  .markdown-body svg:not(:root) {
    overflow: hidden;
  }

  .markdown-body code,
  .markdown-body kbd,
  .markdown-body pre {

  }

  .markdown-body hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  .markdown-body input {
    font: inherit;
    margin: 0;
  }

  .markdown-body input {
    overflow: visible;
  }

  .markdown-body [type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  .markdown-body * {
    box-sizing: border-box;
  }

  .markdown-body input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .markdown-body a {
    color: ${options.colors.black};
    border-bottom: 2px solid ${options.colors.pinker};
    text-decoration: none;
  }

  .markdown-body a:hover {
    border-bottom: 2px solid ${options.colors.black};
  }

  .markdown-body strong {
    font-weight: 600;
  }

  .markdown-body hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 2px solid ${options.colors.pinker};
  }

  .markdown-body hr::before {
    display: table;
    content: "";
  }

  .markdown-body hr::after {
    display: table;
    clear: both;
    content: "";
  }

  .markdown-body table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  .markdown-body td,
  .markdown-body th {
    padding: 0;
  }

  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3,
  .markdown-body h4,
  .markdown-body h5,
  .markdown-body h6 {
    margin-top: 0;
    margin-bottom: 0;
  }

  .markdown-body h1 {
    font-size: 2em;
    font-weight: normal;
  }

  .markdown-body h2 {
    color: ${options.colors.pinker};
    font-size: 2em;
    font-weight: normal;
  }

  .markdown-body h3 {
    font-size: 1.5em;
    color: ${options.colors.pinker};
    font-weight: normal;
  }

  .markdown-body h4 {
    font-size: 1em;
    font-weight: normal;
  }

  .markdown-body h5 {
    font-size: 0.75em;
    font-weight: normal;
  }

  .markdown-body h6 {
    font-size: 0.75em;
    font-weight: bold;
  }

  .markdown-body p {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  .markdown-body blockquote {
    margin: 0;
  }

  .markdown-body ul,
  .markdown-body ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .markdown-body ol ol,
  .markdown-body ul ol {
    list-style-type: lower-roman;
  }

  .markdown-body ul ul ol,
  .markdown-body ul ol ol,
  .markdown-body ol ul ol,
  .markdown-body ol ol ol {
    list-style-type: lower-alpha;
  }

  .markdown-body dd {
    margin-left: 0;
  }

  .markdown-body code {
    font-family: ${options.fonts.mono};
    font-size: 1em;
  }

  .markdown-body pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: ${options.fonts.mono};
    font-size: 0.75em;
  }

  .markdown-body .octicon {
    vertical-align: text-bottom;
  }

  .markdown-body .pl-0 {
    padding-left: 0 !important;
  }

  .markdown-body .pl-1 {
    padding-left: 4px !important;
  }

  .markdown-body .pl-2 {
    padding-left: 8px !important;
  }

  .markdown-body .pl-3 {
    padding-left: 16px !important;
  }

  .markdown-body .pl-4 {
    padding-left: 24px !important;
  }

  .markdown-body .pl-5 {
    padding-left: 32px !important;
  }

  .markdown-body .pl-6 {
    padding-left: 40px !important;
  }

  .markdown-body::before {
    display: table;
    content: "";
  }

  .markdown-body::after {
    display: table;
    clear: both;
    content: "";
  }

  .markdown-body>*:first-child {
    margin-top: 0 !important;
  }

  .markdown-body>*:last-child {
    margin-bottom: 0 !important;
  }

  .markdown-body a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .markdown-body .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;
  }

  .markdown-body .anchor:focus {
    outline: none;
  }

  .markdown-body p,
  .markdown-body blockquote,
  .markdown-body ul,
  .markdown-body ol,
  .markdown-body dl,
  .markdown-body table,
  .markdown-body pre {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  .markdown-body hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: ${options.colors.pinker};
    border: 0;
  }

  .markdown-body blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  .markdown-body blockquote>:first-child {
    margin-top: 0;
  }

  .markdown-body blockquote>:last-child {
    margin-bottom: 0;
  }

  .markdown-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font-size: 11px;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #c6cbd1;
    border-bottom-color: #959da5;
    box-shadow: inset 0 -1px 0 #959da5;
  }

  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3,
  .markdown-body h4,
  .markdown-body h5,
  .markdown-body h6 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .markdown-body h1 .octicon-link,
  .markdown-body h2 .octicon-link,
  .markdown-body h3 .octicon-link,
  .markdown-body h4 .octicon-link,
  .markdown-body h5 .octicon-link,
  .markdown-body h6 .octicon-link {
    color: #1b1f23;
    vertical-align: middle;
    visibility: hidden;
  }

  .markdown-body h1:hover .anchor,
  .markdown-body h2:hover .anchor,
  .markdown-body h3:hover .anchor,
  .markdown-body h4:hover .anchor,
  .markdown-body h5:hover .anchor,
  .markdown-body h6:hover .anchor {
    text-decoration: none;
  }

  .markdown-body h1:hover .anchor .octicon-link,
  .markdown-body h2:hover .anchor .octicon-link,
  .markdown-body h3:hover .anchor .octicon-link,
  .markdown-body h4:hover .anchor .octicon-link,
  .markdown-body h5:hover .anchor .octicon-link,
  .markdown-body h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  .markdown-body h1 {
    padding-bottom: 0.5rem;
  }

  .markdown-body h2 {
    padding-bottom: 0.5rem;
  }

  .markdown-body ul,
  .markdown-body ol {
    padding-left: 1rem;
  }

  .markdown-body ul ul,
  .markdown-body ul ol,
  .markdown-body ol ol,
  .markdown-body ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  .markdown-body li>p {
    margin-top: 1.5rem;
  }

  .markdown-body li+li {
    margin-top: 0.25rem;
  }

  .markdown-body dl {
    padding: 0;
  }

  .markdown-body dl dt {
    padding: 0;
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 600;
  }

  .markdown-body dl dd {
    padding: 0 1.5rem;
    margin-bottom: 1.5rem;
  }

  .markdown-body table {
    display: block;
    width: 100%;
    overflow: auto;
  }

  .markdown-body table th {
    font-weight: 600;
  }

  .markdown-body table th,
  .markdown-body table td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

  .markdown-body table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  .markdown-body table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  .markdown-body img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: #fff;
  }

  .markdown-body img[align=right] {
    padding-left: 20px;
  }

  .markdown-body img[align=left] {
    padding-right: 20px;
  }

  .markdown-body code {
    padding: 0 0.1em;
    margin: 0 -0.1em;
    background-color: ${options.colors.white};
  }

  .markdown-body code::before,
  .markdown-body code::after {
    letter-spacing: -0.2em;
  }

  .markdown-body pre {
    word-wrap: normal;
  }

  .markdown-body pre>code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .markdown-body .highlight {
    margin-bottom: 1.5rem;
  }

  .markdown-body .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .markdown-body .highlight pre,
  .markdown-body pre {
    padding: 0.75rem 1rem;
    overflow: auto;
    line-height: 1.5;
    background-color: ${options.colors.white};
  }

  .markdown-body pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  .markdown-body pre code::before,
  .markdown-body pre code::after {
    content: normal;
  }

  .markdown-body .full-commit .btn-outline:not(:disabled):hover {
    color: #005cc5;
    border-color: #005cc5;
  }

  .markdown-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px ${options.fonts.mono};
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #d1d5da;
    border-bottom-color: #c6cbd1;
    box-shadow: inset 0 -1px 0 #c6cbd1;
  }

  .markdown-body :checked+.radio-label {
    position: relative;
    z-index: 1;
    border-color: #0366d6;
  }

  .markdown-body .task-list-item {
    list-style-type: none;
  }

  .markdown-body .task-list-item+.task-list-item {
    margin-top: 3px;
  }

  .markdown-body .task-list-item input {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
  }

  .markdown-body hr {
    border-bottom-color: ${options.colors.pinker};
  }
`
