import { parse } from 'devalue'

import { getContext } from 'unctx'
export default defineNitroPlugin((nitroApp) => {
  const nuxtapp = getContext('nuxt');
  nitroApp.hooks.hook('render:html', (html, { event }) => { 
    // const nuxtApp = useNuxtApp()
    // const nuxt = tryUseNuxt()
    // This will be an object representation of the html template.
    // console.log(html.bodyAppend)
    // html.head.push(`<meta name="description" content="My custom description" />`)
    // console.info(parse(`[["Reactive",1],{"data":2,"state":17,"_errors":18,"serverRendered":19,"path":20},{"Header_aJ6M5d3UOl":3,"Labels_itU26nVzdJ":8,"Footer_yvUJtbduaW":13},["Island",4],{"key":5,"params":6},"Header_aJ6M5d3UOl",{"props":7},"{}",["Island",9],{"key":10,"params":11},"Labels_itU26nVzdJ",{"props":12},"{\"did\":0,\"cid\":0}",["Island",14],{"key":15,"params":16},"Footer_yvUJtbduaW",{"props":7},{},{},true,"/seo"]`));
    // const result = [];
    // html.bodyAppend.forEach((item) => {
    //   // console.info(item);
    //   // const replaceResult = item.replace(/<script type=\"application\/json\" id=\"__NUXT_DATA__\" data-ssr=\"true\">.*<\/[^>]*script>/i, '<script type="application/json" id="__NUXT_DATA__" data-ssr="true">[[]]</script>');
    //   result.push(item);
    // });
    // html.bodyAppend = result;
  })
  // You can also intercept the response here.
  // nitroApp.hooks.hook('render:response', (response, { event }) => { console.log(response) })
});
