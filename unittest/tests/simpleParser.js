

exports = (function() {
	
	function test(raw, expected) {
		var tokens = window.fastReader.simpleParser(raw),
			res = [], i;
		
		for (i = 0; i < tokens.length; i++) {
			res.push(tokens[i].toString())
		}
		
		assert.equalArray(res, expected);
	}
	
	
	var assert = require('../assert.js');
	
	require('../../js/content/Parser.js');
	
	
	assert.profile('parser2');
	
	test('снег, у " входа - елка.',                         ['снег,','у','"','входа','-','елка.']);
	test('перевод A. Préchac’а). Сочетание',                ['перевод','A.','Préchac’а).','Сочетание']);
	test('ну Й.К.Л. Прильвиц... понятно',                   ['ну','Й.К.Л.','Прильвиц...','понятно']);
	test('сказал "ну, конечно ..." и ушёл',                 ['сказал','"ну,','конечно','..."','и','ушёл']);
	test('присутствующих, - …на двадцать',                  ['присутствующих,','-','…на','двадцать']);
	
	test('произошло что-то необычное. Лента.ру,',           ['произошло','что-то','необычное.','Лента.ру,']);
	test('был запущен в 30-е годы',                         ['был','запущен','в','30-е','годы']);
	test('значит те 30-50 тысяч',                           ['значит','те','30-50','тысяч']);
	test('Сказал-толкнул-упал-поднялся-разошлись.',         ['Сказал-толкнул-упал-поднялся-разошлись.']);
	
	test('так считают 36%, по-моему уже',                  ['так','считают','36%,','по-моему','уже']);
	test('значит те -30°C что',                             ['значит','те','-30°C','что']);
	test('значит это: -30*2. Что',                          ['значит','это:','-30*2.','Что']);
	
	test('думает другое. +7 985 970-45-45. И собственно',  ['думает','другое.','+7','985','970-45-45.','И','собственно']);
	test('думает другое:123-45-67. И собственно',          ['думает','другое:123-45-67.','И','собственно']);
	
	test('http://www.yandex.ru/',                           ['http://www.yandex.ru/']);
	test('olegcherr@yandex.ru',                             ['olegcherr@yandex.ru']);
	
	test('кричал:\n- Она',                                  ['кричал:','-','Она']);
	
	test('Глава 1 Глава 1.1 Команда А',                     ['Глава','1','Глава','1.1','Команда','А']);
	
	return assert.profileEnd();
	
})();