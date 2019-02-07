from django.shortcuts import render, redirect, render_to_response, RequestContext
from django.http import HttpResponse, JsonResponse
from django.core import serializers

from django.contrib.auth.forms import UserCreationForm
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
from django.template.loader import render_to_string
from portal.models import *
from portal.models import ImagenHasCategorias
from portal.models import Imagen

from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from portal.forms import SignUpForm
from portal.forms import CommitForm



# Create your views here.
def home_page(request):
	return render_to_response('home_page.html', context=RequestContext(request))


def login_home(request):
	if request.method == 'GET':
		form = LoginFrom()
	else:
		form = LoginFrom()
	return render(request, 'internas/login.html', {'form': form})


def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = SignUpForm()
    return render(request, 'internas/signup.html', {'form': form})




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
	Autores = Autor.objects.all()
	comentarios = Actividades.objects.all()
	user = User.objects.all()
	diccionario = {'list_imgs': imagenes, 'list_mura': Categoria, 'autorlist': Autores,'comentlist': comentarios, 'userlist': user}
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


@login_required
def like(request):
	params = request.GET
	id = params['id']
	print(id)

	cat_id = None
	if request.method == 'GET':
		cat_id = request.GET['id']

	likes = 0
	if cat_id:
		cat = Imagen.objects.get(idimagen=int(cat_id))
		if cat:
			likes = cat.likes + 1
			cat.likes = likes
			cat.save()

	import json

	data={}
	data['status']='200 ok'
	data['likes']=likes
	data=json.dumps(data)


	return HttpResponse(data, content_type='application/json')


def commit(request):
    if request.method == 'POST':
        form = CommitForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = SignUpForm()
    return render(request, 'internas/commit.html', {'form': form})



# def like_view(request):
# 	user = request.user
# 	if request.method == 'POST':
# 		post_id = request.POST['post_id']
# 		post = get_object_or_404(posts, id=post_id)
# 		_liked = user in post.liked.all()
# 		if _liked:
# 			post.liked.remove(user)
# 		else:
# 			post.liked.add(user)
#
# 	return JsonResponse({'liked': _liked})

    # user = check_validation(request)
    # if user and request.method == 'POST':
    #    form = LikeForm(request.POST)
    #    if form.is_valid():
    #        #post_id = form.cleaned_data.get('post').id
    #        post_id=request.POST['post']
	#
    #        existing_like = Megusta.objects.filter(post_id=post_id, user=user).first()
	#
    #        if not existing_like:
    #             Megusta.objects.create(post_id=post_id, user=user)
    #        else:
    #             existing_like.remove(user)
	#
    #     return redirect('home_page.html')
	#
    # else:
    #     return redirect('internas/login.html')


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

