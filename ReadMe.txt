 Jquery

1. Explain the utility of the jQuery object (“$”)
	-$ is a pointer or variable that points to the JQuery function. 
	-array like object.
	-$ = JQuery(function)
	-$(string)
	-$(function)
	-$(DOM element)




2. Selection of DOM elements (CSS, ID, Name, etc)

	-$('tags')
	-$('.class')
	-$('#id')
	-$('selector').css('key', 'value')





3. Work with collections of elements

	-$('div1, div2, div3')
	-$('.class').parent()
	-.child()





4. Listening for and reacting to events on DOM elements

	-$('#my-input').on('keypress', function() {});




5. Creating/appending/prepending DOM elements

	-.append('<element>');
	-.prepend('<element>');




6. Modifying existing DOM elements (attributes, content)

	-variable.attr('attribute-name', 'value')


7. Removing DOM elements

	-.remove()


8. Perform basic animations

	-$(selector).animate({params},speed,callback);



9. Integrate 3rd party plugins to get functionality without having to create it

