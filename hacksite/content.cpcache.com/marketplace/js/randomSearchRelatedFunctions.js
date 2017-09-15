
function submitPagingForm(){var page=parseInt(document.getElementById("paging").pg.value);if(page>0&&!isNaN(page)&&page<=totalPages)
{document.getElementById("paging").pg.value=page;document.getElementById("paging").submit();}
else
{alert("Cannot go to page: "+document.getElementById("paging").pg.value);document.getElementById("paging").pg.value="";document.getElementById("paging").pg.focus();return false;}}
function setResultsPerPage(resultsPerPage){document.getElementById("paging").pg.value=1;document.getElementById("paging").rpp.value=resultsPerPage;return submitPagingForm();}
function setSearchBrowseCookie(value){var date=new Date();date.setTime(date.getTime()+(15*60*1000));var expires="; expires="+date.toGMTString();document.cookie=cookieStr+"="+value+expires+"; path=/"+"; domain="+window.cafepress.domain;}
function hideAll(tagname,classname,viewValue){var elements=document.getElementsByTagName(tagname);for(var i=0;i<elements.length;i++){if(elements[i].className==classname){elements[i].style.display=viewValue;}}}
function getNodeValue(domNode,sXpath)
{var objNode=getNode(domNode,sXpath);if(objNode!=null)
{return objNode.firstChild.nodeValue;}
else
{return"";}}
function getNode(domNode,sXpath)
{var objNodeList=domNode.selectNodes(sXpath);if(objNodeList.length>0)
{return objNodeList[0];}
else
{return null;}}
function setAndDisplayPortalBlock(xmlDoc,sXpath,divId)
{var content=getNodeValue(xmlDoc,sXpath);if(content!="")
{setVisibility(divId,"block");}}
function hidePortalBlock(xmlDoc,sXpath,divId)
{var container=getNode(xmlDoc,sXpath);if(container!=null&&container.getAttribute("visible")=="False")
{setVisibility(divId,"none");}}
function showPortalBlock(xmlDoc,sXpath,divId)
{var container=getNode(xmlDoc,sXpath);if(container!=null&&container.getAttribute("visible")=="True")
{setVisibility(divId,"block");}}
function adjustLayout(xmlDoc)
{setAndDisplayPortalBlock(xmlDoc,"//PageHeader//Text","PageHeaderContainer");setAndDisplayPortalBlock(xmlDoc,"//ResultsBanner//Text","ResultsBannerContainer");setAndDisplayPortalBlock(xmlDoc,"//ResultsHeader//Text","ResultsHeaderContainer");setAndDisplayPortalBlock(xmlDoc,"//CustomLeftNavigation//Text","CustomLeftNavigationContainer");setAndDisplayPortalBlock(xmlDoc,"//ResultsFooter//Text","ResultsFooterContainer");setAndDisplayPortalBlock(xmlDoc,"//PageFooter//Text","PageFooterContainer");hidePortalBlock(xmlDoc,"//SEARCH_BAR","searchBar");hidePortalBlock(xmlDoc,"//ENTIRE_LEFT_NAVIGATION","leftNavContainer");hidePortalBlock(xmlDoc,"//DEFAULT_LEFT_NAVIGATION","defaultLeftNav");hidePortalBlock(xmlDoc,"//SEARCH_RESULTS","searchResults");hidePortalBlock(xmlDoc,"//POPULAR_TOPICS","popularTopics");}
function getThumbnailForProduct_v2(productNumber,version,side){if(side==undefined||side=='')side='Front';var retVal='http://'+imagesUrl+'/product/'+productNumber+'v'+version+'_150x150_'+side+'.jpg';return retVal;}
function changeContent_v2(divID,contentDivID,swatchContentDivID,bgUrl,productID,version,side)
{var divElem=document.getElementById(divID);var contentElem=document.getElementById(contentDivID);var swatchContentDivElem=document.getElementById(swatchContentDivID);var temp=divElem.innerHTML;divElem.innerHTML=contentElem.innerHTML;divElem.style.backgroundImage="url('"+bgUrl+"')";contentElem.innerHTML=temp;if(swatchContentDivElem!=undefined&&productID!=undefined&&productID!=null){var swatchDivElem=document.getElementById("swatches"+productID);if(swatchDivElem!=undefined&&swatchDivElem!=null){swatchContentDivElem.innerHTML=swatchDivElem.innerHTML;}}
if(productID!=null&&productID!=undefined&&productID!="")
{var miniThumbID="miniThumb"+productID;document.getElementById(miniThumbID).src=getThumbnailForProduct_v2(productID,version,side);}else{if(swatchContentDivElem!=undefined){swatchContentDivElem.innerHTML='';}}}
function searchResultsSubmit()
{if(topic)
{document.getElementById("topic").value=topic;}else
{document.getElementById("topic").value="";}
if($('input[name="q"]').val() != ""){$('input[name="q"]').attr("value", window.cpsearch.searchTerm);}
document.getElementById("sortChanged").value=1;document.paging.submit();}
function changeSource(imgId,newUrl){if(document.getElementById(imgId))
{document.getElementById(imgId).src=newUrl;}}
function toggleSourceImage(smallID,URL){var offset=$("#"+smallID).offset();$("#overlayHolder").css("left",(offset.left-84)+"px");$("#overlayHolder").css("top",(offset.top-40)+"px");$("#overlayHolder").css("backgroundImage",$("#"+smallID).css("backgroundImage"));$("#overlayHolder").html('<a href="'+URL+'" onmouseout="toggleSourceImage(\''+smallID+'\',\''+URL+'\')"></a>');$("#overlayHolder").toggle();}
$(document).ready(function(){$('.productlnk').hover(function(event){if ($(this).attr('imgmouseover')=='') return;changeSource($(this).attr('imgid'),$(this).attr('imgmouseover'))},function(event){changeSource($(this).attr('imgid'),$(this).attr('imgmouseout'))});});function adjustImage(designId){var imgDiv=document.getElementById("dv"+designId);var resultItem=imgDiv.parentNode;resultItem.insertBefore(imgDiv,resultItem.firstChild);}
function adjustAlsoAvailableLinks(designId){var moreLinks=document.getElementById("more"+designId);var links=document.getElementById("links"+designId);if(links!=null)
links.appendChild(moreLinks);}
function showAllTopics(numberOfTopics, name) 
{ var srcElement = document.getElementById("otherTopicList");var srcViewTopicsLink = document.getElementById("viewTopicsLink");
if (srcElement != null) { if (srcElement.style.display == "block") { srcElement.style.display = 'none'; srcViewTopicsLink.innerHTML = 'View all ' + name + ' topics'; }
else { srcElement.style.display = 'block'; srcViewTopicsLink.innerHTML = 'View Top ' + numberOfTopics + ' ' + name + ' topics';}
return false;}}
function setPageContent(data) {var write = document.write;document.write = $("#divPageContent").html(data);document.write = write;initFiltersClick();updateSearchHeader();
$('.productlnk').hover(function(event){if ($(this).attr('imgmouseover')=='') return;changeSource($(this).attr('imgid'),$(this).attr('imgmouseover'))},
function(event){changeSource($(this).attr('imgid'),$(this).attr('imgmouseout'))});}
function BindRandomizeProductColor(){$('#searchResults #results .resultItem .resultImageContainer .pt-362').each(function(){var capDesignURL=$(this).attr('imgmouseover').replace('225x225','110x110');$(this).children('a').append('<div class="insetimage" style="background-image:url('+capDesignURL+');position:absolute;right:5px;top:5px;height:110px;width:110px;border:1px solid #999999"></div>')});$('#searchResults #results .resultItem .resultImageContainer .pt-344').each(function(){var newProductMod10=parseInt($(this).attr('imgid'))%10;var newProductColor='