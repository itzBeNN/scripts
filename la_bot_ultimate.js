//author fmthemaster
//discord: fmthemaster#7485

var progressElm=$("<div>da</div>");
$("#am_widget_Farm").before(progressElm);
var total=$(".farm_icon_a").length -1;

var switched_village = false;

$("[class^='report_']").each(function(index, obj){setTimeout(function(){
    progressElm.html(index+1+" / "+total);
    $("tbody:has('> tr > td> .farm_icon_a')");
	$("tbody:has('> tr > td> .farm_icon_b')");
	$("tr:has('> #spear')");



	var arrA = $("tbody:has('> tr > td> .farm_icon_a') [type='text']");
	var arrB = $("tbody:has('> tr > td> .farm_icon_b') [type='text']");
	var arrHome = $("tr:has('> #spear') .unit-item");


	var modelA = $.map(arrA, function(o, i){return parseInt(o.value)});
	var modelB = $.map(arrB, function(o, i){return parseInt(o.value)});
	var atHome = $.map(arrHome, function(o, i){return parseInt(o.innerHTML)});

	var canUseA = $.grep(atHome, function(o, i){return o < modelA[i]}).length ==0;
	var canUseB = $.grep(atHome, function(o, i){return o < modelB[i]}).length ==0;

    if (!(canUseA||canUseB))
    {
    	if(!switched_village)
    	{
        	switched_village = true;
    		setTimeout(function(){
	    		$("[class='arrowRight']").click();
	        	$("[class='groupRight']").click();
    		}, 2000)
    	}
    	return;
    }

    var resHTML = obj.cells[5].innerHTML;
    var haul_HTML = obj.cells[2].innerHTML;
    var full = false;


    function farm_a()
    {
    	if(canUseA){
        	$("[class$='farm_icon_a']", obj)[0].click();
        	console.log("farmed with a");
    	}
    	else
    		farm_b();
    };

    function farm_b()
    {
    	if(canUseB){
		    $("[class$='farm_icon_b']", obj)[0].click();
		    console.log("farmed with b");
		}
		else
    		farm_a();
    };

    function farm_c()
    {
    	if (haul_HTML){
            if (haul_HTML[haul_HTML.indexOf(".png") - 1] == "1")
                full = true;{
		$("[class$='farm_icon_c']", obj)[0].click();
       		console.log("farmed with c");
		}
	  }
    };

    function farm_a_or_b()
    {

        if (haul_HTML){
            if (haul_HTML[haul_HTML.indexOf(".png") - 1] == "1")
                full = true;
        };


        if (full)
            farm_b();
        else
          	farm_a();
    };



    if ($("[class$='farm_icon_c']", obj)[0])
    {
        if(resHTML.indexOf(".") > 0)
            farm_c();
        else
            farm_a_or_b();
    }
    else
        farm_a_or_b();

}, index*200+Math.random()*10)});
