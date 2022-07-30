const axios = require('axios');

const token= 'EAAP1ZB8h4ZCOkBALYlq91JksJxdTsS9VBZCDZAHZCJ1IVZBwviZCBjZCimgo09qz76dVYxLnVZBRM7AVMvMkeZA2iE6YNTeB2CEvIim8wjWJ8LhZAw7nGMiCrHZBdZCCM359KsRWRRB3MJAIGSIepMg4iExMNZBTkqkPK6c7OjLHXrNjAEB1xO0DOF2jgHs2HjKLCC5z4E8RJi9OoBpyOR5UFGXWDZA'

const config = {
    headers: { Authorization: `Bearer EAAP1ZB8h4ZCOkBALYlq91JksJxdTsS9VBZCDZAHZCJ1IVZBwviZCBjZCimgo09qz76dVYxLnVZBRM7AVMvMkeZA2iE6YNTeB2CEvIim8wjWJ8LhZAw7nGMiCrHZBdZCCM359KsRWRRB3MJAIGSIepMg4iExMNZBTkqkPK6c7OjLHXrNjAEB1xO0DOF2jgHs2HjKLCC5z4E8RJi9OoBpyOR5UFGXWDZA` }
};

let obj = {
    blocking: "wait",
    contacts: "573007566519",
    force_check: true,
  }

axios.post('https://graph.facebook.com/v13.0/102487732564598/v1/contacts', obj,config)
    .then(() => {
        console.log('j');
    }).catch((err) => {
        console.error(err.request);
    });