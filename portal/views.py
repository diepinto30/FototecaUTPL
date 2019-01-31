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
from portal.forms import ImgForm
from portal.forms import LoginFrom
from django.contrib.auth import authenticate, login
from django.template.loader import render_to_string

from portal.models import *
from portal.models import ImagenHasCategorias
from portal.models import Imagen


# Create your views here.
def home_page(request):
	return render_to_response('home_page.html', context=RequestContext(request))


def login_home(request):
	if request.method == 'GET':
		form = LoginFrom()
	else:
		form = LoginFrom()
	return render(request, 'internas/login.html', {'form': form})

class formulario(CreateView):
	model = User
	template_name = "internas/formulario.html"
	from_class = UserCreationForm
	success_url = reverse_lazy('form:form')


# @login_required(login_url='/formulario/')



def listado_fotos(request):
	imagenes = Imagen.objects.all()
	Categoria = ImagenHasCategorias.objects.all()
	diccionario = {'list_imgs': imagenes, 'list_monu': Categoria}
	return render(request, 'home_page.html', diccionario)


def listado_fotosCelulas(request):
	imagenes = Imagen.objects.all()
	Categoria = ImagenHasCategorias.objects.all()
	diccionario = {'list_imgs': imagenes, 'list_monu': Categoria}
	return render(request, 'internas/list_photos.html', diccionario)


def celulas(request):
	imagenes = Imagen.objects.all()
	Categoria = ImagenHasCategorias.objects.all()
	user = User.objects.all()
	diccionario = {'list_imgs': imagenes, 'list_mura': Categoria, 'userlist': user}
	return render(request, 'internas/celulas.html', diccionario)


def murales(request):
	imagenes = Imagen.objects.all()
	Categoria = ImagenHasCategorias.objects.all()
	user = User.objects.all()
	diccionario = {'list_imgs': imagenes, 'list_mura': Categoria, 'userlist': user}
	return render(request, 'internas/murales.html', diccionario)


def monumentos_list(request):
	imagMonu = Imagen.objects.all().order_by('idimagen')
	Categoria = ImagenHasCategorias.objects.all()
	user = AuthUser.objects.all()
	diccionario = {'list_imgs': imagMonu, 'list_monu': Categoria, 'userlist': user}
	return render(request, 'internas/monumentos.html', diccionario)


def logout_view(request):
    logout(request)
    return render_to_response('internas/logout.html', context=RequestContext(request))



def ImgMonu_edit(request, idimagen):
	imagMonu = Imagen.objects.get(id=idimagen)
	if request.method == 'GET':
		form = ImgForm(instance=imagMonu)
	else:
		form = ImgForm(request.POST, instance=imagMonu)
		if form.is_vali():
			form.save()
		return redirect('imagMonu:monumentos_list')
	return render(request, 'internas/img_form.html', {'form':form})


def like_post(request):
	global get_object_or_404
	#post = get_object_or_404(Post, id=request.POST.get('post_id'))
	post =  Imagen.objects.get(id=request.POST.get('id'))
	is_liked = False
	if post.likes.filter(id=request.user.id).exists():
		post.likes.remove(request.user)
		is_liked = True
	else:
		post.likes.add(request.user)
		is_liked = True
	context = {
		'post': post,
		'is_liked': is_liked,
		'total_likes': post.total_likes()
	}
	if request.is_ajax():
		html = render_to_string('internas/like_setion.html', context, request=request)
		return JsonResponse({'form': html})


def like_category(request):
	print ('aqui metodo')
	query = request.GET.get['?id']



    # likes = 0
    # if cat_id:
    #     cat = Imagen.objects.get(id=id)
    #     if cat:
    #         likes = cat.likes + 1
    #         cat.likes = likes
    #         cat.save()

<<<<<<< HEAD

=======
>>>>>>> ac16286724088c81ad669742a7d6fff35e9de1ec


# def foto(request, id):
#     """
#         obtengo el detalle de cada imagen
#     """
#     imagen = Imagen.objects.get(pk=id)
#
#
#     diccionario = {'imagen': imagen}
#     return render(request, 'imagen.html', diccionario,context_instance=RequestContext(request))

#
# def tipoMonu(request):
# 	imagenes = ImagenHasCategorias.objects.all()
# 	titulo = "Monumentos"
# 	diccionario = {'list_tipoMonu': imagenes, 'titulo': titulo}
# 	return render(request, 'internas/monumentos.html', diccionario,context_instance=RequestContext(request))
#
#
# def tipoMura(request):
# 	imagenes = ImagenHasCategorias.objects.all()
# 	titulo = "Murales"
# 	diccionario = {'list_tipoMura': imagenes, 'titulo': titulo}
# 	return render(request, 'internas/murales.html', diccionario,context_instance=RequestContext(request))
#

