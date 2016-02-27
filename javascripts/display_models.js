function draw_model(brand, index) {
  var model = models[brand][index];
  var template = '';

  $('.model-info .info .name').html(model.name);
  $('.model-info .info .description').html(model.description);
  $('.model-info .info .brand').html('Brand: '+model.brand);
  $('.model-info .info .year').html('Year: '+model.year);
  if (model.user) {
    template = '<p>By: <a href="'+model.user.url+'" target="_blank">'+model.user.name+'</a></p>';
    $('.model-info .info .user').html(template);
    template = '';
  }

  if (model.files) {
    for (var f in model.files) {
      template += '<p><i class="glyphicon glyphicon-file"></i><a class="file" href="cards/'+f+'/'+model.files[f]+'"  onclick="ga(\'send\', \'event\', \'Model\', \'Vector download\');">'+model.files[f]+'</a></p>';
    }
    $('.model-info .info .model-files').html(template);
    template = '';
  }

  for (var img in model.images){
    var source_url = 'cards/'+img+'/'+model.images[img];
    $('.model-image a').attr('href', source_url);
    $('.model-image img')
    .attr('alt', model.name+' - '+model.brand)
    .attr('src', source_url);
  }
}

function draw_brand_menu() {
  for (var brand_name in models) {
    var brand = models[brand_name];

    var template = '<li class="brand_name">';
    template += brand_name;
    template += '<ul>';
    for (var m in brand) {
      template += '<li><a class="model-name" onclick="draw_model(\''+brand_name+'\', \''+m+'\')"; ga(\'send\', \'event\', \'Model\', \'Select model\');>'+brand[m].name;
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
  setTimeout(function(){
    draw_model('Nitto', '0');
  }, 1000);
});