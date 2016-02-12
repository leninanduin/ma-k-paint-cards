function draw_model(brand, index) {
  var model = models[brand][index];
  var template = '';
  template += '<h2>'+model.name+'</h2>';
  template += '<h4>'+model.description+'</h4>';
  template += '<p>Brand: '+model.brand+'</p>';
  template += '<p>Year: '+model.year+'</p>';
  if (model.user) {
    template += '<p>Printable by: <a href="'+model.user.url+'" target="_blank">'+model.user.name+'</a></p>';
  }
  if (model.files) {
    for (var f in model.files) {
      template += '<p><i class="glyphicon glyphicon-file"></i><a href="cards/vector/'+model.files[f]+'">'+model.files[f]+'</a></p>';
    }
  }
  $('.model-info .info').html(template);
  template = '';

  for (var img in model.images){
    var source_url = 'cards/'+img+'/'+model.images[img];
    template += '<a href="'+source_url+'" target="_blank"><img class="model" alt="'+model.name+' - '+model.brand+'" src="'+source_url+'"></a>';
  }
  template += '</div>';
  $('.model-image').html(template);
}

function draw_brand_menu() {
  for (var brand_name in models) {
    var brand = models[brand_name];

    var template = '<li class="brand_name">';
    template += brand_name;
    template += '<ul>';
    for (var m in brand) {
      template += '<li><a class="model" onclick="draw_model(\''+brand_name+'\', \''+m+'\')">'+brand[m].name;
      template += '<br><span class="desc">'+brand[m].description+'</span></a></li>';
    }
    template += '</ul>';
    template += '</li>';
    $('#model-brand-menu').append(template);
    // draw_model(model);
  };
}

$(document).ready(function () {
  draw_brand_menu();
  $('a.model').eq(0).delay(1000).click();
});