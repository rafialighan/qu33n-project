// var certApp = new Vue({
//   el: '#certificate',
//   data: {
//     certificates: [],
//     recordCert: {}
//   },
//   methods: {
//     fetchCert() {
//       fetch('api/records/')
//       .then(response => response.json())
//       .then(json => { certApp.certificates = json })
//     },
//     handleSubmit(event) {
//       fetch('api/records/cert.php', {
//         method:'POST',
//         body: JSON.stringify(this.recordCert),
//         headers: {
//           "Content-Type": "application/json; charset=utf-8"
//         }
//       })
//       .then( response => response.json() )
//       .then( json => {ocfrApp.certificates.push ( json[0])})
//       .catch( err=>{
//         console.error('RECORD POST ERROR:');
//         console.error(err);
//       });
//       this.handleReset();
//     },
//     handleReset() {
//       this.recordCert = {
//         personID:'',
//         firstName: '',
//         lastName: '',
//         // position: '',
//         // station:'',
//         // gender:'',
//         // address: '',
//         // workPhone:'',
//         // mobilePhone:'',
//         // radioNumber:'',
//         // isActive: ''
//         certification:''
//       }
//     },
//     // handleRowClick(person) {
//     //   patientTriageApp.patient = patient;
//     // }
//   }, // end methods
//   created() {
//     this.handleReset();
//     this.fetchCert();
//   }
// });




var certApp = new Vue({
  el: '#certificate',
  data: {
    certificates: []
  },
  methods: {
    fetchCert() {
      fetch('api/certs/')
      .then(response => response.json())
      .then(json => { certApp.certificates = json })
     }
    // formatLocalVisitDate(d) {
    //   return moment.utc(d).local().format("HH:mm MMM Do");
    // }
  },
  created() {
    this.fetchCert();
  }
});
