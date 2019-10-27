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
    // handleSubmit() {
    //   fetch('api/records/certData.php', {
    //     method: 'GET',
    //     body: JSON.stringify(this.cert),
    //     headers: {
    //       "Content-Type": "application/json; charset=utf-8"
    //     }
    //   })
    //   .then( response => response.json() )
    //   .then( json => {certDataApp.cert = json})
    //   .catch( err => {
    //     console.error('DATA POST ERROR:');
    //     console.error(err);
    //   })
    //
    //   this.handleReset();
    // },
    // handleReset() {
    //   this.cert = {
    //     certId:'',
    //     agency: '',
    //     certType: ''
    //   }
    // }
  },
  created() {
    this.fetchCertData();
  }
});
