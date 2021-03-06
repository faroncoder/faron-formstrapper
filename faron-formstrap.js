var inputnum = 0;
var radnum = 0;
var radgrp = 0;
var ckboxnum = 0;
var selectnum = 0;
var txnum = 0;
var hidnum = 0;
var dropnum = 0;
var buttnum = 0;
var passnum = 0;
var formnum = 0;
var formnum = 0;
$('<div>').attr('id', 'engine').prependTo(document.body);
$('<div>').attr('id', 'panel').appendTo('#engine');
$('<div>').attr('id', 'code').appendTo('#engine');
$('<div>').attr('id', 'sql' + formnum).appendTo('#code');
$('<form>').attr('id', 'form' + formnum).appendTo('#sql' + formnum);
$('<hr />').appendTo('#code');
//$('<div>').attr('id','precodediv').appendTo('#engine');
$('<button>').attr('id', 'input').text('Input').attr('class', 'panelengine').appendTo(
	'#panel');
$('<button>').attr('id', 'textarea').text('Textarea').attr('class',
	'panelengine').appendTo('#panel');
$('<button>').attr('id', 'radioggrp').text('Radio Group').attr('class',
	'panelengine').appendTo('#panel');
$('<button>').attr('id', 'radio').text('Radio').attr('class', 'panelengine').appendTo(
	'#panel');
$('<button>').attr('id', 'checkbox').text('Checkbox').attr('class',
	'panelengine').appendTo('#panel');
$('<button>').attr('id', 'password').text('Password').attr('class',
	'panelengine').appendTo('#panel');
$('<button>').attr('id', 'hidden').text('Hidden').attr('class', 'panelengine').appendTo(
	'#panel');
$('<button>').attr('id', 'dropmenu').text('Dropmenu').attr('class',
	'panelengine').appendTo('#panel');
$('<button>').attr('id', 'option').text('Option').attr('class', 'panelengine').appendTo(
	'#panel');
$('<button>').attr('id', 'break').text('Break').attr('class', 'panelengine').appendTo(
	'#panel');
$('<button>').attr('id', 'button').text('Submit').attr('class', 'panelengine').appendTo(
	'#panel');
$('<button>').attr('id', 'clear').text('Clear').attr('class', 'panelengine').appendTo(
	'#panel');
/* $('.panelengine').each(function() {
+	$(this).after( $(document.createElement('br')) );
+}); */
$('<hr />').appendTo('#panel');

function grouprad() {
	radgrp++;
	return false;
}

function makeoption() {
	selectnum++;
	$('<option>').attr('value', 'option' + selectnum).text('option' + selectnum).appendTo(
		'#select' + dropnum);
	return false;
}
$('#input').click(function () {
	inputnum++;
	$('<input type="input">').attr('id', 'input' + inputnum).attr('placeholder',
		'input' + inputnum).appendTo('#form' + formnum);
	return false;
});
$('#textarea').click(function () {
	txnum++;
	$('<textarea>').attr('id', 'textarea' + txnum).attr('placeholder', 'text' +
		txnum + ' to be entered').appendTo('#form' + formnum);
	return false;
});
$('#radio').click(function () {
	radnum++;
	$('<label>').text('radio' + radnum).append($('<input type="radio">').attr(
		'id', 'grp' + radgrp).attr('value', 'radio' + radnum)).appendTo('#form' +
		formnum);
	return false;
});
$('#checkbox').click(function () {
	ckboxnum++;
	$('<label>').text(' ck' + ckboxnum + ' ').append($('<input type="checkbox">')
		.attr('id', 'ck' + ckboxnum)).appendTo('#form' + formnum);
	return false;
});
$('#password').click(function () {
	passnum++;
	$('<input type="password">').attr('id', 'password' + passnum).attr('value',
		'password' + passnum).attr('placeholder', 'password' + passnum).appendTo(
		'#form' + formnum);
	return false;
});
$('#hidden').click(function () {
	hidnum++;
	$('<input type="hidden">').attr('id', 'hidden' + hidnum).attr('value',
		'value' + hidnum).appendTo('#form' + formnum);
	return false;
});
$('#dropmenu').click(function () {
	dropnum++;
	$('<select>').attr('id', 'select' + dropnum).appendTo('#form' + formnum);
	makeoption();
	makeoption();
	return false;
});
$('#break').click(function () {
	$('<br>').appendTo('#form' + formnum);
	return false;
});
$('#button').click(function () {
	$('#msgbox').html(
		'<ul><li><strong>Now you can click on submit button on the form to see what is being sent to server in URL code.</strong></li><li><strong>Click on the code below will enable you to see the full HTML codes of this form. </strong></li><li><strong>Hint: Fill out the form as if it was for the real and then resubmit - you will see the URL codes with all inputs.</strong></li></ul>'
	);
	$('#getcode').show();
	buttnum++;
	$('<button>').attr('id', 'submit' + buttnum).text('submit').attr('value',
		'req' + buttnum).appendTo('#form' + formnum);
	return false;
});
$('#option').click(function () {
	makeoption();
});
$('#radioggrp').click(function () {
	grouprad();
});
$('#clear').click(function () {
	inputnum = 0;
	radnum = 0;
	radgrp = 0;
	ckboxnum = 0;
	selectnum = 0;
	txnum = 0, hidnum = 0, dropnum = 0, formnum = 0;
	buttnum = 0;
	passnum = 0;
	$('#precode').empty();
	$('#seralize').empty();
	$('#sql0').empty();
});
$("<div>").attr("id", "msgbox").html(
	'<p><strong>Begin by formulaing your form to your own liking - be sure to add "submit button" from above when you are done.</strong></p>'
).css("font-size", "14px").css("text-weight", "bold").css("color", "gray").css(
	"font-family", "arial").appendTo("#code");
$("<button>").attr("id", "getcode").text("Code").hide().appendTo("#code");
//$('<button>').attr('id','getserialize').text('seralize').appendTo('#code');
$('<pre>').attr('id', 'precode').appendTo('#sql0');
$('<code>').attr('id', 'realcodes').css('whiteSpace', 'pre-wrap').appendTo(
	'#precode');
$('<div>').attr('id', 'seralize').appendTo('#sql0');
$('<p>').attr('id', 'showurl').appendTo('#seralize');
$('<p>').attr('id', 'showcodejson').appendTo('#seralize');
$('#getcode').click(function () {
	String.prototype.escapeHTML = function () {
		return (this.replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g,
			'&quot;'));
	};
	var codeEl = $('#form0').html();
	$('#realcodes').text(codeEl);
}); //end of click event for 'get code'
$('#form' + formnum).submit(function (e) {
	e.preventDefault(e);
	var data = {};
	//Gathering the Data
	$.each(this.elements, function (i, v) {
		var input = $(v);
		if (input.is(':checkbox')) {
			if (input.is(':checked')) {
				data[input.attr("id")] = input.val();
			}
		} else {
			data[input.attr("id")] = input.val();
		}
	}); // end of $.each
	var output = JSON.stringify(data);
	$('#showurl').text(output);
}); //end of click event for 'showurl'
