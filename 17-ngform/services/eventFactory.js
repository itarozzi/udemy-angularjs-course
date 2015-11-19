angular.module('eventApp')
.factory('{eventFactory}', function () {
    
    eventFactory = {};
    
    eventFactory.createEvent = function(event, eventList) {
        eventList.push(event)l
        return eventList;
    }
    
	return  eventFactory;
});
