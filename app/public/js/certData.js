var certDataApp = new Vue({
  el: '#certData',
  data: {
    cert: []
  },
  methods: {
    fetchCertData() {
      fetch('api/certs/certData.php')
      .then(response => response.json())
      .then(json => { certDataApp.cert = json })
    },
    handleRowClick(cert) {
      editCert.certificate = cert;
      console.log(cert);
    }
  },
  created() {
    this.fetchCertData();
  }
});
