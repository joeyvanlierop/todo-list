!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=57)}([function(e,t,n){var r=n(59),o=n(12),a=36e5,u=6e4,i=2,s=/[T ]/,f=/:/,c=/^(\d{2})$/,l=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],v=/^(\d{4})/,d=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],g=/^-(\d{2})$/,p=/^-?(\d{3})$/,m=/^-?(\d{2})-?(\d{2})$/,h=/^-?W(\d{2})$/,x=/^-?W(\d{2})-?(\d{1})$/,M=/^(\d{2}([.,]\d*)?)$/,D=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,T=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,y=/([Z+-].*)$/,S=/^(Z)$/,Y=/^([+-])(\d{2})$/,b=/^([+-])(\d{2}):?(\d{2})$/;function O(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var o=7*t+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}e.exports=function(e,t){if(o(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var n=(t||{}).additionalDigits;n=null==n?i:Number(n);var w=function(e){var t,n={},r=e.split(s);f.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1]);if(t){var o=y.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}(e),I=function(e,t){var n,r=l[t],o=d[t];if(n=v.exec(e)||o.exec(e)){var a=n[1];return{year:parseInt(a,10),restDateString:e.slice(a.length)}}if(n=c.exec(e)||r.exec(e)){var u=n[1];return{year:100*parseInt(u,10),restDateString:e.slice(u.length)}}return{year:null}}(w.date,n),H=I.year,F=function(e,t){if(null===t)return null;var n,r,o,a;if(0===e.length)return(r=new Date(0)).setUTCFullYear(t),r;if(n=g.exec(e))return r=new Date(0),o=parseInt(n[1],10)-1,r.setUTCFullYear(t,o),r;if(n=p.exec(e)){r=new Date(0);var u=parseInt(n[1],10);return r.setUTCFullYear(t,0,u),r}if(n=m.exec(e)){r=new Date(0),o=parseInt(n[1],10)-1;var i=parseInt(n[2],10);return r.setUTCFullYear(t,o,i),r}if(n=h.exec(e))return a=parseInt(n[1],10)-1,O(t,a);if(n=x.exec(e)){a=parseInt(n[1],10)-1;var s=parseInt(n[2],10)-1;return O(t,a,s)}return null}(I.restDateString,H);if(F){var _,W=F.getTime(),N=0;if(w.time&&(N=function(e){var t,n,r;if(t=M.exec(e))return(n=parseFloat(t[1].replace(",",".")))%24*a;if(t=D.exec(e))return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),n%24*a+r*u;if(t=T.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var o=parseFloat(t[3].replace(",","."));return n%24*a+r*u+1e3*o}return null}(w.time)),w.timezone)_=function(e){var t,n;if(t=S.exec(e))return 0;if(t=Y.exec(e))return n=60*parseInt(t[2],10),"+"===t[1]?-n:n;if(t=b.exec(e))return n=60*parseInt(t[2],10)+parseInt(t[3],10),"+"===t[1]?-n:n;return 0}(w.timezone)*u;else{var k=W+N,E=new Date(k);_=r(E);var z=new Date(k);z.setDate(E.getDate()+1);var X=r(z)-r(E);X>0&&(_+=X)}return new Date(W+N+_)}return new Date(e)}},function(e,t,n){var r=n(0),o=n(2);e.exports=function(e){var t=r(e),n=t.getFullYear(),a=new Date(0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);var u=o(a),i=new Date(0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);var s=o(i);return t.getTime()>=u.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}},function(e,t,n){var r=n(8);e.exports=function(e){return r(e,{weekStartsOn:1})}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setDate(n.getDate()+o),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e).getTime(),o=Number(t);return new Date(n+o)}},function(e,t,n){var r=n(1),o=n(2);e.exports=function(e){var t=r(e),n=new Date(0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),o(n)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e).getTime(),o=r(t).getTime();return n<o?-1:n>o?1:0}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=t&&Number(t.weekStartsOn)||0,o=r(e),a=o.getDay(),u=(a<n?7:0)+a-n;return o.setDate(o.getDate()-u),o.setHours(0,0,0,0),o}},function(e,t,n){var r=n(3),o=6e4,a=864e5;e.exports=function(e,t){var n=r(e),u=r(t),i=n.getTime()-n.getTimezoneOffset()*o,s=u.getTime()-u.getTimezoneOffset()*o;return Math.round((i-s)/a)}},function(e,t,n){var r=n(0),o=n(13);e.exports=function(e,t){var n=r(e),a=Number(t),u=n.getMonth()+a,i=new Date(0);i.setFullYear(n.getFullYear(),u,1),i.setHours(0,0,0,0);var s=o(i);return n.setMonth(u,Math.min(s,n.getDate())),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()-o.getTime()}},function(e,t){e.exports=function(e){return e instanceof Date}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getFullYear(),o=t.getMonth(),a=new Date(0);return a.setFullYear(n,o+1,0),a.setHours(0,0,0,0),a.getDate()}},function(e,t,n){var r=n(4);e.exports=function(e,t){var n=Number(t);return r(e,7*n)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e).getTime(),o=r(t).getTime();return n>o?-1:n<o?1:0}},function(e,t,n){var r=n(0),o=n(30),a=n(7);e.exports=function(e,t){var n=r(e),u=r(t),i=a(n,u),s=Math.abs(o(n,u));return n.setMonth(n.getMonth()-i*s),i*(s-(a(n,u)===-i))}},function(e,t,n){var r=n(11);e.exports=function(e,t){var n=r(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(72),o=n(73);e.exports={distanceInWords:r(),format:o()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setHours(23,59,59,999),t}},function(e,t,n){var r=n(0),o=n(2),a=n(6),u=6048e5;e.exports=function(e){var t=r(e),n=o(t).getTime()-a(t).getTime();return Math.round(n/u)+1}},function(e,t,n){var r=n(8);e.exports=function(e,t,n){var o=r(e,n),a=r(t,n);return o.getTime()===a.getTime()}},function(e,t,n){var r=n(5),o=36e5;e.exports=function(e,t){var n=Number(t);return r(e,n*o)}},function(e,t,n){var r=n(1),o=n(24);e.exports=function(e,t){var n=Number(t);return o(e,r(e)+n)}},function(e,t,n){var r=n(0),o=n(6),a=n(9);e.exports=function(e,t){var n=r(e),u=Number(t),i=a(n,o(n)),s=new Date(0);return s.setFullYear(u,0,4),s.setHours(0,0,0,0),(n=o(s)).setDate(n.getDate()+i),n}},function(e,t,n){var r=n(5),o=6e4;e.exports=function(e,t){var n=Number(t);return r(e,n*o)}},function(e,t,n){var r=n(10);e.exports=function(e,t){var n=Number(t);return r(e,3*n)}},function(e,t,n){var r=n(5);e.exports=function(e,t){var n=Number(t);return r(e,1e3*n)}},function(e,t,n){var r=n(10);e.exports=function(e,t){var n=Number(t);return r(e,12*n)}},function(e,t,n){var r=n(1);e.exports=function(e,t){return r(e)-r(t)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return 12*(n.getFullYear()-o.getFullYear())+(n.getMonth()-o.getMonth())}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return Math.floor(t.getMonth()/3)+1}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getFullYear()-o.getFullYear()}},function(e,t,n){var r=n(0),o=n(9),a=n(7);e.exports=function(e,t){var n=r(e),u=r(t),i=a(n,u),s=Math.abs(o(n,u));return n.setDate(n.getDate()-i*s),i*(s-(a(n,u)===-i))}},function(e,t,n){var r=n(23);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(15),o=n(0),a=n(17),u=n(16),i=n(18),s=1440,f=2520,c=43200,l=86400;e.exports=function(e,t,n){var v=n||{},d=r(e,t),g=v.locale,p=i.distanceInWords.localize;g&&g.distanceInWords&&g.distanceInWords.localize&&(p=g.distanceInWords.localize);var m,h,x={addSuffix:Boolean(v.addSuffix),comparison:d};d>0?(m=o(e),h=o(t)):(m=o(t),h=o(e));var M,D=a(h,m),T=h.getTimezoneOffset()-m.getTimezoneOffset(),y=Math.round(D/60)-T;if(y<2)return v.includeSeconds?D<5?p("lessThanXSeconds",5,x):D<10?p("lessThanXSeconds",10,x):D<20?p("lessThanXSeconds",20,x):D<40?p("halfAMinute",null,x):p(D<60?"lessThanXMinutes":"xMinutes",1,x):0===y?p("lessThanXMinutes",1,x):p("xMinutes",y,x);if(y<45)return p("xMinutes",y,x);if(y<90)return p("aboutXHours",1,x);if(y<s)return p("aboutXHours",Math.round(y/60),x);if(y<f)return p("xDays",1,x);if(y<c)return p("xDays",Math.round(y/s),x);if(y<l)return p("aboutXMonths",M=Math.round(y/c),x);if((M=u(h,m))<12)return p("xMonths",Math.round(y/c),x);var S=M%12,Y=Math.floor(M/12);return S<3?p("aboutXYears",Y,x):S<9?p("overXYears",Y,x):p("almostXYears",Y+1,x)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=t&&Number(t.weekStartsOn)||0,o=r(e),a=o.getDay(),u=6+(a<n?-7:0)-(a-n);return o.setDate(o.getDate()+u),o.setHours(23,59,59,999),o}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}},function(e,t,n){var r=n(0),o=n(39),a=n(9);e.exports=function(e){var t=r(e);return a(t,o(t))+1}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}},function(e,t,n){var r=n(12);e.exports=function(e){if(r(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e).getFullYear();return t%400==0||t%4==0&&t%100!=0}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e).getDay();return 0===t&&(t=7),t}},function(e,t,n){var r=n(44);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setMinutes(0,0,0),t}},function(e,t,n){var r=n(21);e.exports=function(e,t){return r(e,t,{weekStartsOn:1})}},function(e,t,n){var r=n(6);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(48);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setSeconds(0,0),t}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getFullYear()===o.getFullYear()&&n.getMonth()===o.getMonth()}},function(e,t,n){var r=n(51);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getMonth(),o=n-n%3;return t.setMonth(o,1),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(53);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setMilliseconds(0),t}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getFullYear()===o.getFullYear()}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=t&&Number(t.weekStartsOn)||0,o=r(e),a=o.getDay(),u=6+(a<n?-7:0)-(a-n);return o.setHours(0,0,0,0),o.setDate(o.getDate()+u),o}},function(e,t,n){var r=n(0),o=n(13);e.exports=function(e,t){var n=r(e),a=Number(t),u=n.getFullYear(),i=n.getDate(),s=new Date(0);s.setFullYear(u,a,15),s.setHours(0,0,0,0);var f=o(s);return n.setMonth(a,Math.min(i,f)),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(58),o=document.getElementById("template-todo"),a=(document.getElementById("template-note"),function(){function e(e,t,n,r){this._title=e,this._notes=t,this._starred=n,this._dueDate=r,this._dateCreated=new Date,this._element=this.generateElement(),document.getElementById("todo-container").appendChild(this._element)}return e.prototype.generateElement=function(){var e=this,t=o.content.cloneNode(!0);return this._starred?t.querySelector(".star").innerHTML="star":t.querySelector(".star").innerHTML="star_border",t.querySelector(".title").innerHTML=this._title,t.querySelector(".date").innerHTML=r.format(this._dateCreated,"MMMM d, y"),t.querySelector(".due").innerHTML=r.format(this._dueDate,"MMMM d, y"),t.querySelector(".star").addEventListener("click",function(){e.toggleStarred()}),t.querySelector(".dropdown").addEventListener("click",function(){e.toggleOpen()}),t},e.prototype.toggleStarred=function(){console.log(this._element.querySelector(".title")),this._starred=!this._starred,this._starred?this._element.querySelector(".star").innerHTML="star_border":this._element.querySelector(".star").innerHTML="star"},e.prototype.toggleOpen=function(){var e=this;console.log(this._element),"true"==this._element.dataset.open?(this._element.dataset.open="false",this._element.querySelector(".dropdown").innerHTML="expand_more"):(this._element.dataset.open="true",this._element.querySelector(".dropdown").innerHTML="expand_less"),this._notes.forEach(function(t){t.setVisible(e._element.dataset.open)})},e}());(function(){function e(e){this._note=e,this._element=document.createElement("dv"),this._element.innerHTML=this.note}e.prototype.open=function(){this._element.dataset.visible="true"},e.prototype.close=function(){this._element.dataset.visible="false"},e.prototype.setVisible=function(e){this._element.dataset.visible=e},Object.defineProperty(e.prototype,"note",{get:function(){return this._note},set:function(e){this._note=e,this._element.innerHTML=this.note},enumerable:!0,configurable:!0})})(),new a("Title",[],!1,new Date)},function(e,t,n){e.exports={addDays:n(4),addHours:n(22),addISOYears:n(23),addMilliseconds:n(5),addMinutes:n(25),addMonths:n(10),addQuarters:n(26),addSeconds:n(27),addWeeks:n(14),addYears:n(28),areRangesOverlapping:n(60),closestIndexTo:n(61),closestTo:n(62),compareAsc:n(7),compareDesc:n(15),differenceInCalendarDays:n(9),differenceInCalendarISOWeeks:n(63),differenceInCalendarISOYears:n(29),differenceInCalendarMonths:n(30),differenceInCalendarQuarters:n(64),differenceInCalendarWeeks:n(65),differenceInCalendarYears:n(32),differenceInDays:n(33),differenceInHours:n(66),differenceInISOYears:n(67),differenceInMilliseconds:n(11),differenceInMinutes:n(68),differenceInMonths:n(16),differenceInQuarters:n(69),differenceInSeconds:n(17),differenceInWeeks:n(70),differenceInYears:n(71),distanceInWords:n(35),distanceInWordsStrict:n(75),distanceInWordsToNow:n(76),eachDay:n(77),endOfDay:n(19),endOfHour:n(78),endOfISOWeek:n(79),endOfISOYear:n(80),endOfMinute:n(81),endOfMonth:n(37),endOfQuarter:n(82),endOfSecond:n(83),endOfToday:n(84),endOfTomorrow:n(85),endOfWeek:n(36),endOfYear:n(86),endOfYesterday:n(87),format:n(88),getDate:n(89),getDay:n(90),getDayOfYear:n(38),getDaysInMonth:n(13),getDaysInYear:n(91),getHours:n(92),getISODay:n(42),getISOWeek:n(20),getISOWeeksInYear:n(93),getISOYear:n(1),getMilliseconds:n(94),getMinutes:n(95),getMonth:n(96),getOverlappingDaysInRanges:n(97),getQuarter:n(31),getSeconds:n(98),getTime:n(99),getYear:n(100),isAfter:n(101),isBefore:n(102),isDate:n(12),isEqual:n(103),isFirstDayOfMonth:n(104),isFriday:n(105),isFuture:n(106),isLastDayOfMonth:n(107),isLeapYear:n(41),isMonday:n(108),isPast:n(109),isSameDay:n(110),isSameHour:n(43),isSameISOWeek:n(45),isSameISOYear:n(46),isSameMinute:n(47),isSameMonth:n(49),isSameQuarter:n(50),isSameSecond:n(52),isSameWeek:n(21),isSameYear:n(54),isSaturday:n(111),isSunday:n(112),isThisHour:n(113),isThisISOWeek:n(114),isThisISOYear:n(115),isThisMinute:n(116),isThisMonth:n(117),isThisQuarter:n(118),isThisSecond:n(119),isThisWeek:n(120),isThisYear:n(121),isThursday:n(122),isToday:n(123),isTomorrow:n(124),isTuesday:n(125),isValid:n(40),isWednesday:n(126),isWeekend:n(127),isWithinRange:n(128),isYesterday:n(129),lastDayOfISOWeek:n(130),lastDayOfISOYear:n(131),lastDayOfMonth:n(132),lastDayOfQuarter:n(133),lastDayOfWeek:n(55),lastDayOfYear:n(134),max:n(135),min:n(136),parse:n(0),setDate:n(137),setDay:n(138),setDayOfYear:n(139),setHours:n(140),setISODay:n(141),setISOWeek:n(142),setISOYear:n(24),setMilliseconds:n(143),setMinutes:n(144),setMonth:n(56),setQuarter:n(145),setSeconds:n(146),setYear:n(147),startOfDay:n(3),startOfHour:n(44),startOfISOWeek:n(2),startOfISOYear:n(6),startOfMinute:n(48),startOfMonth:n(148),startOfQuarter:n(51),startOfSecond:n(53),startOfToday:n(149),startOfTomorrow:n(150),startOfWeek:n(8),startOfYear:n(39),startOfYesterday:n(151),subDays:n(152),subHours:n(153),subISOYears:n(34),subMilliseconds:n(154),subMinutes:n(155),subMonths:n(156),subQuarters:n(157),subSeconds:n(158),subWeeks:n(159),subYears:n(160)}},function(e,t){e.exports=function(e){var t=new Date(e.getTime()),n=t.getTimezoneOffset();return t.setSeconds(0,0),6e4*n+t.getTime()%6e4}},function(e,t,n){var r=n(0);e.exports=function(e,t,n,o){var a=r(e).getTime(),u=r(t).getTime(),i=r(n).getTime(),s=r(o).getTime();if(a>u||i>s)throw new Error("The start of the range cannot be after the end of the range");return a<s&&i<u}},function(e,t,n){var r=n(0);e.exports=function(e,t){if(!(t instanceof Array))throw new TypeError(toString.call(t)+" is not an instance of Array");var n,o,a=r(e).getTime();return t.forEach(function(e,t){var u=r(e),i=Math.abs(a-u.getTime());(void 0===n||i<o)&&(n=t,o=i)}),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){if(!(t instanceof Array))throw new TypeError(toString.call(t)+" is not an instance of Array");var n,o,a=r(e).getTime();return t.forEach(function(e){var t=r(e),u=Math.abs(a-t.getTime());(void 0===n||u<o)&&(n=t,o=u)}),n}},function(e,t,n){var r=n(2),o=6e4,a=6048e5;e.exports=function(e,t){var n=r(e),u=r(t),i=n.getTime()-n.getTimezoneOffset()*o,s=u.getTime()-u.getTimezoneOffset()*o;return Math.round((i-s)/a)}},function(e,t,n){var r=n(31),o=n(0);e.exports=function(e,t){var n=o(e),a=o(t);return 4*(n.getFullYear()-a.getFullYear())+(r(n)-r(a))}},function(e,t,n){var r=n(8),o=6e4,a=6048e5;e.exports=function(e,t,n){var u=r(e,n),i=r(t,n),s=u.getTime()-u.getTimezoneOffset()*o,f=i.getTime()-i.getTimezoneOffset()*o;return Math.round((s-f)/a)}},function(e,t,n){var r=n(11),o=36e5;e.exports=function(e,t){var n=r(e,t)/o;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(0),o=n(29),a=n(7),u=n(34);e.exports=function(e,t){var n=r(e),i=r(t),s=a(n,i),f=Math.abs(o(n,i));return n=u(n,s*f),s*(f-(a(n,i)===-s))}},function(e,t,n){var r=n(11),o=6e4;e.exports=function(e,t){var n=r(e,t)/o;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(16);e.exports=function(e,t){var n=r(e,t)/3;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(33);e.exports=function(e,t){var n=r(e,t)/7;return n>0?Math.floor(n):Math.ceil(n)}},function(e,t,n){var r=n(0),o=n(32),a=n(7);e.exports=function(e,t){var n=r(e),u=r(t),i=a(n,u),s=Math.abs(o(n,u));return n.setFullYear(n.getFullYear()-i*s),i*(s-(a(n,u)===-i))}},function(e,t){e.exports=function(){var e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(t,n,r){var o;return r=r||{},o="string"==typeof e[t]?e[t]:1===n?e[t].one:e[t].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"in "+o:o+" ago":o}}}},function(e,t,n){var r=n(74);e.exports=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],u=["AM","PM"],i=["am","pm"],s=["a.m.","p.m."],f={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?u[1]:u[0]},a:function(e){return e.getHours()/12>=1?i[1]:i[0]},aa:function(e){return e.getHours()/12>=1?s[1]:s[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){f[e+"o"]=function(t,n){return function(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(n[e](t))}}),{formatters:f,formattingTokensRegExp:r(f)}}},function(e,t){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r);var o=n.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},function(e,t,n){var r=n(15),o=n(0),a=n(17),u=n(18),i=1440,s=43200,f=525600;e.exports=function(e,t,n){var c=n||{},l=r(e,t),v=c.locale,d=u.distanceInWords.localize;v&&v.distanceInWords&&v.distanceInWords.localize&&(d=v.distanceInWords.localize);var g,p,m,h={addSuffix:Boolean(c.addSuffix),comparison:l};l>0?(g=o(e),p=o(t)):(g=o(t),p=o(e));var x=Math[c.partialMethod?String(c.partialMethod):"floor"],M=a(p,g),D=p.getTimezoneOffset()-g.getTimezoneOffset(),T=x(M/60)-D;if("s"===(m=c.unit?String(c.unit):T<1?"s":T<60?"m":T<i?"h":T<s?"d":T<f?"M":"Y"))return d("xSeconds",M,h);if("m"===m)return d("xMinutes",T,h);if("h"===m)return d("xHours",x(T/60),h);if("d"===m)return d("xDays",x(T/i),h);if("M"===m)return d("xMonths",x(T/s),h);if("Y"===m)return d("xYears",x(T/f),h);throw new Error("Unknown unit: "+m)}},function(e,t,n){var r=n(35);e.exports=function(e,t){return r(Date.now(),e,t)}},function(e,t,n){var r=n(0);e.exports=function(e,t,n){var o=r(e),a=void 0!==n?n:1,u=r(t).getTime();if(o.getTime()>u)throw new Error("The first date cannot be after the second date");var i=[],s=o;for(s.setHours(0,0,0,0);s.getTime()<=u;)i.push(r(s)),s.setDate(s.getDate()+a);return i}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setMinutes(59,59,999),t}},function(e,t,n){var r=n(36);e.exports=function(e){return r(e,{weekStartsOn:1})}},function(e,t,n){var r=n(1),o=n(2);e.exports=function(e){var t=r(e),n=new Date(0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);var a=o(n);return a.setMilliseconds(a.getMilliseconds()-1),a}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setSeconds(59,999),t}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getMonth(),o=n-n%3+3;return t.setMonth(o,0),t.setHours(23,59,59,999),t}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setMilliseconds(999),t}},function(e,t,n){var r=n(19);e.exports=function(){return r(new Date)}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r+1),o.setHours(23,59,59,999),o}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(23,59,59,999),t}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r-1),o.setHours(23,59,59,999),o}},function(e,t,n){var r=n(38),o=n(20),a=n(1),u=n(0),i=n(40),s=n(18);var f={M:function(e){return e.getMonth()+1},MM:function(e){return v(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return v(e.getDate(),2)},DDD:function(e){return r(e)},DDDD:function(e){return v(r(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return o(e)},WW:function(e){return v(o(e),2)},YY:function(e){return v(e.getFullYear(),4).substr(2)},YYYY:function(e){return v(e.getFullYear(),4)},GG:function(e){return String(a(e)).substr(2)},GGGG:function(e){return a(e)},H:function(e){return e.getHours()},HH:function(e){return v(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:t>12?t%12:t},hh:function(e){return v(f.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return v(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return v(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return v(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return v(e.getMilliseconds(),3)},Z:function(e){return l(e.getTimezoneOffset(),":")},ZZ:function(e){return l(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};function c(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|]$/g,""):e.replace(/\\/g,"")}function l(e,t){t=t||"";var n=e>0?"-":"+",r=Math.abs(e),o=r%60;return n+v(Math.floor(r/60),2)+t+v(o,2)}function v(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return n}e.exports=function(e,t,n){var r=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",o=(n||{}).locale,a=s.format.formatters,l=s.format.formattingTokensRegExp;o&&o.format&&o.format.formatters&&(a=o.format.formatters,o.format.formattingTokensRegExp&&(l=o.format.formattingTokensRegExp));var v=u(e);return i(v)?function(e,t,n){var r,o,a=e.match(n),u=a.length;for(r=0;r<u;r++)o=t[a[r]]||f[a[r]],a[r]=o||c(a[r]);return function(e){for(var t="",n=0;n<u;n++)a[n]instanceof Function?t+=a[n](e,f):t+=a[n];return t}}(r,a,l)(v):"Invalid Date"}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getDate()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getDay()}},function(e,t,n){var r=n(41);e.exports=function(e){return r(e)?366:365}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getHours()}},function(e,t,n){var r=n(6),o=n(14),a=6048e5;e.exports=function(e){var t=r(e),n=r(o(t,60)).valueOf()-t.valueOf();return Math.round(n/a)}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getMilliseconds()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getMinutes()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getMonth()}},function(e,t,n){var r=n(0),o=864e5;e.exports=function(e,t,n,a){var u=r(e).getTime(),i=r(t).getTime(),s=r(n).getTime(),f=r(a).getTime();if(u>i||s>f)throw new Error("The start of the range cannot be after the end of the range");if(!(u<f&&s<i))return 0;var c=(f>i?i:f)-(s<u?u:s);return Math.ceil(c/o)}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getSeconds()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getFullYear()}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()>o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()<o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){return 1===r(e).getDate()}},function(e,t,n){var r=n(0);e.exports=function(e){return 5===r(e).getDay()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getTime()>(new Date).getTime()}},function(e,t,n){var r=n(0),o=n(19),a=n(37);e.exports=function(e){var t=r(e);return o(t).getTime()===a(t).getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){return 1===r(e).getDay()}},function(e,t,n){var r=n(0);e.exports=function(e){return r(e).getTime()<(new Date).getTime()}},function(e,t,n){var r=n(3);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()===o.getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){return 6===r(e).getDay()}},function(e,t,n){var r=n(0);e.exports=function(e){return 0===r(e).getDay()}},function(e,t,n){var r=n(43);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(45);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(46);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(47);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(49);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(50);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(52);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(21);e.exports=function(e,t){return r(new Date,e,t)}},function(e,t,n){var r=n(54);e.exports=function(e){return r(new Date,e)}},function(e,t,n){var r=n(0);e.exports=function(e){return 4===r(e).getDay()}},function(e,t,n){var r=n(3);e.exports=function(e){return r(e).getTime()===r(new Date).getTime()}},function(e,t,n){var r=n(3);e.exports=function(e){var t=new Date;return t.setDate(t.getDate()+1),r(e).getTime()===r(t).getTime()}},function(e,t,n){var r=n(0);e.exports=function(e){return 2===r(e).getDay()}},function(e,t,n){var r=n(0);e.exports=function(e){return 3===r(e).getDay()}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e).getDay();return 0===t||6===t}},function(e,t,n){var r=n(0);e.exports=function(e,t,n){var o=r(e).getTime(),a=r(t).getTime(),u=r(n).getTime();if(a>u)throw new Error("The start of the range cannot be after the end of the range");return o>=a&&o<=u}},function(e,t,n){var r=n(3);e.exports=function(e){var t=new Date;return t.setDate(t.getDate()-1),r(e).getTime()===r(t).getTime()}},function(e,t,n){var r=n(55);e.exports=function(e){return r(e,{weekStartsOn:1})}},function(e,t,n){var r=n(1),o=n(2);e.exports=function(e){var t=r(e),n=new Date(0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);var a=o(n);return a.setDate(a.getDate()-1),a}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getMonth(),o=n-n%3+3;return t.setMonth(o,0),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(0);e.exports=function(){var e=Array.prototype.slice.call(arguments).map(function(e){return r(e)}),t=Math.max.apply(null,e);return new Date(t)}},function(e,t,n){var r=n(0);e.exports=function(){var e=Array.prototype.slice.call(arguments).map(function(e){return r(e)}),t=Math.min.apply(null,e);return new Date(t)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setDate(o),n}},function(e,t,n){var r=n(0),o=n(4);e.exports=function(e,t,n){var a=n&&Number(n.weekStartsOn)||0,u=r(e),i=Number(t),s=u.getDay();return o(u,((i%7+7)%7<a?7:0)+i-s)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setMonth(0),n.setDate(o),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setHours(o),n}},function(e,t,n){var r=n(0),o=n(4),a=n(42);e.exports=function(e,t){var n=r(e),u=Number(t),i=a(n);return o(n,u-i)}},function(e,t,n){var r=n(0),o=n(20);e.exports=function(e,t){var n=r(e),a=Number(t),u=o(n)-a;return n.setDate(n.getDate()-7*u),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setMilliseconds(o),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setMinutes(o),n}},function(e,t,n){var r=n(0),o=n(56);e.exports=function(e,t){var n=r(e),a=Number(t)-(Math.floor(n.getMonth()/3)+1);return o(n,n.getMonth()+3*a)}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setSeconds(o),n}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=r(e),o=Number(t);return n.setFullYear(o),n}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setDate(1),t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(3);e.exports=function(){return r(new Date)}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r+1),o.setHours(0,0,0,0),o}},function(e,t){e.exports=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),o=new Date(0);return o.setFullYear(t,n,r-1),o.setHours(0,0,0,0),o}},function(e,t,n){var r=n(4);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(22);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(5);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(25);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(10);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(26);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(27);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(14);e.exports=function(e,t){var n=Number(t);return r(e,-n)}},function(e,t,n){var r=n(28);e.exports=function(e,t){var n=Number(t);return r(e,-n)}}]);