import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        submit: function() {
              this.transitionToRoute('docupload');
        },
        sub: function() {
            this.transitionToRoute('docupload');
        },
        mit: function() {
            this.transitionToRoute('service');
        },
        su: function() {
            this.transitionToRoute('sentrequest');
        },
    }
});
