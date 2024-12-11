"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[78159],{58272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"python-rust-quick-start-guide","title":"Python/Rust Quick Start (Hudi-rs)","description":"This guide will help you get started with hudi-rs, a native Rust library for Apache Hudi with Python bindings. Learn how to install, set up, and perform basic operations using both Python and Rust interfaces.","source":"@site/versioned_docs/version-0.15.0/python-rust-quick-start-guide.md","sourceDirName":".","slug":"/python-rust-quick-start-guide","permalink":"/cn/docs/python-rust-quick-start-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/python-rust-quick-start-guide.md","tags":[],"version":"0.15.0","frontMatter":{"title":"Python/Rust Quick Start (Hudi-rs)","toc":true,"last_modified_at":"2024-11-28T04:53:57.000Z"},"sidebar":"docs","previous":{"title":"Flink Quick Start","permalink":"/cn/docs/flink-quick-start-guide"},"next":{"title":"Docker Demo","permalink":"/cn/docs/docker_demo"}}');var r=n(74848),i=n(28453);n(11470),n(19365);const s={title:"Python/Rust Quick Start (Hudi-rs)",toc:!0,last_modified_at:new Date("2024-11-28T04:53:57.000Z")},o=void 0,l={},u=[{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Python Example",id:"python-example",level:3},{value:"Rust Example (with DataFusion)",id:"rust-example-with-datafusion",level:3},{value:"Cloud Storage Integration",id:"cloud-storage-integration",level:2},{value:"Python",id:"python",level:3},{value:"Rust",id:"rust",level:3},{value:"Supported Cloud Storage",id:"supported-cloud-storage",level:3},{value:"Read with Timestamp",id:"read-with-timestamp",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This guide will help you get started with ",(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi-rs",children:"hudi-rs"}),", a native Rust library for Apache Hudi with Python bindings. Learn how to install, set up, and perform basic operations using both Python and Rust interfaces."]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Python\npip install hudi\n\n# Rust\ncargo add hudi\n"})}),"\n",(0,r.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"Currently, write capabilities and reading from MOR tables are not supported."}),(0,r.jsxs)(t.p,{children:["The examples below expect a Hudi table exists at ",(0,r.jsx)(t.code,{children:"/tmp/trips_table"}),", created using the ",(0,r.jsx)(t.a,{href:"/docs/quick-start-guide",children:"quick start guide"}),"."]})]}),"\n",(0,r.jsx)(t.h3,{id:"python-example",children:"Python Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from hudi import HudiTableBuilder\nimport pyarrow as pa\n\nhudi_table = (\n    HudiTableBuilder\n    .from_base_uri("/tmp/trips_table")\n    .build()\n)\n\n# Read with partition filters\nrecords = hudi_table.read_snapshot(filters=[("city", "=", "san_francisco")])\n\n# Convert to PyArrow table\narrow_table = pa.Table.from_batches(records)\nresult = arrow_table.select(["rider", "city", "ts", "fare"])\n'})}),"\n",(0,r.jsx)(t.h3,{id:"rust-example-with-datafusion",children:"Rust Example (with DataFusion)"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Set up your project:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cargo new my_project --bin && cd my_project\ncargo add tokio@1 datafusion@42\ncargo add hudi --features datafusion\n"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Add code to ",(0,r.jsx)(t.code,{children:"src/main.rs"}),":"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'use std::sync::Arc;\nuse datafusion::error::Result;\nuse datafusion::prelude::{DataFrame, SessionContext};\nuse hudi::HudiDataSource;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let ctx = SessionContext::new();\n    let hudi = HudiDataSource::new_with_options("/tmp/trips_table", []).await?;\n    ctx.register_table("trips_table", Arc::new(hudi))?;\n    // Read with partition filters\n    let df: DataFrame = ctx.sql("SELECT * from trips_table where city = \'san_francisco\'").await?;\n    df.show().await?;\n    Ok(())\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"cloud-storage-integration",children:"Cloud Storage Integration"}),"\n",(0,r.jsx)(t.h3,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from hudi import HudiTableBuilder\n\nhudi_table = (\n    HudiTableBuilder\n    .from_base_uri("s3://bucket/trips_table")\n    .with_option("aws_region", "us-west-2")\n    .build()\n)\n'})}),"\n",(0,r.jsx)(t.h3,{id:"rust",children:"Rust"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'use hudi::HudiDataSource;\n\nlet hudi = HudiDataSource::new_with_options(\n    "s3://bucket/trips_table",\n    [("aws_region", "us-west-2")]\n).await?;\n'})}),"\n",(0,r.jsx)(t.h3,{id:"supported-cloud-storage",children:"Supported Cloud Storage"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["AWS S3 (",(0,r.jsx)(t.code,{children:"s3://"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["Azure Storage (",(0,r.jsx)(t.code,{children:"az://"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["Google Cloud Storage (",(0,r.jsx)(t.code,{children:"gs://"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Set appropriate environment variables (",(0,r.jsx)(t.code,{children:"AWS_*"}),", ",(0,r.jsx)(t.code,{children:"AZURE_*"}),", or ",(0,r.jsx)(t.code,{children:"GOOGLE_*"}),") for authentication, or pass through the ",(0,r.jsx)(t.code,{children:"option()"})," API."]}),"\n",(0,r.jsx)(t.h2,{id:"read-with-timestamp",children:"Read with Timestamp"}),"\n",(0,r.jsx)(t.p,{children:"Add timestamp option for time-travel queries:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'.with_option("hoodie.read.as.of.timestamp", "20241122010827898")\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(34164);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(96540),r=n(34164),i=n(23104),s=n(56347),o=n(205),l=n(57485),u=n(31682),c=n(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,d]=m({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),g=(()=>{const e=u??f;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(w,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);