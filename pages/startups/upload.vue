<template>
  <div class="container pt-5">
    <br /><br />
    <div class="row">
      <div class="col-sm-12 mx-auto">
        <form class="form-group product-upload-block pl-5 pr-5 pt-4 pb-4">
          <div class="pl-5 pr-5 pb-5 pt-3">
            <div class="product-header-title mb-3">
              Edit Information
            </div>
            <label for="file-input" class="product-upload-btn d-flex justify-content-center align-items-center">
              <div v-if="data.photo.url" class="preview-img">
                <img :src="data.photo.url" class="img-fluid"/>
              </div>
              <div v-else>
                Upload Photo
              </div>
            </label>
            <input id="file-input" type="file" class="form-control-file" accept="image/*" hidden @change="uploadImage($event)">
          </div>
          <div class="pl-5 pr-5 pb-5 pt-3">
            <UploadProductInputField
              v-for="query in data.queries"
              :id="query.id"
              :key="query.id"
              v-model="query.value"
              :type="query.type"
              :name="query.label"
              :color="inputColor"
              :tooltip="false"
            />
            <div class="d-flex justify-content-end pt-5">
              <button type="button" class="btn btn-light pl-5 pr-5" @click="submitFunction">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadProductPage',
  layout: 'auth-layout',
  middleware: 'auth',
  data() {
    return {
      inputColor: "#BFD4E4;",
      data: {
        queries: [
          {
            id: 0,
            type: "string",
            value: "",
            label: "Username"
          },
          {
            id: 1,
            type: "string",
            value: "",
            label: "Startup Name"
          },
          {
            id: 2,
            type: "string",
            value: "",
            label: "Phone Number"
          },
          {
            id: 3,
            type: "string",
            value: "",
            label: "Website Link"
          },
        ],
        photo: {
          data: {},
          url: null
        }
      }
    }
  },
  methods: {
    uploadImage(event) {
      if(event.target.files[0]){
        this.data.photo = {
          data: event.target.files[0],
          url: URL.createObjectURL(event.target.files[0])
        } 
      }else{
        this.data.photo = {
          data: null,
          url: null
        } 
      }
    },
    submitFunction(){
      const data = new FormData();
      data.append('name', 'product-picture');
      data.append('file', this.data.photo.data);

      // const header = {
      //   "Content-Type": "multipart/form-data"
      // }
    }
  }
  
}
</script>

<style>
.product-upload-block {
  position: relative;
  background: #ddeaf3;
  border-radius: 8px;
}

.product-upload-btn {
  background: #BFD4E4;
  border-radius: 2px;
  height: 163px;
  width: 163px;
}

.preview-img {
  height: 100%;
}

.product-header-title {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.2px
}
</style>