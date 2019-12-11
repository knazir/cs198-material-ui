(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{106:function(e,a,t){e.exports=t(306)},306:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),i=t.n(l),o=t(389),c=t(388),s=t(371),m=t(60),u=t(390),d=t(75),p=t(394),f=t(364),g=Object(d.a)((function(e){return{root:{margin:e.spacing(1,1.5)}}}));function h(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function E(e){var a=g(),t=(e.items||[]).map((function(e){return r.a.createElement(f.a,{key:e,color:"inherit",href:e.toLowerCase(),onClick:h},e)}));return r.a.createElement(p.a,{className:a.root,separator:"\u203a","aria-label":"breadcrumb"},t.slice(0,t.length-1),r.a.createElement(m.a,{color:"textPrimary"},e.items[e.items.length-1]))}var b=t(398),v=t(395),y=t(372),N=t(373),k=t(66),C=t.n(k),w=t(92),O=t(392),x=t(366),S='\n/**\n * File: Luhn.js\n * -------------\n * This program exports the isValid predicate method, which returns true\n * if and only if the number supplied as an argument could be a valid credit\n * card number according to Luhn\'s algorithm.\n */\n\n"use strict";\nconst NUMBERS = [ 4460246643298726, 4460246643298627, 4460246643298727 ]; //given test numbers\n\n/* Main program */\nfunction TestLuhnAlgorithm() {\n\tfor (let i = 0; i < NUMBERS.length; i++) {\n\t\tconsole.log("Account number " + NUMBERS[i] + " -> " + (isValid(NUMBERS[i]) ? "valid" : "invalid"));\n\t}\n}\n\n/**\n * Function: isValid\n * -----------------\n * Returns true if and only if the supplied number meets the requirements imposed by Luhn;s algorithm.\n */\nfunction isValid(number) {\n   // Initialize sum and counter variables to store the Luhn\'s sum and to control whether digit being assessed is even or odd respectively\n   \n   let sum = 0\n   let counter = 1\n\n   //while loop takes the last variable, checks if it is even or odd and determines calculation per Luhn\'s algorithm\n\n   while (number>0){ \n      if (counter % 2 === 0 && 2*(number % 10) > 9){ //checks if even AND if multiplication by 2 returns more than 9.\n         sum += (number % 10)*2 - 9 //If so, multiply by 2 and subtract 9 and add to running total\n      } else if (counter % 2 === 0) {\n         sum += (number % 10)*2 //If only even, but multiplication by 2 is less than 9, just multiply by 2 and add to running total\n      } else {\n         sum += (number % 10) //if not even, just add to running total\n      }\n      number = Math.floor(number/10) //Divide number by 10 and prep next digit\n      counter +=1 //Increase counter by 1 (if current digit is even, next is odd and vice versa)\n   }\n   let status = sum % 10 === 0 //Check if it ends in 0 - if yes then valid\n   return status;\n}\n'.trim(),j=Object(d.a)((function(e){return{root:{fontSize:"1.2em"}}}));function W(){var e={className:j().root};return r.a.createElement(w.a,null,r.a.createElement(O.a,Object.assign({language:"javascript",style:x.a,showLineNumbers:!0},e),S))}var B=t(49),D=t(58),R=t(401),L=t(400),I=t(369),M=t(79),T=t(402),P=t(370),z=t(403),F=t(397),A=Object(d.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginBottom:e.spacing(1)},controls:{"> *":{fontWeight:e.typography.fontWeightMedium,marginLeft:e.spacing(1)}},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},viewControl:{marginRight:e.spacing(1)}}}));function V(){var e=A(),a=r.a.useState({file:"",version:"",view:"files"}),t=Object(D.a)(a,2),n=t[0],l=t[1],i=function(e){return function(a){l(Object(B.a)({},e,a.target.value))}};return r.a.createElement(w.a,{className:e.root},r.a.createElement("div",null,r.a.createElement(L.a,{className:e.formControl},r.a.createElement(R.a,{shrink:!0,htmlFor:"version-native-simple"},"Version"),r.a.createElement(F.a,{title:"Submission Version"},r.a.createElement(M.a,{value:n.version,onChange:i("version"),inputProps:{name:"version",id:"version-native-simple"}},r.a.createElement("option",{value:"",disabled:!0}),["Tue, Oct 1, 2019 2:34 PM - ajweiss"].map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))),r.a.createElement(L.a,{className:e.formControl},r.a.createElement(R.a,{shrink:!0,htmlFor:"file-native-simple"},"File"),r.a.createElement(F.a,{title:"Submission File"},r.a.createElement(M.a,{value:n.file,onChange:i("file"),inputProps:{name:"file",id:"file-native-simple"}},r.a.createElement("option",{value:"",disabled:!0}),["code1/checkerboard.py","code1/crazy-stanford.py","code1/logic-hw.py","code1/outback.py","code1.triple.py"].map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))))),r.a.createElement("div",{className:e.controls},r.a.createElement(I.a,{value:"end",control:r.a.createElement(T.a,{color:"primary"}),label:"Read-Only",labelPlacement:"end"}),r.a.createElement(I.a,{value:"end",control:r.a.createElement(T.a,{color:"primary"}),label:"Released",labelPlacement:"end"})),r.a.createElement("div",{className:e.viewControl},r.a.createElement(z.a,{size:"medium",value:n.view,exclusive:!0,onChange:function(e,a){a&&l({view:a})}},r.a.createElement(P.a,{value:"files"},"Files"),r.a.createElement(P.a,{value:"grade"},"Grade"),r.a.createElement(P.a,{value:"split"},"Split"))))}var q=Object(d.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(4)},categories:{padding:e.spacing(.5)},chip:{margin:e.spacing(.5)},disabledPanel:{marginBottom:e.spacing(2)},enabledPanel:{marginBottom:e.spacing(.5)},grade:{flexDirection:"column"},header:{marginBottom:e.spacing(.5)},heading:{fontWeight:e.typography.fontWeightMedium},label:{fontWeight:e.typography.fontWeightMedium},overallComment:{},paper:{width:"100%",overflowX:"auto"}}}));function H(){var e=q();return r.a.createElement(s.a,{className:e.root,maxWidth:"lg"},r.a.createElement(m.a,{className:e.header,variant:"h5",component:"h2"},"Code Review"),r.a.createElement(w.a,{className:"".concat(e.paper," ").concat(e.disabledPanel)},r.a.createElement(v.a,{disabled:!0},r.a.createElement(y.a,{expandIcon:r.a.createElement(C.a,null),"aria-controls":"overall-comment-content",id:"overall-comment-header"},r.a.createElement(m.a,{className:e.heading},"Grade (Not Released)")),r.a.createElement(N.a,{className:e.grade},"Disabled"))),r.a.createElement(w.a,{className:"".concat(e.paper," ").concat(e.enabledPanel)},r.a.createElement(v.a,null,r.a.createElement(y.a,{expandIcon:r.a.createElement(C.a,null),"aria-controls":"overall-comment-content",id:"overall-comment-header"},r.a.createElement(m.a,{className:e.heading},"Grade")),r.a.createElement(N.a,{className:e.grade},r.a.createElement("div",{className:e.overallComment},"Fantastic work! I can tell that you're really grasping the material. A couple of notes:",r.a.createElement("ul",null,r.a.createElement("li",null,"Add comments, even when you think you don't need them"),r.a.createElement("li",null,'Take time to "refactor" you\'re code'))),r.a.createElement(w.a,{className:e.categories},[{category:"Functionality",score:"\u2713+"},{category:"Style",score:"\u2713"}].map((function(a,t){var n=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:e.gradeLabel},a.category),": ",a.score);return r.a.createElement(b.a,{key:t,label:n,className:e.chip})})))))),r.a.createElement(V,null),r.a.createElement(W,null))}var J=t(374),U=t(378),G=t(377),K=t(375),X=t(376),Y=t(80),Z=t.n(Y),$=t(391),Q=Object(d.a)((function(e){return{root:{display:"flex"},searchIcon:{display:"flex",alignItems:"center",justifyContent:"center",marginRight:1,width:e.spacing(4),pointerEvents:"none"}}}));function _(){var e=Q();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(Z.a,{fontSize:"small"})),r.a.createElement($.a,{id:"outlined-search",label:"Search",type:"search",variant:"outlined",size:"small"}))}var ee=Object(d.a)((function(e){return{root:{width:"100%"},header:{marginBottom:e.spacing(.5)},paper:{width:"100%",overflowX:"auto"},table:{minWidth:650},tableBanner:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:e.spacing(.5),width:"100%"},tableColumnHeader:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,fontSize:"1.25em",fontWeight:e.typography.fontWeightBold},tableRow:{cursor:"pointer","&:nth-child(even)":{backgroundColor:"#e0e0e0"},"&:hover":{backgroundColor:"#e0eeee"}},tableTitle:{}}}));function ae(e,a,t){return{course:e,role:a,instructors:t}}var te=[ae("CS106A","Developer (staff)","Nick Parlante"),ae("CS106AX","Developer (staff)","Jerry Cain"),ae("CS106B","Developer (staff)","Cynthia Lee, Julie Zelenski"),ae("CS106L","Developer (staff)","Avery Wang, Anna Zeng"),ae("CS106X","Developer (staff)","Jerry Cain, Julie Zelenski")];function ne(){var e=ee();return r.a.createElement(s.a,{maxWidth:"lg"},r.a.createElement(m.a,{className:e.header,variant:"h5",component:"h2"},"NavTable"),r.a.createElement("div",{className:e.tableBanner},r.a.createElement(m.a,{className:e.tableTitle,variant:"h5",component:"h3"},"Courses for Autumn 2019"),r.a.createElement(_,null)),r.a.createElement(w.a,{className:e.paper},r.a.createElement(J.a,{className:e.table,size:"small","aria-label":"a dense table"},r.a.createElement(K.a,null,r.a.createElement(X.a,null,r.a.createElement(G.a,{className:e.tableColumnHeader},"Course"),r.a.createElement(G.a,{className:e.tableColumnHeader},"Role"),r.a.createElement(G.a,{className:e.tableColumnHeader},"Instructor(s)"))),r.a.createElement(U.a,null,te.map((function(a){return r.a.createElement(X.a,{key:a.course,className:e.tableRow},r.a.createElement(G.a,{component:"th",scope:"row"},a.course),r.a.createElement(G.a,{align:"left"},a.role),r.a.createElement(G.a,{align:"left"},a.instructors))}))))))}var re=t(379),le=t(380),ie=t(381),oe=t(308),ce=t(81),se=t.n(ce),me=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function ue(){var e=me();return r.a.createElement(re.a,{className:e.root,position:"static"},r.a.createElement(le.a,null,r.a.createElement(oe.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(se.a,null)),r.a.createElement(m.a,{variant:"h6",className:e.title},"CS198"),r.a.createElement(ie.a,{color:"inherit"},"Login")))}var de=t(82),pe=t(90),fe=t(382),ge=t(3),he=t(86),Ee=t.n(he),be=t(396),ve=t(387),ye=t(385),Ne=t(384),ke=t(386),Ce=t(83),we=t.n(Ce),Oe=t(85),xe=t.n(Oe),Se=t(84),je=t.n(Se),We=t(87),Be=t.n(We),De=t(88),Re=t.n(De),Le=t(399),Ie=t(383),Me=Object(d.a)((function(e){return{root:{marginTop:e.spacing(4)},header:{marginBottom:e.spacing(1)},success:{backgroundColor:fe.a[600]},error:{backgroundColor:e.palette.error.dark},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"},fieldLine:{display:"flex",alignItems:"center",fontWeight:e.typography.fontWeightMedium,"&:not(:last-of-type)":{marginBottom:e.spacing(1)}},modalDivider:{margin:e.spacing(2,0)},modalContent:{fontSize:"1.1em"},widthLabel:{marginRight:e.spacing(2)},widthSelect:{minWidth:e.spacing(7)}}})),Te={success:we.a,error:je.a};function Pe(e){var a=Me(),t=e.className,n=e.message,l=e.onClose,i=e.variant,o=Object(pe.a)(e,["className","message","onClose","variant"]),c=Te[i];return r.a.createElement(Ie.a,Object.assign({className:Object(ge.a)(a[i],t),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:a.message},r.a.createElement(c,{className:Object(ge.a)(a.icon,a.iconVariant)}),n),action:[r.a.createElement(oe.a,{key:"close","aria-label":"close",color:"inherit",onClick:l},r.a.createElement(xe.a,{className:a.icon}))]},o))}function ze(){var e=Me(),a=r.a.useState({modalOpen:!1,snackbarOpen:!1,snackbarSuccess:!1,maxWidth:"sm"}),t=Object(D.a)(a,2),n=t[0],l=t[1],i=function(e){l(Object(de.a)({},n,{modalOpen:!1,snackbarOpen:null!=e,snackbarSuccess:e}))},o=function(e,a){"clickaway"!==a&&l({snackbarOpen:!1})},c=r.a.useRef(null);r.a.useEffect((function(){if(n.modalOpen){var e=c.current;null!==e&&e.focus()}}),[n.modalOpen]);return r.a.createElement(s.a,{className:e.root,maxWidth:"lg"},r.a.createElement(m.a,{className:e.header,variant:"h5",component:"h2"},"Modal"),r.a.createElement(ie.a,{variant:"outlined",color:"primary",onClick:function(){return l({modalOpen:!0})}},"Open Partner Request Modal"),r.a.createElement(be.a,{open:n.modalOpen,onClose:function(){return i(null)},scroll:"paper",maxWidth:n.maxWidth,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Ne.a,{id:"alert-dialog-title"},"Partner Request"),r.a.createElement(ye.a,{className:e.modalContent},r.a.createElement("div",{className:e.fieldLine},r.a.createElement("div",{className:e.widthLabel},"Modal Size:"),r.a.createElement(M.a,{value:n.maxWidth,onChange:function(e){return l({modalOpen:!0,maxWidth:e.target.value})},inputProps:{name:"maxWidth",id:"maxWidth-native-simple",className:e.widthSelect}},["xs","sm","md","lg","xl"].map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement(ke.a,{className:e.modalDivider,variant:"middle"}),r.a.createElement("div",{className:e.fieldLine},r.a.createElement(F.a,{title:"Assignment"},r.a.createElement(Ee.a,{className:Object(ge.a)(e.icon,e.iconVariant)})),r.a.createElement("span",null,"3. Breakout")),r.a.createElement("div",{className:e.fieldLine},r.a.createElement(F.a,{title:"From"},r.a.createElement(Be.a,{className:Object(ge.a)(e.icon,e.iconVariant)})),r.a.createElement("span",null,"Kashif Nazir (knazir)")),r.a.createElement("div",{className:e.fieldLine},r.a.createElement(F.a,{title:"Sent"},r.a.createElement(Re.a,{className:Object(ge.a)(e.icon,e.iconVariant)})),r.a.createElement("span",null,"Wed, Oct 2, 2019 11:55pm")),r.a.createElement(ke.a,{className:e.modalDivider,variant:"middle"}),r.a.createElement("p",null,"This partner request only applies to the above assignment. If you accept it, please note:"),r.a.createElement("ul",null,r.a.createElement("li",null,"You and ",r.a.createElement("strong",null,"Kashif")," can continue to make submissions. The latest submission that either of you makes will be graded."),r.a.createElement("li",null,"If you already submitted this assignment, your submission will be combined with ",r.a.createElement("strong",null,"Kashif's"),"."),r.a.createElement("li",null,"You cannot change your partner for this assignment after you accept this request.")),r.a.createElement("p",null,"By accepting this request, you represent under the Honor Code that you and ",r.a.createElement("strong",null,"Kashif")," worked jointly on this assignment.")),r.a.createElement(ve.a,null,r.a.createElement(ie.a,{onClick:function(){return i(!1)},color:"primary"},"Disagree"),r.a.createElement(ie.a,{onClick:function(){return i(!0)},color:"primary",autoFocus:!0},"Agree"))),r.a.createElement(Le.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},onClose:o,open:n.snackbarOpen&&n.snackbarSuccess,autoHideDuration:6e3},r.a.createElement(Pe,{onClose:o,variant:"success",message:"Successfully accepted partner request!"})),r.a.createElement(Le.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},onClose:o,open:n.snackbarOpen&&!n.snackbarSuccess,autoHideDuration:6e3},r.a.createElement(Pe,{onClose:o,variant:"error",message:"Partner request rejected."})))}var Fe=t(89),Ae=Object(Fe.a)({palette:{common:{black:"#2E2D29",white:"#ffffff"},background:{paper:"#fff",default:"#fafafa"},primary:{light:"#8D3C1E",main:"#8C1515",dark:"#5E3032",contrastText:"#ffffff"},secondary:{light:"#B6B1A9",main:"#4D4F53",dark:"#3F3C30",contrastText:"#ffffff"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#ffffff"},text:{primary:"#2E2D29",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"}},overrides:{MuiSwitch:{colorPrimary:{"&$checked":{color:"#0098db","&+$track":{backgroundColor:"#0098db"}}}}}});i.a.render(r.a.createElement(c.a,{theme:Ae},r.a.createElement(o.a,null),r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null),r.a.createElement(E,{items:["Demo","Tomato","Sauce"]}),r.a.createElement(s.a,{maxWidth:"lg"},r.a.createElement(u.a,{my:4},r.a.createElement(m.a,{variant:"h4",component:"h2",gutterBottom:!0},"CS198 Material UI"),r.a.createElement(m.a,null,"A bunch of demo pages and components using the React Material UI library."))),r.a.createElement(ne,null),r.a.createElement(ze,null),r.a.createElement(H,null))}),null)),document.querySelector("#root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.35aaedf7.chunk.js.map