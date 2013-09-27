draggableThings = new Meteor.Collection('draggableThings');

if(Meteor.isClient) {
    Template.main.rendered = function () {
        $('.dragMe').draggable();
        $('.dropHere').droppable();
    };

    Template.main.draggableThings = function () {
        return draggableThings.find().fetch();
    };
}

if(Meteor.isServer) {
    Meteor.startup(function () {
        draggableThings.remove({});
        for(var i = 0; i < 15; ++i ) {
            draggableThings.insert({ name: 'thing' + i });
        }

    });
}