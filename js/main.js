
var Person = Backbone.Model.extend({
   defaults: {
       name: 'Dima',
       age: 23,
       job: 'web-developer'
 },
 

});

var PersonView = Backbone.View.extend({
	initialize: function(){
		//console.log(this.model)
	},

	tagName: 'li',
    render: function(){
	   this.$el.html( this.model.get('name') +'(' + this.model.get('age') + ') - ' + this.model.get('job'));
    }
});
var person = new Person;
var personView = new PersonView({model: person});