from django.http import HttpResponse
import json
from django.core import serializers
from django.http import HttpResponse

from portal.models import Imagen


# Create your views here.

def wsImagenes_view1(request, id):
     
    data = Imagen.objects.filter(idimagen=id)
    desc = data[0].descripcion[:75] + ' ...'
    newdata = data[0]
    newdata.descripcion = desc
    lst = []
    lst.append(newdata)
    data = serializers.serialize('json', lst)
    return HttpResponse (data, content_type='application/json')

def wsImagenes_view(request):
     
    data = Imagen.objects.all()
    data = serializers.serialize('json', data)
    return HttpResponse (data, content_type='application/json')
    #Descargar archivo
    #data = serializers.serialize("json",Imagen.objects.all())
    # Retorna la informacion en formato json
    #return HttpResponse(json.dumps(data), content_type='application/json')