var editApp = new Vue({
  el: '#editPerson',
  data: {
    person: {}
  },
  methods: {
    handleSubmit() {
      fetch('api/records/post.php', {
        method: 'POST',
        body: JSON.stringify(this.person),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {ocfrAppr.persons = json})
      .catch( err => {
        console.error('TRIAGE POST ERROR:');
        console.error(err);
      })

      this.handleReset();
    },
    handleReset() {
      this.person = {
        personId:'',
        firstName: '',
        lastName: '',
        position: '',
        station:'',
        gender:'',
        address: '',
        workPhone:'',
        mobilePhone:'',
        radioNumber:'',
        isActive: ''
      }
    }
  },
  created() {
    this.handleReset();
  }
});
