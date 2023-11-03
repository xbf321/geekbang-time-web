export default defineNuxtPlugin(() => {
  useHead({
    script: [
      { 
        innerHTML: '"use strict";!function(u,d){var t="owl",e="_Owl_",n="Owl",r="start",c="error",p="on"+c,f=u[p],h="addEventListener",l="attachEvent",v="isReady",b="dataSet";u[t]=u[t]||function(){try{u[t].q=u[t].q||[];var e=[].slice.call(arguments);e[0]===r?u[n]&&u[n][r]?u[n][r](e[1]):u[t].q.unshift(e):u[t].q.push(e)}catch(e){}},u[e]=u[e]||{preTasks:[],pageData:[],use:function(e,t){this[v]?u[n][e](t):this.preTasks.push({api:e,data:[t]})},run:function(t){if(!(t=this).runned){t.runned=!0,t[b]=[],u[p]=function(){t[v]||t[b].push({type:"jsError",data:arguments}),f&&f.apply(u,arguments)},u[h]&&u[h]("unhandledrejection",function(e){t[v]||t[b].push({type:"jsError",data:[e]})});var e=function(e){!t[v]&&e&&t[b].push({type:"resError",data:[e]})};u[h]?u[h](c,e,!0):u[l]&&u[l](p,e);var n="MutationObserver",r=u[n]||u["WebKit"+n]||u["Moz"+n],a=u.performance||u.WebKitPerformance,s="disableMutaObserver";if(r&&a&&a.now)try{var i=-1,o=u.navigator.userAgent;-1<o.indexOf("compatible")&&-1<o.indexOf("MSIE")?(new RegExp("MSIE (\\d+\\.\\d+);").test(o),i=parseFloat(RegExp.$1)):-1<o.indexOf("Trident")&&-1<o.indexOf("rv:11.0")&&(i=11),-1!==i&&i<=11?t[s]=!0:(t.observer=new r(function(e){t.pageData.push({mutations:e,startTime:a.now()})})).observe(d,{childList:!0,subtree:!0})}catch(e){}else t[s]=!0}}},u[e].runned||u[e].run()}(window,document);',
        // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
        tagPosition: 'head',
      }, {
        src: '//www.dpfile.com/app/owl/static/owl_1.10.1.js',
        tagPosition: 'bodyOpen',
      }]
  });
});