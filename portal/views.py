from django.shortcuts import render, redirect, render_to_response, RequestContext
from django.http import HttpResponse, JsonResponse
from django.core import serializers

from django.contrib.auth.forms import UserCreationForm
from portal.forms import RegistrationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView
from django.core.urlresolvers import reverse_lazy
from django.template import RequestContext
from django.shortcuts import render_to_response
from portal.forms import LoginFrom
from django.contrib.auth import authenticate, login


from portal.models import *


#Create your views here.
def home_page(request):
	return render_to_response('home_page.html', context=RequestContext(request))



class formulario(CreateView):
	model = User
	template_name = "internas/formulario.html"
	from_class = UserCreationForm
	success_url = reverse_lazy('form:form')



# @login_required(login_url='/formulario/')


def listado_fotos(request):
	imagenes = Imagen.objects.all()
	titulo = "Galeria imagenes"
	diccionario = {'list_imgs': imagenes, 'titulo': titulo}
	return render(request, 'internas/list_photos.html', diccionario,context_instance=RequestContext(request))
	#return render_to_response('internas/list_photos.html', context=RequestContext(request))


def murales(request):
	imagenes = Imagen.objects.all()
	titulo = "Murales"
	diccionario = {'list_imgs': imagenes, 'titulo': titulo}
	return render(request, 'internas/murales.html', diccionario,context_instance=RequestContext(request))


def monumentos(request):
	imagenes = Imagen.objects.all()
	titulo = "Monumentos"
	diccionario = {'list_imgs': imagenes, 'titulo': titulo}
	return render(request, 'internas/monumentos.html', diccionario,context_instance=RequestContext(request))


def logout_view(request):
    logout(request)
    return render_to_response('internas/logout.html', context=RequestContext(request))


def foto(request, id):
    """
        obtengo el detalle de cada imagen
    """
    imagen = Imagen.objects.get(pk=id)

    diccionario = {'imagen': imagen}
    return render(request, 'imagen.html', diccionario,context_instance=RequestContext(request))

