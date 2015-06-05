function createMetaTag(name, content) {
  var meta = document.createElement("meta");
  meta.name = name;
  meta.content = content;
  document.head.appendChild(meta);
}

function createTagWithData(data_elems) {
  $.each(data_elems, function (index, elem) {
    var div = document.createElement("div");
    div.dataset[elem.data_key] = elem.data_value;
    div.classList.add("hasData");
    document.body.appendChild(div);
  })
}

function getParameterByName(name, url) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(url);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
