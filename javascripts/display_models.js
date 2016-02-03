function draw_model(brand, index) {
  var model = models[brand][index];
  var template = '<div class="col-md-12 model">';
  for (var img in model.files){
    var source_url = 'cards/'+img+'/'+model.files[img];
    template += '<div class="col-md-4">';
    template += '<a href="'+source_url+'" target="_blank"><img src="'+source_url+'"></a>';
    template += '</div>';
  }
  template += '</div>';
  $('#model-container').html('').append(template);
}

function draw_brand_menu() {
  for (var brand_name in models) {
    var brand = models[brand_name];

    var template = '<li>';
    template += brand_name;
    template += '<ul>';
    for (var m in brand) {
      template += '<li><a class="model" onclick="draw_model(\''+brand_name+'\', \''+m+'\')">'+brand[m].name+'</a></li>';
    }
    template += '</ul>';
    template += '</li>';
    $('#model-brand-menu').append(template);
    // draw_model(model);
  };
}

$(document).ready(function () {
  draw_brand_menu();
});