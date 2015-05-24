if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  // Template.hello.helpers({
  //   counter: function () {
  //     return Session.get('counter');
  //   }
  // });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.header.events({
  'click #loginPersona': function () {
    Meteor.loginWithPersona();
  }
});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Accounts.onCreateUser(function(options, user) {
    // console.log(user);  // you can log the user to see what else is available to save 
    user.profile = {};
    user.profile.email = user.services.persona.email;
    user.username = user.services.persona.email;    
    return user;
  });


}
