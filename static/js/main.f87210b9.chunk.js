(this["webpackJsonpweather-application"]=this["webpackJsonpweather-application"]||[]).push([[0],{111:function(e,t,c){},130:function(e,t,c){},141:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(32),r=c.n(s),i=(c(111),c(20)),l=c(95),j=c.n(l),d=(c(130),c(5));function o(){return Object(d.jsx)("div",{className:"app-header",children:"React Weather Application"})}var u=c(155),b=c(156),h=c(56),O=c.n(h),m=c(23),x=c(24);function p(e){var t=e.temperature,c=e.city,a=e.sunrise,n=e.sunset,s=e.humidity,r=e.icon,i=null;return"Haze"===r?i=Object(d.jsx)(m.a,{icon:x.d,size:"lg",color:"#212121"}):"Thunderstorm"===r?i=Object(d.jsx)(m.a,{icon:x.a,size:"lg",color:"#212121"}):"Drizzle"===r||"Rain"===r?i=Object(d.jsx)(m.a,{icon:x.c,size:"lg",color:"#212121"}):"Snow"===r?i=Object(d.jsx)(m.a,{icon:x.e,size:"lg",color:"#212121"}):"Mist"===r?i=Object(d.jsx)(m.a,{icon:x.d,size:"lg",color:"#212121"}):"Clear"===r?i=Object(d.jsx)(m.a,{icon:x.f,size:"lg",color:"#212121"}):"Clouds"===r&&(i=Object(d.jsx)(m.a,{icon:x.b,size:"lg",color:"#212121"})),Object(d.jsxs)(u.a,{className:"weather-card-main",children:[Object(d.jsxs)(u.a.Content,{className:"weather-card",children:[Object(d.jsx)(u.a.Header,{className:"weather-card-child",children:c}),Object(d.jsx)("div",{className:"icon-container",children:i})]}),Object(d.jsx)(u.a.Content,{children:Object(d.jsx)(b.a,{children:Object(d.jsx)(b.a.Event,{children:Object(d.jsxs)(b.a.Content,{children:[Object(d.jsx)("h5",{className:"weather-card-child",children:O()().format("MMMM Do, h:mm a")}),Object(d.jsxs)("div",{className:"weather-card",children:[Object(d.jsxs)("div",{className:"weather-card-child",children:[Object(d.jsx)("b",{children:"Temperature"}),": ",Math.floor(t)-273," \u2103"]}),Object(d.jsxs)("div",{className:"weather-card-child",children:[Object(d.jsx)("b",{children:"Humidity"}),": ",s," %"]})]}),Object(d.jsxs)("div",{className:"weather-card",children:[Object(d.jsxs)("div",{className:"weather-card-child",children:[Object(d.jsx)("b",{children:"Sunrise"}),": ",new Date(1e3*a).toLocaleTimeString("en-IN")]}),Object(d.jsxs)("div",{className:"weather-card-child",children:[Object(d.jsx)("b",{children:"Sunset"}),": ",new Date(1e3*n).toLocaleTimeString("en-IN")]})]})]})})})})]})}var f=c(74),g=c(66),v=c(67),w=c(68);function N(e){var t=e.forecast;return Object(d.jsx)("div",{style:{marginTop:20},children:Object(d.jsx)(u.a.Group,{itemsPerRow:4,children:t.map((function(e){return Object(d.jsx)(u.a,{className:"forecast-card",children:Object(d.jsxs)(f.a,{children:[Object(d.jsxs)(g.a,{className:"forecast-date",children:["Date: ",O.a.unix(e.dt).format("LL")]}),Object(d.jsxs)(g.a,{className:"forecast-header",children:["Temperature: ",Math.round((e.temp.max+e.temp.min)/2-273)," \u2103"]}),Object(d.jsxs)(v.a,{className:"forecast-header",children:["Humidity: ",e.humidity,"%"]}),Object(d.jsx)(w.a,{className:"temp-desc",children:e.weather[0].description})]})})}))})})}var S=c(154);var y=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),r=Object(i.a)(s,2),l=r[0],u=r[1],b=Object(a.useState)(""),h=Object(i.a)(b,2),O=h[0],m=h[1],x=Object(a.useState)(null),f=Object(i.a)(x,2),g=f[0],v=f[1],w=Object(a.useState)(null),y=Object(i.a)(w,2),z=y[0],C=y[1],M=Object(a.useState)(null),T=Object(i.a)(M,2),L=T[0],D=T[1],P=Object(a.useState)(null),F=Object(i.a)(P,2),H=F[0],I=F[1],E=Object(a.useState)(""),R=Object(i.a)(E,2),k=R[0],B=R[1],J=Object(a.useState)([]),A=Object(i.a)(J,2),G=A[0],W=A[1],q=Object(a.useState)(!0),K=Object(i.a)(q,2),Q=K[0],U=K[1];return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){n(e.coords.latitude),u(e.coords.longitude)})),j.a.get("".concat("https://api.openweathermap.org/data/2.5/onecall","?lat=").concat(c,"&lon=").concat(l,"&exclude=hourly,minutely&appid=").concat("59425d0a678328ec8fda7625fb071e44")).then((function(e){U(!1),console.log(e.data),v(e.data.current.temp),I(e.data.current.sunset),D(e.data.current.sunrise),C(e.data.current.humidity),m(e.data.timezone),B(e.data.current.weather[0].main),W(e.data.daily)}))}),[c,l]),Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(o,{}),Q?Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Loading..Please wait"}),Object(d.jsx)(S.a,{active:!0,inline:"centered"})]}):Object(d.jsx)(p,{temperature:g,humidity:z,sunrise:L,sunset:H,city:O,icon:k}),Object(d.jsx)(N,{forecast:G})]})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,157)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};c(140);r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),z()}},[[141,1,2]]]);
//# sourceMappingURL=main.f87210b9.chunk.js.map