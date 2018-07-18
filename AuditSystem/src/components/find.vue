<template>
    <div class="find">
        <div class="alert">
            <div>
                <el-alert :title="alert_info" type="info" show-icon></el-alert>
            </div>
            <div style="margin-top:10px">
                <el-alert :title="alert_warning" type="warning" show-icon></el-alert>
            </div>
        </div>
        <div class="search">
            <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div class="filters">
            <div class="title">筛选</div>
            <div class="content">
                <div class="item-select">
                    <el-select v-model="value2" placeholder="请选择">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </div>
                <div class="item-select">
                    <el-select v-model="value2" placeholder="请选择">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </div>
                <div class="item-select">
                    <el-select v-model="value2" placeholder="请选择">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </div>
                <div class="item-select">
                    <el-select v-model="value2" placeholder="请选择">
                        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </div>
                <div class="item-checkbox">
                    <el-checkbox v-model="checked">包含敏感词</el-checkbox>
                </div>
            </div>
        </div>
        <div class="results">
            <div class="title">
                <div class="left">
                    <el-button type="primary" icon="el-icon-check" plain>全部选中</el-button>
                    <el-button type="primary" plain>标记未通过</el-button>
                </div>
                <div class="right">共搜索到195条资讯</div>
            </div>
            <div class="content">
                <div class="top">
                    <div class="item" @click="showInfo(1)">
                        <div class="title">
                            <span class="mainTitle">区块链、人工智能的A面与B面</span> <span class="subTitle">新浪科技</span>
                            <span class="subTitle">2018-07-09  10:35:00</span>
                        </div>
                        <div class="info">
                            【通用电气提交区块链技术专利申请】据FreightWaves消息，通用电气已提交一个区块链技术专利的申请，旨在用分布式账本技术来追踪和验证其供应链中3D打印部件，有助于避免假冒和劣质部件的使用以提高供应链的安全性并验证部件质量。（B圈）
                        </div>
                        <div class="tags">
                            <el-button type="success" circle size="mini">已</el-button>
                            <div class="tag">新闻</div>
                            <div class="tag">区块链</div>
                        </div>
                    </div>
                    <div class="item active">
                        <div class="title">
                            <span class="mainTitle">区块链、人工智能的A面与B面</span> <span class="subTitle">新浪科技</span>
                            <span class="subTitle">2018-07-09  10:35:00</span>
                        </div>
                        <div class="info">
                            【通用电气提交区块链技术专利申请】据FreightWaves消息，通用电气已提交一个区块链技术专利的申请，旨在用分布式账本技术来追踪和验证其供应链中3D打印部件，有助于避免假冒和劣质部件的使用以提高供应链的安全性并验证部件质量。（B圈）
                        </div>
                        <div class="tags">
                            <el-button type="danger" circle size="mini">未</el-button>
                            <div class="tag">新闻</div>
                            <div class="tag">区块链</div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <el-pagination @current-change="handleCurrentChange" :current-page="currentPage1" :page-sizes="[10]" layout="total, sizes, prev, pager, next, jumper" :total="400"></el-pagination>
                </div>
            </div>
        </div>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="80%">
            <span>这是一段信息</span> <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                 </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
  name: "find",
  data() {
    return {
      alert_info: "更新时间：2018-07-11 10:00:00  更新100条",
      alert_warning: "50条资讯未审核！",
      search: "",
      options2: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value2: "",
      checked: false,
      currentPage1: 1,
      dialogVisible: false
    };
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    showInfo(id) {
      this.dialogVisible = true;
    }
  }
};
</script>
<style scoped lang="scss" type="text/scss">
.find {
  padding: 10px;
  .alert {
    margin: 10px;
  }
  .search {
    width: 50%;
    margin: 20px auto;
  }
  .filters {
    background: #e8e8e8;
    padding: 10px;
    display: flex;
    .title {
      line-height: 40px;
      margin: 0 10px;
    }
    .content {
      display: flex;
      .item-select {
        width: 200px;
        margin: 0 10px;
      }
      .item-checkbox {
        width: 100px;
        margin: 0 10px;
        line-height: 40px;
      }
    }
  }
  .results {
    margin-top: 10px;
    > .title {
      padding: 10px;
      display: flex;
      background: #e8e8e8;
      .left {
        width: 100%;
        text-align: left;
      }
      .right {
        line-height: 40px;
        width: 200px;
      }
    }
    .content {
      margin-top: 10px;
      .top {
        .item {
          border: 1px solid #e8e8e8;
          padding: 10px;
          margin: 10px 0;
          cursor: pointer;
          .title {
            text-align: left;
            .mainTitle {
              font-size: 18px;
              font-weight: bold;
            }
            .subTitle {
              color: #b1b1b1;
              margin-left: 10px;
            }
          }
          .info {
            padding: 10px;
            text-align: left;
            line-height: 1.5;
          }
          .tags {
            text-align: right;
            margin-right: 10px;
            .tag {
              background: #e8e8e8;
              display: inline-block;
              padding: 5px;
              margin: 0 5px;
            }
          }
        }
        .item.active {
          background-color: #67c23a6b;
        }
      }
      .bottom {
        margin-top: 10px;
      }
    }
  }
}
</style>