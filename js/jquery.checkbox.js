(function($){	
	
	var methods = {
		init : function(options) {			
			var settings = {
				checkClass: 'checkbox',
				checkDisabled: 'checkboxDisabled',
				checkChecked: 'checkboxChecked',
				labelOn: true			
        	};						
		
			if (options) {
				$.extend(settings, options);
			}
			
			var input = this,
				checkClass = settings.checkClass,
				checkDisabled = settings.checkDisabled,
				checkChecked = settings.checkChecked,
				labelOn = settings.labelOn;
				
			var checkInit = function(el){
				try {					
					if(!el.parent().hasClass(checkClass)){
						if(el.is(":checked")){
							el.wrap("<span class='" + checkClass + " " + checkChecked + "'></span>");
						} else {
							el.wrap("<span class='" + checkClass + "'></span>");
						};
						el.removeClass(checkClass);
						if(el.is(":disabled")){
							el.parent().addClass(checkDisabled);
							el.attr("disabled", "disabled");
						};
					}
					else
					{
						var p = el.closest('.' + checkClass);
						if(el.is(":checked")){
							p.addClass(checkChecked);
						} else {
							p.removeClass(checkChecked);	
						};
					};
				} catch(e) {
				};
				return true;
			}
			
			var checkEach = function(){
				
				input.each(function(){			
					
					var $this = $(this);		
					
					checkInit($this);				
						
				});				
			}
			
			checkEach();
			
			if(labelOn){
				$('.' + checkClass).on('mousedown', function(){
					var check = $(this).find(':checkbox');
					if(!$(this).hasClass(checkDisabled)){
						check.trigger('click');
					};			
				});
			};
			
			$(document).on('click change', '.' + checkClass + ' :checkbox', function(){
				checkEach();
			});		
			
			$(this).on('destroy-checkbox', function(){
				var input = $(this);
				var clone = input.clone();
				var p = input.closest('.' + checkClass);
				p.off('mousedown');
				p.after(clone);
				p.remove();
			});
			
		},
		resetCheckbox: function(selector) {   		
		},
		destroy: function(selector) {
			$(this).trigger('destroy-checkbox');	
		}
  	};
	
	$.fn.checkbox = function(method) {		
				 
    	if ( methods[method] ) {
      		return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    	} else if ( typeof method === 'object' || ! method ) {
      		return methods.init.apply( this, arguments );
    	} else {
      		$.error( 'Метод с именем ' +  method + ' не существует для jQuery.checkbox' );
    	} 
  	};	
	
})($);