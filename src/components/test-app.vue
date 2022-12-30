<template>
<div>
<div class="cust-block">
<span class="right-arrow">Leads&nbsp; ${{totalLeads}}</span>
 
 <draggable v-model="leadsList" class="dragArea" :options="{group:{ name:'people' }}">
        <div class="data-block" v-for="(element, index) in leadsList" :key="index">
          <i class="far fa-handshake"></i>&nbsp;&nbsp;{{element.title}}&nbsp;&nbsp;${{element.amount}}
          <br />
          <br />
          <i class="fa fa-briefcase" aria-hidden="true"></i>&nbsp;&nbsp; Factory Bucket
          </div>
      </draggable>

</div>
<div class="cust-block">
<span class="right-arrow">Qualified&nbsp; ${{totalLeads}}</span>
 
 <draggable v-model="qualifiedList" class="dragArea" :options="{group:{ name:'people' }}">
        <div class="data-block" v-for="(element, index) in qualifiedList" :key="index">
          <i class="far fa-handshake"></i>&nbsp;&nbsp;{{element.title}}&nbsp;&nbsp;${{element.amount}}
          <br />
          <br />
          <i class="fa fa-briefcase" aria-hidden="true"></i>&nbsp;&nbsp; Factory Bucket
          </div>
      </draggable>
</div>
<div class="cust-block">
<span class="right-arrow">Quoted&nbsp; ${{totalQuoted}}</span>

 <draggable v-model="quotedList" class="dragArea" :options="{group:{ name:'people' }}">
        <div class="data-block" v-for="(element, index) in quotedList" :key="index">
          <i class="far fa-handshake"></i>&nbsp;&nbsp;{{element.title}}&nbsp;&nbsp;${{element.amount}}
          <br />
          <br />
          <i class="fa fa-briefcase" aria-hidden="true"></i>&nbsp;&nbsp; Factory Bucket
          </div>
      </draggable>
</div>
<div class="cust-block">
<span class="right-arrow">Won/Lost&nbsp; ${{totalWonLost}}</span>

 <draggable v-model="wonLostList" class="dragArea" :options="{group:{ name:'people' }}">
        <div class="data-block" v-for="(element, index) in wonLostList" :key="index">
          <i class="far fa-handshake"></i>&nbsp;&nbsp;{{element.title}}&nbsp;&nbsp;${{element.amount}}
          <br />
          <br />
          <i class="fa fa-briefcase" aria-hidden="true"></i>&nbsp;&nbsp; Factory Bucket
          </div>
      </draggable>
</div>
</div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "test-app",
  components: {
    draggable
  },
  data: function() {
    return {
      leadsList: [
        {
          title: "Stein Industries",
          amount: 5000
        }
      ],
      qualifiedList: [
        {
          title: "test",
          amount: 1000
        },
        {
          title: "Stein Industries",
          amount: 4500
        }
      ],
      quotedList: [
        {
          title: "joe",
          amount: 200
        }
      ],
      wonLostList: [
        {
          title: "fr poly",
          amount: 1000
        },
        {
          title: "January 20th test",
          amount: 1.52
        }
      ]
    };
  },
  computed: {
    totalLeads: function() {
      return this.leadsList.reduce((acc, item) => acc + item.amount, 0);
    },
    totalQualified: function() {
      return this.qualifiedList.reduce((acc, item) => acc + item.amount, 0);
    },
    totalQuoted: function() {
      return this.quotedList.reduce((acc, item) => acc + item.amount, 0);
    },
    totalWonLost: function() {
      return this.wonLostList.reduce((acc, item) => acc + item.amount, 0);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right-arrow {
  display: inline-block;
  text-align: center;
  position: relative;
  background: hsl(208, 56%, 41%);
  color: white;
  padding: 7px 10px;
  margin: 1px;
  width: 80%;
  margin-bottom: 15px;
}
.right-arrow:after {
  top: 0;
  content: "";
  display: block;
  position: absolute;
  left: 100%;
  width: 0;
  height: 0;
  bottom: 0;
  border-top: 17px solid transparent;
  border-right: 16px solid transparent;
  border-bottom: 16px solid transparent;
  border-left: 15px solid #2e6da4;
}
.data-block {
  display: inline-block;
  position: relative;
  padding: 7px 10px;
  margin: 1px;
  width: 80%;
  border: 1px solid;
  text-align: left;
  font-size: 12px;
}
.data-block:after {
  top: -1px;
  content: "";
  display: block;
  position: absolute;
  left: 100%;
  border: 1px solid;
  height: 100%;
  width: 16px;
}
.cust-block {
  display: inline-block;
  width: 24.71%;
  vertical-align: top;
}
.dragArea {
  min-height: 300px;
}
</style>
