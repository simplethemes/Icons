(function($){
	FruitIcons = Garnish.Base.extend({
		container: null,
		init: function(id)
		{
			this.container = $("#" + id + '-field');
			var opt = {
				dropdownParent: 'body',
				highlight: false, // disable highlight
			    render: {
			        item: function(item, escape) {
			            return '<div><i class="material-icons">'+escape(item.value)+'</i>&nbsp;&nbsp;&nbsp;' + escape(item.text) + '</div>';
			        },
			        option: function(item, escape) {
			            return '<div><div class="fr-option-icon"><i class="material-icons">' + escape(item.value) + '</i></div><div class="fr-option-details"><div class="fr-option-name">' + escape(item.text) + '</div><div class="fr-option-maker">Material Icons</div></div></div>';
			        }
			    }
			}
			this.container.find('.fr-icon-select').selectize(opt);
			this.container.find('.fr-icon').css('display', 'block');
		}
	});
})(jQuery);
