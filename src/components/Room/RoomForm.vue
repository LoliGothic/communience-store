<template>
    <div>
        <div id="form">
            formの作成<br>
            〇☓
        </div>
        <div id="create">
            <br>
            form作成画面
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                
            }
        }
    }
</script>

<style>
    #form{
            text-align: center;
            margin: 30px auto;
            width: 200px;
            height: 90px;
            border-radius: 5%;
            line-height: 40px;
            font-size: 25px;
            padding-top: 5px;
            font-weight: bold;
            background-color: blue;
            color: white;
    }
    #create{
            text-align: center;
            margin: 0 auto;
            width: 1000px;
            padding-top: 5px;
            padding-left: 300px;
            padding-right: 300px;
            padding-bottom: 300px;
            border-radius: 5px;
            border: solid 2px #4169E1;
            background-color: white;
            cursor: pointer;
            color: blue;
            font-size: 30px;
            line-height: 100px;
    }
</style>
