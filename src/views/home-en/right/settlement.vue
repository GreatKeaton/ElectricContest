<template>
    <div class="settlement">
        <ul class="lement-title">
            <li :class="{'active': listIndex === 1}" @click="listIndex = 1">Pending</li>
            <li :class="{'active': listIndex === 2}" @click="listIndex = 2">Settled</li>
            <li :class="{'active': listIndex === 3}" @click="listIndex = 3">Refresh<i class="el-icon-refresh"></i></li>
        </ul>

        <article class="lement-box">
            <h1>GAL<i class="el-icon-close"></i></h1>
            <div>
                <div class="confirmed">confirmed</div>
                <p><i></i>First Blood Team（Match 1)<span class="right">LOL</span></p>
                <p>
                    <b>GAL</b>
                    <b>VS</b>
                    <b>GS</b>
                </p>
                <p>TCL- Turkish Champion League - 
          2019 Winter Match</p>
                <div class="clearfix">
                    <span class="db"><em>10</em>Bet Amount</span>
                    <span class="dx">@6.80</span>
                    <span class="db"><em>58</em>Win Amount</span>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listIndex: 1
        }
    }
}
</script>
<style lang="less" scope>
@import "../../../styles/main";
@import "../../../styles/common";
    .lement-title{
        .flex;

        &>li{
            flex: 1;
            .tx-ct;
            color: #1c4b77;
            font-size: 14px;
            cursor: pointer;
            line-height: 30px;

            &.active{
                color: #fff;
                background: url("../../../images/home/nav/zh-active.png") no-repeat bottom center;
                background-position: 100% 100%;
            }
        }
    }
    .lement-box{
        color: rgba(255, 255, 255, .9);
        background: #0e2b43;

        h1{
            line-height: 25px;
            font-size: 16px;
            padding: 0 5px;
            background: #1c4b77;
            margin-top: 1px;

            i{
                float: right;
                margin-top: 4px;
            }
        }
        &>div{
            font-size: 14px;
            padding: 10px 5px;
            .relative;

            .confirmed{
                position: absolute;
                top: -20px;
                left: 50%;
                height: 20px;
                margin-left: -25px;
                color: #fff;
                font-size: 12px;
                background: #01111e;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                .tx-ct;
                padding: 3px 10px;
                font-weight: bold;
            }
            p{
                margin-bottom: 10px;
            }
            .db, .dx{
                .in-block;
                .tx-ct;
                .left;
            }
            .db{
                width: 30%;
                font-size: 12px;
            }
            .dx{
                background: #ca4345;
                width: 32%;
                height: 40px;
                line-height: 40px;
                margin: 0 10px;
                font-size: 16px;
                font-weight: bold;
            }
            em{
                color: #dcaa38;
                font-weight: bold;
                .block;
            }
        }
    }
</style>
