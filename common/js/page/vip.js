if(typeof(ruleData)=='undefined'){var ruleData=[];}
if(typeof(titleData)=='undefined'){var titleData=[];}
if(typeof(descriptionData)=='undefined'){var descriptionData=[];}
if(typeof(vipData)=='undefined'){var vipData=[];}
if(typeof(birthdayData)=='undefined'){var birthdayData=[];}
new Vue({el:'#rule',computed:{selectData(){return this.rule[window.localStorage['syscode']];}},data:{title:titleData,rule:ruleData},template:`
            <table class="rwd table-diamond">
                <thead>
                <tr>
                    <th scope="col" v-for="n in 6" v-html="title[n-1]"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(tr,trIndex) in selectData">
                    <td v-for="n in 6" :aria-label="title[n-1]">
                        <div v-if="tr[n-1]=='✘'"><i class="fa fa-times text-danger"></i></div>
                        <div v-else-if="tr[n-1]=='✔'"><i class="fa fa-check text-success"></i></div>
                        <div v-else v-html="tr[n-1]"></div>
                    </td>

                </tr>
                </tbody>
            </table>
        `})
new Vue({el:'#title-vip',computed:{selectData(){return this.slogan[window.localStorage['syscode']];}},data:{slogan:slogandata},template:`
        <h1 v-text="selectData" class="slogan"></h1>
        `})
new Vue({el:'#description',computed:{selectData(){return this.description[window.localStorage['syscode']];}},data:{description:descriptionData},template:`
        <div v-html="selectData" class="description"></div> 
        `})
new Vue({el:'#vip',computed:{selectData(){return this.vip[window.localStorage['syscode']];}},data:{vip:vipData},template:`
        <div v-html="selectData" class="vip"></div> 
        `})
new Vue({el:'#birthday',computed:{selectData(){return this.birthday[window.localStorage['syscode']];}},data:{birthday:birthdayData},template:`
        <div v-html="selectData" class="birthday"></div> 
        `})