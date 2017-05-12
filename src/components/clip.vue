<template>
  <div>
    <div>
      <input type="file" accept="image/*" ref="input" @change="clipImg($event)" />
      <a href="#" class="btn btn-primary" @click="triggerImgCrop">预览图片</a>
      <a href="#" class="btn btn-primary" @click="downLoad">下载图片</a>
      <a href="#" class="btn btn-primary" @click="upLoad">上传图片</a>
    </div>
    <img class="avator-img" ref="imgPreview" :src="clipUrl" alt="image-preview" />
    <div class="clip-wp" id="clip-wp" v-show="isClip">
      <div id="container">
        <canvas id="image-box"></canvas>
        <canvas id="cover-box"></canvas>
      </div>
      <div class="clip-ft">
        <a class="btn btn-cancel" id="cancel-img" @click.stop="cancelImg">取消</a>
        <a class="btn btn-save" id="save-img" @click.stop="saveImg">保存</a>
      </div>
    </div>
  </div>
</template>

<script>
import Clip from '../clip/clip'
import imgLoad from '../loadimage/imageLoad'

const imgDefault = require('../assets/logo.png')

export default {
  name: 'main',

  data () {
    return {
      isClip: false,
      clipUrl: imgDefault,
      clip: null
    }
  },

  methods: {
    triggerImgCrop () {
      this.$refs.input.click()
    },
    clipImg (e) {
      this.clip = new Clip('container', 'image-box', 'cover-box', this)
      this.clip.init(e.target.files[0])
      this.isClip = true
    },
    saveImg () {
      this.isClip = false
      this.clip.saveImg()
    },
    cancelImg () {
      this.isClip = false
    },
    downLoad () {
      imgLoad.downLoad(this.clipUrl)
    },
    upLoad () {
      imgLoad.upLoad(this.clipUrl, this.url)
    }
  }

}
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

input {
  display: none
}
button {
  outline: none;
  border: 0;
  background-color: inherit;
  color: inherit;
  font-size: inherit;
}
a {
  text-decoration: none;
  color: inherit;
}

img {
  width: 100px;
  height: auto
}

.btn {
  display: inline-block;
  width: 100px;
  height: 40px;
  font-size: 0.8em;
  text-align: center;
  line-height: 40px;
  margin: 10px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
}

.btn-primary:active {
  background-color: #465f79;
}
.btn-primary {
  background-color: #537aa2;
}
.clip-wp {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #000;
  text-align: center;
  #container {
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    top: 20px;
    bottom: 80px;
    background-color: #000;
  }
  .clip-ft {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    bottom: 0;
    height: 80px;
    background-color: #000;
    color: #ffffff;
    font-size: 0.9em;
    .btn {
      width: 30%;
      margin: 0 20px;
      text-align: center;
      &:active {
        color: #777777;
      }
    }
    .btn-save {
      background-color: #537aa2;
      &:active {
        background-color: #465f79;
      }
    }
    .btn-cancel {
      background-color: #c16458;
      &:active {
        background-color: #8c4b43;
      }
    }
  }
}
#image-box {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
#cover-box{
  position: absolute;
  display: none;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  margin: auto;
}
</style>
