<template>
  <div style="display:flex">
    <div class="hello">   
      <div v-for="(item, index) in resultados" :key="index" >
        <appCard largura="200px">
          {{item}} &emsp;<button @click="marcaFavorito(item)"></button>
          <br /><br/>
         <img :scr="item" width="500" alt="">
       </appCard>
      </div>
   </div>
   <appCard class="favoritos" cor="grey">
     <p>Favoritos</p>
     <div  v-for="(item, index) in favoritos" :key="index">
       <appCard cor="white">
          <img :scr="item" width="90" alt=""  @click="desmarcaFavorito(index)">
       </appCard>
     </div>
   </appcard>
  </div>
</template>

<script>
import axios from "axios"
import appCard from "@/components/app-card.vue"
import { bus } from '../main'
export default {
  components:{
    appCard
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      pesquisa:"",
      resultados:"",
      favoritos:[]
    }
  },
   methods:{
     marcaFavorito(item){
       this.favoritos.unshift(item)
     },
     desmarcaFavorito(index){
       this.favoritos.splice(index,1)
     },
    carregarInfo(query){
      axios.get('https://dog.ceo/api/breed/'+query+'/images')
          .then(
                res =>{
                    this.resultados = res.data.message
                    console.log(this.resultados)
                }   
          ) 
    },
     carregaBreed(breed){
       return axios.get('https://dog.ceo/api/breed/'+query+'/images/radom')
          .then(
                res =>res.data.message   
          )
    }
  },
  created (){
      this.carregarInfo(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  display: flex;
  flex-flow: row wrap;
}
.favoritos{
  max-width: 130px;
  font-weight:700 ;
  color: white;
}

</style>
