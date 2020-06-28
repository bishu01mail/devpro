
$(document).ready(function() {

	// sidebar
	$(".doc_btnBarWrap").click(function() {
		$("#sidebar").addClass('sidebarActive');
		$("#doc_sidebarShadow").addClass('doc_sidebarShadowActive');
	});
	$("#doc_sidebarShadow").click(function() {
		$("#sidebar").removeClass('sidebarActive');
		$("#doc_sidebarShadow").removeClass('doc_sidebarShadowActive');
	});
	
	
});
