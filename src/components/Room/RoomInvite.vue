<template>
  <div id="invite">
  <button v-on:click="say">招待リンクの作成</button>
</div>
</template>

<script>
export default {
  data() {
      return {
          
      }
  },

  methods: {
            say: function() {
                alert("クリップボードにURLをコピーしました！ルームパスは〇〇〇〇です．");
            }
          }

}
</script>

<style>
        #invite{
            text-align: center;
            margin: 30px auto;
            width: 300px;
            height: 100px;
            border-radius: 5%;
            padding-top: 35px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            line-height: 30px;
            font-size: 30px;
            font-weight: bold;
            background-color: blue;
            color: white;
        }
</style>