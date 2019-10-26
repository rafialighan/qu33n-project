var editCert = new Vue({
  el: '#editCertificate',
  data: {
    certificate: {}
  },
  methods: {
    handleSubmit() {
      fetch('api/certs/edit.php', {
        method: 'POST',
        body: JSON.stringify(this.certificate),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {editCert.certificate = json})
      .catch( err => {
        console.error('TRIAGE POST ERROR:');
        console.error(err);
      })

      this.handleReset();
    },
    handleReset() {
      this.certificate = {
        certId:'',
        agency: '',
        certType: ''
      }
    }
  },
  created() {
    this.handleReset();
  }
});
