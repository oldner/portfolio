import { onMounted } from "vue";
export default {
  name: "App",
  data() {
    return {
      loader: false,
      sideBar: false,
      name: "",
      content: "",
      comments: [],
      johnComment: true,
    };
  },
  methods: {
    addComment() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;
      this.comments.push({
        name: this.name,
        content: this.content,
        time: today,
      });
      window.location.href = "#comments";
      this.name = ''
      this.content = ''
    },
    removeComment(index) {
      if (index == undefined) {
        this.johnComment = false;
      }
      this.comments.splice(index, 1);
    },
  },
  beforeMount() {
    this.loader = true;
    setTimeout(
      function () {
        this.loader = false;
      }.bind(this),
      1000
    );
  },
  created() {
    document.title = "Haktan Sefa Pasin | Jr. Web Developer";
  },
};