/**
 * LeadsController
 *
 * @description :: Server-side logic for managing leads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  signup: function(req, res, next) {
    sails.hooks.email.send('', {
      form_data: (req.body || res.query)
    }, {
      to: 'info@mamaz.kitchen',
      from: 'signup@mamaz.kitchen',
      subject: 'New Contact'
    }, function(err, data) {
      res.send({err:err, data:data});
      console.log('email sent?', err, data);
    })
  }
};

