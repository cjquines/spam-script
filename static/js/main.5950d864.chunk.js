(this["webpackJsonpspam-script"]=this["webpackJsonpspam-script"]||[]).push([[0],{103:function(e,a,t){e.exports=t(209)},108:function(e,a,t){},13:function(e,a,t){"use strict";(function(e){var n,l;t.d(a,"b",(function(){return r})),t.d(a,"c",(function(){return m})),t.d(a,"a",(function(){return o}));var r=window.location.hostname.includes("mit.edu"),s=(null===(n=e)||void 0===n||null===(l=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}))||void 0===l?void 0:l.NODE_ENV)&&!1;function c(e){e.preventDefault(),e.returnValue=!1}var i=!1;function m(){i||s||(window.addEventListener("beforeunload",c),i=!0)}function o(){i&&(window.removeEventListener("beforeunload",c),i=!1)}}).call(this,t(77))},168:function(e,a){},209:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(39),s=t.n(r),c=(t(108),t(14)),i=t(7),m=t(96);function o(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"level has-text-centered"},l.a.createElement("div",{className:"level-item"},l.a.createElement("a",{href:"https://esp.mit.edu",target:"_blank",rel:"noopener noreferrer",className:"has-text-grey-dark"},"MIT ESP Email Spam Script")),l.a.createElement("div",{className:"level-item"},l.a.createElement("a",{href:"https://github.com/byronxu99/spam-script",target:"_blank",rel:"noopener noreferrer",className:"has-text-grey-dark"},l.a.createElement("span",{className:"icon"},l.a.createElement(i.a,{icon:m.a,fixedWidth:!0,transform:"down-1"}))," ","Open Source")),l.a.createElement("div",{className:"level-item"},l.a.createElement("a",{href:"https://scripts.mit.edu",target:"_blank",rel:"noopener noreferrer",className:"has-text-grey-dark"},"Powered by scripts.mit.edu")))))}var u=t(13);function d(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"hero is-fullheight"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"title is-1 has-text-centered"},"Welcome to the new spam script!"),l.a.createElement("div",{className:"columns is-desktop py-5"},l.a.createElement("div",{className:"column has-text-centered px-2"},l.a.createElement("div",{className:"huge-icon"},l.a.createElement("span",{role:"img","aria-label":"icon"},"\ud83d\udccb")),l.a.createElement("p",{className:"title is-3 py-1"},"Enter your data"),l.a.createElement("p",{className:"subtitle is-5 py-2 px-5"},"Copy and paste tab-separated or comma-separated values from a spreadsheet.")),l.a.createElement("div",{className:"column has-text-centered px-2"},l.a.createElement("div",{className:"huge-icon"},l.a.createElement("span",{role:"img","aria-label":"icon"},"\u270f\ufe0f")),l.a.createElement("p",{className:"title is-3 py-1"},"Write your message"),l.a.createElement("p",{className:"subtitle is-5 py-2 px-5"},"Draft a Markdown, HTML, or plain-text email template, featuring instant preview")),l.a.createElement("div",{className:"column has-text-centered px-2"},l.a.createElement("div",{className:"huge-icon"},l.a.createElement("span",{role:"img","aria-label":"icon"},"\u2709\ufe0f")),l.a.createElement("p",{className:"title is-3 py-1"},"Send your spam"),l.a.createElement("p",{className:"subtitle is-5 py-2 px-5"},"Double-check all your messages and go! View live progress as each message sends."))),l.a.createElement("div",{className:"has-text-centered py-4"},l.a.createElement("button",{onClick:e.nextPage,className:"button is-success is-large px-6"},"Get started")),u.b&&l.a.createElement("div",{className:"has-text-centered py-1"},l.a.createElement("a",{href:"https://esp.scripts.mit.edu:444/esp-publicity/email/email-dictator/web/edit.cgi"},"Looking for the old spam script? Click here."))))),l.a.createElement(o,null))}var E,p=t(4),v=t(20),h=t(98),f=t.n(h),N=Object(v.b)({name:"data",initialState:{},reducers:{setRawData:function(e,a){e.raw=a.payload},setParsedData:function(e,a){e.headers=a.payload.headers,e.rows=a.payload.rows}}}),g=N.reducer,b=N.actions,y=b.setRawData,w=b.setParsedData;function x(e){return function(a){a(y(e));var t,n=f.a.parse(e,{skipEmptyLines:"greedy"}),l={headers:(t={headers:n.data[0]||[],rows:n.data.slice(1)}).headers.map((function(e){return e.trim()})),rows:t.rows.map((function(e){return e.map((function(e){return e.trim()}))}))};a(w(l))}}function S(e){return e.data.raw||""}function P(e){return{headers:e.data.headers||[],rows:e.data.rows||[]}}!function(e){e[e.MARKDOWN=0]="MARKDOWN",e[e.HTML=1]="HTML",e[e.PLAINTEXT=2]="PLAINTEXT",e[e.PROCESSED=3]="PROCESSED"}(E||(E={}));var A=t(102),O=t(99),T=t.n(O),k=t(74),j=t.n(k),C=t(75),M=t.n(C),D={smartLists:!0,smartypants:!0,xhtml:!0},R={hideLinkHrefIfSameAsText:!0,returnDomByDefault:!1,tables:!0},I=["ARGV"];function U(e,a){var t=e.headers,n=e.rows[a]||[],l={};return t.forEach((function(e,a){e&&(l[e]=n[a]||"")})),l.ARGV=n,l}function G(e){var a={from:_(e.from),sender:_(e.sender),to:_(e.to),cc:_(e.cc),bcc:_(e.bcc),replyTo:_(e.replyTo),inReplyTo:_(e.inReplyTo),references:_(e.references),subject:_(e.subject),messageId:_(e.messageId),date:_(e.date)},t=_(e.raw);return function(n){var l,r={bodyFormat:e.bodyFormat,attachments:e.attachments,errors:e.errors||[]};for(var s in a){var c,i=s,m=a[i];if("function"===typeof m)try{var o=m(n);o&&(r[i]=o)}catch(p){var u;null===(u=r.errors)||void 0===u||u.push(H(p,'Error in field "'.concat(s,'"')))}else null===(c=r.errors)||void 0===c||c.push(H(m,'Error in field "'.concat(s,'"')))}if("function"===typeof t)try{r.raw=t(n)}catch(p){var d;null===(d=r.errors)||void 0===d||d.push(H(p,"Error in message body"))}else null===(l=r.errors)||void 0===l||l.push(H(t,"Error in message body"));return e.headers&&(r.headers=e.headers),function(e){var a=Object(A.a)({},e);if(e.raw&&e.bodyFormat===E.MARKDOWN){var t=T()(e.raw,D);a.html=j.a.sanitize(t),a.text=M.a.fromString(a.html,R)}e.raw&&e.bodyFormat===E.HTML&&(a.html=j.a.sanitize(e.raw),a.text=M.a.fromString(a.html,R));e.raw&&e.bodyFormat===E.PLAINTEXT&&(a.text=e.raw);e.raw||(a.text="");return a.bodyFormat=E.PROCESSED,a}(r)}}function _(e){if(!e)return function(){return""};try{return Function("SPAM","return `".concat(e,"`"))}catch(a){return a}}function H(e,a){var t=Error(e.toString());return t.name=a,t}var L={bodyFormat:E.MARKDOWN,attachments:[]},F=Object(v.b)({name:"template",initialState:L,reducers:{setMessageFormat:function(e,a){e.bodyFormat=a.payload},setRawBody:function(e,a){e.raw=a.payload},setHeader:function(e,a){e[a.payload.header]=a.payload.value}}}),W=F.reducer,V=F.actions,B=V.setMessageFormat,$=V.setRawBody,K=V.setHeader;function Q(e){return e.template}function X(e){return e.template.bodyFormat}function z(e){return e.template.raw}function Y(e){return function(a){return a.template[e]}}function J(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1],s=Object(p.b)(),i=Object(p.c)(Y("from")),m=Object(p.c)(Y("to")),o=Object(p.c)(Y("cc")),u=Object(p.c)(Y("bcc")),d=Object(p.c)(Y("replyTo")),v=Object(p.c)(Y("sender")),h=Object(p.c)(Y("inReplyTo")),f=Object(p.c)(Y("subject")),N=Object(p.c)(X),g=Object(p.c)(z);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{className:"label"},"From"),l.a.createElement("input",{className:"input",type:"text",value:i||"",placeholder:"Your Name <example@mit.edu>",onChange:function(e){return s(K({header:"from",value:e.target.value}))}}),l.a.createElement("p",{className:"help"},"Should be an @mit.edu address"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{className:"label"},"To"),l.a.createElement("input",{className:"input",type:"text",value:m||"",placeholder:"${SPAM.email}",onChange:function(e){return s(K({header:"to",value:e.target.value}))}}),l.a.createElement("p",{className:"help"},"Main recipients of your message"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{className:"label"},"Cc"),l.a.createElement("input",{className:"input",type:"text",value:o||"",placeholder:"test1@example.com, test2@example.com",onChange:function(e){return s(K({header:"cc",value:e.target.value}))}}),l.a.createElement("p",{className:"help"},"Additional recipients of your message"))),!t&&l.a.createElement("div",{className:"has-text-centered"},l.a.createElement("a",{onClick:function(e){r(!0),e.preventDefault()}},"Show additional fields...")),t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"has-text-centered"},l.a.createElement("a",{onClick:function(e){r(!1),e.preventDefault()}},"Hide additional fields...")),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{className:"label"},"Bcc"),l.a.createElement("input",{className:"input",type:"text",value:u||"",placeholder:"test3@example.com",onChange:function(e){return s(K({header:"bcc",value:e.target.value}))}}),l.a.createElement("p",{className:"help"},"Additional hidden recipients of your message"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{className:"label"},"Reply-To"),l.a.createElement("input",{className:"input",type:"text",value:d||"",onChange:function(e){return s(K({header:"replyTo",value:e.target.value}))}}),l.a.createElement("p",{className:"help"},"Optional email address that you want people to send replies to"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{className:"label"},"Sender"),l.a.createElement("input",{className:"input",type:"text",value:v||"",onChange:function(e){return s(K({header:"sender",value:e.target.value}))}}),l.a.createElement("p",{className:"help"},"If From is not an @mit.edu address, set this to an @mit.edu address to send on behalf of an external address"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{className:"label"},"In-Reply-To"),l.a.createElement("input",{className:"input",type:"text",value:h||"",onChange:function(e){return s(K({header:"inReplyTo",value:e.target.value}))}}),l.a.createElement("p",{className:"help"},"For replying to previous messages (leave blank if you don't know what this is)")))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("label",{className:"label"},"Subject"),l.a.createElement("input",{className:"input",type:"text",value:f||"",placeholder:"Automated spam message for ${SPAM.name}",onChange:function(e){return s(K({header:"subject",value:e.target.value}))}}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Message"),l.a.createElement("div",{className:"tabs is-toggle is-small mb-3"},l.a.createElement("ul",null,l.a.createElement("li",{className:N===E.MARKDOWN?"is-active":""},l.a.createElement("a",{onClick:function(e){s(B(E.MARKDOWN)),e.preventDefault()}},"Markdown")),l.a.createElement("li",{className:N===E.HTML?"is-active":""},l.a.createElement("a",{onClick:function(e){s(B(E.HTML)),e.preventDefault()}},"HTML")),l.a.createElement("li",{className:N===E.PLAINTEXT?"is-active":""},l.a.createElement("a",{onClick:function(e){s(B(E.PLAINTEXT)),e.preventDefault()}},"Plain text")))),l.a.createElement("textarea",{className:"textarea",value:g||"",rows:20,placeholder:q,onChange:function(e){return s($(e.target.value))}})))}var q="\nDear ${SPAM.name},\n\nThis is a friendly reminder that your appointment is scheduled for **tomorrow** at ${SPAM.time}.\n\nIf you have any questions, please visit [our website](https://example.com).\n\nSincerely,<br>\nYour Name\n".trim(),Z=t(10),ee={title:"",nextPage:function(){return!1},prevPage:function(){return!1},showNext:!1,showPrev:!1};function ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee;return l.a.createElement("div",null,l.a.createElement("nav",{className:"container pt-5"},l.a.createElement("div",{className:"level is-mobile"},l.a.createElement("div",{className:"level-left has-text-centered"},l.a.createElement("button",{onClick:e.prevPage,className:"button is-success "+(e.showPrev?"":"is-invisible")},l.a.createElement("span",{className:"icon"},l.a.createElement(i.a,{icon:Z.b,transform:"down-1"})),l.a.createElement("span",null,"Back"))),l.a.createElement("div",{className:"level-item"},l.a.createElement("div",{className:"title is-3 py-1"},e.title)),l.a.createElement("div",{className:"level-right has-text-centered"},l.a.createElement("button",{onClick:e.nextPage,className:"button is-success "+(e.showNext?"":"is-invisible")},l.a.createElement("span",null,"Next"),l.a.createElement("span",{className:"icon"},l.a.createElement(i.a,{icon:Z.c,transform:"down-1"})))))),l.a.createElement("hr",null))}var te="\nemail, name, time\naphacker@mit.edu, Alyssa P. Hacker, 9:00 AM\nbitdiddle@mit.edu, Ben Bitdiddle, 11:00 AM\npembroke@mit.edu, Edward S. Pembroke, 2:00 PM\n".trim();function ne(e){var a=Object(p.c)(S),t=Object(p.b)();return l.a.createElement(l.a.Fragment,null,l.a.createElement(ae,{title:"Enter your data",nextPage:e.nextPage,prevPage:e.prevPage,showNext:!0,showPrev:!0}),l.a.createElement("div",null,l.a.createElement("div",{className:"container px-3 pb-3"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Enter data as a tab- or comma-separated array. The first line should be a header row with variable names."),l.a.createElement("textarea",{className:"textarea",value:a||"",placeholder:te,onChange:function(e){return t(x(e.target.value))},rows:20,autoFocus:!0,spellCheck:"false",wrap:"off"}),!a&&l.a.createElement("p",{className:"pt-1"},"(",l.a.createElement("a",{onClick:function(e){!function(e){e(x(te)),e(K({header:"from",value:"Your Name <example@mit.edu>"})),e(K({header:"to",value:"${SPAM.email}"})),e(K({header:"subject",value:"Automated spam message for ${SPAM.name}"})),e(B(E.MARKDOWN)),e($(q))}(t),e.preventDefault()}},"Click here to load sample data and message"),")")),l.a.createElement(le,null))))}function le(){var e=Object(p.c)(P),a=e.headers,t=e.rows,n=a.filter((function(e){return I.includes(e)}));return l.a.createElement(l.a.Fragment,null,!!(null===a||void 0===a?void 0:a.length)&&l.a.createElement("div",{className:"py-3"},l.a.createElement("p",{className:"label"},"Preview"),l.a.createElement("div",{className:"table-container mb-2"},l.a.createElement("table",{className:"table is-bordered is-hoverable"},l.a.createElement("thead",{className:"has-background-light"},l.a.createElement("tr",null,a.map((function(e,a){return l.a.createElement("th",{key:a},e)})))),l.a.createElement("tbody",null,null===t||void 0===t?void 0:t.map((function(e,a){return l.a.createElement("tr",{key:a},e.map((function(e,a){return l.a.createElement("td",{key:a},e)})))}))))),l.a.createElement("p",null,"Number of emails: ",(null===t||void 0===t?void 0:t.length)||0),n.length>0&&l.a.createElement("div",{className:"pt-5"},n.map((function(e,a){return l.a.createElement("div",{key:a,className:"message is-danger"},l.a.createElement("div",{className:"message-body"},l.a.createElement("span",{className:"has-text-weight-bold"},e)," is a special keyword. Please choose a different variable name."))})))))}var re,se=t(33);function ce(e){var a="has-text-weight-bold",t="has-text-grey-light",n={from:e.message.from||"(empty)",fromClass:e.message.from?"":t,to:e.message.to||"(empty)",toClass:e.message.to?"":t,subject:e.message.subject||"(empty)",subjectClass:e.message.subject?"":t},r=(e.message.errors||[]).concat(e.additionalErrors||[]);return l.a.createElement("div",null,l.a.createElement("div",{className:"add-paragraph-spacing"},l.a.createElement("p",null,l.a.createElement("span",{className:a},"From:")," ",l.a.createElement("span",{className:n.fromClass},n.from)),l.a.createElement("p",null,l.a.createElement("span",{className:a},"To:")," ",l.a.createElement("span",{className:n.toClass},n.to)),e.message.cc&&l.a.createElement("p",null,l.a.createElement("span",{className:a},"Cc:")," ",e.message.cc),e.message.bcc&&l.a.createElement("p",null,l.a.createElement("span",{className:a},"Bcc:")," ",e.message.bcc),e.message.replyTo&&l.a.createElement("p",null,l.a.createElement("span",{className:a},"Reply-To:")," ",e.message.replyTo),e.message.sender&&l.a.createElement("p",null,l.a.createElement("span",{className:a},"Sender:")," ",e.message.sender),e.message.inReplyTo&&l.a.createElement("p",null,l.a.createElement("span",{className:a},"In-Reply-To:")," ",e.message.inReplyTo),e.message.references&&l.a.createElement("p",null,l.a.createElement("span",{className:a},"References:")," ",e.message.references),l.a.createElement("p",null,l.a.createElement("span",{className:a},"Subject:")," ",l.a.createElement("span",{className:n.subjectClass},n.subject)),e.message.messageId&&l.a.createElement("p",null,l.a.createElement("span",{className:a},"Message-ID:")," ",e.message.messageId),e.message.date&&l.a.createElement("p",null,l.a.createElement("span",{className:a},"Date:")," ",e.message.date)),l.a.createElement("div",{className:"pt-3 break-overflow"},e.message.html&&l.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:e.message.html}}),!e.message.html&&e.message.text&&l.a.createElement("pre",{className:"wrap-text"},e.message.text),!e.message.html&&!e.message.text&&l.a.createElement("p",{className:t},"(message is blank)")),r.length>0&&l.a.createElement("div",{className:"pt-5"},r.map((function(e,t){return l.a.createElement("div",{key:t,className:"message is-danger"},l.a.createElement("div",{className:"message-body"},e.name&&l.a.createElement("span",{className:a},"[",e.name,"] "),e.message))}))))}function ie(){var e=Object(p.c)(Q),a=Object(p.c)(P),t=Object(n.useMemo)((function(){return G(e)}),[e])(Object(n.useMemo)((function(){return U(a,0)}),[a]));return l.a.createElement(ce,{message:t})}function me(){return l.a.createElement("div",{className:"content"},l.a.createElement("h3",null,"Inserting variables"),l.a.createElement("p",null,"In your data, each value in the header row defines a variable name. The spam script generates one email for each subsequent row of data."),l.a.createElement("p",null,"Variables are stored in the ",l.a.createElement("code",null,"SPAM")," object, and substitutions are done using ",l.a.createElement("code",null,"${}")," syntax. You can insert a variable named ",l.a.createElement("code",null,"xyz")," into your email by writing"," ",l.a.createElement("code",null,"${SPAM.xyz}")," or by writing"," ",l.a.createElement("code",null,'${SPAM["xyz"]}'),". The latter syntax is necessary if your variable name contains special characters like spaces."),l.a.createElement("p",null,"The message that you write is evaulated as a Javascript"," ",l.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",target:"_blank",rel:"noopener noreferrer"},"template literal"),". You can include arbitrary Javascript code inside the"," ",l.a.createElement("code",null,"${}")," expressions."),l.a.createElement("p",null,"In addition, you can access non-named data entries by index via the special value of ",l.a.createElement("code",null,"SPAM.ARGV"),", an array that contains the entire data row. This can be used to generate things like variable-length tables inside your email."),l.a.createElement("h3",null,"Special characters"),l.a.createElement("ul",null,l.a.createElement("li",null,"To insert a literal backslash (",l.a.createElement("code",null,"\\"),"), write ",l.a.createElement("code",null,"\\\\"),"."),l.a.createElement("li",null,"To insert a literal backtick (",l.a.createElement("code",null,"`"),"), write ",l.a.createElement("code",null,"\\`"),"."),l.a.createElement("li",null,"To insert a literal ",l.a.createElement("code",null,"${"),", escape the dollar sign like this: ",l.a.createElement("code",null,"\\${}"),"."),l.a.createElement("li",null,"To insert a special Unicode code point, use"," ",l.a.createElement("code",null,"\\u{XXXXX}"),".")),l.a.createElement("h3",null,"Markdown"),l.a.createElement("p",null,"If you are using Markdown mode, you can apply formatting to your message with"," ",l.a.createElement("a",{href:"https://www.markdownguide.org/cheat-sheet/",target:"_blank",rel:"noopener noreferrer"},"Markdown syntax"),". The table below shows a few commonly used elements."),l.a.createElement("table",{className:"table is-bordered is-hoverable fixed-table"},l.a.createElement("thead",{className:"has-background-light"},l.a.createElement("tr",null,l.a.createElement("th",null,"Markdown"),l.a.createElement("th",null,"Result"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"# Heading 1")),l.a.createElement("td",{className:"title is-4 mx-0 my-0"},"Heading 1")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"## Heading 2")),l.a.createElement("td",{className:"title is-5"},"Heading 2")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"*Italic*")),l.a.createElement("td",null,l.a.createElement("em",null,"Italic"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"**Bold**")),l.a.createElement("td",{className:"has-text-weight-bold"},"Bold")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"~~Strikethrough~~")),l.a.createElement("td",null,l.a.createElement("s",null,"Strikethrough"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"* List")),l.a.createElement("td",null,l.a.createElement("ul",{className:"mx-4 my-0"},l.a.createElement("li",null,"List")))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"\\`Code\\`")),l.a.createElement("td",null,l.a.createElement("code",null,"Code"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"[Link](https://example.com)")),l.a.createElement("td",null,l.a.createElement("a",{href:"https://example.com",target:"_blank",rel:"noopener noreferrer"},"Link"))))),l.a.createElement("p",null,"Because template literal evaluation occurs before Markdown parsing, you'll need to escape backticks and other special characters that are part of your Markdown. For example, writing"," ",l.a.createElement("code",null,"\\`Code\\`")," will result in the Markdown expression"," ",l.a.createElement("code",null,"`Code`"),"."))}function oe(){return l.a.createElement("div",{className:"has-text-centered vertical-center"},l.a.createElement("div",{className:"pb-6"},l.a.createElement("div",{className:"huge-icon"},l.a.createElement("span",{role:"img","aria-label":"icon"},"\ud83d\udee0\ufe0f")),l.a.createElement("p",{className:"title has-text-grey-dark"},"Not yet implemented")))}!function(e){e[e.PREVIEW=0]="PREVIEW",e[e.HELP=1]="HELP",e[e.ATTACHMENTS=2]="ATTACHMENTS"}(re||(re={}));var ue=re.PREVIEW;function de(e){var a=Object(n.useState)(ue),t=Object(c.a)(a,2),r=t[0],s=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(ae,{title:"Write your message",nextPage:e.nextPage,prevPage:e.prevPage,showNext:!0,showPrev:!0}),l.a.createElement("div",{className:"fill-height"},l.a.createElement("div",{className:"container px-3 pb-3 fullheight-container"},l.a.createElement("div",{className:"columns is-desktop is-variable is-4 my-0 fullheight-container"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"fullheight-column"},l.a.createElement("div",{className:"scrollable"},l.a.createElement(J,null)))),l.a.createElement("div",{className:"column fullheight-container"},l.a.createElement("div",{className:"card fullheight-card"},l.a.createElement("nav",{className:"card-footer"},l.a.createElement("div",{className:"card-footer-item tabs is-fullwidth pt-1"},l.a.createElement("ul",null,l.a.createElement("li",{className:r===re.PREVIEW?"is-active":""},l.a.createElement("a",{onClick:function(e){s(re.PREVIEW),e.preventDefault()}},l.a.createElement("span",{className:"icon"},l.a.createElement(i.a,{icon:se.a,fixedWidth:!0})),l.a.createElement("span",null,"Preview"))),l.a.createElement("li",{className:r===re.HELP?"is-active":""},l.a.createElement("a",{onClick:function(e){s(re.HELP),e.preventDefault()}},l.a.createElement("span",{className:"icon"},l.a.createElement(i.a,{icon:se.b,fixedWidth:!0})),l.a.createElement("span",null,"Help"))),l.a.createElement("li",{className:r===re.ATTACHMENTS?"is-active":""},l.a.createElement("a",{onClick:function(e){s(re.ATTACHMENTS),e.preventDefault()}},l.a.createElement("span",{className:"icon"},l.a.createElement(i.a,{icon:Z.e,transform:"shrink-1",fixedWidth:!0})),l.a.createElement("span",null,"Attachments")))))),l.a.createElement("div",{className:"card-content pt-3 fill-height"},l.a.createElement("div",{className:"fullheight-column"},l.a.createElement("div",{className:"scrollable"},r===re.PREVIEW&&l.a.createElement(ie,null),r===re.HELP&&l.a.createElement(me,null),r===re.ATTACHMENTS&&l.a.createElement(oe,null))))))))))}var Ee,pe=t(101);!function(e){e[e.UNSENT=0]="UNSENT",e[e.QUEUED=1]="QUEUED",e[e.SENDING=2]="SENDING",e[e.SUCCESS=3]="SUCCESS",e[e.ERROR=4]="ERROR"}(Ee||(Ee={}));var ve,he=Object(v.b)({name:"sending",initialState:[],reducers:{setSendingState:function(e,a){e.length=0,e.push.apply(e,Object(pe.a)(a.payload))},setMessage:function(e,a){e[a.payload.index]&&(e[a.payload.index].message=a.payload.message)},setStatus:function(e,a){e[a.payload.index]&&(e[a.payload.index].status=a.payload.status,a.payload.status===Ee.SUCCESS&&(e[a.payload.index].error=void 0))},setError:function(e,a){e[a.payload.index]&&(e[a.payload.index].status=Ee.ERROR,e[a.payload.index].error=a.payload.error)},setShowPreview:function(e,a){void 0===a.payload.index?e.forEach((function(e){return e.showPreview=a.payload.showPreview})):e[a.payload.index]&&(e[a.payload.index].showPreview=a.payload.showPreview)},sendMessages:function(e){e.map((function(e){return e.status})).map((function(e,a){return function(e){return e===Ee.UNSENT||e===Ee.ERROR}(e)?a:-1})).filter((function(e){return-1!==e})).forEach((function(a){return e[a].status=Ee.QUEUED}))},cancelSending:function(e){e.map((function(e){return e.status})).map((function(e,a){return e===Ee.QUEUED||e===Ee.SENDING?a:-1})).filter((function(e){return-1!==e})).forEach((function(a){return e[a].status=Ee.UNSENT}))}}}),fe=he.reducer,Ne=he.actions,ge=Ne.setSendingState,be=(Ne.setMessage,Ne.setStatus),ye=Ne.setError,we=Ne.setShowPreview,xe=Ne.sendMessages,Se=Ne.cancelSending;function Pe(){return function(e,a){var t=a(),n=Q(t),l=P(t),r=G(n),s=function(e){return e.rows.map((function(a,t){return U(e,t)}))}(l).map(r).map((function(e){return{message:e,status:Ee.UNSENT,showPreview:!1}}));e(ge(s))}}function Ae(e){return e.sending.map((function(e){return e.status}))}function Oe(e){var a,t=Object(p.c)((a=e.index,function(e){return e.sending[a]})),n=t.message,r=t.status,s=t.showPreview,c=t.error,m=Object(p.b)(),o=[n.to,n.cc,n.bcc].filter((function(e){return null===e||void 0===e?void 0:e.trim()})).join(", "),u=function(e){switch(e){case Ee.UNSENT:return se.a;case Ee.QUEUED:case Ee.SENDING:return Z.f;case Ee.SUCCESS:return Z.d;case Ee.ERROR:return Z.g}}(r),d=function(e){switch(e){case Ee.SUCCESS:return"has-text-success";case Ee.ERROR:return"has-text-danger";case Ee.SENDING:return"has-text-info";default:return""}}(r),E=function(e){switch(e){case Ee.UNSENT:return"Not yet sent";case Ee.QUEUED:return"Queued for sending";case Ee.SENDING:return"Sending in progress";case Ee.SUCCESS:return"Delivered";case Ee.ERROR:return"Error"}}(r),v=r===Ee.QUEUED||r===Ee.SENDING;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"card-header-title"},l.a.createElement("span",{className:"icon mr-3 ".concat(d),title:E},l.a.createElement(i.a,{icon:u,fixedWidth:!0,pulse:v})),o,!o&&l.a.createElement("span",{className:"has-text-danger"},"Message has no recipients!"),n.errors&&n.errors.length>0&&l.a.createElement(l.a.Fragment,null,"\xa0",l.a.createElement("span",{className:"tag is-warning is-light"},"Message error")),r===Ee.ERROR&&l.a.createElement(l.a.Fragment,null,"\xa0",l.a.createElement("span",{className:"tag is-danger is-light"},"Sending error"))),l.a.createElement("div",{className:"card-header-icon",onClick:function(){m(we({index:e.index,showPreview:!s}))}},l.a.createElement("span",{className:"icon"},l.a.createElement(i.a,{icon:Z.a,fixedWidth:!0})))),s&&l.a.createElement("div",{className:"card-content"},l.a.createElement(ce,{message:n,additionalErrors:c?[c]:[]})))}function Te(e){var a=Object(p.c)(Ae),t=Object(p.b)(),r=a.length,s=a.filter((function(e){return e===Ee.SUCCESS})).length,c=r-s,m=a.filter((function(e){return e===Ee.ERROR})).length,o=a.every((function(e){return e===Ee.UNSENT})),d=s===r,E=a.some((function(e){return e===Ee.QUEUED||e===Ee.SENDING}));return Object(n.useEffect)((function(){t(Pe())}),[]),Object(n.useEffect)((function(){r>0&&d&&Object(u.a)()}),[r,d]),l.a.createElement(l.a.Fragment,null,0===r&&l.a.createElement("div",{className:"hero is-fullheight"},l.a.createElement("div",{className:"hero-header"},l.a.createElement(ae,{title:"Send your spam",prevPage:e.prevPage,showNext:!1,showPrev:o})),l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container has-text-centered pb-6"},l.a.createElement("div",{className:"huge-icon"},l.a.createElement("span",{role:"img","aria-label":"icon"},"\ud83d\udced")),l.a.createElement("p",{className:"title has-text-grey-dark"},"No messages to send!")))),r>0&&l.a.createElement("div",null,l.a.createElement(ae,{title:"Send your spam",prevPage:e.prevPage,showNext:!1,showPrev:o}),l.a.createElement("div",null,l.a.createElement("div",{className:"container px-3 pb-5"},!u.b&&l.a.createElement("div",{className:"message is-warning"},l.a.createElement("div",{className:"message-body"},l.a.createElement("strong",null,"You are using a non-functional demo.")," All results here are simulated, and no actual emails will be sent.")),l.a.createElement("div",{className:"level pb-2"},l.a.createElement("div",{className:"level-item has-text-centered"},l.a.createElement("div",null,l.a.createElement("p",{className:"title is-1"},c),l.a.createElement("p",{className:"heading"},"Not sent"))),l.a.createElement("div",{className:"level-item has-text-centered"},l.a.createElement("div",null,l.a.createElement("p",{className:"title is-1"},s),l.a.createElement("p",{className:"heading"},"Delivered"))),l.a.createElement("div",{className:"level-item has-text-centered"},l.a.createElement("div",null,l.a.createElement("p",{className:"title is-1 ".concat(m>0?"has-text-danger":"")},m),l.a.createElement("p",{className:"heading"},"Errors"))),l.a.createElement("div",{className:"level-item has-text-centered"},d&&l.a.createElement("div",null,l.a.createElement("span",{className:"icon is-large has-text-success"},l.a.createElement(i.a,{icon:Z.d,size:"3x"})),l.a.createElement("p",{className:"heading pt-1"},"All done!")),E&&l.a.createElement("div",null,l.a.createElement("button",{className:"button is-medium is-outlined is-warning",onClick:function(){return t(Se())}},"Pause"),l.a.createElement("p",{className:"heading pt-1"},"Click to pause")),!d&&!E&&l.a.createElement("div",null,l.a.createElement("button",{className:"button is-medium is-success",onClick:function(){return t(xe())}},"Spam!"),l.a.createElement("p",{className:"heading pt-1"},m>0?"Click to (re)send":"Click to send")))),l.a.createElement("div",{className:"level is-mobile mb-2"},l.a.createElement("div",{className:"level-left"},l.a.createElement("p",{className:"subtitle is-5 mt-1"},"You have ".concat(r," email message").concat(r>1?"s":"","."))),l.a.createElement("div",{className:"level-right"},l.a.createElement("div",{className:"buttons has-addons"},l.a.createElement("button",{className:"button is-small",onMouseDown:function(e){t(we({showPreview:!0})),e.preventDefault()}},"Expand all"),l.a.createElement("button",{className:"button is-small",onMouseDown:function(e){t(we({showPreview:!1})),e.preventDefault()}},"Collapse all")))),a.map((function(e,a){return l.a.createElement(Oe,{key:a,index:a})}))))))}!function(e){e[e.MAIN_PAGE=0]="MAIN_PAGE",e[e.DATA_PAGE=1]="DATA_PAGE",e[e.MESSAGE_PAGE=2]="MESSAGE_PAGE",e[e.SEND_PAGE=3]="SEND_PAGE"}(ve||(ve={}));var ke=ve.MAIN_PAGE;function je(){var e=Object(n.useState)(ke),a=Object(c.a)(e,2),t=a[0],r=a[1];switch(t){case ve.MAIN_PAGE:return l.a.createElement(d,{nextPage:function(){Object(u.c)(),r(ve.DATA_PAGE)}});case ve.DATA_PAGE:return l.a.createElement(ne,{prevPage:function(){return r(ve.MAIN_PAGE)},nextPage:function(){return r(ve.MESSAGE_PAGE)}});case ve.MESSAGE_PAGE:return l.a.createElement(de,{prevPage:function(){return r(ve.DATA_PAGE)},nextPage:function(){return r(ve.SEND_PAGE)}});case ve.SEND_PAGE:return l.a.createElement(Te,{prevPage:function(){return r(ve.MESSAGE_PAGE)}})}}var Ce=t(218),Me=t(221),De=t(216),Re=t(45),Ie=t(100),Ue=t(223),Ge=t(222),_e=t(41),He=t(219),Le=t(220),Fe=t(213),We=t(214),Ve=t(215),Be=t(217);function $e(e){return u.b?function(e){return Object(Ge.a)({url:"./backend/sendmail.py",method:"POST",headers:{"Content-Type":"application/json"},body:e,withCredentials:!0}).pipe(Object(_e.a)((function(e){return e.response.status?e.response:{status:"error",message:"Did not receive valid response from API (server responded with status: ".concat(e.response.status,")")}})))}(e):function(e){var a=Math.random()<.5,t=[e.to,e.cc,e.bcc].filter((function(e){return null===e||void 0===e?void 0:e.trim()})).join(", ");return Object(Re.a)({status:a?"error":"success",message:a?"This is a fake error that occurs with 50% probability":""}).pipe(Object(He.a)(1e3),Object(Le.a)((function(){a?console.log("Fake API: encountered a fake error"):console.log("Fake API: sent message to ".concat(t))})))}(e)}var Ke=[function(e,a){return e.pipe(Object(Fe.a)(xe.match),Object(We.a)(a),Object(Ve.a)((function(t){var n=Object(c.a)(t,2),l=(n[0],n[1]);return Object(Ie.a)(Ae(l).map((function(e,a){return e===Ee.QUEUED?a:-1})).filter((function(e){return-1!==e}))).pipe(Object(We.a)(a),Object(Ve.a)((function(e){var a=Object(c.a)(e,2),t=a[0],n=a[1];return Object(Ue.a)(Object(Re.a)(be({index:t,status:Ee.SENDING})),$e(function(e){return function(a){return a.sending[e].message}}(t)(n)).pipe(Object(_e.a)((function(e){return function(e,a){return"success"===a.status?be({index:e,status:Ee.SUCCESS}):ye({index:e,error:{name:"ServerError",message:a.message||""}})}(t,e)})),Object(De.a)((function(e){return Object(Re.a)(ye({index:t,error:{name:e.name,message:e.message}}))}))))})),Object(Be.a)(e.pipe(Object(Fe.a)(Se.match))))})))}],Qe=Object(Ce.a)(),Xe=function(e,a,t){return Me.a.apply(void 0,Ke)(e,a,t).pipe(Object(De.a)((function(e,a){return console.error(e),a})))};var ze=function(){var e=Object(v.a)({reducer:{data:g,template:W,sending:fe},middleware:function(e){return e().prepend(Qe)}});return Qe.run(Xe),e}();s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p.a,{store:ze},l.a.createElement(je,null))),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.5950d864.chunk.js.map